import React, { useState } from "react";

const EditableTodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Eat Meal" },
    { id: 2, title: "Play Football" },
  ]);

  const [inputVal, setInputVal] = useState("");
  const [editId, setEditId] = useState(null);

  const editHandler = (todo) => {
    setEditId(todo.id);
    setInputVal(todo.title);
  };

  const updateHandler = (id) => {
    if (!inputVal.trim()) return;
    const updatedArr = todos.map((todo) =>
      todo.id === id ? { ...todo, title: inputVal } : todo
    );
    setTodos(updatedArr);
    setEditId(null);
    setInputVal("");
  };

  const cancelHandler = () => {
    setInputVal("");
    setEditId(null);
  };

  const deleteHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <section className="container">
      <div className="list">
        {todos.map((todo) => (
          <div key={todo.id} className="item">
            {todo.id === editId ? (
              <input
                type="text"
                value={inputVal}
                className="input"
                onChange={(e) => setInputVal(e.target.value)}
                autoFocus
              />
            ) : (
              <p>{todo.title}</p>
            )}

            <div className="actions">
              {todo.id === editId ? (
                <>
                  <button
                    className="btn"
                    onClick={() => updateHandler(todo.id)}
                  >
                    Update
                  </button>
                  <button className="btn" onClick={cancelHandler}>
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button className="btn" onClick={() => editHandler(todo)}>
                    Edit
                  </button>
                  <button
                    className="btn"
                    onClick={() => deleteHandler(todo.id)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EditableTodoList;
// -------------------------
.container {
  width: 400px;
  margin: auto;
  font-family: Arial;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  padding: 8px;
}

.input {
  padding: 5px;
  border: 1px solid black;
}

.actions {
  display: flex;
  gap: 5px;
}

.btn {
  padding: 5px 10px;
  border: 1px solid black;
  background: lightgray;
  cursor: pointer;
}

