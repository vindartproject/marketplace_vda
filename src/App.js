import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer"

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Header />
          <Route exact path="/" element={<Home/>}/>
          <Route  path="/Shop" element={<Shop/>}/>
          <Route  path="/Blog" element={<Blog/>}/>
          <Route  path="/About" element={<About/>}/>
        <Footer />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
