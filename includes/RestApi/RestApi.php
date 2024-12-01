<?php

namespace WPLMS\CUSTOM_COURSE_PLAYER;

class RestApi
{

    protected $namespace = 'wplms-custom-course-player/v1';

    protected $user_id;
    protected $user;
    public function __construct()
    {
        add_action('rest_api_init', array($this, 'register_routes'));
    }

    public function register_routes()
    {
        register_rest_route($this->namespace, '/token', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_token'),
            'permission_callback' => [$this, 'get_user_permissions_check'],
        ));

        register_rest_route($this->namespace, '/course-progress', array(
            'methods' => 'POST',
            'callback' => array($this, 'update_course_progress'),
            'permission_callback' => [$this, 'get_user_permissions_check'],
        ));
        // get course review of user
        register_rest_route($this->namespace, '/course-review/(?P<course>\d+)', array(
            'methods' => 'POST',
            'callback' => array($this, 'get_course_review'),
            'permission_callback' => [$this, 'get_user_permissions_check'],
        ));

        register_rest_route($this->namespace, '/course-reviews/(?P<course>\d+)', array(
            'methods' => 'POST',
            'callback' => array($this, 'get_reviews'),
            'permission_callback' => [$this, 'get_user_permissions_check'],
        ));
    }

    public function get_token($request)
    {
        $user_id = $request->get_param('user_id');
        $token = vibebp_generate_token(get_user_by('id', $user_id));
        return rest_ensure_response($token);
    }

    public function update_course_progress($request)
    {
        $user_id = $this->user_id;
        $course_id = $request->get_param('course_id');
        $status = bp_course_get_user_progress($user_id, $course_id);
        return rest_ensure_response($status);
    }

    public function get_user_permissions_check($request)
    {

        $body = json_decode($request->get_body(), true);

        if (empty($body['token'])) {
            $client_id = $request->get_param('client_id');
            if ($client_id == vibebp_get_setting('client_id')) {
                return true;
            }
        } else {
            $token = $body['token'];
        }

        if (!empty($body['token'])) {

            $this->user = apply_filters('vibebp_api_get_user_from_token', '', $body['token']);
            if (!empty($this->user)) {
                $this->user_id = $this->user->id;
                return true;
            }
        }

        //$headers = $request->get_headers();
        $headers = vibe_getallheaders();
        if (isset($headers['Authorization'])) {
            $token = $headers['Authorization'];
            $this->user_id = $this->get_user_from_token($token);
            if ($this->user_id) {
                return true;
            }
        }
        return false;
    }

    function get_user_from_token($token)
    {


        if (!empty($token)) {

            $this->user = apply_filters('vibebp_api_get_user_from_token', '', $token);
            if (!empty($this->user)) {
                $this->user_id = $this->user->id;
                return $this->user_id;
            }
        }

        global $wpdb;
        $user_id = $wpdb->get_var(apply_filters('wplms_usermeta_direct_query', "SELECT user_id FROM {$wpdb->usermeta} WHERE meta_key = '$token'"));

        if (is_numeric($user_id)) {
            $this->user_id = $user_id;
            return $user_id;
        }

        return false;
    }

    public function get_course_review($request)
    {

        if (!$this->user_id) {
            return false;
        }
        $course = intval($request['course']);
        global $wpdb;
        $comment_id = $wpdb->get_var("SELECT comment_ID FROM {$wpdb->comments} WHERE comment_post_ID = $course AND user_id = $this->user_id");

        $data = array();
        if (!empty($comment_id)) {
            $comment = get_comment($comment_id);
            $data['comment_ID'] = $comment->comment_ID;
            $data['review'] = $comment->comment_content;
            $data['title'] = get_comment_meta($comment->comment_ID, 'review_title', true);
            $data['rating'] = get_comment_meta($comment->comment_ID, 'review_rating', true);
        }



        return new \WP_REST_Response($data, 200);;
    }

    // get course all reviews

    public function get_reviews($request)
    {
        $course_id = $request['course'];
        $reviews = array();
        $args = apply_filters('bp_course_api_course_reviews', array(
            'post_id'     => $course_id,
            'status' => 'approve',
            'orderby'    => 'comment_date',
            'order'        => 'DESC',
            'number'    => 5,
        ));
        $comments = get_comments($args);
        if (!empty($comments)) {
            foreach ($comments as $comment) {
                $title =  get_comment_meta($comment->comment_ID, 'review_title', true);
                $rating = get_comment_meta($comment->comment_ID, 'review_rating', true);
                $review = array(
                    'id'         => $comment->comment_ID,
                    'title'        => $title,
                    'content'    => $comment->comment_content,
                    'rating'    => $rating,
                    'member'    => $this->get_member($comment->user_id),
                    'date'    => $comment->comment_date,
                );
                array_push($reviews, $review);
            }
        }

        return new \WP_REST_Response($reviews, 200);
    }

    function get_member($user_id)
    {
        $field = 'Location';
        if (function_exists('vibe_get_option'))
            $field = vibe_get_option('student_field');

        return array(
            'id'     => $user_id,
            'name'   => bp_core_get_user_displayname($user_id),
            'avatar' => bp_course_get_instructor_avatar_url($user_id),
            'sub'    => (bp_is_active('xprofile') ? bp_get_profile_field_data('field=' . $field . '&user_id=' . $user_id) : ''),
        );
    }
}

new RestApi();