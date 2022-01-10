//jshint esversion:6

import React from "react";

import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/Footer.jsx";
import ImagePage from "../../../src/components/ImagePage.jsx";

import cowboy from "../../../src/full-images/ink/cowboy.jpeg";

export default function Cowboy() {
  return (
    <>
    <Navbar />
    <ImagePage src={cowboy} title="Cowboy Contemplates the Storm" />
    <Footer />
    </>
  );
}
