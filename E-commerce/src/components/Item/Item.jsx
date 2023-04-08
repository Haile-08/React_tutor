import React from "react";
import jew from "../../assets/men.jpg";
import "./Item.css";
import { Link } from "react-router-dom";

function Item() {
  return (
    <Link to="/product/1">
      <div className="iitem">
        <img src={jew} alt="g" />
        <div className="name">
          <p>t shirt</p>
        </div>
        <p>$20</p>
      </div>
    </Link>
  );
}

export default Item;
