//jshint esversion:6

import React from "react";

import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/Footer.jsx";
import ImagePage from "../../../src/components/ImagePage.jsx";

import archer from "../../../src/full-images/ink/archer.jpeg";

export default function Archer() {
  return (
    <>
    <Navbar />
    <ImagePage src={archer} title="Archer" />
    <Footer />
    </>
  );
}
