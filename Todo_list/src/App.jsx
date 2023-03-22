import { useState } from "react";
import "./styles/App.css";
import Data from "./Data/data.json";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

function App() {
  const [todoItems, setTodoItems] = useState(Data);

  const createTodoItem = (todo) => {
    const newTodoItems = [...todoItems, { todo, compelete: false }];
    setTodoItems(newTodoItems);
  };

  const deleteTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(index, 1);
    setTodoItems(newTodoItems);
  };
  return (
    <div className="App">
      <div className="Todoinput">
        <TodoInput createTodoItem={createTodoItem} />
      </div>
      <div className="Todolist">
        {todoItems.map((item, index) => (
          <TodoItem
            item={item}
            key={index}
            index={index}
            deleteTodoItem={deleteTodoItem}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
