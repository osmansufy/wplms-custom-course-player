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

  setAllUnits(units: CourseItem[]) {
    return {
      type: actionTypes.SET_ALL_UNITS,
      all: units,
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
        type: "FETCH_COURSE_DATA",
        courseId,
      };

      // Calculate progress
      const totalUnits = response.courseitems.filter(
        (item: CourseItem) => item.type === "unit"
      );

      yield actions.setCourseId(courseId);
      yield actions.setAllUnits(totalUnits);
      yield actions.setProgress(response.progress);
      yield actions.setCourseInfo(response);
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
    unitId: number
  ): Generator<any, void, any> {
    try {
      yield actions.setIsLoading(true);
      const response = yield {
        type: actionTypes.GET_COURSE_PROGRESS,
        courseId,
        unitId,
      };

      // Update course progress api call
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
      yield actions.setIsLoading(true);
      const response = yield {
        type: actionTypes.GET_COURSE_PROGRESS,
        courseId,
      };
      yield actions.setProgress(response.progress);
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
