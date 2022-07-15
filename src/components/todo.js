import React, { useState } from "react";

const Todo = ({ todo, onUpdateTodo, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const FormEdit = () => {
    const [newValue, setNewValue] = useState(todo.title);

    const handleChange = (e) => {
      const value = e.target.value;
      setNewValue(value);
    };

    const handleUpdateTask = () => {
      onUpdateTodo(todo.id, newValue);
      setIsEdit(false);
    };
    return (
      <form className="todoUpdateForm">
        <input
          className="todoInput"
          type="text"
          value={newValue}
          onChange={handleChange}
        />
        <button className="button" onClick={handleUpdateTask}>
          Update
        </button>
      </form>
    );
  };
  const TodoElement = () => {
    return (
      <div className="todoInfo">
        <span className="todoTitle">{todo.title}</span>
        <button className="button" onClick={() => setIsEdit(true)}>
          Edit
        </button>
        <button className="buttonDelete" onClick={() => onDelete(todo.id)}>
          Delete
        </button>
      </div>
    );
  };

  return <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>;
};

export default Todo;
