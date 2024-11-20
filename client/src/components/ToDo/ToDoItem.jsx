import React from "react";

const ToDoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div
      className={`bg-white p-4 shadow rounded-md mb-3 ${
        todo.done ? "opacity-70" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => toggleComplete(todo._id)}
            className="mr-4"
          />
          <span
            className={`text-lg ${
              todo.done ? "line-through text-gray-500" : "text-gray-800"
            }`}
          >
            {todo.title}
          </span>
        </div>
        <button
          onClick={() => deleteTodo(todo._id)}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>

      {todo.description && (
        <p className="text-gray-600 mt-2 text-sm">{todo.description}</p>
      )}
    </div>
  );
};

export default ToDoItem;
