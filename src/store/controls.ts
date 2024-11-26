// controls.ts
import {
  fetchCourseData,
  fetchCourseReview,
  getCourseProgress,
  getUserInfo,
  markUnitComplete,
  submitCourseReview,
} from "../utilities/apiCall";

const userAuthToken = (window as any).wplmsCustomCoursePlayer.token;

export const controls = {
  async FETCH_COURSE_DATA(action: { courseId: string }) {
    const response = await fetchCourseData({
      courseId: action.courseId,
      token: userAuthToken,
    });
    return response;
  },

  async FETCH_USER_INFO() {
    try {
      const response = await getUserInfo(userAuthToken);
      return response;
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  },

  async MARK_UNIT_COMPLETE(action: {
    courseId: number;
    unitId: number;
    progress: number;
  }) {
    try {
      const response = await markUnitComplete({
        courseId: action.courseId,
        unitId: action.unitId,
        token: userAuthToken,
        progress: action.progress,
      });
      return response;
    } catch (error) {
      console.error("Error marking unit complete:", error);
    }
  },

  async GET_COURSE_PROGRESS(action: { courseId: number }) {
    try {
      const response = await getCourseProgress({
        courseId: action.courseId,
        token: userAuthToken,
      });
      return response;
    } catch (error) {
      console.error("Error fetching course progress:", error);
    }
  },

  async SUBMIT_COURSE_REVIEW(action: {
    rating: number;
    review: string;
    courseId: number;
  }) {
    const response = await submitCourseReview({
      rating: action.rating,
      review: action.review,
      token: userAuthToken,
      comment_post_ID: action.courseId,
    });
    return response;
  },

  async FETCH_COURSE_REVIEW(action: { courseId: number }) {
    const response = await fetchCourseReview({
      courseId: action.courseId,
      token: userAuthToken,
    });
    return response;
  },
};
