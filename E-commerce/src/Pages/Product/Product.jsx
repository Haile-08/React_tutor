import React from "react";
import "./Product.css";
import wom from "../../assets/women.jpg";
import { FaCartPlus } from "react-icons/fa";

function Product() {
  return (
    <div className="iproduct">
      <img src={wom} alt="" />
      <div className="info">
        <div className="iptitle">
          <p>Title</p>
        </div>
        <div className="value">
          <p>$30</p>
        </div>
        <div className="pdecription">
          <p>description</p>
        </div>
        <div className="addbtn">
          <button>
            <FaCartPlus />
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
