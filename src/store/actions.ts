import apiFetch from "@wordpress/api-fetch";
import { ICourse } from "../types/course";
import { actionTypes } from "./const";
import resolvers from "./resolvers";
import { fetchCourseData, submitCourseReview } from "../utilities/apiCall";

interface ReviewResponse {
  comment_id?: number;
  [key: string]: any;
}

export const actions = {
  // Course Info Actions
  setCourseInfo(courseInfo: ICourse) {
    return {
      type: actionTypes.SET_COURSE_INFO,
      payload: courseInfo,
    };
  },

  setUserInfo(userInfo: any) {
    return {
      type: actionTypes.SET_USER_INFO,
      payload: userInfo,
    };
  },

  // Loading & Error Actions
  setLoading(isLoading: boolean) {
    return {
      type: actionTypes.SET_IS_LOADING,
      payload: isLoading,
    };
  },

  setError(error: string) {
    return {
      type: actionTypes.SET_ERROR,
      payload: error,
    };
  },

  // Review Related Actions
  setCourseInfoLoading(isLoading: boolean) {
    return {
      type: actionTypes.SET_REVIEW_LOADING,
      payload: isLoading,
    };
  },

  setCourseReviewError(error: string) {
    return {
      type: actionTypes.SET_REVIEW_ERROR,
      payload: error,
    };
  },

  setCourseReview(review: any) {
    return {
      type: actionTypes.SET_COURSE_REVIEW,
      payload: review,
    };
  },

  setReviewModalOpen(isOpen: boolean) {
    return {
      type: actionTypes.SET_REVIEW_MODAL_OPEN,
      payload: isOpen,
    };
  },

  setHasReview(hasReview: boolean) {
    return {
      type: actionTypes.SET_HAS_REVIEW,
      payload: hasReview,
    };
  },

  // Unit Navigation Actions
  setNextUnit() {
    return {
      type: actionTypes.NEXT_UNIT,
    };
  },

  setPreviousUnit() {
    return {
      type: actionTypes.PREV_UNIT,
    };
  },

  setCurrentUnit(unitId: number) {
    return {
      type: actionTypes.SET_CURRENT_UNIT,
      payload: unitId,
    };
  },

  setProgress(progress: number) {
    return {
      type: actionTypes.SET_PROGRESS,
      payload: progress,
    };
  },

  // Async Actions (Thunks)
  submitCourseReview:
    ({
      rating,
      review,
      courseId,
    }: {
      rating: number;
      review: string;
      courseId: number;
    }) =>
    async ({ dispatch }: { dispatch: any }) => {
      try {
        dispatch(actions.setLoading(true));
        const token = (window as any).wplmsCustomCoursePlayer.token;

        const response = (await submitCourseReview({
          token,
          comment_post_ID: courseId,
          rating,
          review,
        })) as ReviewResponse;
        if (response?.comment_id) {
          dispatch(actions.setHasReview(true));
        }
        dispatch(actions.setCourseReview(response));
        dispatch(actions.setReviewModalOpen(false));
        dispatch(actions.setLoading(false));
      } catch (error) {
        dispatch(
          actions.setError(
            error instanceof Error ? error.message : String(error)
          )
        );
        dispatch(actions.setLoading(false));
      }
    },

  markUnitComplete:
    ({
      courseId,
      unitId,
      progress,
    }: {
      courseId: number;
      unitId: number;
      progress: number;
    }) =>
    async ({ dispatch }: { dispatch: any }) => {
      try {
        dispatch(actions.setLoading(true));
        const token = (window as any).wplmsCustomCoursePlayer.token;

        await apiFetch({
          path: `/wplms/v2/user/coursestatus/${courseId}/item/${unitId}/markcomplete`,
          method: "POST",
          data: { token, course_id: courseId, item_id: unitId, progress },
        });

        dispatch(actions.setProgress(progress));
        dispatch(actions.setLoading(false));
      } catch (error) {
        dispatch(
          actions.setError(
            error instanceof Error ? error.message : String(error)
          )
        );
        dispatch(actions.setLoading(false));
      }
    },

  fetchCourse:
    (courseId: string) =>
    async ({ dispatch }: { dispatch: any }) => {
      try {
        dispatch(actions.setLoading(true));
        const token = (window as any).wplmsCustomCoursePlayer.token;
        const response = await fetchCourseData({ courseId, token });

        dispatch(actions.setCourseInfo(response));
        dispatch(actions.setLoading(false));
        dispatch(actions.setError(""));
      } catch (error) {
        dispatch(
          actions.setError(
            error instanceof Error ? error.message : String(error)
          )
        );
        dispatch(actions.setLoading(false));
      }
    },
};
