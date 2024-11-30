// reducer.ts
import { IUnit } from "../types/course";
import { State } from "./types";
import { actionTypes } from "./const";

// Initial state
export const DEFAULT_STATE: State = {
  token: null,
  courseId: null,
  courseInfo: null,
  progress: 0,
  currentUnitId: null,
  allUnits: null,
  isLoading: true,
  error: null,
  userInfo: null,
  review: null,
  reviewLoading: true,
  hasReview: false,
  reviewError: null,
  reviewModalOpen: false,
  courseTotalDuration: null,
  completedDuration: null,
  isCompleted: false,
  completionMessage: null,
};

// Helper functions
const calculateCourseMetrics = (units: IUnit[]) => {
  const courseTotalDuration = units.reduce(
    (sum, unit) => sum + (unit.duration || 0),
    0
  );
  const completedUnits = units.filter((unit) => unit.status === 1);
  const completedDuration = completedUnits.reduce(
    (sum, unit) => sum + (unit.duration || 0),
    0
  );
  const progress = Math.round((completedDuration / courseTotalDuration) * 100);

  return {
    courseTotalDuration,
    completedDuration,
    progress,
    isCompleted: progress >= 100,
  };
};

export const reducer = (state = DEFAULT_STATE, action: any): State => {
  switch (action.type) {
    // Course Info Related Actions
    case actionTypes.SET_COURSE_INFO: {
      const allUnits = action.payload.courseitems.filter(
        (item: IUnit) => item.type !== "section"
      );
      const currentUnitId = allUnits.find(
        (unit: IUnit) => unit.key === action.payload.current_unit_key
      )?.id;
      const metrics = calculateCourseMetrics(allUnits);

      return {
        ...state,
        courseInfo: action.payload,
        courseId: action.payload.course_id,
        allUnits,
        currentUnitId,
        ...metrics,
      };
    }

    case actionTypes.SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };

    // Unit Navigation & Progress Actions
    case actionTypes.SET_CURRENT_UNIT:
      return {
        ...state,
        currentUnitId: action.payload,
      };

    case actionTypes.SET_PROGRESS:
      return {
        ...state,
        progress: action.payload,
      };

    // Loading & Error States
    case actionTypes.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    // Review Related Actions
    case actionTypes.SET_COURSE_REVIEW:
      return {
        ...state,
        review: action.payload,
        reviewLoading: false,
        reviewError: null,
        hasReview: action.payload.comment_ID ? true : false,
      };

    case actionTypes.SET_REVIEW_LOADING:
      return {
        ...state,
        reviewLoading: action.payload,
      };

    case actionTypes.SET_REVIEW_ERROR:
      return {
        ...state,
        reviewError: action.payload,
        reviewLoading: false,
      };

    case actionTypes.SET_REVIEW_MODAL_OPEN:
      return {
        ...state,
        reviewModalOpen: action.payload,
      };

    // Course Completion Actions
    case actionTypes.SET_COURSE_COMPLETED:
      return {
        ...state,
        isCompleted: action.payload,
      };

    case actionTypes.SET_COMPLETION_MESSAGE:
      return {
        ...state,
        completionMessage: action.payload,
      };

    case actionTypes.MARK_UNIT_COMPLETE: {
      const updatedUnits =
        state.allUnits?.map((unit) =>
          unit.id === action.payload.unitId ? { ...unit, status: 1 } : unit
        ) || null;
      if (updatedUnits) {
        const metrics = calculateCourseMetrics(updatedUnits as IUnit[]);
        return {
          ...state,
          allUnits: updatedUnits,
          ...metrics,
        };
      }

      return state;
    }

    // Unit Navigation Actions
    case actionTypes.NEXT_UNIT: {
      const currentIndex =
        state.allUnits?.findIndex((unit) => unit.id === state.currentUnitId) ??
        -1;
      const nextUnit = state.allUnits?.[currentIndex + 1];

      return {
        ...state,
        currentUnitId: nextUnit ? nextUnit.id : state.currentUnitId,
      };
    }

    case actionTypes.PREV_UNIT: {
      const currentIndex =
        state.allUnits?.findIndex((unit) => unit.id === state.currentUnitId) ??
        -1;
      const prevUnit = state.allUnits?.[currentIndex - 1];

      return {
        ...state,
        currentUnitId: prevUnit ? prevUnit.id : state.currentUnitId,
      };
    }

    case actionTypes.SET_HAS_REVIEW:
      return {
        ...state,
        hasReview: action.payload,
      };

    default:
      return state;
  }
};
