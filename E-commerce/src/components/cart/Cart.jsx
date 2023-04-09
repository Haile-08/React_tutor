import React from "react";
import "./Cart.css";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../features/cart/cartSlice";

function Cart() {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const total = () => {
    let total = 0;
    products?.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };
  return (
    <div className="cart">
      <p>Products in your cart</p>
      {products?.map((item) => (
        <div className="item">
          <img src={item.img} alt="" />
          <div className="content">
            <div className="ititle">
              <p>{item.title}</p>
            </div>
            <div className="idecription">
              <p>{item.desc}</p>
            </div>
          </div>
          <button onClick={() => dispatch(removeItem(item.id))}>
            <FaTrash />
          </button>
        </div>
      ))}
      <div className="foot">
        <div className="subtotal">
          <p>SUBTOTAL</p>
          <span>${total()}</span>
        </div>
        <div className="checkout">
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="reset" onClick={() => dispatch(resetCart())}>
          <button>Reset Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
