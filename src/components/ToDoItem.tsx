import React, { useState, useEffect, useRef } from "react";
import { ITodo } from "store/todos";
import { ReactComponent as DeleteSvg } from "assets/svg/delete.svg";
import { useDispatch } from "react-redux";
import { updateTodos, deleteTodos } from "store/todos/actions";

interface ToDoItemProps {
  todo: ITodo;
}

const ToDoItem = (props: ToDoItemProps) => {
  const { todo } = props;
  const dispatch = useDispatch();
  const [isCheck, setIsCheck] = useState(false);
  const [content, setContent] = useState(todo.content);
  const [isEdit, setIsEdit] = useState(false);
  const taskNameRef = useRef(null);

  useEffect(() => {
    const updateTasKName = taskNameRef.current! as HTMLElement;
    if (updateTasKName) updateTasKName.focus();
  }, [isEdit]);

  const onDelete = () => {
    dispatch(deleteTodos(todo.id));
  };
  const onEditFinish = () => {
    setIsEdit(false);
    dispatch(updateTodos(todo.id, undefined, todo.content));
  };

  const onCheck = () => {
    setIsCheck(!isCheck);
    dispatch(updateTodos(todo.id, isCheck));
  };

  const onChange = () => {};

  const onEditStart = () => {
    setIsEdit(true);
  };

  return (
    <div className="todo">
      <input
        type="checkbox"
        className="todo__checkbox"
        onClick={onCheck}
        checked={isCheck}
      />
      <div
        className="todo__title"
        ref={taskNameRef}
        contentEditable={isEdit}
        suppressContentEditableWarning={true}
        onChange={onChange}
      >
        {todo.content}
      </div>
      <div className="todo__date">{todo.updateAt}</div>
      <div className="todo__edit">
        {isEdit ? (
          <button onClick={onEditFinish}>확인</button>
        ) : (
          <DeleteSvg onClick={onEditStart} />
        )}
      </div>
      <div className="todo__delete">
        <DeleteSvg onClick={onDelete} />
      </div>
    </div>
  );
};

export default ToDoItem;
