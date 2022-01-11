//jshint esversion:6

import React from "react";

import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/Footer.jsx";
import ImagePage from "../../../src/components/ImagePage.jsx";

import knightstudy from "../../../src/thumbnail-images/knight-study.jpg";

export default function KnightStudy() {
  return (
    <>
    <Navbar />
    <ImagePage src={knightstudy} title="Knight Study" />
    <Footer />
    </>
  );
}
