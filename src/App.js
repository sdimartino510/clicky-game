import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Data from "./data.json";

class App extends Component {
  state = {
    Data,
    score: 0,
    highScore: 0
  };
  render() {
    return (
      <div className="App">
        <Header />

        <p>
          Click on an image to earn points, but don't click on any more than
          once!
        </p>
      </div>
    );
  }
}

export default App;
