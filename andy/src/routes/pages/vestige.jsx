//jshint esversion:6

import React from "react";

import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/Footer.jsx";
import ImagePage from "../../../src/components/ImagePage.jsx";

import crown from "../../../src/full-images/paint/crown-of-serpents.jpeg";
import skies from "../../../src/full-images/paint/fallen-skies.jpeg";
import painted from "../../../src/full-images/paint/painted-world.jpeg";
import ship from "../../../src/full-images/paint/pirate-ship.jpeg";

export default function Vestige() {
  return (
    <>
    <Navbar />
    <ImagePage src={crown} title="Crown of Serpents" />
    <ImagePage src={skies} title="Fallen Skies" />
    <ImagePage src={painted} title="Painted World" />
    <ImagePage src={ship} title="Pirate Ship" />
    <Footer />
    </>
  );
}
