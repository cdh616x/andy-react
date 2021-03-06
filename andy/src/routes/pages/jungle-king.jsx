//jshint esversion:6

import React from "react";

import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/Footer.jsx";
import ImagePage from "../../../src/components/ImagePage.jsx";

import jungle from "../../../src/full-images/paint/jungle-lord.jpeg";

export default function Jungle() {
  return (
    <>
    <Navbar />
    <ImagePage src={jungle} title="Jungle King" />
    <Footer />
    </>
  );
}
