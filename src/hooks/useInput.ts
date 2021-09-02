import React, { useState } from "react";

export const useInput = (initialValue: string) => {
  const [input, setInput] = useState(initialValue);

  const onChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setInput(value);
  };
  return { input, onChange };
};
