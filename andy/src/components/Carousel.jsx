//jshint esversion:6

import logo from "../full-images/logo.png";
import banner from "../full-images/banner.png";

export default function Carousel() {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
     <div className="row">
      <div className="card">
       <a>
        <img className="img-fluid" src={logo} />
       </a>
      </div>
      <div className="card">
       <a>
        <img className="img-fluid"src={logo} />
       </a>
      </div>
      <div className="card">
       <a>
        <img className="img-fluid" src={logo} />
       </a>
      </div>
     </div>
     </div>
     <div className="carousel-item">
      <div className="row">
       <div className="card">
        <a>
         <img className="img-fluid" src={logo} />
        </a>
       </div>
       <div className="card">
        <a>
         <img className="img-fluid"src={logo} />
        </a>
       </div>
       <div className="card">
        <a>
         <img className="img-fluid" src={logo} />
        </a>
       </div>
      </div>
      </div>
  </div>
</div>
  );
}
