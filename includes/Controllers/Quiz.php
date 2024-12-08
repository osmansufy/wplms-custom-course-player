<?php

namespace WPLMS\CUSTOM_COURSE_PLAYER\Controllers;

use PhpParser\Node\Stmt\TryCatch;

class Quiz
{
    protected $user_id;

    public function __construct($use_id)
    {
        $this->user_id = $use_id;
    }

    public function process_submission($request)
    {
        // Get request data
        $post_data = json_decode($request->get_body(), true);
        if (!$this->user_id) {
            return false;
        }
        if (empty($post_data['quiz_id']) || empty($post_data['results'])) {
            return new \WP_Error('invalid_data', 'Missing required fields', array('status' => 400));
        }

        // Process the results with decryption
        $processed_results = $this->process_results($post_data['results']);
        $quiz_data = $post_data['quiz'];
        // update the quiz data with the processed results to questions of the quiz
        foreach ($quiz_data['meta']['questions'] as $key => $question) {
            $quiz_data['meta']['questions'][$key]['correct'] = $processed_results[$key]['correct'];
            $quiz_data['meta']['questions'][$key]['correct_indexes'] = $processed_results[$key]['correct_indexes'];
            $quiz_data['meta']['questions'][$key]['user_marks'] = $processed_results[$key]['user_marks'];
            $quiz_data['meta']['questions'][$key]['usercorrect'] = $processed_results[$key]['usercorrect'];
        }
        // Prepare data for add_user_result
        $submission_data = array(
            'quiz_id' => $post_data['quiz_id'],
            'course_id' => $post_data['course_id'],
            'results' => $processed_results,
            'quiz' => $quiz_data
        );

        // Create a modified request object for add_user_result
        $modified_request = new \WP_REST_Request('POST');
        $modified_request->set_body(json_encode($submission_data));

        // Call the original add_user_result method
        return $this->add_user_result($modified_request);
    }

    protected function process_results($results)
    {
        foreach ($results as &$result) {
            if (!empty($result['correct']) && !empty($result['key'])) {
                // Decrypt correct answer
                $decrypted_answer = $this->decrypt_answer($result['key'], $result['correct']);

                if ($decrypted_answer !== null) {
                    // Update correct answer with decrypted answer
                    $correct_answer_index = intval($decrypted_answer) - 1;
                    $result['correct'] = $result['options'][$correct_answer_index];
                    $result['correct_indexes'] = array($decrypted_answer);
                    $result['user_marks'] = $result['marked_answer'] == $correct_answer_index ? $result['marks'] : 0;
                    $result['usercorrect'] = $result['marked_answer'] == $correct_answer_index ? 1 : 0;
                }

                // Remove decryption key from result
                unset($result['key']);
            }
        }
        return $results;
    }

    protected function decrypt_answer($key, $encrypted_answer)
    {
        $jsondata = json_decode($encrypted_answer, true);
        try {
            $salt = hex2bin($jsondata["s"]);
            $iv = hex2bin($jsondata["iv"]);
        } catch (\Exception $e) {
            return null;
        }

        $ct = base64_decode($jsondata["ct"]);
        $concatedPassphrase = $key . $salt;
        $md5 = array();
        $md5[0] = md5($concatedPassphrase, true);
        $result = $md5[0];

        for ($i = 1; $i < 3; $i++) {
            $md5[$i] = md5($md5[$i - 1] . $concatedPassphrase, true);
            $result .= $md5[$i];
        }

        $key = substr($result, 0, 32);
        $data = openssl_decrypt($ct, 'aes-256-cbc', $key, true, $iv);
        return json_decode($data, true);
    }

    function add_user_result($request)
    {
        try {

            $post = json_decode(file_get_contents('php://input'), true);

            $max = $marks = 0;
            $results = array();
            $qstatus = bp_course_get_user_quiz_status($this->user_id, $post['quiz_id']);
            $course_id = $post['course_id'];
            if (empty($course_id)) {
                $course_id = get_post_meta($post['quiz_id'], 'vibe_quiz_course', true);
            }
            $course_curriculum = bp_course_get_curriculum_units($course_id);
            if (!is_array($course_curriculum)) {
                $course_curriculum = array();
            }
            $quiz_completion_complete = get_post_meta($post['quiz_id'], 'vibe_quiz_message', true);
            $quiz_completion_complete = str_replace(
                array(
                    'id="' . $post['quiz_id'] . '"',
                    'id=' . $post['quiz_id'],
                    'id=\'' . $post['quiz_id'] . '\'',
                ),
                'id="' . $post['quiz_id'] . '" key="' . $this->user_id . '"',
                $quiz_completion_complete
            );

            $correct_data = $tags_data = $tags = array();
            if (!empty($qstatus) && $qstatus > 2) {
                $apimessage = _x('Quiz Already Submitted!', 'Quiz Already submitted to serve', 'wplms');
            } else {
                if (is_array($post['results'])) {
                    foreach ($post['results'] as $res) {
                        if (empty($res['marks'])) {
                            $res['marks'] = 0;
                        }
                        $max += $res['marks'];
                        $marks += (empty($res['user_marks']) ? 0 : $res['user_marks']);
                        $question_content = $res['content'];
                        if (is_object($question_content)) {
                            $question_content = (array)$question_content;
                        }
                        if (is_array($question_content)) {
                            foreach ($question_content as $value) {
                                $question_content .= $value;
                            }
                        }
                        $correct_count = 0;
                        $incorrect_count = 0;
                        if (!empty($res['id']) && is_numeric($res['id'])) {
                            if (!empty($res['usercorrect']) && $res['usercorrect'] > 0) {
                                update_question_correct_percentage($res['id']);
                            } else {
                                update_question_incorrect_percentage($res['id']);
                            }
                            $correct_count = get_question_correct_percentage($res['id']);
                            $correct_count = intval($correct_count);
                            $incorrect_count = get_question_incorrect_percentage($res['id']);
                            $incorrect_count = intval($incorrect_count);
                            if (empty(($incorrect_count + $correct_count))) {
                                $actual_percentage = 0;
                            } else {
                                $actual_percentage = round(($correct_count / ($incorrect_count + $correct_count)) * 100);
                            }

                            $correct_data[$res['id']] = $actual_percentage;
                            $res['correct_data'] = $correct_data[$res['id']];

                            //tag data
                            $terms = get_the_terms($res['id'], 'question-tag');
                            if (!empty($terms) && !is_wp_error($terms)) {
                                foreach ($terms as $key => $term) {
                                    $index = $this->check_tag($term, $tags);
                                    if ($index < 0) {
                                        $term->count = 1;
                                        $tags[] = $term;
                                        $index = count($tags) - 1;
                                    } else {
                                        $tags[$index]->count++;
                                    }

                                    if (!isset($tags[$index]->correct)) {
                                        $tags[$index]->correct = 0;
                                    }
                                    if (!isset($tags[$index]->incorrect)) {
                                        $tags[$index]->correct = 0;
                                    }
                                    if (!empty($res['usercorrect']) && $res['usercorrect'] > 0) {
                                        $tags[$index]->correct++;
                                    } else {
                                        $tags[$index]->incorrect++;
                                    }
                                }
                            }
                        }
                        $result = array(
                            'content' => $question_content,
                            'type' => $res['type'],
                            'marked_answer' => (!empty($res['marked']) ? $res['marked'] : null),
                            'correct_answer' => (!empty($res['correct']) ? $res['correct'] : null),
                            'explaination' => $res['explanation'],
                            'max_marks' => (!empty($res['marks']) ? $res['marks'] : 0),
                            'marks' => (!empty($res['user_marks']) ? $res['user_marks'] : 0),
                            'raw' => $res
                        );
                        $results[] = $result;
                    }
                }
                $auto = get_post_meta($post['quiz_id'], 'vibe_quiz_auto_evaluate', true);
                update_post_meta($post['quiz_id'], $this->user_id, $marks);

                $progress = bp_course_get_user_progress($this->user_id, $course_id);
                $c_count = count($course_curriculum);
                if ($c_count) {
                    $progress = intval($progress) + round((100 / $c_count), 2);
                }
                if ($progress > 100) {
                    $progress = 100;
                }
                bp_course_update_user_progress($this->user_id, $course_id, $progress);
                if (!empty($auto) && function_exists('vibe_validate') && vibe_validate($auto)) {
                    bp_course_update_user_quiz_status($this->user_id, $post['quiz_id'], 4);
                } else {
                    bp_course_update_user_quiz_status($this->user_id, $post['quiz_id'], 3);
                }

                update_user_meta($this->user_id, $post['quiz_id'], time());
                if (!empty($post->course)) {
                    do_action('wplms_submit_quiz', $post['quiz_id'], $this->user_id, $results, $course_id);
                } else {
                    do_action('wplms_submit_quiz', $post['quiz_id'], $this->user_id, $results);
                }

                if (!empty($auto) && function_exists('vibe_validate') && vibe_validate($auto)) {
                    if (!empty($post->course)) {
                        do_action('wplms_evaluate_quiz', $post['quiz_id'], $marks, $this->user_id, $max, $course_id);
                    } else {
                        do_action('wplms_evaluate_quiz', $post['quiz_id'], $marks, $this->user_id, $max);
                    }

                    global $wpdb, $bp;
                    $activity_id = $wpdb->get_var($wpdb->prepare("
                                SELECT id
                                FROM {$bp->activity->table_name}
                                WHERE secondary_item_id = %d
                              AND type = 'quiz_evaluated'
                              AND user_id = %d
                              ORDER BY date_recorded DESC
                              LIMIT 0,1
                            ", $post['quiz_id'], $this->user_id));
                    if (!empty($activity_id)) {
                        error_log('activity_id: ' . $activity_id);
                        bp_course_generate_user_result($post['quiz_id'], $this->user_id, $results, $activity_id);
                    }
                } else {

                    update_user_meta($this->user_id, 'manual_intermediate_results' . $post['quiz_id'], $results);
                }


                $apimessage = _x('Quiz submitted!', 'Quiz submitted to serve', 'wplms');
            }

            $completion_message = '';
            ob_start();
            echo do_shortcode($quiz_completion_complete);
            do_action('wplms_after_quiz_message', $post['quiz_id'], $this->user_id);
            $completion_message = ob_get_clean();
            $stop_progress = apply_filters('bp_course_stop_course_progress', true, $course_id);
            $next_unit = null;
            $flag = apply_filters('wplms_next_unit_access', true, $post['quiz_id'], $this->user_id);
            $continue = 0;
            if ($stop_progress && $flag) {
                $continue = 1;
                $key = array_search($post['quiz_id'], $course_curriculum);
                if ($key <= (count($course_curriculum) - 1)) {  // Check if not the last unit
                    $key++;
                    if (isset($course_curriculum[$key])) {
                        $next_unit =  $course_curriculum[$key];
                    }
                }
            }
            /*ob_start();
        bp_course_quiz_retake_form($post->quiz_id,$this->user_id);
        $retake_html = ob_get_clean();*/
            $tag_threshold = apply_filters('wplms_tags_threshold', 1, $post, $this->user_id);
            if (!empty($tags)) {
                foreach ($tags as $key => $tt) {
                    $tt->correct = intval($tt->correct);
                    $tt->incorrect = intval($tt->incorrect);
                    if (!empty($tt->correct)) {
                        update_question_tag_correct_percentage($tt->term_id, $tt->correct);
                    }
                    if (!empty($tt->incorrect)) {
                        update_question_tag_incorrect_percentage($tt->term_id, $tt->incorrect);
                    }
                    if ($tt->count >= $tag_threshold) {
                        $per = round((intval($tt->correct) / ($tt->correct + $tt->incorrect)) * 100);
                        $tags_data[] = array('label' => $tt->name, 'value' => $per);
                    }
                }
            }

            if (!empty($tags_data)) {
                update_user_meta($this->user_id, 'tags_data' . $post['quiz_id'], $tags_data);
            }
            $retakes = apply_filters('wplms_quiz_retake_count', get_post_meta($post['quiz_id'], 'vibe_quiz_retakes', true), $post['quiz_id'], $course_id, $this->user_id);
            if (function_exists('bp_course_fetch_user_quiz_retake_count') && bp_is_active('activity')) {

                $retake_count = bp_course_fetch_user_quiz_retake_count($post['quiz_id'], $this->user_id);
                if (!empty($retakes) && $retakes > $retake_count) {
                    $retake_count = $retakes - intval($retake_count);
                } else {
                    $retake_count = 0;
                }
            }

            $retake_count = intval($retake_count);
            $data = array(
                'check_results_url' => bp_core_get_user_domain($this->user_id) . BP_COURSE_SLUG . '/' . BP_COURSE_RESULTS_SLUG . '/?action=' . $post['quiz_id'],
                'status' => true,
                'message' => $apimessage,
                'progress' => empty($progress) ? 0 : $progress,
                'completion_message' => (!empty($qstatus) && $qstatus > 2) ? $apimessage : $completion_message,
                'next_unit' => $next_unit,
                //'retake_html'=>$retake_html,
                'ext_flag' => $flag,
                'continue' => $continue,
                'correct_data' => $correct_data,
                'tags_data' => $tags_data,
                'tags' => $tags,
                'retakes' => $retake_count
            );
        } catch (\Exception $e) {
            $data = array(
                'status' => false,
                'message' => $e->getMessage()
            );
        }

        return     new \WP_REST_Response($data, 200);
    }

    function check_tag($checkTag, $tags)
    {
        if (!empty($tags)) {
            foreach ($tags as $key => $tag) {
                if ($tag->term_id === $checkTag->term_id) {
                    return $key;
                }
            }
        }
        return -1;
    }
}
