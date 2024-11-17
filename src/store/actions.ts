import { actionTypes } from "./const";
import { ICourse, CourseItem } from "../types/course";

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
      yield actions.setIsLoading(true);
      const response = yield {
        type: "FETCH_USER_INFO",
      };
      yield actions.setUserInfo(response);
      yield actions.setIsLoading(false);
    } catch (error) {
      yield actions.setError(
        error instanceof Error ? error.message : String(error)
      );
      yield actions.setIsLoading(false);
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
    } catch (error) {
      yield actions.setError(
        error instanceof Error ? error.message : String(error)
      );
      yield actions.setIsLoading(false);
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
      yield actions.setError(
        error instanceof Error ? error.message : String(error)
      );
    }
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
};
