import { useState } from "react";
import Days from "./Days";
import "./style/index.css";
const API_KEY = "3695967c219031489fe97e3b33166059";

function App() {
  const [todayData, setTodayData] = useState("");

  function success(pos) {
    const crd = pos.coords;
    setTodayData(
      `https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=${API_KEY}`
    );
  }
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error);
  console.log(todayData);

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
