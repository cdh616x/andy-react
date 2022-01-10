//jshint esversion:6

import React from "react";

import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/Footer.jsx";
import ImagePage from "../../../src/components/ImagePage.jsx";

import forest from "../../../src/full-images/ink/forest-path.jpeg";

export default function Forest() {
  return (
    <>
    <Navbar />
    <ImagePage src={forest} title="Forest Path" />
    <Footer />
    </>
  );
}
