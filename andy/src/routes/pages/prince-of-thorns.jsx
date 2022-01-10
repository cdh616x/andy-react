//jshint esversion:6

import React from "react";

import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/Footer.jsx";
import ImagePage from "../../../src/components/ImagePage.jsx";

import prince from "../../../src/full-images/ink/prince-of-thorns.jpeg";

export default function Prince() {
  return (
    <>
    <Navbar />
    <ImagePage src={prince} title="Prince of Thorns" />
    <Footer />
    </>
  );
}
