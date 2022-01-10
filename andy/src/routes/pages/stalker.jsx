//jshint esversion:6

import React from "react";

import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/Footer.jsx";
import ImagePage from "../../../src/components/ImagePage.jsx";

import stalker from "../../../src/full-images/ink/stalker.jpeg";

export default function Stalker() {
  return (
    <>
    <Navbar />
    <ImagePage src={stalker} title="Stalker" />
    <Footer />
    </>
  );
}
