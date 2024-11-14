import { ICourse, CourseItem } from "../types/course";

export interface ICustomCoursePlayerStore {
  getCourseInfo(): ICourse | null;
  isLoading(): boolean;
  getError(): string | null;
  getCurrentUnitId(): number | null;
  getProgress(): number;
  getAllUnits(): CourseItem[];
  getCompleteUnits(): CourseItem[];
  getUserInfo(): any;
}

declare module "@wordpress/data" {
  function useSelect<T>(
    mapSelect: (select: (store: string) => ICustomCoursePlayerStore) => T,
    deps?: any[]
  ): T;
}
