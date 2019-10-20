import { combineReducers } from "redux";
import countStore from "./count";

const rootReducer = combineReducers({
  countStore
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
