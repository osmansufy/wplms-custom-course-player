// index.ts
import { createReduxStore, register } from "@wordpress/data";
import { actions } from "./actions";
import { reducer } from "./reducer";
import { selectors } from "./selectors";
import { controls } from "./controls";

const resolvers = {
  *getCourseData(courseId: string) {
    yield actions.fetchCourseData(courseId);
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
