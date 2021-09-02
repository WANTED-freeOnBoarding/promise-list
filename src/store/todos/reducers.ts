import { ITodo } from "store/todos/saga";
import * as type from "./types";

interface Istate {
  todos: {
    data: ITodo[];
    error: boolean | null;
  };
}

const initialState = {
  todos: {
    data: [
      {
        id: 0,
        content: "할 일을 입력하세요",
        is_check: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    error: null,
  },
};

/* reducers */

export default function reducer(state: Istate = initialState, action: any) {
  const prevState: ITodo[] = state.todos.data!;

  switch (action.type) {
    case type.GET_TODO_SUCCESS:
      return {
        ...state,
        todos: {
          data: action.payload || [],
          error: null,
        },
      };

    case type.CREATE_TODO_SUCCESS:
      const newTodos = [action.payload, ...prevState];
      return {
        ...state,
        todos: {
          data: newTodos || [],
          error: null,
        },
      };

    case type.UPDATE_TODO_SUCCESS:
      const updateId = prevState.findIndex(
        (item: ITodo) => item.id === action.payload.id
      );
      const newTodoList = [...prevState];
      newTodoList.splice(updateId, 1, action.payload);
      return {
        ...state,
        todos: {
          data: newTodoList || [],
          error: null,
        },
      };

    case type.DELETE_TODO_SUCCESS:
      const filteredTodos = prevState.filter(
        (todo: ITodo) => todo.id !== action.payload.id
      );
      return {
        ...state,
        todos: {
          data: filteredTodos || [],
          error: null,
        },
      };

    case type.ERROR:
      return {
        ...state,
        todos: {
          data: [],
          error: true,
        },
      };

    default:
      return {
        ...state,
        todos: {
          data: prevState || [],
          error: null,
        },
      };
  }
}
