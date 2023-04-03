import { useEffect, useState } from "react";
import "./style/index.css";
import axios from "axios";
import Days from "./Days";
const API_KEY = "3695967c219031489fe97e3b33166059";

function App() {
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (country === "") {
      return console.log("please add somthing todo");
    }
    console.log(country);
  };

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
          <div className="image"></div>
          <div className="temp"></div>
        </div>
        <div className="lower_panel">
          <div className="city"></div>
        </div>
      </div>
      <div className="main">
        <Days />
      </div>
    </div>
  );
}

export default App;
