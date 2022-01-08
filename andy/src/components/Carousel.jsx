//jshint esversion:6
import React from "react";

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
    <div className="carousel-item active" data-bs-interval="8000">
     <div className="row">
      <CarouselItem src={archer} title="Archer" />
      <CarouselItem src={knightstudy} title="Knight" />
      <CarouselItem src={arrowhead} title="Arrowhead" />
     </div>
     </div>
     <div className="carousel-item" data-bs-interval="8000">
      <div className="row">
      <CarouselItem src={deathsprocession} title="Death's Procession" />
      <CarouselItem src={fairy} title="Fairy Princess" />
      <CarouselItem src={isle} title="Isle of the Dead" />
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="8000">
     <div className="row">
     <CarouselItem src={metroid} title="Metroid"/>
     <CarouselItem src={neon} title="Neon Sign"/>
     <CarouselItem src={jungle} title="Jungle King"/>
     </div>
   </div>
   <div className="carousel-item" data-bs-interval="8000">
    <div className="row">
    <CarouselItem src={knightsword} title="Knight Presenting his Sword"/>
    <CarouselItem src={lost} title="Lost Somehow"/>
    <CarouselItem src={homecoming} title="A Young Knight's Homecoming"/>
    </div>
  </div>
  <div className="carousel-item" data-bs-interval="8000">
   <div className="row">
   <CarouselItem />
   <CarouselItem />
   <CarouselItem />
   </div>
 </div>
 <div className="carousel-item" data-bs-interval="8000">
  <div className="row">
  <CarouselItem />
  <CarouselItem />
  <CarouselItem />
  </div>
</div>
  </div>
</div>
  );
}
