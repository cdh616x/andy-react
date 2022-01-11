//jshint esversion:6

import React from "react";

import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/Footer.jsx";
import ImagePage from "../../../src/components/ImagePage.jsx";

import metroid from "../../../src/thumbnail-images/metroid.jpg";

export default function Metroid() {
  return (
    <>
    <Navbar />
    <ImagePage src={metroid} title="Metroid v4" />
    <Footer />
    </>
  );
}
