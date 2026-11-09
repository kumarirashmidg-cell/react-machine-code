import React, { useState } from "react";

const dummyTodos = [
  { id: 1, title: "take morning meal", status: true },
  { id: 2, title: "play cricket at field", status: false },
];

const TodoList = () => {
  const [todos, setTodos] = useState(dummyTodos);
  const [inputValue, setInputValue] = useState("");
  const [editId, setEditId] = useState(null);

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      alert("please add todo");
      return;
    }
    if (editId) {
      const updatedTodos = todos.map((todo) =>
        todo.id === editId ? { ...todo, title: inputValue } : todo
      );
      setTodos(updatedTodos);
      setInputValue("");
      setEditId(null);
      return;
    }
    const newTodo = {
      id: Date.now(),
      title: inputValue,
      status: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
    setInputValue("");
  };

  const checkHandler = (id) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, status: !todo.status } : todo
    );
    setTodos(updated);
  };

  const editTodoHandler = (todo) => {
    setEditId(todo.id);
    setInputValue(todo.title);
  };

  const deleteHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <form className="form">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="input"
          placeholder="Add todo"
        />
        <button className="btn" onClick={addTodoHandler}>
          {editId ? "Update Todo" : "Add Todo"}
        </button>
      </form>

      <div className="todoList">
        {todos.map((todo) => (
          <div key={todo.id} className="todoItem">
            <div className="left">
              <input
                type="checkbox"
                checked={todo.status}
                onChange={() => checkHandler(todo.id)}
              />

              <p className={todo.status ? "completed" : ""}>{todo.title}</p>
            </div>

            <div className="actions">
              <button onClick={() => editTodoHandler(todo)} className="btn">
                Edit
              </button>

              <button onClick={() => deleteHandler(todo.id)} className="btn">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
// --------------------------
.container {
  width: 400px;
  margin: auto;
}
.form {
  display: flex;
  gap: 5px;
  margin-bottom: 10px;
}
.input {
  flex: 1;
  padding: 6px;
  border: 2px solid black;
}
.btn {
  padding: 8px;
  border: 1px solid black;
  background: lightgray;
  cursor: pointer;
}
.todoList {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.todoItem {
  display: flex;
  justify-content: space-between;
  border: 2px solid black;
  padding: 4px;
}
.left {
  display: flex;
  gap: 4px;
  align-items: center;
}
.actions {
  display: flex;
  align-items: center;
  gap: 4px;
}
.completed {
  text-decoration: line-through;
}