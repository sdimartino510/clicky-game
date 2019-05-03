import React from "react";

const Header = props => (
  <div className="App-header bg-danger">
    Avengers Memory Game
    <div className="title">{props.children}</div>
    <div className="scores">
      Score: {props.score} | High Score: {props.highScore}
    </div>
  </div>
);

export default Header;
