// controls.ts
import { fetchCourseData } from "../utilities/apiCall";

const userAuthToken = (window as any).wplmsCustomCoursePlayer.token;

export const controls = {
  async FETCH_COURSE_DATA(action: { courseId: string }) {
    const response = await fetchCourseData({
      courseId: action.courseId,
      token: userAuthToken,
    });
    return response;
  },
};
