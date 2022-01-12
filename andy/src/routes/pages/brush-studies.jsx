//jshint esversion:6

import React from "react";

import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/Footer.jsx";
import ImagePage from "../../../src/components/ImagePage.jsx";

import aragorn from "../../../src/full-images/paint/aragorn.jpeg";
import dicky from "../../../src/full-images/paint/dicky.png";
import frodo from "../../../src/full-images/paint/frodo.jpeg";
import girl from "../../../src/full-images/paint/girl.jpeg";
import jester from "../../../src/full-images/paint/jester.jpeg";
import mixer from "../../../src/full-images/paint/mixerbrush-studies.jpeg";
import mustard from "../../../src/full-images/paint/mustard-plug.jpeg";
import pickman from "../../../src/full-images/paint/pickmans-model.png";
import rush from "../../../src/full-images/paint/rush.png";

export default function Brush() {
  return (
    <>
    <Navbar />
    <ImagePage src={aragorn} title="Aragorn" />
    <ImagePage src={dicky} title="Dicky" />
    <ImagePage src={frodo} title="Frodo" />
    <ImagePage src={girl} title="Girl" />
    <ImagePage src={jester} title="Jester" />
    <ImagePage src={mixer} title="Mixerbrush Study" />
    <ImagePage src={mustard} title="Mustard Plug" />
    <ImagePage src={pickman} title="Pickman's Model" />
    <ImagePage src={rush} title="Rush" />
    <Footer />
    </>
  );
}
