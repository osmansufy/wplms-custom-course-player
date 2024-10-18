<?php
/*
Template Name: Course Player
*/

// Check user authentication
if (!is_user_logged_in()) {
    auth_redirect();
    exit;
}

// Get course ID from URL parameter
$course_id = isset($_GET['course_id']) ? intval($_GET['course_id']) : 0;

if (!$course_id) {
    wp_die('Invalid course ID');
}

// Check if user has access to the course
if (!bp_course_is_member($course_id, get_current_user_id())) {
    wp_die('You do not have access to this course');
}

get_header();
?>

<div id="primary" class="content-area">
    <main id="main" class="site-main">
        <div id="wplms-custom-course-player" data-course-id="<?php echo esc_attr($course_id); ?>"></div>
    </main>
</div>

<?php
get_footer();