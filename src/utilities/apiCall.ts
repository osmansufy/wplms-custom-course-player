import apiFetch from "@wordpress/api-fetch";
import { IComment, ICourseReview } from "../types/comment";
import { ICourse, IUnitItem } from "../types/course";
import { API_PATH } from "./const";
import { IQuiz, QuizQuestion, QuizSubmissionPayload } from "../types/quiz";
export const fetchCourseData = async ({
  courseId,
  token,
}: {
  courseId: string;
  token: string;
}) => {
  try {
    const data = await apiFetch<ICourse | null>({
      path: `${API_PATH.wplms_root}/user/coursestatus/${courseId}`,
      method: "POST",
      data: { token: token },
    });
    console.log(data);
    if (data) {
      return data;
    } else {
      throw new Error(data || "Failed to fetch course data");
    }
  } catch (err) {
    throw new Error("Error fetching course data");
  }
};

export const fetchUnitContent = async ({
  courseId,
  unitId,
  token,
}: {
  courseId: number | string;
  unitId: number | null;
  token: string;
}) => {
  try {
    const data = await apiFetch<IUnitItem | null>({
      path: `${API_PATH.wplms_root}/user/coursestatus/${courseId}/item/${unitId}`,

      method: "POST",
      data: {
        token: token,
      },
    });

    if (data) {
      return data;
    } else {
      throw new Error("Failed to fetch unit content");
    }
  } catch (err) {
    console.error("Error fetching unit content:", err);
  }
};

export const fetchCourseReview = async ({
  courseId,
  token,
}: {
  courseId: number;
  token: string;
}): Promise<IComment> => {
  try {
    const response = (await apiFetch({
      path: `${API_PATH.wplms_root}/user/getreview/${courseId}`,
      method: "POST",
      data: { token, course_id: courseId },
    })) as IComment;
    return response;
  } catch (err) {
    console.error("Failed to fetch review status");
    throw err;
  }
};
export const submitCourseReview = async ({
  rating,
  review,
  token,
  comment_post_ID,
}: {
  rating: number;
  review: string;
  token: string;
  comment_post_ID: number;
}) => {
  try {
    const response = await apiFetch({
      path: `${API_PATH.wplms_root}/updatecourse/addreview`,
      method: "POST",
      data: {
        token,
        comment_post_ID,
        rating,
        review,
        title: "Course Review",
        course_id: comment_post_ID,
      },
    });
    return response;
  } catch (err) {
    console.error("Failed to submit review");
  }
};

export const getUserInfo = async (token: string) => {
  try {
    const response = await apiFetch({
      path: `${API_PATH.wplms_root}/user/`,
      method: "POST",
      data: { token },
    });
    return response;
  } catch (err) {
    console.error("Failed to fetch user info");
  }
};

export const markUnitComplete = async ({
  courseId,
  unitId,
  token,
  progress,
}: {
  courseId: number;
  unitId: number;
  token: string;
  progress: number;
}) => {
  try {
    const response = await apiFetch({
      method: "POST",
      path: `${API_PATH.wplms_root}/user/coursestatus/${courseId}/item/${unitId}/markcomplete`,
      data: {
        token: token,
        course_id: courseId,
        item_id: unitId,
        progress: progress,
      },
    });
    return response;
  } catch (err) {
    console.error("Failed to mark unit complete");
  }
};

export const getCourseProgress = async ({
  courseId,
  token,
}: {
  courseId: number;
  token: string;
}) => {
  try {
    const response = await apiFetch({
      method: "POST",
      path: `${API_PATH.course_player_root}${API_PATH.course_progress}`,
      data: {
        course_id: courseId,
        token: token,
      },
    });
    return response;
  } catch (err) {
    console.error("Failed to get course progress");
  }
};

// finish course
export const finishCourse = async ({
  courseId,
  token,
}: {
  courseId: number;
  token: string;
}) => {
  try {
    const response = await apiFetch({
      method: "POST",
      path: `${API_PATH.wplms_root}/user/finishcourse`,
      data: { course_id: courseId, token },
    });
    return response;
  } catch (err) {
    console.error("Failed to finish course");
  }
};

// get course reviews
export const getCourseReviews = async <P = ICourseReview[]>({
  courseId,
  token,
}: {
  courseId: number;
  token: string;
}) => {
  try {
    const response = await apiFetch({
      method: "POST",
      path: `${API_PATH.course_player_root}${API_PATH.get_reviews}/${courseId}`,
      data: { token },
    });
    return response;
  } catch (err) {
    console.error("Failed to get course reviews");
  }
};

// get quiz data
export const getQuizData = async ({
  course,
  token,
  quizId,
}: {
  course: number;
  token: string;
  quizId: number;
}): Promise<IQuiz> => {
  try {
    const response = await apiFetch<IQuiz>({
      method: "POST",
      path: `${API_PATH.wplms_root}/user/quiz/${quizId}`,
      data: { course, token },
    });
    return response;
  } catch (error) {
    console.error("Failed to get quiz data");
    throw error;
  }
};

// Start quiz
export const startQuiz = async ({
  courseId,
  quizId,
  token,
}: {
  courseId: number;
  quizId: number;
  token: string;
}) => {
  try {
    const response = await apiFetch({
      path: `${API_PATH.wplms_root}/user/quiz/start`,
      method: "POST",
      data: {
        quiz_id: quizId,
        course: courseId,
        token,
      },
    });
    return response;
  } catch (error) {
    console.error("Failed to start quiz");
    throw error;
  }
};

export const submitQuiz = async ({
  courseId,
  quizData,
  answers,
  token,
}: {
  courseId: number;
  quizData: any;
  answers: Record<string, number>;
  token: string;
}) => {
  try {
    // Format questions with answers
    const questionsWithAnswers = quizData.meta.questions.map(
      (question: QuizQuestion) => ({
        ...question,
        attempted: answers[question.key] !== undefined,
        marked_answer: answers[question.key]?.toString(),
        marked: question.options[answers[question.key]] || "",
      })
    );

    const payload: QuizSubmissionPayload = {
      quiz_id: quizData.id,
      course_id: courseId,
      quiz: {
        ...quizData,
        meta: {
          ...quizData.meta,
          questions: questionsWithAnswers,
        },
      },
      results: questionsWithAnswers,
      token,
    };

    const response = await apiFetch({
      path: `${API_PATH.course_player_root}/quiz-submit`,
      method: "POST",
      data: payload,
    });

    return response;
  } catch (error) {
    console.error("Failed to submit quiz", error);
    throw error;
  }
};
// get quiz retake
export const quizRetake = async ({
  courseId,
  quizId,
  token,
}: {
  courseId: number;
  quizId: number;
  token: string;
}) => {
  try {
    const response = await apiFetch({
      path: `${API_PATH.wplms_root}/user/coursestatus/retake_single_quiz/${quizId}`,
      method: "POST",
      data: { course: courseId, token },
    });
    return response;
  } catch (error) {
    console.error("Failed to get quiz retake");
    throw error;
  }
};
