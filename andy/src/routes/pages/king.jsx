//jshint esversion:6

import React from "react";

import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/Footer.jsx";
import ImagePage from "../../../src/components/ImagePage.jsx";

import king from "../../../src/full-images/ink/king.jpeg";

export default function King() {
  return (
    <>
    <Navbar />
    <ImagePage src={king} title="King" />
    <Footer />
    </>
  );
}
