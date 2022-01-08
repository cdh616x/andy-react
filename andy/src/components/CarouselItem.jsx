import React from "react";

export default function CarouselItem(props) {
  return (
    <>
    <div className="card">
     <a>
      <img className="img-fluid" src={props.src}/>
     </a>
     <div className="card-title">
     <h3>{props.title}</h3>
     </div>
    </div>
    </>
  );
}
