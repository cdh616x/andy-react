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
import king from "../thumbnail-images/king.jpg";

import rider from "../thumbnail-images/black-rider.jpeg";
import crossroads from "../thumbnail-images/crossroads.jpg";
import knight from "../thumbnail-images/knight.jpeg";
import knightCombat from "../thumbnail-images/knights-in-combat.jpg";
import thorns from "../thumbnail-images/prince-of-thorns.jpeg";
import saxophone from "../thumbnail-images/saxophone.jpg";
import serpent from "../thumbnail-images/serpent-slayer.jpg";
import stalker from "../thumbnail-images/stalker.png";
import stalker2 from "../thumbnail-images/stalker-2.jpg";
import theodon from "../thumbnail-images/theodon-poisoned.jpg";

export default function InkGallery() {
  return (
    <>
    <Navbar />
    <h1 className="page-title">Ink Drawings Gallery</h1>
    <div className="row">
     <GalleryItem src={arrowhead} title="Arrowhead" href="/ink-gallery/arrowhead" />
     <GalleryItem src={knightsword} title="Knight Presenting his Sword" href="/ink-gallery/knight-sword" />
     <GalleryItem src={isle} title="Isle of the Dead" />
    </div>
    <div className="row">
     <GalleryItem src={archer} title="Archer" />
     <GalleryItem src={fairy} title="Fairy" />
     <GalleryItem src={lost} title="Lost Somehow" />
    </div>
    <div className="row">
     <GalleryItem src={battle} title="Battle" />
     <GalleryItem src={deathsprocession} title="Death's Procession" />
     <GalleryItem src={king} title="King" />
    </div>
    <div className="row">
     <GalleryItem src={rider} title="Black Rider" />
     <GalleryItem src={crossroads} title="Knight at the Crossroads" />
     <GalleryItem src={knight} title="Knight" />
    </div>
    <div className="row">
     <GalleryItem src={knightCombat} title="Knights in Combat" />
     <GalleryItem src={thorns} title="Prince of Thorns" />
     <GalleryItem src={saxophone} title="Saxophone" />
    </div>
    <div className="row">
     <GalleryItem src={serpent} title="Serpent Slayer" />
     <GalleryItem src={stalker} title="Stalker" />
     <GalleryItem src={stalker2} title="Stalker II" />
    </div>
    <div className="row">
     <GalleryItem src={theodon} title="King Theodon, Poisoned" />
    </div>
    <Footer />
    </>
  )
}
