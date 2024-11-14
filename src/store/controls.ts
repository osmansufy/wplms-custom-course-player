// controls.ts
import { fetchCourseData, getUserInfo } from "../utilities/apiCall";

const userAuthToken = (window as any).wplmsCustomCoursePlayer.token;

export const controls = {
  async FETCH_COURSE_DATA(action: { courseId: string }) {
    const response = await fetchCourseData({
      courseId: action.courseId,
      token: userAuthToken,
    });
    return response;
  },

  async FETCH_USER_INFO() {
    try {
      const response = await getUserInfo(userAuthToken);
      return response;
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  },
};
