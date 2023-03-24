import React from "react";
import "./style/index.css";

function Days() {
  return (
    <div className="dayout">
      <div className="day_number">
        <p>Day 1</p>
      </div>
      <div className="sym"></div>
      <div className="min"></div>
      <div className="max"></div>
      <div className="image"></div>
    </div>
  );
}

export default Days;
