import React, { useEffect, useState } from "react";
import ToDoList from "../components/ToDo/ToDoList";
import {
  getAllTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from "../services/todoService";

const ToDoPage = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getAllTodos();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  const addNewTodo = async () => {
    if (title.trim() === "") return; // Не добавляем задачу без заголовка
    const newToDo = await addTodo({ title, description });
    setTodos([...todos, newToDo]);
    setTitle(""); // Очистить поле заголовка
    setDescription(""); // Очистить поле описания
  };

  const toggleComplete = async (_id) => {
    const updatedToDo = await updateTodo(_id, {
      done: !todos.find((todo) => todo._id === _id).done,
    });
    setTodos(todos.map((todo) => (todo._id === _id ? updatedToDo : todo)));
  };

  const handleDeleteTodo = async (_id) => {
    await deleteTodo(_id);
    setTodos(todos.filter((todo) => todo._id !== _id));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Your ToDo List</h2>
      <div className="mb-6 space-y-2">
        {/* Поле для заголовка */}
        <input
          type="text"
          placeholder="Task title"
          className="w-full p-3 rounded-md shadow"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* Поле для описания */}
        <textarea
          placeholder="Task description (optional)"
          className="w-full p-3 rounded-md shadow"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        {/* Кнопка добавления задачи */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600"
          onClick={addNewTodo}
        >
          Add Task
        </button>
      </div>
      {/* Список задач */}
      <ToDoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={handleDeleteTodo}
      />
    </div>
  );
};

export default ToDoPage;
