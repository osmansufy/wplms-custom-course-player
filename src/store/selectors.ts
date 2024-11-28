// selectors.ts
import { DEFAULT_STATE } from "./reducer";
import { ICourse, CourseItem } from "../types/course";
import { select } from "@wordpress/data";

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
    return state.allUnits;
  },
  getCompletedUnits(state: typeof DEFAULT_STATE) {
    return state.allUnits?.filter((unit) => unit.status === 1) ?? [];
  },

  getCourseReview(state: typeof DEFAULT_STATE) {
    return state.review;
  },

  getReviewLoading(state: typeof DEFAULT_STATE) {
    return state.reviewLoading;
  },

  getReviewError(state: typeof DEFAULT_STATE) {
    return state.reviewError;
  },

  getReviewModalOpen(state: typeof DEFAULT_STATE) {
    return state.reviewModalOpen;
  },

  getCourseTotalDuration(state: typeof DEFAULT_STATE) {
    return state.courseTotalDuration;
  },

  getCompletedDuration(state: typeof DEFAULT_STATE) {
    return state.completedDuration;
  },

  isLoadingCourseData(state: any, courseId: number) {
    return select("core/data").isResolving(
      "custom-course-player",
      "getCourseData",
      [courseId]
    );
  },

  isLoadingUserInfo(state: any) {
    return select("core/data").isResolving(
      "custom-course-player",
      "getUserInfo",
      []
    );
  },

  isCourseCompleted(state: typeof DEFAULT_STATE): boolean {
    return state.isCompleted ?? false;
  },
};
