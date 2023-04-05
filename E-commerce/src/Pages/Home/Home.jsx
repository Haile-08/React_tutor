import React from "react";
import "./Home.css";
import intro from "../../assets/intro.jpg";

function Home() {
  return (
    <div className="home">
      <div className="image">
        <img src={intro} alt="img" />
      </div>
    </div>
  );
}

export default Home;
