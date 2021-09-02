export const reducerUtils = {
  // 초기 상태. 초기 data 값은 기본적으로 null 이지만
  // 바꿀 수도 있습니다.
  initial: (initialData = null) => ({
    loading: false,
    data: initialData,
    error: null,
  }),
  // 로딩중 상태. prevState의 경우엔 기본값은 null 이지만
  // 따로 값을 지정하면 null 로 바꾸지 않고 다른 값을 유지시킬 수 있습니다.
  loading: (prevState = null) => ({
    loading: true,
    data: prevState,
    error: null,
  }),
  // 성공 상태
  success: (payload: any) => ({
    loading: false,
    data: payload,
    error: null,
  }),
  // 실패 상태
  error: (error: Error) => ({
    loading: false,
    data: null,
    error: error,
  }),
};

export const getTodoActions = (type: string) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state: any, action: any) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          todos: reducerUtils.loading(state.todos.data),
        };
      case SUCCESS:
        return {
          ...state,
          todos: reducerUtils.success(action.payload),
        };
      case ERROR:
        return {
          ...state,
          todos: reducerUtils.error(action.payload),
        };
      default:
        return state;
    }
  };
};

export const createTodoActions = (type: string) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state: any, action: any) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          todos: reducerUtils.loading(state.todos.data),
        };
      case SUCCESS:
        const newTodos = [action.payload, ...state];
        return {
          ...state,
          todos: reducerUtils.success(newTodos),
        };
      case ERROR:
        return {
          ...state,
          todos: reducerUtils.error(action.payload),
        };
      default:
        return state;
    }
  };
};

export const updateTodoActions = (type: string) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state: any, action: any) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          todos: reducerUtils.loading(state.todos.data),
        };
      case SUCCESS:
        const updateId = state.findIndex(
          (item: any) => item.id === action.payload.id
        );
        const newTodoList = [...state];
        newTodoList.splice(updateId, 1, action.payload);
        return {
          ...state,
          todos: reducerUtils.success(newTodoList),
        };
      case ERROR:
        return {
          ...state,
          todos: reducerUtils.error(action.payload),
        };
      default:
        return state;
    }
  };
};

export const deleteTodoActions = (type: any) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state: any, action: any) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          todos: reducerUtils.loading(state.todos.data),
        };
      case SUCCESS:
        const filteredTodos = state.filter(
          (todo: any) => todo.id !== action.payload.id
        );

        return {
          ...state,
          todos: reducerUtils.success(filteredTodos),
        };
      case ERROR:
        return {
          ...state,
          todos: reducerUtils.error(action.payload),
        };
      default:
        return state;
    }
  };
};
