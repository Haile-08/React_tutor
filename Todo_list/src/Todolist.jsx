import React from "react";
import Todoitem from "./Todoitem";
import "./styles/App.css";

function Todolist({ handelClick, setI, todo }) {
  return (
    <div>
      <div className="input_todo">
        <div className="input_area">
          <input
            type="text"
            placeholder="Enter task"
            onChange={(e) => setI(e.target.value)}
          ></input>
        </div>
        <div className="btn">
          <button onClick={handelClick}>add</button>
        </div>
      </div>
      <div className="display_todo">
        {todo.map((todo) => {
          return <Todoitem todo={todo} />;
        })}
      </div>
    </div>
  );
}

export default Todolist;
