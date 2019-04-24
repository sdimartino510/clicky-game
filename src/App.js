import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Data from "./data.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <p>
          Click on an image to earn points, but don't click on any more than
          once!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    );
  }
}

export default App;
