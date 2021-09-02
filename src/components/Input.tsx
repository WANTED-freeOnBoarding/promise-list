import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodos } from "store/todos/actions";

const Input = () => {
  //  const todo = useInput("");
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue !== "") {
      console.log(inputValue);
      dispatch(createTodos(inputValue));
      setInputValue("");
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <>
      <form className="form__todo" onSubmit={onSubmit}>
        <input
          className="input__todo"
          type="text"
          placeholder="할 일을 적어주세요"
          name="todo"
          value={inputValue}
          onChange={onChange}
        />
        <button>+</button>
      </form>
    </>
  );
};

export default Input;
