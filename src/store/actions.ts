import { actionTypes } from "./const";
import { ICourse } from "../types/course";

export const actions = {
  setCourseId(courseId: number | null) {
    return {
      type: actionTypes.SET_COURSE_ID,
      courseId,
    };
  },

  setProgress(progress: number) {
    return {
      type: actionTypes.SET_PROGRESS,
      progress,
    };
  },

  setCurrentUnit(unitId: number | null) {
    return {
      type: actionTypes.SET_CURRENT_UNIT,
      unitId,
    };
  },

  setIsLoading(isLoading: boolean) {
    return {
      type: actionTypes.SET_IS_LOADING,
      isLoading,
    };
  },

  setError(error: string | null) {
    return {
      type: actionTypes.SET_ERROR,
      error,
    };
  },

  setCourseInfo(courseInfo: ICourse) {
    return {
      type: actionTypes.SET_COURSE_INFO,
      courseInfo,
    };
  },
  setUserInfo(userInfo: any) {
    return {
      type: actionTypes.SET_USER_INFO,
      userInfo,
    };
  },
  *fetchCourseData(courseId: number): Generator<any, void, any> {
    try {
      yield actions.setIsLoading(true);
      const response = yield {
        type: actionTypes.FETCH_COURSE_DATA,
        courseId,
      };
      const currentUnit = response.courseitems.find(
        (unit: any) => unit.key == response.current_unit_key
      );
      yield actions.setCourseInfo(response);
      yield actions.setCourseId(courseId);
      yield actions.setCurrentUnit(currentUnit.id);
      yield actions.setProgress(response.progress);
      yield actions.setIsLoading(false);
    } catch (error) {
      yield actions.setError(
        error instanceof Error ? error.message : String(error)
      );
      yield actions.setIsLoading(false);
    }
  },
  *fetchUserInfo(): Generator<any, void, any> {
    try {
      const response = yield {
        type: actionTypes.FETCH_USER_INFO,
      };
      yield actions.setUserInfo(response);
    } catch (error) {
      yield actions.handleError(error);
    }
  },

  *markUnitComplete(
    courseId: number,
    unitId: number,
    progress: number
  ): Generator<any, void, any> {
    try {
      console.log({ courseId, unitId });
      const response = yield {
        type: actionTypes.MARK_UNIT_COMPLETE,
        courseId,
        unitId,
        progress,
      };
      yield actions.updateCourseProgress(courseId);
      yield actions.setIsLoading(false);
    } catch (error) {
      yield actions.handleError(error);
    }
  },

  *updateCourseProgress(courseId: number): Generator<any, void, any> {
    try {
      const response = yield {
        type: actionTypes.GET_COURSE_PROGRESS,
        courseId,
      };
      yield actions.setProgress(response);
    } catch (error) {
      yield actions.handleError(error);
    }
  },

  *handleError(error: unknown): Generator<any, void, any> {
    const errorMessage = error instanceof Error ? error.message : String(error);
    yield actions.setError(errorMessage);
    yield actions.setIsLoading(false);
  },

  nextUnit() {
    return {
      type: actionTypes.NEXT_UNIT,
    };
  },

  prevUnit() {
    return {
      type: actionTypes.PREV_UNIT,
    };
  },

  setCourseReview(review: any) {
    return {
      type: actionTypes.SET_COURSE_REVIEW,
      review,
    };
  },
  setReviewLoading(loading: boolean) {
    return {
      type: actionTypes.SET_REVIEW_LOADING,
      loading,
    };
  },
  setReviewError(error: string | null) {
    return {
      type: actionTypes.SET_REVIEW_ERROR,
      error,
    };
  },
  setReviewModalOpen(open: boolean) {
    return {
      type: actionTypes.SET_REVIEW_MODAL_OPEN,
      open,
    };
  },
  *fetchCourseReview(courseId: number): Generator<any, void, any> {
    try {
      yield actions.setReviewLoading(true);
      const response = yield {
        type: actionTypes.FETCH_COURSE_REVIEW,
        courseId,
      };
      yield actions.setCourseReview(response);
      yield actions.setReviewLoading(false);
    } catch (error) {
      yield actions.handleError(error);
      yield actions.setReviewLoading(false);
    }
  },

  *submitCourseReview({
    rating,
    review,
    courseId,
  }: {
    rating: number;
    review: string;
    courseId: number;
  }): Generator<any, void, any> {
    try {
      yield actions.setIsLoading(true);
      const response = yield {
        type: actionTypes.SUBMIT_COURSE_REVIEW,
        rating,
        review,
        comment_post_ID: courseId,
      };
      yield actions.setCourseReview(response);
      yield actions.setIsLoading(false);
    } catch (error) {
      yield actions.handleError(error);
    }
  },
};
