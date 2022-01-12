//jshint esversion:6

import React from "react";

import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/Footer.jsx";
import ImagePage from "../../../src/components/ImagePage.jsx";

import noble from "../../../src/full-images/paint/noble-peasant.jpeg";

export default function Noble() {
  return (
    <>
    <Navbar />
    <ImagePage src={noble} title="Noble Peasant" />
    <Footer />
    </>
  );
}
