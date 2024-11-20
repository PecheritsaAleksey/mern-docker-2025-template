// src/components/ToDoList.jsx
import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <div>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <ToDoItem
            key={todo._id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))
      ) : (
        <p className="text-gray-600 text-center mt-4">
          No tasks yet. Add some!
        </p>
      )}
    </div>
  );
};

export default ToDoList;
