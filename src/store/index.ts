import { all } from "@redux-saga/core/effects";
import { combineReducers } from "redux";
import todos from "./todos";
import { todosSaga } from "./todos/saga";

const rootReducer = combineReducers({ todos });

export function* rootSaga() {
  yield all([todosSaga()]);
}

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
