import React, { useState } from "react";
import { useInput } from "hooks/useInput";

const Input = () => {
  //  const todo = useInput("");
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue !== "") {
      console.log(inputValue);
      setInputValue("");
      // @TODO : Create
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
