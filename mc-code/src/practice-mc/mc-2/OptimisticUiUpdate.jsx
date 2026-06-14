// Optimistic UI Update means the UI updates immediately before the server confirms the action.
// If the API fails → we rollback (revert) the UI.

import React, { useState } from "react";

const OptimisticUI = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Practice Coding" }
  ]);

  const [input, setInput] = useState("");

  const addTodo = async () => {
    if (!input.trim()) return;

    const tempTodo = {
      id: Date.now(),
      text: input
    };

    // Optimistic update
    setTodos((prev) => [tempTodo, ...prev]);
    setInput("");

    try {
      // Fake API request
      await new Promise((resolve, reject) =>
        setTimeout(() => resolve(), 2000)
      );
    } catch (error) {
      // rollback if API fails
      setTodos((prev) => prev.filter((todo) => todo.id !== tempTodo.id));
    }
  };

  return (
    <div className="container">
      <h2>Optimistic UI Example</h2>

      <div className="form">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add Todo"
        />

        <button onClick={addTodo}>Add</button>
      </div>

      <ul className="list">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default OptimisticUI;

// -----------------
.container {
  width: 400px;
  margin: 40px auto;
  font-family: Arial;
}

.form {
  display: flex;
  gap: 5px;
  margin-bottom: 10px;
}

.form input {
  flex: 1;
  padding: 6px;
  border: 1px solid #ccc;
}

.form button {
  padding: 6px 10px;
  cursor: pointer;
}

.list {
  list-style: none;
  padding: 0;
}

.list li {
  padding: 6px;
  border: 1px solid #ddd;
  margin-bottom: 5px;
}