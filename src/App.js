import React, { Component } from "react";

import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <Header />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
