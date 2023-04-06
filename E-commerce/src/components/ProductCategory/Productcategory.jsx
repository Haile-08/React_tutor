import React from "react";
import "./Productcategory.css";
import { Link } from "react-router-dom";

// images

import Elec from "../../assets/electronics.jpg";
import Jew from "../../assets/jewelery.jpg";
import mens from "../../assets/men.jpg";
import womens from "../../assets/women.jpg";

function Productcategory() {
  return (
    <div className="category">
      <div className="title">
        <p>Category</p>
      </div>
      <div className="cards">
        <Link to="/products/electronics">
          <div className="card">
            <img src={Elec} alt="elc" />
            <p className="p">Electronics</p>
          </div>
        </Link>
        <div className="card">
          <Link to="/products/jewelery">
            <img src={Jew} alt="elc" />
            <p className="p">jewelery</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/products/men">
            <img src={mens} alt="elc" />
            <p className="p">Men</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/products/women">
            <img src={womens} alt="elc" />
            <p className="p">Women</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Productcategory;
