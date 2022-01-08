//jshint esversion:6

import Navbar from "./components/Navbar.jsx";
import Banner from "./full-images/banner.png";
import Carousel from "./components/Carousel.jsx";
import Footer from "./components/Footer.jsx";

import CarouselItem from "./components/CarouselItem.jsx"
import "./App.css";


function App() {
  return (
    <div className="App">
     <Navbar />
     <img className="banner" src={Banner}/>
     <Carousel />
     <Footer />
    </div>
  );
}

export default App;
