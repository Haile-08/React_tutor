import React, { useState } from "react";
import "./styles/App.css";

function TodoInput({ createTodoItem }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      return console.log("please add somthing todo");
    }
    createTodoItem(value);
    setValue("");
  };
  return (
    <div className="input">
      <div className="input_area">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter todo"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
      </div>
      <div className="btn">
        <button onClick={handleSubmit}>Add</button>
      </div>
    </div>
  );
}

export default TodoInput;
