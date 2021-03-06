import * as type from "./types";

/* action creators */

export const getTodos = () => ({ type: type.GET_TODO });

export const createTodos = (content: string) => ({
  type: type.CREATE_TODO,
  payload: content,
});

export const updateTodos = (
  id: number,
  isCheck?: boolean,
  content?: string
) => ({ type: type.UPDATE_TODO, payload: { id, isCheck, content } });

export const deleteTodos = (id: number) => ({
  type: type.DELETE_TODO,
  payload: id,
});
