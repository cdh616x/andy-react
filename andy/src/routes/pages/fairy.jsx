//jshint esversion:6

import React from "react";

import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/Footer.jsx";
import ImagePage from "../../../src/components/ImagePage.jsx";

import fairy from "../../../src/full-images/ink/fairy-princess.png";

export default function Fairy() {
  return (
    <>
    <Navbar />
    <ImagePage src={fairy} title="Fairy Princess" />
    <Footer />
    </>
  );
}
