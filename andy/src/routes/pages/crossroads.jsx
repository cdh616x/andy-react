//jshint esversion:6

import React from "react";

import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/Footer.jsx";
import ImagePage from "../../../src/components/ImagePage.jsx";

import crossroads from "../../../src/full-images/ink/crossroad.jpeg";

export default function Crossroad() {
  return (
    <>
    <Navbar />
    <ImagePage src={crossroads} title="Knight at the Crossroads" />
    <Footer />
    </>
  );
}
