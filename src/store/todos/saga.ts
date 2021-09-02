import { call, put, takeEvery } from "redux-saga/effects";
import * as api from "api/apiTodos";

import * as type from "./types";

export interface ITodo {
  id: number;
  content: string;
  is_check: boolean;
  created_at: Date;
  updated_at: Date;
}

/* action creator에 의해 실행되는 고차함수 saga */
/* put으로 action을 또 한 번 실행시켜서 api를 호출하는 saga creator. */
/* 이렇게까지 많이 안 거쳐도 될 것 같다. */

export const getPromiseSaga = (type: string, promiseCreator: any) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `ERROR`];
  return function* saga(action: any) {
    try {
      const payload: ITodo[] = yield call(promiseCreator, action.payload);
      yield put({ type: SUCCESS, payload });
    } catch (e) {
      yield put({ type: ERROR, error: true, payload: e });
    }
  };
};

export const createPromiseSaga = (type: string, promiseCreator: any) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `ERROR`];
  return function* saga(action: any) {
    try {
      const payload: object = yield call(promiseCreator, action.payload);
      yield put({ type: SUCCESS, payload });
    } catch (e) {
      yield put({ type: ERROR, error: true, payload: e });
    }
  };
};

export const updatePromiseSaga = (type: string, promiseCreator: any) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `ERROR`];
  return function* saga(action: any) {
    try {
      const payload: object = yield call(promiseCreator, action.payload);
      yield put({ type: SUCCESS, payload });
    } catch (e) {
      yield put({ type: ERROR, error: true, payload: e });
    }
  };
};

export const deletePromiseSaga = (type: string, promiseCreator: any) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `ERROR`];

  return function* saga(action: any) {
    try {
      const payload: ITodo = yield call(promiseCreator, action.payload);
      yield put({ type: SUCCESS, payload });
    } catch (e) {
      yield put({ type: ERROR, error: true, payload: e });
    }
  };
};

/* 기능 별 saga를 만드는 과정 */

const getTodoSaga = getPromiseSaga(type.GET_TODO, api.getTodosAPI);
const createTodoSaga = createPromiseSaga(type.CREATE_TODO, api.createTodoAPI);
const updateTodoSaga = updatePromiseSaga(type.UPDATE_TODO, api.updateTodoAPI);
const deleteTodoSaga = deletePromiseSaga(type.DELETE_TODO, api.deleteTodoAPI);

/* saga가 이 곳에 모인다 */

export function* todosSaga() {
  yield takeEvery(type.GET_TODO, getTodoSaga);
  yield takeEvery(type.CREATE_TODO, createTodoSaga);
  yield takeEvery(type.UPDATE_TODO, updateTodoSaga);
  yield takeEvery(type.DELETE_TODO, deleteTodoSaga);
}
