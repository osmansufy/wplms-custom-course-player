import { createSelector, select } from "@wordpress/data";
import { IUnit, ICourse, IState } from "../types/course";
import { State } from "./types";

// Define base selector types
export type SelectorReturnTypes = {
  getCourseId: () => number | null;
  getCourseTitle: () => string | null;
  getCourseInfo: (courseId: number) => ICourse | null;
  isCourseInfoLoading: () => boolean;
  getCurrentUnitId: () => number | null;
  getUserInfo: () => any;
  getProgress: () => number;
  getCompletedDuration: () => number | null;
  getCourseTotalDuration: () => number | null;
  getAllUnits: () => IUnit[] | null;
  getCompletedUnits: () => IUnit[];
  getCourseReview: (courseId: number) => any;
  getReviewLoading: () => boolean;
  getReviewError: () => string | null;
  getReviewModalOpen: () => boolean;
  isLoading: () => boolean;
  getError: () => string | null;
  isCourseCompleted: () => boolean;
  getCompletionMessage: () => string | null;
  isLoadingCourseInfo: (courseId: number) => boolean;
  isLoadingUserInfo: () => boolean;
  isLoadingReview: (courseId: number) => boolean;
  hasReview: () => boolean;
};

// Define selectors with proper typing
export const selectors = {
  getCourseId(state: State): number | null {
    return state.courseId;
  },

  getCourseTitle(state: State): string | null {
    return state.courseInfo?.course_title ?? null;
  },

  getCourseInfo(state: State, courseId: number): ICourse | null {
    return state.courseInfo;
  },

  isCourseInfoLoading(state: State): boolean {
    return state.isLoading;
  },

  getCurrentUnitId(state: State): number | null {
    return state.currentUnitId;
  },

  getUserInfo(state: State): any {
    return state.userInfo;
  },

  getProgress(state: State): number {
    return state.progress ?? 0;
  },

  getCompletedDuration(state: State): number | null {
    return state.completedDuration;
  },

  getCourseTotalDuration(state: State): number | null {
    return state.courseTotalDuration;
  },

  getAllUnits(state: State): IUnit[] | null {
    return state.allUnits;
  },
  getCompletedUnits(state: State): IUnit[] {
    return state.allUnits?.filter((unit: IUnit) => unit.status === 1) ?? [];
  },

  getCourseReview(state: State): any {
    return state.review;
  },

  getReviewLoading(state: State): boolean {
    return state.reviewLoading;
  },

  getReviewError(state: State): string | null {
    return state.reviewError;
  },

  getReviewModalOpen(state: State): boolean {
    return state.reviewModalOpen ?? false;
  },

  isLoading(state: State): boolean {
    return state.isLoading ?? false;
  },

  getError(state: State): string | null {
    return state.error;
  },

  isCourseCompleted(state: State): boolean {
    return state.isCompleted ?? false;
  },

  getCompletionMessage(state: State): string | null {
    return state.completionMessage;
  },

  hasReview(state: State): boolean {
    return state.hasReview;
  },

  isLoadingCourseInfo(state: State, courseId: number): boolean {
    return select("core/data").isResolving(
      "custom-course-player",
      "getCourseInfo",
      [courseId]
    );
  },

  isLoadingUserInfo(state: State): boolean {
    return select("core/data").isResolving(
      "custom-course-player",
      "getUserInfo",
      []
    );
  },

  isLoadingReview(state: State, courseId: number): boolean {
    return select("core/data").isResolving(
      "custom-course-player",
      "getCourseReview",
      [courseId]
    );
  },
};

// Type for the selectors object
export type SelectorsType = typeof selectors;

// Helper type to get return type of a selector
export type SelectorReturnType<K extends keyof SelectorsType> = ReturnType<
  SelectorsType[K]
>;

// Export memoized selectors separately
export const memoizedSelectors = {
  getCompletedUnits: createSelector(
    (state: State) => state.allUnits,
    (allUnits): IUnit[] =>
      allUnits?.filter((unit: IUnit) => unit.status === 1) ?? []
  ),
};

export default selectors;
