import apiFetch from "@wordpress/api-fetch";
import { IComment, ICourseReview } from "../types/comment";
import { ICourse, IUnitItem } from "../types/course";
import { API_PATH } from "./const";
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
