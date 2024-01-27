import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from 'react';


import Home from "./containers/home";
import About from "./containers/about";
import Contact from "./containers/contact";
import Work from "./containers/work";
import Experiene from "./containers/experiene";
import Skills from "./containers/skills";
import Navbar from "./components/navBar";

function App() {

  return (
    <div className="App">
      

      <Navbar />
      <Home />
      <About />
      <Work />
      <Skills />
      <Experiene />
      <Contact />

    </div>
  );
}

export default App;
