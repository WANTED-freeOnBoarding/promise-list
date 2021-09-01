import * as type from "./types";

export const getTodos = () => ({ type: type.GET_TODO });

export const createTodos = () => ({ type: type.CREATE_TODO });

export const updateTodos = (
  id: number,
  isCheck?: boolean,
  content?: string
) => ({ type: type.UPDATE_TODO, payload: id });

export const deleteTodos = (id: number) => ({
  type: type.DELETE_TODO,
  payload: id,
});
