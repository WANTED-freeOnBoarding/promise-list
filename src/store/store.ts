import { createStore } from "redux";

const CREATE: string = "todos/CREATE";
const DELETE: string = "todos/DELETE";
const UPDATE: string = "todos/UPDATE";

let nextId = 1;

export interface ITodo {
  id: number;
  content: string;
  isCheck: boolean;
  createAt: Date;
  updateAt: Date;
}

interface Iaction {
  type: string;
  todo: ITodo;
}

const createTodo = (todo: ITodo) => {
  return {
    type: CREATE,
    todo,
  };
};

const updateTodo = (todo: ITodo) => {
  return {
    type: UPDATE,
    todo,
  };
};

const deleteTodo = (todo: ITodo) => {
  return {
    type: DELETE,
    todo,
  };
};

export const actions = {
  createTodo,
  deleteTodo,
  updateTodo,
};

const reducer = (state: ITodo[] = [], action: Iaction) => {
  switch (action.type) {
    case CREATE:
      const { id, content, isCheck, createAt, updateAt } = action.todo;
      const newTodo: ITodo = {
        id,
        content,
        isCheck,
        createAt,
        updateAt,
      };
      const newTodos: ITodo[] = [newTodo, ...state];
      return newTodos;
    case UPDATE:
      const updateId = state.findIndex((item) => item.id === id);
      const newTodoList = [...state];
      newTodoList.splice(updateId, 1, action.todo);
      return newTodoList;
    case DELETE:
      const filteredTodos: ITodo[] = state.filter((todo) => todo.id !== id);
      return filteredTodos;
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
