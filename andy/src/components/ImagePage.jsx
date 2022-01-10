//jshint esversion:6

import React from "react";

export default function ImagePage(props) {
  return (
    <>
    <h1>{props.title}</h1>
    <img className="img-fluid" src={props.src} />
    </>
  );
}
