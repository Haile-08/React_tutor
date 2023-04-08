import React from "react";
import "./Products.css";
import Item from "../../components/Item/Item";
import { useParams } from "react-router-dom";

function Products() {
  const { id } = useParams();
  console.log(`id of the sie ${id}`);
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
