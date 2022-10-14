import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer"

import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route  path="/Shop" component={Shop}/>
          <Route  path="/Blog" component={Blog}/>
          <Route  path="/About" component={About}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
