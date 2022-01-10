//jshint esversion:6

import React from "react";

import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/Footer.jsx";
import ImagePage from "../../../src/components/ImagePage.jsx";

import deathsprocession from "../../../src/full-images/ink/deaths-procession.png";

export default function DeathsProcession() {
  return (
    <>
    <Navbar />
    <ImagePage src={deathsprocession} title="Death's Procession" />
    <Footer />
    </>
  );
}
