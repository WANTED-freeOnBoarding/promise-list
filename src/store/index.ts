import { all } from "@redux-saga/core/effects";
import { combineReducers } from "redux";
import reducer from "./todos/reducers";
import { todosSaga } from "./todos/saga";

const rootReducer = reducer;

export function* rootSaga() {
  yield all([todosSaga()]);
}

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
