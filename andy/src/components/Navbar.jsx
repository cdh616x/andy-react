//jshint esversion:6

import React from "react";
import Icon from "../full-images/logo.png";

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
     <div className="container-fluid">
      <a className="navbar-brand" href="#/">
       <img id="icon" src={Icon} />

      </a>

       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
       </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#/">Home</a>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Galleries
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#/ink-gallery">Ink Drawings</a></li>
            <li><a className="dropdown-item" href="#/paintings">Paintings</a></li>

          </ul>
        </li>
        <li className="nav-item shop-button">
          <a className="nav-link shop" href="#/shop">Shop</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
