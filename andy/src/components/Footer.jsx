//jshint esversion:6

import React from "react";
import FooterImg from "../full-images/banner_text.png";

export default function Footer() {
  let year = new Date().getYear();
  return (
    <div className="text-center">
    <div className="row">
    <img className="footer mx-auto" src={FooterImg} />
    </div>
    <h2>
    <a href="https://www.instagram.com/andyshawillustrations/" target="_blank">
      <i className="fab fa-instagram-square"></i>
    </a>
    <a href="https://www.youtube.com/channel/UCq9PE43PtA_Ve7qO6PK4cKg">
      <i className="fab fa-youtube"></i>
    </a>
    <a href="https://twitter.com/andyshawillustr" target="_blank">
      <i className="fab fa-twitter-square"></i>
    </a>
    </h2>
    <h5 className="copyright">Andy Shaw © {year + 1900}</h5>
    </div>
  );
}
