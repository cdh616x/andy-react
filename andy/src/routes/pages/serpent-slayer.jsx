//jshint esversion:6

import React from "react";

import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/Footer.jsx";
import ImagePage from "../../../src/components/ImagePage.jsx";

import serpent from "../../../src/full-images/ink/serpent-slayer.jpeg";

export default function Serpent() {
  return (
    <>
    <Navbar />
    <ImagePage src={serpent} title="Serpent Slayer" />
    <Footer />
    </>
  );
}
