//jshint esversion:6

import React from "react";

import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/Footer.jsx";
import ImagePage from "../../../src/components/ImagePage.jsx";

import neon from "../../../src/thumbnail-images/neon-sign.jpg";

export default function Neon() {
  return (
    <>
    <Navbar />
    <ImagePage src={neon} title="Neon Sign" />
    <Footer />
    </>
  );
}
