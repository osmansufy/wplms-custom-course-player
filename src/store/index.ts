import { createReduxStore, register } from "@wordpress/data";
import { actions } from "./actions";
import { reducer } from "./reducer";
import { selectors } from "./selectors";
import apiFetch from "@wordpress/api-fetch";
const controls = {
  FETCH_COURSE_INFO(action: { courseId: number }) {
    return apiFetch({ path: `/wp/v2/course/${action.courseId}` });
  },
};

const resolvers = {
  *getCourseInfo(courseId: number): Generator<any, void, any> {
    try {
      yield actions.setIsLoading(true);
      // get from query params course_id=55978

      const course_query = new URLSearchParams(window.location.search);
      const course_id = course_query.get("course_id");
      const courseInfo = yield actions.fetchCourseInfo(
        parseInt(course_id || "")
      );
      yield actions.setCourseInfo(courseInfo);
      yield actions.setIsLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        yield actions.setError(error.message);
      } else {
        yield actions.setError(String(error));
      }
      yield actions.setIsLoading(false);
    }
  },
};
const coursePlayerStore = createReduxStore("custom-course-player", {
  reducer,
  actions,
  selectors,
  controls,
  resolvers,
});

register(coursePlayerStore);
