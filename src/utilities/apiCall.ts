import { courseStatus } from "./../../../student-dashboard/student-dashboard-react/src/utils/courseStatus";
import apiFetch from "@wordpress/api-fetch";
import { ICourse, IUnitItem } from "../types/course";
import { useSelect } from "@wordpress/data";
const userAuthToken = (window as any).wplmsCustomCoursePlayer.token;
export const fetchCourseData = async ({
  courseId,
  token,
}: {
  courseId: string;
  token: string;
}) => {
  try {
    const data = await apiFetch<ICourse | null>({
      path: `/wplms/v2/user/coursestatus/${courseId}`,
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
      path: `/wplms/v2/user/coursestatus/${courseId}/item/${unitId}`,

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
}) => {
  try {
    const response = await apiFetch({
      path: `/wplms/v2/user/getreview/${courseId}`,
      method: "POST",
      data: { token, course_id: courseId },
    });
    return response;
  } catch (err) {
    console.error("Failed to fetch review status");
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
      path: `/wplms/v2/user/updatecourse/addreview/`,
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
      path: "/wplms/v2/user/",
      method: "POST",
      data: { token },
    });
    return response;
  } catch (err) {
    console.error("Failed to fetch user info");
  }
};
