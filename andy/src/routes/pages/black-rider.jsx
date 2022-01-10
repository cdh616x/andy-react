//jshint esversion:6

import React from "react";

import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/Footer.jsx";
import ImagePage from "../../../src/components/ImagePage.jsx";

import blackrider from "../../../src/full-images/ink/black-rider.jpeg";

export default function BlackRider() {
  return (
    <>
    <Navbar />
    <ImagePage src={blackrider} title="Black Rider" />
    <Footer />
    </>
  );
}
