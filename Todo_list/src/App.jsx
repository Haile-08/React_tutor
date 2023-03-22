import { useState } from "react";
import "./styles/App.css";
import Data from "./Data/data.json";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import EditForm from "./EditForm";

function App() {
  const [todoItems, setTodoItems] = useState(Data);
  const [isediting, setEditing] = useState(false);
  const [index, setIndex] = useState(0);

  const createTodoItem = (todo) => {
    const newTodoItems = [
      ...todoItems,
      { todo, compelete: false, edit: false },
    ];
    setTodoItems(newTodoItems);
  };

  const deleteTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(index, 1);
    setTodoItems(newTodoItems);
  };

  const completedTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    if (newTodoItems[index].compelete === false) {
      newTodoItems[index].compelete = true;
    } else {
      newTodoItems[index].compelete = false;
    }
    setTodoItems(newTodoItems);
  };

  const editTodoItem = (index, value) => {
    const newTodoItems = [...todoItems];
    newTodoItems[index].todo = value;
    setTodoItems(newTodoItems);
  };
  return (
    <div className="App">
      <div className="Todoinput">
        {isediting ? (
          <TodoInput createTodoItem={createTodoItem} />
        ) : (
          <EditForm
            isediting={isediting}
            setEditing={setEditing}
            index={index}
            editTodoItem={editTodoItem}
          />
        )}
      </div>
      <div className="Todolist">
        {todoItems.map((item, index) => (
          <TodoItem
            item={item}
            key={index}
            index={index}
            deleteTodoItem={deleteTodoItem}
            completedTodoItem={completedTodoItem}
            setIndex={setIndex}
            setEditing={setEditing}
            isediting={isediting}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
