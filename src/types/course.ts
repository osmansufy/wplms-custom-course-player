export interface ICourse {
  current_unit_key: number;
  courseitems: CourseItem[];
  lock: number;
  assignment_locking: number;
  assignment_lock_wait_for_instructor_approval: number;
  disablescrollprogress: boolean;
  course_status: string;
  instructions: string;
}

export interface CourseItem {
  key: number;
  id: number;
  type: Type;
  title: string;
  duration: number;
  content: string;
  meta: any[];
  unit_type?: string;
  status?: number;
  icon?: string;
}

export enum Type {
  Section = "section",
  Unit = "unit",
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
