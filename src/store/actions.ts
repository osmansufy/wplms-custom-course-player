import { actionTypes } from "./const";

export const actions = {
  setCourseId(courseId: number | null) {
    return {
      type: "SET_COURSE_ID",
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
  setToken(token: string | null) {
    return {
      type: actionTypes.SET_TOKEN,
      token,
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
  setAllUnits(all: any) {
    return {
      type: actionTypes.SET_ALL_UNITS,
      all,
    };
  },
  setCourseInfo(courseInfo: any) {
    return {
      type: actionTypes.SET_COURSE_INFO,
      courseInfo,
    };
  },
  fetchCourseInfo(courseId: number) {
    return {
      type: "FETCH_COURSE_INFO",
      courseId,
    };
  },
};
