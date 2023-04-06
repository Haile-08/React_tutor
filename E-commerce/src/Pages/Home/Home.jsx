import React from "react";
import "./Home.css";
import intro from "../../assets/intro.jpg";
import Productcategory from "../../components/ProductCategory/Productcategory";

function Home() {
  return (
    <div className="home">
      <div className="image">
        <img src={intro} alt="img" />
        <Productcategory />
      </div>
    </div>
  );
}

export default Home;
