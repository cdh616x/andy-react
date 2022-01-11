//jshint esversion:6

import React from "react";

import Navbar from "../../src/components/Navbar.jsx";
import Footer from "../../src/components/Footer.jsx";

import GalleryItem from "../../src/components/GalleryItem.jsx";

import andhewas from "../../src/thumbnail-images/and-he-was.jpg";
import fallingdown from "../../src/thumbnail-images/falling-down.jpg";
import homecoming from "../../src/thumbnail-images/knights-homecoming.jpg";
import noble from "../../src/thumbnail-images/noble-peasant.jpg";
import self from "../../src/thumbnail-images/self-portrait.jpg";
import waterhouse from "../../src/thumbnail-images/waterhouse.jpg";
import metroid from "../../src/thumbnail-images/metroid.jpg";
import neon from "../../src/thumbnail-images/neon-sign.jpg";
import jungle from "../../src/thumbnail-images/jungle-king.jpg";
import study from "../../src/thumbnail-images/knight-study.jpg";

export default function Painting() {
  return (
    <>
     <Navbar />
      <h1 className="page-title">Paintings Gallery</h1>
      <div className="row">
       <GalleryItem src={andhewas} title="And He Was" href="/paintings/and-he-was" />
       <GalleryItem src={fallingdown} title="Falling Down" href="/paintings/falling-down" />
       <GalleryItem src={homecoming} title="A Young Knight's Homecoming" href="/paintings/knights-homecoming" />
      </div>
      <div className="row">
       <GalleryItem src={noble} title="Noble Peasant" href="/paintings/noble-peasant" />
       <GalleryItem src={self} title="Self Portrait" href="/paintings/self-portrait" />
       <GalleryItem src={waterhouse} title="Waterhouse Study - Lamia" href="/paintings/waterhouse" />
      </div>
      <div className="row">
       <GalleryItem src={metroid} title="Metroid v4" href="/paintings/metroid" />
       <GalleryItem src={neon} title="Neon Sign" href="/paintings/neon-sign" />
       <GalleryItem src={jungle} title="Jungle King" href="/paintings/jungle-king" />
      </div>
      <div className="row">
       <GalleryItem src={study} title="Knight Study" href="/paintings/knight-study" />
       <GalleryItem src={neon} title="Neon Sign" />
       <GalleryItem src={jungle} title="Jungle King"  />
      </div>
     <Footer />
    </>

  );
}
