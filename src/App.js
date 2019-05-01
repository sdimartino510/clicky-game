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
  handleClick = id => {
    console.log("I clicked on ", id);
    this.state.Data.find((hero, i) => {
      if (hero.id === id) {
        if (Data[i].count === 0) {
          Data[i].count += 1;
          this.setState(
            {
              score: this.state.score + 1
            },
            function() {
              console.log(this.state.score);
            }
          );
          this.state.Data.sort(() => Math.random() - 0.5);
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  };

  gameOver = () => {
    if (this.state.score > this.state.highScore) {
      this.setState(
        {
          highScore: this.state.score
        },
        function() {
          console.log(this.state.highScore);
        }
      );
    }
    this.state.Data.forEach(hero => {
      hero.count = 0;
    });
    alert(`Game Over! Please try again. \nScore: ${this.state.score}`);
    this.setState({
      score: 0
    });
  };

  render() {
    return (
      <div className="App">
        <Header score={this.state.score} highScore={this.state.highScore} />
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
              handleClick={this.handleClick}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
