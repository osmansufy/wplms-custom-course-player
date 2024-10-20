import { DEFAULT_STATE } from "./reducer";

export const selectors = {
  getCourseId(state: typeof DEFAULT_STATE) {
    return state.courseId;
  },
  getProgress(state: typeof DEFAULT_STATE) {
    return state.progress;
  },
  getCurrentUnitId(state: typeof DEFAULT_STATE) {
    return state.currentUnitId;
  },
  getToken(state: typeof DEFAULT_STATE) {
    return state.token;
  },
  isLoading(state: typeof DEFAULT_STATE) {
    return state.isLoading;
  },
  getError(state: typeof DEFAULT_STATE) {
    return state.error;
  },
  getCourseInfo(state: typeof DEFAULT_STATE) {
    return state.courseInfo;
  },
  getAllUnits(state: typeof DEFAULT_STATE) {
    return state.allUnits;
  },
  getCompleteUnits(state: typeof DEFAULT_STATE) {
    return state.completeUnits;
  },
};
