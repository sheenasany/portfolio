// import { useState, useEffect } from "react";
import {Routes, Route} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import NavBar from "./NavBar";

function App() {


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;