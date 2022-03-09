//jshint esversion:6

import React from "react";

import Navbar from "../../src/components/Navbar.jsx";
import Footer from "../../src/components/Footer.jsx";

export default function Contact() {
  return (
    <>
    <Navbar />
     <h1>Send me an email!</h1>
     <form action="/">
      <input type="submit" />
     </form>
    <Footer />
    </>
  );
}
