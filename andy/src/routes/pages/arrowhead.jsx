//jshint esversion:6

import React from "react";

import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/Footer.jsx";
import ImagePage from "../../../src/components/ImagePage.jsx";

import arrowhead from "../../../src/full-images/ink/arrowhead.jpg";

export default function Arrowhead() {
  return (
    <>
    <Navbar />
    <ImagePage src={arrowhead} title="Arrowhead" />
    <Footer />
    </>
  );
}
