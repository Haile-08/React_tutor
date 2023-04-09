import React, { useState } from "react";
import "./Product.css";
import { FaCartPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

function Product() {
  const [quantity, setQuantity] = useState(1);
  const id = useParams().id;
  const { data, loading, error } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );
  const dispatch = useDispatch(
    addToCart({
      id: data?.id,
      title: data?.title,
      desc: data?.description,
      img: data?.image,
      price: data?.price,
      quantity: quantity,
    })
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
        <div className="quant">
          <button
            className="btns"
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            className="btns"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <div className="addbtn">
          <button onClick={() => dispatch()}>
            <FaCartPlus />
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
