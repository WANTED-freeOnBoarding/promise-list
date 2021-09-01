import React from "react";
import { ITodo } from "store/store";
import { ReactComponent as DeleteSvg } from "assets/svg/delete.svg";

interface ToDoItemProps {
  todo: ITodo;
}

const ToDoItem = (props: ToDoItemProps) => {
  const { todo } = props;
  return (
    <div className="todo">
      <div className="todo__checkbox">대충 체크박스</div>
      <div className="todo__title">{todo.content}</div>
      <div className="todo__date">{todo.createAt}</div>
      <div className="todo__delete">
        <DeleteSvg />
      </div>
    </div>
  );
};

export default ToDoItem;
