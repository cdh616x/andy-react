//jshint esversion:6

import React from "react";

import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/Footer.jsx";
import ImagePage from "../../../src/components/ImagePage.jsx";

import battle from "../../../src/full-images/ink/battle.jpeg";

export default function Battle() {
  return (
    <>
    <Navbar />
    <ImagePage src={battle} title="Battle" />
    <Footer />
    </>
  );
}
