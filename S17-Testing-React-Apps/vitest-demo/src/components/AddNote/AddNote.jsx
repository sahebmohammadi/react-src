import { useState } from "react";
import "./AddNote.css";

function AddTodo({ setTodos, todos }) {
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (!todo) return;
    let updatedTodos = [
      ...todos,
      {
        id: new Date().getTime(),
        task: todo,
        completed: false,
      },
    ];
    setTodos(updatedTodos);
    setTodo("");
  };

  return (
    <div className="input-container">
      <label htmlFor="todo">todo</label>
      <input
        id="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new task here..."
      />
      <button className="add-btn" onClick={addTodo}>
        Add
      </button>
    </div>
  );
}

export default AddTodo;
