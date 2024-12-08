export interface IQuiz {
  id: string;
  title: string;
  content: string;
  start: boolean;
  check_answer: number;
  start_time: number;
  end_time: number;
  show_results: boolean;
  meta: Meta;
  partial_marking: number;
  negative_marking: number;
  negative_marks: number;
  question_number: string;
  quiz_passing_score: number;
  show_advance_stats: number;
  quiz_type: string;
  non_logged_in_quiz: boolean;
  remaining: number;
  expiry: string;
  submitted?: boolean;
  retakes?: number;
  tags_data?: Array<{
    label: string;
    value: number;
  }>;
}

export interface Meta {
  access: number;
  status: number;
  marks: number;
  max: number;
  questions: IQuestion[];
  auto: number;
  retakes: number;
  completion_message: string;
  duration: number;
}

export interface IQuestion {
  type: Type;
  explanation: string;
  original_content: string;
  content: string;
  options: string[];
  correct?: string;
  id: number;
  marks: string;
  user_marks: number;
  status: number;
  show_hint: boolean;
  auto: number;
  show_correct_answer: number;
  flagged: boolean;
  key: string;
  raw?: any;
  correct_indexes?: number[];
  marked?: string;
  marked_answer?: string;
  attempted?: boolean;
  correct_answer?: string;
  explaination?: string;
  max_marks?: string;
}

export enum Type {
  Single = "single",
}

export interface IQuizAnswers {
  [key: string]: number;
}

export interface QuizQuestion {
  type: string;
  content: string;
  key: string;
  id: number;
  marks: string;
  options: string[];
  marked?: string;
  marked_answer?: string;
  attempted?: boolean;
  user_marks?: number;
  correct?: string;
  correct_indexes?: number[];
}

export interface QuizSubmissionPayload {
  quiz_id: string;
  course_id: number;
  quiz: {
    id: string;
    title: string;
    content: string;
    start: boolean;
    marks: string;
    max_marks: number;
    meta: {
      access: number;
      status: number;
      marks: number;
      max: number;
      questions: QuizQuestion[];
    };
  };
  results: QuizQuestion[];

  token: string;
}

export interface EncryptedData {
  ct: string;
  iv: string;
  s: string;
}

export interface QuizQuestion {
  id: number;
  content: string;
  options: string[];
  correct?: string;
  key: string;
  marks: string;
  type: string;
}

export interface QuizMeta {
  questions: QuizQuestion[];
}

export interface QuizData {
  meta: QuizMeta;
}

export interface DecryptedQuestion {
  questionId: number;
  question: string;
  options: string[];
  correctAnswer: number;
  marks: string;
}
