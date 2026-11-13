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
    <div>

      <form>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add todo"
        />
        <button onClick={addTodoHandler}>
          {editId ? "Update Todo" : "Add Todo"}
        </button>
      </form>


      <div>
        {todos.map((todo) => (
          <div key={todo.id}>

            <div>
              <input
                type="checkbox"
                checked={todo.status}
                onChange={() => checkHandler(todo.id)}
              />
              <p >{todo.title}</p>
            </div>

            <div>
              <button onClick={() => editTodoHandler(todo)}>
                Edit
              </button>
              <button onClick={() => deleteHandler(todo.id)}>
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