//jshint esversion:6

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import InkGallery from "./routes/ink-gallery.jsx";
import Arrowhead from "./routes/pages/arrowhead.jsx";
import KnightSword from "./routes/pages/knight-presenting-his-sword.jsx";

const rootElement = document.getElementById("root");
render (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<App />} />
    <Route path="/ink-gallery" element={<InkGallery />} />
    <Route path="/ink-gallery/arrowhead" element={<Arrowhead />} />
    <Route path="/ink-gallery/knight-sword" element={<KnightSword />} />
  </Routes>
 </BrowserRouter>,
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
