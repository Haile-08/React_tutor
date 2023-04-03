import React from "react";
import "./style/index.css";

function Days({ item, index, imagefun }) {
  return (
    <div className="days">
      <div className="daypart">
        <p>Day {index + 1}</p>
      </div>
      <div className="dayimage">{imagefun}</div>
      <div className="daytemp">
        {" "}
        {(item.main.temp - 273.15).toFixed(2)}&deg;C
      </div>
    </div>
  );
}

export default Days;
