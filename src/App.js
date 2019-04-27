import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Data from "./data.json";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Heroes from "./components/Heroes";

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
        <Wrapper>
          <Title>The Avengers</Title>
          {this.state.Data.map(Data => (
            <Heroes
              id={Data.id}
              // key={Data.id}
              name={Data.name}
              image={Data.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
