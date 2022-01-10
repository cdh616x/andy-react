//jshint esversion:6

import React from "react";

import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/Footer.jsx";
import ImagePage from "../../../src/components/ImagePage.jsx";

import sax from "../../../src/full-images/ink/saxophone.png";

export default function Saxophone() {
  return (
    <>
    <Navbar />
    <ImagePage src={sax} title="Saxophone" />
    <Footer />
    </>
  );
}
