//jshint esversion:6

import React from "react";

import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/Footer.jsx";
import ImagePage from "../../../src/components/ImagePage.jsx";

import self from "../../../src/full-images/paint/self-portrait.jpeg";

export default function Self() {
  return (
    <>
    <Navbar />
    <ImagePage src={self} title="Self Portrait" />
    <Footer />
    </>
  );
}
