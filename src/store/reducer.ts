import { IState } from "../types/course";
import { actionTypes } from "./const";

export const DEFAULT_STATE: IState = {
  courseId: null,
  courseInfo: null,
  progress: 0,
  currentUnitId: null,
  token: null,
  isLoading: false,
  error: null,
  allUnits: [],
  completeUnits: [],
};
export const reducer = (
  state = DEFAULT_STATE,
  action: { type: string; [key: string]: any }
) => {
  switch (action.type) {
    case actionTypes.SET_COURSE_INFO:
      return {
        ...state,
        courseInfo: action.courseInfo,
      };
    case actionTypes.SET_COURSE_ID:
      return {
        ...state,
        courseId: action.courseId,
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
    case actionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.token,
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
    case actionTypes.SET_ALL_UNITS:
      return {
        ...state,
        allUnits: action.all,
        completeUnits: action.all.filter((unit: any) => unit.status === 1),
      };

    case actionTypes.NEXT_UNIT:
      const currentIndex = state.allUnits.findIndex(
        (unit: any) => unit.id === state.currentUnitId
      );
      const nextUnit = state.allUnits[currentIndex + 1];
      return {
        ...state,
        currentUnitId: nextUnit ? nextUnit.id : state.currentUnitId,
      };

    case actionTypes.PREV_UNIT:
      const prevIndex = state.allUnits.findIndex(
        (unit: any) => unit.id === state.currentUnitId
      );
      const prevUnit = state.allUnits[prevIndex - 1];
      return {
        ...state,
        currentUnitId: prevUnit ? prevUnit.id : state.currentUnitId,
      };

    default:
      return state;
  }
};
