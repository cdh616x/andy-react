//jshint esversion:6

import React from "react";

import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/Footer.jsx";
import ImagePage from "../../../src/components/ImagePage.jsx";

import andhewas from "../../../src/full-images/paint/and-he-was.png";

export default function AndHeWas() {
  return (
    <>
    <Navbar />
    <ImagePage src={andhewas} title="And He Was" />
    <Footer />
    </>
  );
}
