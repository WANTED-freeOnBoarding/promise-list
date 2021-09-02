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

const getTodoSaga = getPromiseSaga(type.GET_TODO, api.getTodosAPI);
const createTodoSaga = createPromiseSaga(type.CREATE_TODO, api.createTodoAPI);
const updateTodoSaga = updatePromiseSaga(type.UPDATE_TODO, api.updateTodoAPI);
const deleteTodoSaga = deletePromiseSaga(type.DELETE_TODO, api.deleteTodoAPI);

export function* todosSaga() {
  yield takeEvery(type.GET_TODO, getTodoSaga);
  yield takeEvery(type.CREATE_TODO, createTodoSaga);
  yield takeEvery(type.UPDATE_TODO, updateTodoSaga);
  yield takeEvery(type.DELETE_TODO, deleteTodoSaga);
}
