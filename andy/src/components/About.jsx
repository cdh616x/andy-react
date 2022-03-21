//jshint esversion:6

import React from "react";
import andy from "../full-images/andy.png";

export default function About() {
  return (
    <>
    <div className="row about">
    <div className="col-lg-6 col-sm-6">
    <p className="about-me">Andy Shaw is a freelance artist/illustrator based out of Grand Rapids, Michigan, specializing in digital paintings and pen and ink drawings packed with detail and tight linework.</p>
    <p className="about-me">His indefatigable interest in fantasy and science fiction sprouts hosts of stalwart knights, intrepid spacefarers, and landscapes of gnarled roots and billowing clouds.</p>
    </div>
    <div className="col-lg-6 col-sm-6">
    <h1>
    <img src={andy} className="img-fluid andy-pic" />
    </h1>
    </div>
    </div>
    </>
  )
}
