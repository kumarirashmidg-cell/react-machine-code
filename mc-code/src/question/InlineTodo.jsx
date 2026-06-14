import React, { useState } from "react";

const dummyTodos = [
  { id: 1, title: "take morning meal", status: true },
  { id: 2, title: "play cricket at field", status: false },
];

const InlineTodo = () => {
  const [todos, setTodos] = useState(dummyTodos);
  const [newTodo, setNewTodo] = useState("");
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();

    if (!newTodo.trim()) return;

    setTodos((prev) => [
      {
        id: Date.now(),
        title: newTodo,
        status: false,
      },
      ...prev,
    ]);

    setNewTodo("");
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo,
      ),
    );
  };

  const saveEdit = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, title: editValue } : todo,
      ),
    );

    setEditId(null);
    setEditValue("");
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <form onSubmit={addTodoHandler} className="form">
        <input
          className="input"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add todo"
        />
        <button>Add</button>
      </form>

      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <input
            type="checkbox"
            checked={todo.status}
            onChange={() => toggleTodo(todo.id)}
          />

          {editId === todo.id ? (
            <>
              <input
                className="input"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
              <button onClick={() => saveEdit(todo.id)}>Save</button>
              <button onClick={() => setEditId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <p className={todo.status ? "completed" : ""}>{todo.title}</p>

              <div className="action">
                <button
                  onClick={() => {
                    setEditId(todo.id);
                    setEditValue(todo.title);
                  }}
                >
                  Edit
                </button>

                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default InlineTodo;
