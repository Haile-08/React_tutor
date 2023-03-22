import React from "react";
import { useState } from "react";
import "./styles/App.css";

function EditForm({ index, isediting, setEditing, editTodoItem }) {
  const [value, setValue] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    if (value === "") {
      return console.log("please add somthing todo");
    }
    editTodoItem(index, value);
    setValue("");
  };
  const handleCancel = () => {
    setEditing(!isediting);
  };
  return (
    <div className="input">
      <div className="input_area">
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            placeholder="Update.."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
      </div>
      <div className="btnt">
        <button onClick={handleUpdate} className="update">
          Update
        </button>
        <button onClick={handleCancel} className="cancel">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default EditForm;
