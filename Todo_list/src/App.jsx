import { useState } from "react";
import "./styles/App.css";
import Data from "./Data/data.json";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

function App() {
  const [todoItems, setTodoItems] = useState(Data);

  function createTodoItem(todo) {
    const newTodoItems = [...todoItems, { todo, compelete: false }];
    setTodoItems(newTodoItems);
  }
  return (
    <div className="App">
      <div className="Todoinput">
        <TodoInput createTodoItem={createTodoItem} />
      </div>
      <div className="Todolist">
        {todoItems.map((item, index) => (
          <TodoItem item={item} key={index} index={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
