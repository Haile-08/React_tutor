import { useState } from "react";
import "./App.css";
import Square from "./Square";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Square />
    </div>
  );
}

export default App;
