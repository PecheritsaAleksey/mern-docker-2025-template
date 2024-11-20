import axios from "./axiosInstance";

const getAllTodos = async () => {
  const response = await axios.get(`/todo`);
  return response.data;
};

const addTodo = async (todo) => {
  const response = await axios.post(`/todo`, todo);
  return response.data;
};

const updateTodo = async (_id, data) => {
  const response = await axios.put(`/todo/${_id}`, data);
  return response.data;
};

const deleteTodo = async (_id) => {
  const response = await axios.delete(`/todo/${_id}`);
  return response.data;
};

export { getAllTodos, addTodo, updateTodo, deleteTodo };
