import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="links">
        <h3>Categroy</h3>
        <span>Women</span>
        <span>Men</span>
        <span>Shoes</span>
        <span>Accessories</span>
      </div>
      <div className="about">
        <h3>About</h3>
        <span>
          You know you’re about to hop on a journey when a website’s About Us
          page tells you to “Just go.” This is a website for travelers, so the
          layout is perfect for those eager to explore. As you scroll down, you
          discover what Lonely Planet stands for, and their visual aid offers a
          preview of their services.
        </span>
      </div>
      <div className="contact">
        <h3>Contacts</h3>
        <span>
          You know you’re about to hop on a journey when a website’s About Us
          page tells you to “Just go.” This is a website for travelers, so the
          layout is perfect for those eager to explore. As you scroll down, you
          discover what Lonely Planet stands for, and their visual aid offers a
          preview of their services.
        </span>
      </div>
    </div>
  );
}

export default Footer;
