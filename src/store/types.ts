import { ICourseReview } from "../types/comment";
import { ICourse, IUnit, IUnitItem } from "../types/course";
import { SelectorReturnType, SelectorsType } from "./selectors";

export interface State {
  token: string | null;
  courseId: number | null;
  courseInfo: ICourse | null;
  progress: number;
  currentUnit: IUnit | null;
  allUnits: IUnit[] | null;
  isLoading: boolean;
  error: string | null;
  userInfo: any;
  review: any;
  reviewLoading: boolean;
  reviewError: string | null;
  reviewModalOpen: boolean;
  courseTotalDuration: number | null;
  completedDuration: number | null;
  isCompleted: boolean;
  completionMessage: string | null;
  hasReview: boolean;
  reviewList: ICourseReview[] | null;
}
