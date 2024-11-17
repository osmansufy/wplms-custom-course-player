// reducer.ts
import { IState } from "../types/course";
import { actionTypes } from "./const";

export const DEFAULT_STATE: IState = {
  courseId: null,
  courseInfo: null,
  progress: 0,
  currentUnitId: null,
  isLoading: false,
  error: null,
  token: null,
  userInfo: null,
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
      return {
        ...state,
        courseInfo: action.courseInfo,
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
        state.courseInfo?.courseitems.findIndex(
          (unit) => unit.id === state.currentUnitId
        ) ?? -1;
      const nextUnit = state.courseInfo?.courseitems[currentIndex + 1];
      return {
        ...state,
        currentUnitId: nextUnit ? nextUnit.id : state.currentUnitId,
      };
    }

    case actionTypes.PREV_UNIT: {
      const currentIndex =
        state.courseInfo?.courseitems.findIndex(
          (unit) => unit.id === state.currentUnitId
        ) ?? -1;
      const prevUnit = state.courseInfo?.courseitems[currentIndex - 1];
      return {
        ...state,
        currentUnitId: prevUnit ? prevUnit.id : state.currentUnitId,
      };
    }

    default:
      return state;
  }
};
