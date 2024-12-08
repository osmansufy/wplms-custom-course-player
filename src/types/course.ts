import { IComment } from "./comment";

export interface ICourse {
  course_id: number;
  course_title: string;
  current_unit_key: number;
  courseitems: IUnit[];
  lock: number;
  assignment_locking: number;
  assignment_lock_wait_for_instructor_approval: number;
  disablescrollprogress: boolean;
  course_status: string;
  instructions: string;
  progress: string;
}

export enum Type {
  Section = "section",
  Unit = "unit",
  Quiz = "quiz",
}

export interface IUnitItem {
  title: string;
  instructor_id: string;
  duration: number;
  content: string;
  meta: Meta;
}

export interface Meta {
  access: number;
  comments: string;
  video: string;
  pratice_questions: string;
  assignments: any[];
  attachments: any[];
  link: string;
}

// all unites

// json  {
//   key: 1,
//   id: 55984,
//   type: 'unit',
//   title: 'Introduction to Safeguarding and Child Protection',
//   duration: 0,
//   unit_type: 'video',
//   content: '',
//   status: 1,
//   icon: 'vicon vicon-video-camera',
//   meta: []
// },

export interface IUnit {
  key: number;
  id: number;
  type: Type;
  title: string;
  duration: number;
  unit_type: string;
  content: string;
  status: number;
  icon: string;
  meta: any[];
}

// export const DEFAULT_STATE = {
//   courseId: null,
//   courseInfo: null,
//   progress: 0,
//   currentUnitId: null,
//   token: null,
//   isLoading: false,
//   error: null,
//   allUnits: [],
//   completeUnits: [],
// };
