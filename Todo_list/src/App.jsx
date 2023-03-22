import { useState } from "react";
import "./styles/App.css";
import Data from "./Data/data.json";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

function App() {
  const [todoItems, setTodoItems] = useState(Data);

  return (
    <div className="App">
      <div className="Todoinput">
        <TodoInput />
      </div>
      <div className="Todolist">
        {todoItems.map((item, index) => (
          <TodoItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
