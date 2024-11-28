import { ICourse, CourseItem } from "../types/course";

export interface ICustomCoursePlayerStore {
  getCourseId(): number | string;
  getCourseInfo(): ICourse | null;
  getAllUnits(): CourseItem[] | null;
  getCompletedUnits(): CourseItem[] | null;
  isLoading(): boolean;
  getError(): string | null;
  getCurrentUnitId(): number | null;
  getProgress(): number;
  getUserInfo(): any;
  getCourseReview(): any;
  getReviewLoading(): boolean | null;
  getReviewError(): string | null;
  getReviewModalOpen(): boolean | null;
  getCourseTotalDuration(): number | null;
  getCompletedDuration(): number | null;
  isLoadingCourseData(courseId: number): boolean;
  isLoadingUserInfo(): boolean;
  isCourseCompleted(): boolean;
}

declare module "@wordpress/data" {
  function useSelect<T>(
    mapSelect: (select: (store: string) => ICustomCoursePlayerStore) => T,
    deps?: any[]
  ): T;
}
