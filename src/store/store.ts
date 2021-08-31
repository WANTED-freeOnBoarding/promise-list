import { createStore } from "redux";

const CREATE: string = "CREATE";
const DELETE: string = "DELETE";
const UPDATE: string = "UPDATE";

interface ITodo {
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

const deleteTodo = (todo: ITodo) => {
  return {
    type: DELETE,
    todo,
  };
};

const updateTodo = (todo: ITodo) => {
  return {
    type: UPDATE,
    todo,
  };
};

export const actionCreators = {
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
      return state; // @TODO
    case DELETE:
      const filteredTodos: ITodo[] = state.filter((todo) => todo.id !== id);
      return filteredTodos;
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
