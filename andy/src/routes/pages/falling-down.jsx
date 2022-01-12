//jshint esversion:6

import React from "react";

import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/Footer.jsx";
import ImagePage from "../../../src/components/ImagePage.jsx";

import fallingdown from "../../../src/full-images/paint/falling-down.png";

export default function FallingDown() {
  return (
    <>
    <Navbar />
    <ImagePage src={fallingdown} title="Falling Down" />
    <Footer />
    </>
  );
}
