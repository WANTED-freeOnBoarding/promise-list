import axios from "axios";

const BASE_URL = `https://rockpell-todo-list.herokuapp.com/`;

export const getTodos = async () => {
  try {
    const response = await axios.get(BASE_URL + `todo`);
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const createTodo = async (inputValue: string) => {
  try {
    const response = await axios.post(BASE_URL + `todo`, {
      content: inputValue,
    });
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const updateTodo = async (
  id: number,
  isCheck?: boolean,
  content?: string
) => {
  try {
    if (content) {
      const response = await axios.post(BASE_URL + `todo/${id}`, content);
      return response;
    } else {
      const response = await axios.post(BASE_URL + `todo/${id}`, isCheck);
      return response;
    }
  } catch (e) {
    console.log(e);
  }
};

export const deleteTodo = async (id: number) => {
  try {
    const response = await axios.post(BASE_URL + `todo/${id}`);
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
};