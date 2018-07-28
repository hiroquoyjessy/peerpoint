import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import HomeCard from "./components/HomeCard";
import FormCard from "./components/FormCard";

import reducers from "./reducers";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  dataAggregate = obj => {
    this.setState({ ...obj });
  };

  render() {
    return (
      <Provider store={reducers}>
        <Router>
          <div className="main-wrapper">
            <Header />
            <div className="home-card-wrapper">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <HomeCard {...props} dataAggregate={this.dataAggregate} />
                  )}
                />
                <Route
                  exact
                  path="/form"
                  render={props => (
                    <FormCard {...props} dataAggregate={this.dataAggregate} />
                  )}
                />
              </Switch>
            </div>
            <Route exact path="/" render={props => <About />} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
