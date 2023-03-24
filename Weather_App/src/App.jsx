import { useEffect, useState } from "react";
import Days from "./Days";
import "./style/index.css";
import axios from "axios";

const API_KEY = "3695967c219031489fe97e3b33166059";
function App() {
  const [todayData, setTodayData] = useState("");
  const [weekData, setWeekData] = useState("");
  const [todayFetch, setTodayFetch] = useState(null);
  const [weekFetch, setWeekFetch] = useState(null);

  function success(pos) {
    const crd = pos.coords;
    setTodayData(
      `https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=${API_KEY}`
    );
    setWeekData(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${crd.latitude}&lon=${crd.longitude}&appid=${API_KEY}`
    );
  }
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  navigator.geolocation.getCurrentPosition(success, error);
  useEffect(() => {
    getTodayData();
    getWeekData();
  }, []);
  const getTodayData = () => {
    axios
      .get(todayData)
      .then((res) => {
        const result = res.data;
        setTodayFetch(result);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  };
  const getWeekData = () => {
    axios
      .get(weekData)
      .then((res) => {
        const result = res.data;
        setWeekFetch(result);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  };

  console.log(todayFetch);
  console.log(weekFetch);
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
          <div className="city_image"></div>
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
