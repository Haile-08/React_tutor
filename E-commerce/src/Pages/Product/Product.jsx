import React from "react";
import "./Product.css";
import wom from "../../assets/women.jpg";
import { FaCartPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function Product() {
  const id = useParams().id;
  const { data, loading, error } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );
  return (
    <div className="iproduct">
      <img src={data?.image} alt="" />
      <div className="info">
        <div className="iptitle">
          <p>{data?.title}</p>
        </div>
        <div className="value">
          <p>${data?.price}</p>
        </div>
        <div className="pdecription">
          <p>{data?.description}</p>
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
