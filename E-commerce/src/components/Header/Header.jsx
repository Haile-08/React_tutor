import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
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
        <div className="cont">
          <FaShoppingCart />
          <span>0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
