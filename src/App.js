import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Data from "./data.json";
import Wrapper from "./components/Wrapper";
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
          Click on a comic book cover to earn a point. Click the same one twice
          and you lose!
        </p>
        <Wrapper className="wrapper">
          {this.state.Data.map(Data => (
            <Heroes
              id={Data.id}
              key={Data.id}
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
