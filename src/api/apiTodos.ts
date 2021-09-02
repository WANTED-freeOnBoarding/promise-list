import axios from "axios";

const BASE_URL = `https://rockpell-todo-list.herokuapp.com/`;

/* api에 요청을 보내는 함수들입니다 */

export const getTodosAPI = async () => {
  try {
    const response = await axios.get(BASE_URL + `todo`);
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const createTodoAPI = async (inputValue: string) => {
  try {
    const response = await axios.post(BASE_URL + `todo`, {
      content: inputValue,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
};

interface updateProps {
  id: number;
  isCheck?: boolean;
  content?: string;
}

export const updateTodoAPI = async (props: updateProps) => {
  const { id, isCheck, content } = props;
  try {
    if (content) {
      const response = await axios.post(BASE_URL + `todo/${id}`, {
        content: content,
      });

      return response;
    } else {
      const response = await axios.post(BASE_URL + `todo/${id}`, {
        isCheck: isCheck,
      });

      return response;
    }
  } catch (e) {
    console.log(e);
  }
};

export const deleteTodoAPI = async (id: number) => {
  try {
    const response = await axios.delete(BASE_URL + `todo/${id}`);
    return response;
  } catch (e) {
    console.log(e);
  }
};
