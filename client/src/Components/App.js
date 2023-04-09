import { useState, useEffect } from "react";
import {Routes, Route} from "react-router-dom";
import { SliderData } from "./SliderData";
import About from "./About";
import Home from "./Home";
import NavBar from "./NavBar";
import Contact from "./Contact";
import Projects from "./Projects";

console.log(SliderData)

function App() {



  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/projects" element={<Projects />}/>
      </Routes>
    </div>
  );
}

export default App;