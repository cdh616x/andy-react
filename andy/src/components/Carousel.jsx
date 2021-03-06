//jshint esversion:6
import React from "react";

//self
import chairs from "../full-images/self/chairs.jpg";
import con from "../full-images/self/convention.jpg";
import level from "../full-images/self/level.jpg";
import storm from "../full-images/self/storm.jpg";

//prints
import arrowhead from "../thumbnail-images/arrowhead.jpg";
import archer from "../thumbnail-images/archer.jpg";
import fairy from "../thumbnail-images/fairyprincess.jpg";
import isle from "../thumbnail-images/isle-of-the-dead.jpg";
import knightsword from "../thumbnail-images/knight-sword.jpg";
import lost from "../thumbnail-images/lost-somehow.jpg";

//non-prints
import battle from "../thumbnail-images/battle.jpg";
import deathsprocession from "../thumbnail-images/deaths-procession.jpg";
import king from "../thumbnail-images/king.jpg";
import knightstudy from "../thumbnail-images/knight-study.jpg";
import metroid from "../thumbnail-images/metroid.jpg";
import neon from "../thumbnail-images/neon-sign.jpg";
import jungle from "../thumbnail-images/jungle-king.jpg";
import homecoming from "../thumbnail-images/homecoming.jpg";

import logo from "../full-images/logo.png";
import banner from "../full-images/banner.png";

import CarouselItem from "./CarouselItem.jsx";

export default function Carousel() {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="5000">
     <div className="row">
      <CarouselItem src={archer} title="Archer" href="#/ink-gallery/archer" />
      <CarouselItem src={storm} title="Lions & Rabbits Storm Drain Initiative" />
      <CarouselItem src={arrowhead} title="Arrowhead" href="#/ink-gallery/arrowhead" />
     </div>
     </div>
     <div className="carousel-item" data-bs-interval="5000">
      <div className="row">
      <CarouselItem src={deathsprocession} title="Death's Procession" href="#/ink-gallery/deaths-procession" />
      <CarouselItem src={level} title="Blue Owl Gallery Show" />
      <CarouselItem src={isle} title="Isle of the Dead" href="#/ink-gallery/isle-of-the-dead" />
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="5000">
     <div className="row">
     <CarouselItem src={metroid} title="Metroid Prime" href="#/paintings/metroid" />
     <CarouselItem src={chairs} title="Blue Owl Gallery Show" />
     <CarouselItem src={jungle} title="Jungle King" href="paintings/jungle-king" />
     </div>
   </div>
   <div className="carousel-item" data-bs-interval="5000">
    <div className="row">
    <CarouselItem src={knightsword} title="Knight Presenting his Sword" href="#/ink-gallery/knight-sword" />
    <CarouselItem src={con} title="Grand Rapids Comic Con" />
    <CarouselItem src={homecoming} title="A Young Knight's Homecoming" href="#/paintings/knights-homecoming" />
    </div>
  </div>
</div>
  </div>
  );
}
