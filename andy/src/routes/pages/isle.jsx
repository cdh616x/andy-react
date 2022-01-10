//jshint esversion:6

import React from "react";

import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/Footer.jsx";
import ImagePage from "../../../src/components/ImagePage.jsx";

import isle from "../../../src/full-images/ink/isle.png";

export default function Isle() {
  return (
    <>
    <Navbar />
    <ImagePage src={isle} title="Isle of the Dead" />
    <Footer />
    </>
  );
}
