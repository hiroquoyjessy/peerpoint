import React, { Component } from "react";

import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import HomeCard from "./components/HomeCard";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <Header />
        <div className="home-card-wrapper">
          <div>
            <h1 className="main-text">
                America's #1 Business Funding Company!
            </h1>
          </div>
          <HomeCard />
        </div>
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
