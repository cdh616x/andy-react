//jshint esversion:6

import Navbar from "./components/Navbar.jsx";
import Banner from "./full-images/banner.png";
import Carousel from "./components/Carousel.jsx";
import Social from "./components/Social.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";

//import CarouselItem from "./components/CarouselItem.jsx"
import "./App.css";


function App() {
  return (
    <div className="App">
     <Navbar />
     <img className="banner" src={Banner}/>
     <Carousel />
     <Social />
     <About />
     <Footer />
    </div>
  );
}

export default App;
