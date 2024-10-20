<?php
/**
 * Plugin Name: WPLMS Custom Course Player
 * Plugin URI: https://yourwebsite.com/
 * Description: A React-based course player for WPLMS
 * Version: 1.0.0
 * Author: Your Name
 * Author URI: https://yourwebsite.com/
 * License: GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: wplms-custom-course-player
 */

// If this file is called directly, abort.
if (!defined('WPINC')) {
    die;
}

// Define plugin constants
define('WPLMS_CUSTOM_COURSE_PLAYER_VERSION', '1.0.0');
define('WPLMS_CUSTOM_COURSE_PLAYER_PATH', plugin_dir_path(__FILE__));
define('WPLMS_CUSTOM_COURSE_PLAYER_URL', plugin_dir_url(__FILE__));

// Enqueue scripts and styles
function wplms_custom_course_player_enqueue_scripts() {
    $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

    wp_enqueue_script(
        'example-editor-scripts',
        plugins_url( 'build/index.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version']
    );
// send token to the script
    wp_localize_script( 'example-editor-scripts', 'wplmsCustomCoursePlayer',
     array(
        'token' => is_user_logged_in() ? vibebp_generate_token(get_user_by('id', get_current_user_id())) : '',
        'user_id' => is_user_logged_in() ? get_current_user_id() : '',
    ) );
    wp_enqueue_style(
        'wplms-custom-course-player-style',
        plugins_url( 'build/index.css', __FILE__ ),
        array(),
        time()
        
    );
}
add_action('wp_enqueue_scripts', 'wplms_custom_course_player_enqueue_scripts');

// Add rewrite rules for course player page
function wplms_custom_course_player_rewrite_rules() {
    add_rewrite_rule(
        'course-player/([0-9]+)/?$',
        'index.php?pagename=course-player&course_id=$matches[1]',
        'top'
    );
}
add_action('init', 'wplms_custom_course_player_rewrite_rules');

// Add course_id query var
function wplms_custom_course_player_query_vars($query_vars) {
    $query_vars[] = 'course_id';
    return $query_vars;
}
add_filter('query_vars', 'wplms_custom_course_player_query_vars');

// Load custom template for course player page
function wplms_custom_course_player_template($template) {
    if (is_page('course-player')) {
        $new_template = WPLMS_CUSTOM_COURSE_PLAYER_PATH . 'templates/page-course-player.php';
        if (file_exists($new_template)) {
            return $new_template;
        }
    }
    return $template;
}
add_filter('page_template', 'wplms_custom_course_player_template');

// Create course player page on plugin activation
function wplms_custom_course_player_activate() {
    // Check if the page already exists
    $page = get_page_by_path('course-player');

    if (!$page) {
        // Create the page
        $page_id = wp_insert_post(array(
            'post_title' => 'Course Player',
            'post_name' => 'course-player',
            'post_status' => 'publish',
            'post_type' => 'page',
            'comment_status' => 'closed',
            'ping_status' => 'closed',
            'post_content' => '', // We'll use the custom template, so no content is needed
        ));

        if ($page_id && !is_wp_error($page_id)) {
            update_option('wplms_custom_course_player_page_id', $page_id);
        }
    }

    // Flush rewrite rules
    flush_rewrite_rules();
}
register_activation_hook(__FILE__, 'wplms_custom_course_player_activate');

// Flush rewrite rules on plugin deactivation
function wplms_custom_course_player_deactivate() {
    flush_rewrite_rules();
}
register_deactivation_hook(__FILE__, 'wplms_custom_course_player_deactivate');