import { call, put, takeEvery } from "redux-saga/effects";
import * as api from "api/apiTodos";

import * as type from "./types";

export interface ITodo {
  id: number;
  content: string;
  isCheck: boolean;
  createAt: Date;
  updateAt: Date;
}

export const getPromiseSaga = (type: string, promiseCreator: any) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `ERROR`];
  return function* saga(action: any) {
    try {
      // 재사용성을 위하여 promiseCreator 의 파라미터엔 action.payload 값을 넣도록 설정합니다.
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
      // 재사용성을 위하여 promiseCreator 의 파라미터엔 action.payload 값을 넣도록 설정합니다.
      const payload: ITodo[] = yield call(promiseCreator, action.payload);
      yield put({ type: SUCCESS, payload });
    } catch (e) {
      yield put({ type: ERROR, error: true, payload: e });
    }
  };
};

export const deletePromiseSaga = (promiseCreator: any) => {
  const [SUCCESS, ERROR] = [`DELETE_SUCCESS`, `DELETE_ERROR`];
  return function* saga(action: any) {
    try {
      // 재사용성을 위하여 promiseCreator 의 파라미터엔 action.payload 값을 넣도록 설정합니다.
      const payload: ITodo = yield call(promiseCreator, action.payload);
      yield put({ type: SUCCESS, payload });
    } catch (e) {
      yield put({ type: ERROR, error: true, payload: e });
    }
  };
};

const getTodoSaga = getPromiseSaga(type.GET_TODO, api.getTodosAPI);
const createTodoSaga = createPromiseSaga(type.CREATE_TODO, api.createTodoAPI);
const updateTodoSaga = createPromiseSaga(type.UPDATE_TODO, api.updateTodoAPI);
const deleteTodoSaga = deletePromiseSaga(api.deleteTodoAPI);

export function* todosSaga() {
  yield takeEvery(type.GET_TODO, getTodoSaga);
  yield takeEvery(type.CREATE_TODO, createTodoSaga);
  yield takeEvery(type.UPDATE_TODO, updateTodoSaga);
  yield takeEvery(type.DELETE_TODO, deleteTodoSaga);
}
