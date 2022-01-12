//jshint esversion:6

import React from "react";

import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/Footer.jsx";
import ImagePage from "../../../src/components/ImagePage.jsx";

import ranger from "../../../src/full-images/paint/ranger.jpeg";

export default function Ranger() {
  return (
    <>
    <Navbar />
    <ImagePage src={ranger} title="Ranger" />
    <Footer />
    </>
  );
}
