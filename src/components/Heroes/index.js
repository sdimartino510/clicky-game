import React from "react";
// import "./style.css";

function Heroes(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          onClick={() => props.handleClick(props.id)}
          alt={props.name}
          src={props.image}
        />
      </div>
      <div className="content">
        <strong>{props.name}</strong>
      </div>
    </div>
  );
}

export default Heroes;
