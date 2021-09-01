import React, { useState } from "react";
import { useInput } from "hooks/useInput";
import { useDispatch } from "react-redux";
import { actions } from "store/store";

const Input = () => {
  //  const todo = useInput("");
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue !== "") {
      console.log(inputValue);
      setInputValue("");
      // @TODO : api request
      const todo = {
        id: 1, //
        content: inputValue,
        isCheck: false,
        createAt: new Date(), //
        updateAt: new Date(), //
      };
      dispatch(actions.createTodo(todo));
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
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
