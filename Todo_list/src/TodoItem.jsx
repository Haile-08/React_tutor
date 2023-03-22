import React from "react";
import "./styles/App.css";

function TodoItem({ item, index, deleteTodoItem, completedTodoItem }) {
  const handledelete = () => {
    deleteTodoItem(index);
  };
  const handlecomplete = () => {
    completedTodoItem(index);
  };
  return (
    <div className="items">
      <div className="text">
        <p style={{ textDecoration: item.compelete ? "line-through" : "" }}>
          {item.todo}
        </p>
      </div>
      <div className="btns">
        <button className="del" onClick={handledelete}>
          Delete
        </button>
        <button className="ed">edit</button>
        <button className="com" onClick={handlecomplete}>
          Compelet
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
