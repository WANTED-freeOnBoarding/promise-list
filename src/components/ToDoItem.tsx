import React, { useState, useEffect, useRef } from "react";
import { ITodo } from "store/todos";
import { ReactComponent as DeleteSvg } from "assets/svg/delete.svg";
import { ReactComponent as EditSvg } from "assets/svg/edit.svg";

import { useDispatch } from "react-redux";
import { updateTodos, deleteTodos } from "store/todos/actions";
import "./ToDoItem.css";
interface ToDoItemProps {
  todo: ITodo;
}

/* todo list 각각의 아이템 */

const ToDoItem = (props: ToDoItemProps) => {
  const { todo } = props;
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const taskNameRef = useRef(null);

  useEffect(() => {
    const updateTasKName = taskNameRef.current! as HTMLElement;
    if (updateTasKName) updateTasKName.focus();
  }, [isEdit, dispatch]);

  const onDelete = () => {
    dispatch(deleteTodos(todo.id));
  };
  const onEditFinish = (e: any) => {
    e.preventDefault();
    const updateTasKName = taskNameRef.current! as HTMLElement;
    const updateText = updateTasKName.innerText;
    setIsEdit(false);
    dispatch(updateTodos(todo.id, undefined, updateText));
  };

  const onCheck = () => {
    dispatch(updateTodos(todo.id, !!!todo.is_check));
  };

  const onEditStart = () => {
    setIsEdit(true);
  };

  return (
    <div className="todo">
      <button className="todo__checkbox" onClick={onCheck}>
        {todo.is_check ? "✘" : ""}
      </button>
      <div
        className="todo__title"
        ref={taskNameRef}
        contentEditable={isEdit}
        suppressContentEditableWarning={true}
      >
        {todo.content}
      </div>
      <div className="todo__date">{todo.updated_at}</div>
      <button className="todo__delete">
        {isEdit ? (
          <button onClick={(e) => onEditFinish(e)}>OK</button>
        ) : (
          <EditSvg onClick={onEditStart} />
        )}
        <DeleteSvg onClick={onDelete} />
      </button>
    </div>
  );
};

export default ToDoItem;
