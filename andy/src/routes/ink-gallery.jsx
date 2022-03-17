//jshint esversion:6

import React from "react";

import Navbar from "../../src/components/Navbar.jsx";
import Footer from "../../src/components/Footer.jsx";

import GalleryItem from "../../src/components/GalleryItem.jsx";

//ink drawings
import arrowhead from "../thumbnail-images/arrowhead.jpg";
import archer from "../thumbnail-images/archer.jpg";
import fairy from "../thumbnail-images/fairyprincess.jpg";
import isle from "../thumbnail-images/isle-of-the-dead.jpg";
import knightsword from "../thumbnail-images/knight-sword.jpg";
import lost from "../thumbnail-images/lost-somehow.jpg";

import battle from "../thumbnail-images/battle.jpg";
import deathsprocession from "../thumbnail-images/deaths-procession.jpg";
import king from "../full-images/ink/king.jpeg";

import rider from "../thumbnail-images/black-rider.jpeg";
import crossroads from "../thumbnail-images/crossroads.jpg";
import knight from "../thumbnail-images/knight.jpeg";
import knightCombat from "../thumbnail-images/knights-in-combat.jpg";
import thorns from "../thumbnail-images/prince-thumb2.jpg";
import saxophone from "../thumbnail-images/saxophone.jpg";
import serpent from "../thumbnail-images/serpent-slayer.jpg";
import stalker from "../thumbnail-images/stalker1.jpg";
import stalker2 from "../thumbnail-images/stalker-2.jpg";
import theodon from "../thumbnail-images/theodon-poisoned.jpg";
import cowboy from "../full-images/ink/cowboy.jpeg";
import forest from "../thumbnail-images/forest1.jpg";

export default function InkGallery() {
  return (
    <>
    <Navbar />
    <h1 className="page-title">Ink Drawings Gallery</h1>
    <div className="row">
     <GalleryItem src={arrowhead} title="Arrowhead" href="#/ink-gallery/arrowhead" />
     <GalleryItem src={knightsword} title="Knight Presenting his Sword" href="#/ink-gallery/knight-sword" />
     <GalleryItem src={isle} title="Isle of the Dead" href="#/ink-gallery/isle-of-the-dead" />
    </div>
    <div className="row">
     <GalleryItem src={archer} title="Archer" href="#/ink-gallery/archer" />
     <GalleryItem src={fairy} title="Fairy Princess" href ="#/ink-gallery/fairy-princess" />
     <GalleryItem src={lost} title="Lost Somehow" href="#/ink-gallery/lost-somehow" />
    </div>
    <div className="row">
     <GalleryItem src={battle} title="Battle" href="#/ink-gallery/battle" />
     <GalleryItem src={deathsprocession} title="Death's Procession" href="#/ink-gallery/deaths-procession" />
     <GalleryItem src={king} title="King" href="#/ink-gallery/king" />
    </div>
    <div className="row">
     <GalleryItem src={rider} title="Black Rider" href="#/ink-gallery/black-rider" />
     <GalleryItem src={crossroads} title="Knight at the Crossroads" href="#/ink-gallery/crossroads" />
     <GalleryItem src={knight} title="Knight" href="#/ink-gallery/knight" />
    </div>
    <div className="row">
     <GalleryItem src={knightCombat} title="Knights in Combat" href="#/ink-gallery/knights-in-combat" />
     <GalleryItem src={thorns} title="Prince of Thorns" href="#/ink-gallery/prince-of-thorns" />
     <GalleryItem src={saxophone} title="Saxophone" href="#/ink-gallery/saxophone" />
    </div>
    <div className="row">
     <GalleryItem src={serpent} title="Serpent Slayer" href="#/ink-gallery/serpent-slayer" />
     <GalleryItem src={stalker} title="Stalker" href="#/ink-gallery/stalker" />
     <GalleryItem src={stalker2} title="Stalker II" href="#/ink-gallery/stalker2" />
    </div>
    <div className="row">
     <GalleryItem src={theodon} title="King Theodon, Poisoned" href="#/ink-gallery/theodon" />
     <GalleryItem src={cowboy} title="Cowboy Contemplates the Storm" href="#/ink-gallery/cowboy" />
     <GalleryItem src={forest} title="Forest Path" href="#/ink-gallery/forest-path" />
    </div>
    <Footer />
    </>
  )
}
