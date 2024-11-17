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
}

new RestApi();