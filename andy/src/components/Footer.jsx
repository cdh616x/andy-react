//jshint esversion:6

import React from "react";
import FooterImg from "../full-images/banner_text.png";

export default function Footer() {
  let year = new Date().getYear()
  return (
    <div className="text-center">
    <img className="footer mx-auto" src={FooterImg} />
    <h5 className="copyright">Andy Shaw © {year + 1900}</h5>
    </div>
  );
}
