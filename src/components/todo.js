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
      <form>
        <input type="text" value={newValue} onChange={handleChange} />
        <button onClick={handleUpdateTask}>Update</button>
      </form>
    );
  };
  const TodoElement = () => {
    return (
      <div>
        <span>{todo.title}</span>
        <button onClick={() => setIsEdit(true)}>Edit</button>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    );
  };

  return <div>{isEdit ? <FormEdit /> : <TodoElement />}</div>;
};

export default Todo;
