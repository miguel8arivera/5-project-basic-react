import React, { useState } from "react";
import Todo from "./todo";

const TodoApp = () => {
  const [title, setTitle] = useState("create task");
  const [todos, setTodos] = useState([]);
  const handleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };
    if (newTodo.title.trim() === "") {
    }
    const temp = [...todos];
    temp.push(newTodo);
    setTodos(temp);

    setTitle("");
  };

  const handleUpdateTodo = (id, value) => {
    const temp = [...todos];
    const todo = temp.find((todo) => todo.id === id);
    todo.title = value;
    setTodos(temp);
  };

  const handleDeleteTask = (id) => {
    const temp = todos.filter((todo) => todo.id !== id);
    setTodos(temp);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={handleChange} />
        <input type="submit" value="Create Task" onClick={handleSubmit} />
      </form>

      <div>
        {todos.map((todo, id) => (
          <Todo
            key={id}
            todo={todo}
            onUpdateTodo={handleUpdateTodo}
            onDelete={handleDeleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
