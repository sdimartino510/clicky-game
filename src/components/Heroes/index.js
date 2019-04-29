import React from "react";
// import "./style.css";

const clickCounter = () => {
  console.log("This is a Hero");
};
function Heroes(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img onClick={clickCounter} alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <strong>{props.name}</strong>
      </div>
    </div>
  );
}

export default Heroes;
