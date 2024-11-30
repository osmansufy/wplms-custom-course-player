// index.ts
import {
  createReduxStore,
  register,
  useDispatch,
  useSelect,
} from "@wordpress/data";
import { actions } from "./actions";
import { reducer } from "./reducer";
import { SelectorReturnTypes, selectors } from "./selectors";
import resolvers from "./resolvers";

const coursePlayerStore = createReduxStore("custom-course-player", {
  reducer,
  actions,
  selectors,
  resolvers,
});

register(coursePlayerStore);

export default coursePlayerStore;

export function useTypedSelect<T>(
  selector: (select: SelectorReturnTypes) => T,
  deps: any[] = []
): T {
  return useSelect((select) => selector(select(coursePlayerStore.name)), deps);
}

export function useTypedDispatch<T>(
  action: (dispatch: typeof actions) => T
): T {
  return useDispatch(coursePlayerStore.name)(action);
}
