//jshint esversion:6

import React from "react";

import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/Footer.jsx";
import ImagePage from "../../../src/components/ImagePage.jsx";

import knight from "../../../src/full-images/ink/knight2.jpeg";

export default function Knight() {
  return (
    <>
    <Navbar />
    <ImagePage src={knight} title="Knight" />
    <Footer />
    </>
  );
}
