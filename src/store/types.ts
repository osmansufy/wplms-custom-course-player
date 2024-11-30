import { ICourse, IUnit } from "../types/course";
import { SelectorReturnType, SelectorsType } from "./selectors";

export interface State {
  token: string | null;
  courseId: number | null;
  courseInfo: ICourse | null;
  progress: number;
  currentUnitId: number | null;
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
}
