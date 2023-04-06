import React from "react";
import "./Productcategory.css";

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
        <div className="card">
          <img src={Elec} alt="elc" />
          <p>Electronics</p>
        </div>
        <div className="card">
          <img src={Jew} alt="elc" />
          <p>jewelery</p>
        </div>
        <div className="card">
          <img src={mens} alt="elc" />
          <p>Men</p>
        </div>
        <div className="card">
          <img src={womens} alt="elc" />
          <p>Women</p>
        </div>
      </div>
    </div>
  );
}

export default Productcategory;
