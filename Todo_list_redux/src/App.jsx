import { useSelector } from "react-redux";

import "./style/App.css";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

function App() {
  const todo = useSelector((state) => state.todo);
  return (
    <div className="App">
      <div className="todoinput">
        <TodoInput />
      </div>
      <div className="todolist">
        {todo.map((item) => (
          <TodoItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
