//jshint esversion:6

import React from "react";

import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/Footer.jsx";
import ImagePage from "../../../src/components/ImagePage.jsx";

import desk from "../../../src/full-images/paint/still-life.jpeg";

export default function Desk() {
  return (
    <>
    <Navbar />
    <ImagePage src={desk} title="Desk Still Life" />
    <Footer />
    </>
  );
}
