import React from "react";
import "./styles/App.css";

function TodoInput() {
  return (
    <div className="input">
      <div className="input_area">
        <form>
          <input type="text" placeholder="Enter todo" />
        </form>
      </div>
      <div className="btn">
        <button>Add</button>
      </div>
    </div>
  );
}

export default TodoInput;
