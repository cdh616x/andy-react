//jshint esversion:6

import React from "react";

import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/Footer.jsx";
import ImagePage from "../../../src/components/ImagePage.jsx";

import theodon from "../../../src/full-images/ink/king-theodon-poisoned.jpeg";

export default function Theodon() {
  return (
    <>
    <Navbar />
    <ImagePage src={theodon} title="King Theodon, Poisoned" />
    <Footer />
    </>
  );
}
