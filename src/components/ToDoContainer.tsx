import React from "react";
import Container from "./Container";
import ToDoLists from "./ToDoLists";
import Input from "./Input";
import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";
import { ITodo } from "store/store";

const ToDoContainer = () => {
  const todos = useSelector((state: ITodo[]) => state);
  console.log(todos);
  console.log(typeof todos);

  return (
    <>
      {todos.map((item: ITodo) => (
        <ToDoItem key={item.id} todo={item} />
      ))}
      <ToDoLists />
      <Input />
    </>
  );
};

export default ToDoContainer;
