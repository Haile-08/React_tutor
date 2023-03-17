import { useState } from "react";
import "./styles/App.css";
import data from "./data/data.json";

function App() {
  const [i, setI] = useState("");
  const [todo, setTodo] = useState(data);

  function handelClick() {
    let copy = [...todo, { todol: i }];
    setTodo(copy);
  }
  return (
    <div className="main">
      <div className="input_todo">
        <div className="input_area">
          <input
            type="text"
            placeholder="Enter task"
            value={i}
            onChange={(e) => setI(e.target.value)}
          ></input>
        </div>
        <div className="btn">
          <button onClick={handelClick}>add</button>
        </div>
      </div>
      <div className="display_todo">
        {todo.map((todo) => {
          return (
            <div className="todos">
              <p>{todo.todol}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
