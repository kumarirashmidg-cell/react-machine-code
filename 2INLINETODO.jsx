import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "wake up morning", status: true },
    { id: 2, title: "take bath", status: false },
  ]);

  const [input, setInput] = useState("");
  const [editInput, setEditInput] = useState("");
  const [editId, setEditId] = useState(null);

  // Add Todo
  const addTodoHandler = () => {
    if (!input.trim()) return;

    setTodos((prev) => [
      {
        id: Date.now(),
        title: input.trim(),
        status: false,
      },
      ...prev,
    ]);

    setInput("");
  };

  // Delete Todo
  const deleteHandler = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));

    if (editId === id) {
      setEditId(null);
      setEditInput("");
    }
  };

  // Enable Inline Edit
  const updateHandler = (todo) => {
    setEditId(todo.id);
    setEditInput(todo.title);
  };

  // Save Updated Todo
  const saveTodoHandler = () => {
    if (!editInput.trim()) return;

    setTodos((prev) =>
      prev.map((item) =>
        item.id === editId ? { ...item, title: editInput.trim() } : item
      )
    );

    setEditId(null);
    setEditInput("");
  };

  // Toggle Todo Status
  const toggleStatus = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };

  // Cancel Editing
  const cancelEdit = () => {
    setEditId(null);
    setEditInput("");
  };

  return (
    <div>
      <h3>TODO LIST</h3>

      {/* Add Todo */}
      {editId === null && (
        <div className="todo-input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add Todo..."
          />

          <button onClick={addTodoHandler}>Add Todo</button>
        </div>
      )}

      {/* Todo List */}
      <div className="todos">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-list">
            {editId === todo.id ? (
              <input
                value={editInput}
                onChange={(e) => setEditInput(e.target.value)}
                autoFocus
              />
            ) : (
              <p
                style={{
                  textDecoration: todo.status ? "line-through" : "none",
                }}
              >
                {todo.title}
              </p>
            )}

            <div>
              {editId === todo.id ? (
                <>
                  <button onClick={saveTodoHandler}>Save</button>

                  <button onClick={cancelEdit}>Cancel</button>
                </>
              ) : (
                <>
                  <button onClick={() => updateHandler(todo)}>Update</button>

                  <button onClick={() => toggleStatus(todo.id)}>
                    {todo.status ? "Undo" : "Complete"}
                  </button>

                  <button onClick={() => deleteHandler(todo.id)}>Delete</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 30px;
}

#root {
  max-width: 600px;
  margin: auto;
}

.todo-input {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

input:focus {
  border-color: #2563eb;
}

button {
  padding: 9px 12px;
  border: none;
  border-radius: 5px;
  background: #2563eb;
  color: white;
  cursor: pointer;
  margin: 3px;
}

.todo-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  background: white;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 6px;
  box-shadow: 0 1px 4px #ddd;
}

.todo-list div {
  display: flex;
  flex-wrap: wrap;
}

