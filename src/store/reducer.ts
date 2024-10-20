import { actionTypes } from "./const";

export const DEFAULT_STATE = {
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

    default:
      return state;
  }
};
