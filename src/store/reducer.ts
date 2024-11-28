// reducer.ts
import { IState, IUnit } from "../types/course";
import { actionTypes } from "./const";

export const DEFAULT_STATE: IState = {
  courseId: null,
  courseInfo: null,
  progress: 0,
  currentUnitId: null,
  allUnits: null,
  isLoading: false,
  error: null,
  token: null,
  userInfo: null,
  review: null,
  reviewLoading: true,
  reviewError: null,
  reviewModalOpen: false,
  courseTotalDuration: null,
  completedDuration: null,
  isCompleted: false,
};

export const reducer = (
  state = DEFAULT_STATE,
  action: { type: string; [key: string]: any }
) => {
  switch (action.type) {
    case actionTypes.SET_COURSE_ID:
      return {
        ...state,
        courseId: action.courseId,
      };

    case actionTypes.SET_COURSE_INFO:
      const allUnits = action.courseInfo.courseitems.filter(
        (item: IUnit) => item.type !== "section"
      );
      const courseTotalDuration = allUnits.reduce(
        (sum: number, unit: IUnit) => sum + (unit.duration || 0),
        0
      );
      const completedUnits = allUnits.filter(
        (unit: IUnit) => unit.status === 1
      );
      const completedDuration = completedUnits.reduce(
        (sum: number, unit: IUnit) => sum + (unit.duration || 0),
        0
      );

      // Calculate progress
      const progress = Math.round(
        (completedDuration / courseTotalDuration) * 100
      );
      const isCompleted =
        parseInt(action.courseInfo.progress ?? "0") >= 100 && progress >= 100;
      return {
        ...state,
        courseInfo: action.courseInfo,
        allUnits,
        courseTotalDuration,
        progress,
        completedDuration,
        isCompleted,
      };
    case actionTypes.SET_USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo,
      };
    case actionTypes.SET_PROGRESS:
      return {
        ...state,
        progress: action.progress,
      };

    case actionTypes.SET_CURRENT_UNIT:
      return {
        ...state,
        currentUnitId: action.unitId,
      };

    case actionTypes.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actionTypes.NEXT_UNIT: {
      const currentIndex =
        state?.allUnits?.findIndex((unit) => unit.id === state.currentUnitId) ??
        -1;
      const nextUnit = state?.allUnits?.[currentIndex + 1];
      return {
        ...state,
        currentUnitId: nextUnit ? nextUnit.id : state.currentUnitId,
      };
    }

    case actionTypes.PREV_UNIT: {
      const currentIndex =
        state?.allUnits?.findIndex((unit) => unit.id === state.currentUnitId) ??
        -1;
      const prevUnit = state?.allUnits?.[currentIndex - 1];
      return {
        ...state,
        currentUnitId: prevUnit ? prevUnit.id : state.currentUnitId,
      };
    }

    case actionTypes.SET_COURSE_REVIEW:
      return {
        ...state,
        review: action.review,
      };

    case actionTypes.SET_REVIEW_LOADING:
      return {
        ...state,
        reviewLoading: action.loading,
      };

    case actionTypes.SET_REVIEW_ERROR:
      return {
        ...state,
        reviewError: action.error,
      };

    case actionTypes.SET_REVIEW_MODAL_OPEN:
      return {
        ...state,
        reviewModalOpen: action.open,
      };

    case actionTypes.SET_COURSE_COMPLETED:
      return {
        ...state,
        isCompleted: action.completed,
      };

    default:
      return state;
  }
};
