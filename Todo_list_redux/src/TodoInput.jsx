import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { addTodoItem } from "./features/Todo/todoSlice";

function TodoInput() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      return console.log("please add somthing todo");
    }
    {
      console.log(value);
    }
    dispatch(
      addTodoItem({
        id: nanoid(),
        todo: value,
        compelet: false,
      })
    );
    setValue("");
  };
  return (
    <div className="todoin">
      <div className="input">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="area"
            placeholder="Enter todo"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
        </form>
      </div>
      <div className="inbtn">
        <button onClick={handleSubmit}>Add</button>
      </div>
    </div>
  );
}

export default TodoInput;
