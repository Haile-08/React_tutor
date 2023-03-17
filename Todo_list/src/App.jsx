import "./styles/App.css";

function App() {
  return (
    <div className="main">
      <div className="input_todo">
        <div className="input_area">
          <input type="text" placeholder="Enter task"></input>
        </div>
        <div className="btn">
          <button>add</button>
        </div>
      </div>
      <div className="display_todo">
        <div className="todos">
          <p>tot</p>
        </div>
      </div>
    </div>
  );
}

export default App;
