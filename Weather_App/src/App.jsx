import Days from "./Days";
import "./style/index.css";

function App() {
  return (
    <div className="App">
      <div className="today">
        <div className="output">
          <div className="symbole"></div>
          <div className="temp"></div>
          <div className="date"></div>
          <div className="line"></div>
        </div>
        <div className="city">
          <p>new york</p>
        </div>
      </div>
      <div className="weak">
        <Days />
      </div>
    </div>
  );
}

export default App;
