import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";

function Header() {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="left">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/category/1">
          category
        </Link>
      </div>
      <div className="center">
        <div className="Logo">
          <p>Haile</p>
        </div>
      </div>
      <div className="right">
        <div className="cont" onClick={() => setOpen(!open)}>
          <FaShoppingCart />
          <span>{products?.length}</span>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
}

export default Header;
