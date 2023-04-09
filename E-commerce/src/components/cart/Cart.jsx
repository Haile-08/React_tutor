import React from "react";
import "./Cart.css";
import { FaTrash } from "react-icons/fa";
import image from "../../assets/men.jpg";
import { useSelector } from "react-redux";

function Cart() {
  const products = useSelector((state) => state.cart.products);
  return (
    <div className="cart">
      <p>Products in your cart</p>
      <div className="item">
        <img src={image} alt="" />
        <div className="content">
          <div className="ititle">
            <p>Tshirt</p>
          </div>
          <div className="idecription">
            <p>
              thedescriptionggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
            </p>
          </div>
        </div>
        <button>
          <FaTrash />
        </button>
      </div>
      <div className="foot">
        <div className="subtotal">
          <p>SUBTOTAL</p>
          <span>$350</span>
        </div>
        <div className="checkout">
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="reset">
          <button>Reset Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
