import React, { useEffect } from "react";
import ToDoLists from "./ToDoLists";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";
import { getTodos } from "store/todos/actions";
import { RootState } from "store";
import { ITodo } from "store/todos";

const ToDoContainer = () => {
  const { data, error } = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
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
        <ToDoLists />
        <Input />
      </div>
    </>
  );
};

export default ToDoContainer;
