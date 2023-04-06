import React from "react";
import jew from "../../assets/men.jpg";
import "./Item.css";

function Item() {
  return (
    <div className="iitem">
      <img src={jew} alt="g" />
      <div className="name">
        <p>t shirt</p>
      </div>
      <p>$20</p>
    </div>
  );
}

export default Item;
