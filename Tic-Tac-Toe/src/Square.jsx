import React, { useState } from "react";
import "./App.css";

function Square({ value, onSquareClick }) {
  return (
    <button className="squr" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
