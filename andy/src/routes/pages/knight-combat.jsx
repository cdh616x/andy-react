//jshint esversion:6

import React from "react";

import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/Footer.jsx";
import ImagePage from "../../../src/components/ImagePage.jsx";

import knightcombat from "../../../src/full-images/ink/knightCombat.jpeg";

export default function KnightCombat() {
  return (
    <>
    <Navbar />
    <ImagePage src={knightcombat} title="Knights in Combat" />
    <Footer />
    </>
  );
}
