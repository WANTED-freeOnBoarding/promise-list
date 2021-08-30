import React from "react";
import Container from "./Container";
import ToDoLists from "./ToDoLists";
import Input from "./Input";

const ToDoContainer = () => {
  return (
    <>
      <ToDoLists />
      <Input />
    </>
  );
};

export default ToDoContainer;
