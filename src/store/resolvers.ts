import apiFetch from "@wordpress/api-fetch";
import { actions } from "./actions";
import { ICourse } from "../types/course";
import { fetchCourseData, getUserInfo } from "../utilities/apiCall";

const resolvers = {
  async getCourseInfo(courseId: string) {
    try {
      actions.setLoading(true);
      const token = (window as any).wplmsCustomCoursePlayer.token;
      const response = await fetchCourseData({ courseId, token });
      actions.setError("");
      return actions.setCourseInfo(response);
    } catch (error) {
      return actions.setError(
        error instanceof Error ? error.message : String(error)
      );
    }
  },

  async getCourseReview(courseId: number) {
    try {
      const token = (window as any).wplmsCustomCoursePlayer.token;
      const response = await apiFetch<any>({
        path: `/wplms/v2/user/getreview/${courseId}`,
        method: "POST",
        data: { token, course_id: courseId },
      });
      console.log({ response });

      return actions.setCourseReview(response);
    } catch (error) {
      return actions.setCourseReviewError(
        error instanceof Error ? error.message : String(error)
      );
    }
  },

  async getUserInfo() {
    try {
      const token = (window as any).wplmsCustomCoursePlayer.token;
      const response = await getUserInfo(token);
      return actions.setUserInfo(response);
    } catch (error) {
      return actions.setError(
        error instanceof Error ? error.message : String(error)
      );
    }
  },
};

export default resolvers;
