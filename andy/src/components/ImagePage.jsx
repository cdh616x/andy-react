//jshint esversion:6

import React from "react";

export default function ImagePage(props) {
  return (
    <>
    <h1 className="page-title">{props.title}</h1>
    <h1>
    <img className="img-fluid" src={props.src} />
    </h1>
    </>
  );
}
