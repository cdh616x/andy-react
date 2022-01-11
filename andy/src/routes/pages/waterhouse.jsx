//jshint esversion:6

import React from "react";

import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/Footer.jsx";
import ImagePage from "../../../src/components/ImagePage.jsx";

import waterhouse from "../../../src/thumbnail-images/waterhouse.jpg";

export default function Waterhouse() {
  return (
    <>
    <Navbar />
    <ImagePage src={waterhouse} title="Waterhouse Study - Lamia" />
    <Footer />
    </>
  );
}
