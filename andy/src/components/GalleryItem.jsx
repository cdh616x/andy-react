//jshint esversion:6

import React from "react";

export default function GalleryItem(props) {
  return (
    <>
    <div className="card">
     <a href={props.href} target="_blank">
      <img className="img-fluid mx-auto" src={props.src} />
     </a>
     <div className="card-title">
     <a href={props.href} target="_blank">
     <h3>{props.title}</h3>
     </a>
     <h4 className="print">{props.print}</h4>
     </div>
    </div>
    </>
  );
}
