import React, { useEffect } from "react";
import ToDoLists from "./ToDoLists";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";
import { getTodos } from "store/todos/actions";
import { RootState } from "store";
import { ITodo } from "store/todos";

const ToDoContainer = () => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.todos
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <>
      {data?.map((item: ITodo) => (
        <ToDoItem key={item.id} todo={item} />
      ))}
      <ToDoLists />
      <Input />
    </>
  );
};

export default ToDoContainer;
