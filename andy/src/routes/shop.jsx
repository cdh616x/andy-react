//jshint esversion:6

import React from "react";

import Navbar from "../../src/components/Navbar.jsx";
import Footer from "../../src/components/Footer.jsx";
import Form from "../../src/components/Form.jsx";

import GalleryItem from "../../src/components/GalleryItem.jsx";

import arrowhead from "../../src/thumbnail-images/arrowhead.jpg";
import archer from "../../src/thumbnail-images/archer.jpg";
import lost from "../../src/thumbnail-images/lost-somehow.jpg";

import isle from "../../src/thumbnail-images/isle-of-the-dead.jpg";
import stalker from "../../src/thumbnail-images/stalker1.jpg";
import knightsword from "../../src/thumbnail-images/knight-sword.jpg";

import fairy from "../../src/thumbnail-images/fairyprincess.jpg";
import forest from "../../src/thumbnail-images/forest1.jpg";
import cowboy from "../../src/full-images/ink/cowboy.jpeg";

export default function Shop() {
  return (
    <>
     <Navbar />
     <h1 className="shop-page-title">Available Prints</h1>
     <h5 className="shop-title">Contact artist for availability</h5>
     <h5 className="shop-title">All prints $20 + shipping</h5>
     <div className="row">
      <GalleryItem src={arrowhead} title="Arrowhead" print="7 x 9 || 5 x 7" href="#/ink-gallery/arrowhead" />
      <GalleryItem src={archer} title="Archer" print="7 x 9 || 5 x 7" href="#/ink-gallery/archer"/>
      <GalleryItem src={lost} title="Lost Somehow" print="7 x 9 || 5 x 7" href="#/ink-gallery/lost-somehow" />
     </div>
     <div className="row">
      <GalleryItem src={isle} title="Isle of the Dead" print="7 x 9 || 5 x 7" href="#/ink-gallery/isle-of-the-dead" />
      <GalleryItem src={stalker} title="Stalker" print="8 x 8 || 6 x 6" href="#/ink-gallery/stalker" />
      <GalleryItem src={knightsword} title="Knight Presenting his Sword" print="7 x 9 || 5 x 7" href="#/ink-gallery/knight-sword" />
     </div>
     <div className="row">
      <GalleryItem src={forest} title="Forest Path" print="8 x 8 || 6 x 6" href="#/ink-gallery/forest-path" />
      <GalleryItem src={cowboy} title="Cowboy Contemplates the Storm" print="8 x 8 || 6 x 6" href="#/ink-gallery/cowboy" />
      <GalleryItem src={fairy} title="Fairy Princess" print="7 x 9 || 5 x 7" href="#/ink-gallery/fairy-princess" />
     </div>
     <Form />
     <Footer />
    </>
  );
}
