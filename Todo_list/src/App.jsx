import { useState } from "react";
import Todolist from "./Todolist";
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
      <Todolist handelClick={handelClick} setI={setI} todo={todo} />
    </div>
  );
}

export default App;
