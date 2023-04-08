import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

function Item({ item }) {
  return (
    <Link to={`/product/${item.id}`}>
      <div className="iitem">
        <img src={item.image} alt="g" />
        <div className="name">
          <p>{item.title}</p>
        </div>
        <p>${item.price}</p>
      </div>
    </Link>
  );
}

export default Item;
