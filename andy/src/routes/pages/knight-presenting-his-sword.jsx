//jshint esversion:6

import React from "react";

import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/Footer.jsx";
import ImagePage from "../../../src/components/ImagePage.jsx";

import knightsword from "../../../src/full-images/ink/knight-sword.jpeg";

export default function KnightSword() {
  return (
    <>
    <Navbar />
    <ImagePage src={knightsword} title="Knight Presenting his Sword" />
    <Footer />
    </>
  );
}
