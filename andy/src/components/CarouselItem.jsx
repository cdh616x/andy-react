//jshint esversion:6

import React from "react";

export default function CarouselItem(props) {
  return (
    <>
    <div className="card">
     <a href="#">
      <img className="img-fluid" src={props.src} />
     </a>
     <div className="card-title">
     <a href="3">
     <h3>{props.title}</h3>
     </a>
     </div>
    </div>
    </>
  );
}