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
    <a href="#">
    <i class="fab fa-instagram-square"></i>
    </a>
    </h2>
    <h5 className="copyright">Andy Shaw © {year + 1900}</h5>
    </div>
  );
}
