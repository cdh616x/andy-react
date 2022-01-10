//jshint esversion:6

import React from "react";

import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/Footer.jsx";
import ImagePage from "../../../src/components/ImagePage.jsx";

import stalker2 from "../../../src/full-images/ink/stalker2.jpeg";

export default function Stalker2() {
  return (
    <>
    <Navbar />
    <ImagePage src={stalker2} title="Stalker II" />
    <Footer />
    </>
  );
}
