import * as type from "./types";
import * as handler from "./handlers";
import { reducerUtils } from "store/todos/handlers";

const initialState = {
  todos: reducerUtils.initial(),
};

export default function handleTodos(state = initialState, action: any) {
  switch (action.type) {
    case type.GET_TODO:
    case type.GET_TODO_SUCCESS:
    case type.GET_TODO_ERROR:
      return handler.getTodoActions(type.GET_TODO)(state, action);
    case type.CREATE_TODO:
    case type.CREATE_TODO_SUCCESS:
    case type.CREATE_TODO_ERROR:
      return handler.createTodoActions(type.CREATE_TODO)(state, action);
    case type.UPDATE_TODO:
    case type.UPDATE_TODO_SUCCESS:
    case type.UPDATE_TODO_ERROR:
      return handler.updateTodoActions(type.UPDATE_TODO)(state, action);
    case type.DELETE_TODO:
    case type.DELETE_TODO_SUCCESS:
    case type.DELETE_TODO_ERROR:
      return handler.deleteTodoActions(type.CREATE_TODO)(state, action);
    default:
      return state;
  }
}
