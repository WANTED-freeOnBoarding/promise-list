import React from "react";

interface ToDoItemProps {
  title: string;
  date: Date;
  isCheck: boolean;
}

const ToDoItem = (props: ToDoItemProps) => {
  return (
    <div className="todo">
      <div className="todo__checkbox">대충 체크박스</div>
      <div className="todo__title">대충 제목</div>
      <div className="todo__date">대충 날짜</div>
      <div className="todo__delete">대충 쓰레기통</div>
    </div>
  );
};

export default ToDoItem;
