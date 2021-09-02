import React, { useEffect } from "react";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";
import { getTodos } from "store/todos/actions";
import { RootState } from "store";
import { ITodo } from "store/todos";

/* Todo list를 rendering하고, 입력을 받는 container */

const ToDoContainer = () => {
  const { data, error } = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  /* error에 의존성을 줘야 무한렌더링이 되지 않으면서 필요할 때 렌더링 됨. 다른 방법 고민중 */
  useEffect(() => {
    dispatch(getTodos());
  }, [error]);

  return (
    <>
      <div className="todo__container">
        <div className="todo__lists">
          {data &&
            data.data &&
            data.data.todoList &&
            data.data.todoList.map((item: ITodo) => (
              <ToDoItem key={item.id} todo={item} />
            ))}
        </div>
        <Input />
      </div>
    </>
  );
};

export default ToDoContainer;
