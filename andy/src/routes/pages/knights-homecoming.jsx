//jshint esversion:6

import React from "react";

import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/Footer.jsx";
import ImagePage from "../../../src/components/ImagePage.jsx";

import homecoming from "../../../src/full-images/paint/homecoming.png";

export default function Homecoming() {
  return (
    <>
    <Navbar />
    <ImagePage src={homecoming} title="A Young Knight's Homecoming" />
    <Footer />
    </>
  );
}
