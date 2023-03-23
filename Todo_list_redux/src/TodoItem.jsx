import React from "react";
import { useDispatch } from "react-redux";
import { removeTodoItem, compeleteTodoItem } from "./features/Todo/todoSlice";

function TodoItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="itembox">
      <div className="text">
        <p style={{ textDecoration: item.compelete ? "line-through" : "" }}>
          {item.todo}
        </p>
      </div>
      <div className="actbtns">
        <button
          className="del"
          onClick={() => dispatch(removeTodoItem(item.id))}
        >
          delete
        </button>
        <button
          className="com"
          onClick={() => dispatch(compeleteTodoItem(item.id))}
        >
          Compelete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
