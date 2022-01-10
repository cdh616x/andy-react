//jshint esversion:6

import React from "react";

import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/Footer.jsx";
import ImagePage from "../../../src/components/ImagePage.jsx";

import lost from "../../../src/full-images/ink/lost-somehow.jpeg";

export default function Lost() {
  return (
    <>
    <Navbar />
    <ImagePage src={lost} title="Lost Somehow" />
    <Footer />
    </>
  );
}
