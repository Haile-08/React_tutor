import React from "react";
import "./Products.css";
import Item from "../../components/Item/Item";

function Products() {
  return (
    <div className="products">
      <div className="ptitle">
        <p>Products</p>
      </div>
      <div className="list">
        <Item />
      </div>
    </div>
  );
}

export default Products;
