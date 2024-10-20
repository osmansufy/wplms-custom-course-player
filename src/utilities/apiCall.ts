import { courseStatus } from "./../../../student-dashboard/student-dashboard-react/src/utils/courseStatus";
import apiFetch from "@wordpress/api-fetch";
import { ICourse, IUnitItem } from "../types/course";
import { useSelect } from "@wordpress/data";

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
