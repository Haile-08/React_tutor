import React from "react";
import "./styles/App.css";

function TodoItem({ item, index, deleteTodoItem }) {
  const handledelete = () => {
    deleteTodoItem(index);
  };
  return (
    <div className="items">
      <div className="text">
        <p>{item.todo}</p>
      </div>
      <div className="btns">
        <button className="del" onClick={handledelete}>
          Delete
        </button>
        <button className="ed">edit</button>
        <button className="com">Compelet</button>
      </div>
    </div>
  );
}

export default TodoItem;
