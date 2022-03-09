//jshint esversion:6

import { render } from "react-dom";
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import InkGallery from "./routes/ink-gallery.jsx";
import Paintings from "./routes/paintings.jsx";
import Shop from "./routes/shop.jsx";

import Arrowhead from "./routes/pages/arrowhead.jsx";
import KnightSword from "./routes/pages/knight-presenting-his-sword.jsx";
import Archer from "./routes/pages/archer.jsx";
import Battle from "./routes/pages/battle.jsx";
import BlackRider from "./routes/pages/black-rider.jsx";
import Isle from "./routes/pages/isle.jsx";
import Fairy from "./routes/pages/fairy.jsx";
import Lost from "./routes/pages/lost-somehow.jsx";
import DeathsProcession from "./routes/pages/deaths-procession.jsx";
import King from "./routes/pages/king.jsx";
import Crossroad from "./routes/pages/crossroads.jsx";
import Knight from "./routes/pages/knight.jsx";
import KnightCombat from "./routes/pages/knight-combat.jsx";
import Prince from "./routes/pages/prince-of-thorns.jsx";
import Saxophone from "./routes/pages/saxophone.jsx";
import Serpent from "./routes/pages/serpent-slayer.jsx";
import Stalker from "./routes/pages/stalker.jsx";
import Stalker2 from "./routes/pages/stalker2.jsx";
import Theodon from "./routes/pages/king-theodon.jsx";
import Cowboy from "./routes/pages/cowboy.jsx";
import Forest from "./routes/pages/forest-path.jsx";

import Andy from "./routes/pages/and-he-was.jsx";
import FallingDown from "./routes/pages/falling-down.jsx";
import Homecoming from "./routes/pages/knights-homecoming.jsx";
import Self from "./routes/pages/self-portrait.jsx";
import KnightStudy from "./routes/pages/knight-study.jsx";
import Metroid from "./routes/pages/metroid.jsx";
import Neon from "./routes/pages/neon-sign.jsx";
import Noble from "./routes/pages/noble-peasant.jsx";
import Jungle from "./routes/pages/jungle-king.jsx";
import Waterhouse from "./routes/pages/waterhouse.jsx";
import Woodcut from "./routes/pages/woodcut.jsx";
import Ranger from "./routes/pages/ranger.jsx";
import Desk from "./routes/pages/desk.jsx";
import Vestige from "./routes/pages/vestige.jsx";
import Brush from "./routes/pages/brush-studies.jsx";



const rootElement = document.getElementById("root");
render (
  <HashRouter>
   <Routes>
    <Route path="/" element={<App />} />

    <Route path="/ink-gallery" element={<InkGallery />} />
    <Route path="/paintings" element={<Paintings />} />
    <Route path="/shop" element={<Shop />} />

    <Route path="/ink-gallery/arrowhead" element={<Arrowhead />} />
    <Route path="/ink-gallery/knight-sword" element={<KnightSword />} />
    <Route path="/ink-gallery/archer" element={<Archer />} />
    <Route path="/ink-gallery/battle" element={<Battle />} />
    <Route path="/ink-gallery/black-rider" element={<BlackRider />} />
    <Route path="/ink-gallery/isle-of-the-dead" element={<Isle />} />
    <Route path="/ink-gallery/fairy-princess" element={<Fairy />} />
    <Route path="/ink-gallery/lost-somehow" element={<Lost />} />
    <Route path="/ink-gallery/deaths-procession" element={<DeathsProcession />} />
    <Route path="/ink-gallery/king" element={<King />} />
    <Route path="/ink-gallery/crossroads" element={<Crossroad />} />
    <Route path="/ink-gallery/knight" element={<Knight />} />
    <Route path="/ink-gallery/knights-in-combat" element={<KnightCombat />} />
    <Route path="/ink-gallery/prince-of-thorns" element={<Prince />} />
    <Route path="/ink-gallery/saxophone" element={<Saxophone />} />
    <Route path="/ink-gallery/serpent-slayer" element={<Serpent />} />
    <Route path="/ink-gallery/stalker" element={<Stalker />} />
    <Route path="/ink-gallery/stalker2" element={<Stalker2 />} />
    <Route path="/ink-gallery/theodon" element={<Theodon />} />
    <Route path="/ink-gallery/cowboy" element={<Cowboy />} />
    <Route path="/ink-gallery/forest-path" element={<Forest />} />

    <Route path="/paintings/and-he-was" element={<Andy />} />
    <Route path="/paintings/falling-down" element={<FallingDown />} />
    <Route path="/paintings/knights-homecoming" element={<Homecoming />} />
    <Route path="/paintings/self-portrait" element={<Self />} />
    <Route path="/paintings/knight-study" element={<KnightStudy />} />
    <Route path="/paintings/metroid" element={<Metroid />} />
    <Route path="/paintings/neon-sign" element={<Neon />} />
    <Route path="/paintings/noble-peasant" element={<Noble />} />
    <Route path="/paintings/jungle-king" element={<Jungle />} />
    <Route path="/paintings/waterhouse" element={<Waterhouse />} />
    <Route path="/paintings/knight-woodcut" element={<Woodcut />} />
    <Route path="/paintings/ranger" element={<Ranger />} />
    <Route path="/paintings/desk-still-life" element={<Desk />} />
    <Route path="/paintings/vestigial" element={<Vestige />} />
    <Route path="/paintings/digital-mixerbrush-studies" element={<Brush />} />


  </Routes>
 </HashRouter>,
  document.getElementById('root')
);

// ReactDOM.render(
//     <App />,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
