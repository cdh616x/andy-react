//jshint esversion:6

import React from "react";

import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/Footer.jsx";
import ImagePage from "../../../src/components/ImagePage.jsx";

import woodcut from "../../../src/full-images/paint/knight-woodcut.jpeg";

export default function Woodcut() {
  return (
    <>
    <Navbar />
    <ImagePage src={woodcut} title="Knight Woodcut" />
    <Footer />
    </>
  );
}
