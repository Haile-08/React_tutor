import { useEffect, useState } from "react";
import "./style/index.css";
import axios from "axios";
import Days from "./Days";

import rain from "./assets/rain.png";
import cloud from "./assets/cloud.png";
import sunny from "./assets/sunny.png";

import raincity from "./assets/Rainingimage.png";
import sunnycity from "./assets/Sunnyimage.png";
import stormcity from "./assets/Stormimage.png";

const API_KEY = "3695967c219031489fe97e3b33166059";

function App() {
  const [country, setCountry] = useState("");
  const [today, setToday] = useState(null);
  const [week, setWeek] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (country === "") {
      return console.log("please add somthing todo");
    }
    console.log(country);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${API_KEY}`
      )
      .then(function (response) {
        setToday(response.data);
      })
      .catch(function (error) {
        console.log(`Error: ${error} `);
      });
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${country}&appid=${API_KEY}`
      )
      .then(function (response) {
        setWeek(response.data);
      })
      .catch(function (error) {
        console.log(`Error: ${error} `);
      });
  }, [country]);

  let imageV;
  if (today != null) {
    if (today.weather[0].main == "Rain") {
      imageV = <img src={rain} alt="rain" />;
    } else if (today.weather[0].main == "Cloude") {
      imageV = <img src={cloud} alt="cloude" />;
    } else if (today.weather[0].main == "Clear") {
      imageV = <img src={sunny} alt="sunny" />;
    } else {
      imageV = <img src={cloud} alt="cloude" />;
    }
  } else {
    imageV = <p>...loading</p>;
  }

  let temp;
  if (today) {
    temp = (today.main.temp - 273.15).toFixed(2);
  } else {
    temp = "...loading";
  }

  let cityV;
  if (today != null) {
    if (today.weather[0].main == "Rain") {
      cityV = <img src={raincity} alt="rain" />;
    } else if (today.weather[0].main == "Cloude") {
      cityV = <img src={stormcity} alt="cloude" />;
    } else if (today.weather[0].main == "Clear") {
      cityV = <img src={sunnycity} alt="sunny" />;
    } else {
      cityV = <img src={stormcity} alt="cloude" />;
    }
  } else {
    cityV = <p>...loading</p>;
  }

  return (
    <div className="App">
      <div className="side">
        <div className="upper_panel">
          <div className="search">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="input"
                placeholder="Enter country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </form>
          </div>
          <div className="image">{imageV}</div>
          <div className="temp">
            <p>{temp} &deg;C</p>
          </div>
        </div>
        <div className="lower_panel">
          <div className="city">{cityV}</div>
        </div>
      </div>
      <div className="main">
        <Days />
      </div>
    </div>
  );
}

export default App;
