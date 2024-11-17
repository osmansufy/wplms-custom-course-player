// selectors.ts
import { DEFAULT_STATE } from "./reducer";
import { ICourse, CourseItem } from "../types/course";

export const selectors = {
  getCourseId(state: typeof DEFAULT_STATE) {
    return state.courseId;
  },

  getCourseInfo(state: typeof DEFAULT_STATE): ICourse | null {
    return state.courseInfo;
  },

  getProgress(state: typeof DEFAULT_STATE): number {
    return state.progress ?? 0;
  },

  getCurrentUnitId(state: typeof DEFAULT_STATE): number | null {
    return state.currentUnitId;
  },

  isLoading(state: typeof DEFAULT_STATE): boolean {
    return state.isLoading ?? false;
  },

  getError(state: typeof DEFAULT_STATE): string | null {
    return state.error;
  },

  getUserInfo(state: typeof DEFAULT_STATE) {
    return state.userInfo;
  },

  getAllUnits(state: typeof DEFAULT_STATE) {
    return state.courseInfo?.courseitems;
  },

  getCompletedUnits(state: typeof DEFAULT_STATE) {
    return state.courseInfo?.courseitems.filter((unit) => unit.status === 1);
  },
};
