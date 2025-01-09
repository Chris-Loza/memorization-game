import React from "react";
import "./square.css";

const Square = () => {
  let squareColor;
  const hexCode = "FF0000";
  switch (hexCode) {
    case "#FF0000":
      squareColor = "red";
      break;
    case "#00FF00":
      squareColor = "#00FF00";
      break;
    case "#0000FF":
      squareColor = "#0000FF";
      break;
    case "#FFFF00":
      squareColor = "#FFFF00";
      break;
    case "#800080":
      squareColor = "#800080";
      break;
    case "#FFA500":
      squareColor = "#FFA500";
      break;
    case "#964B00":
      squareColor = "#964B00";
      break;
    case "#808080":
      squareColor = "#808080";
      break;
    case "#FFC0CB":
      squareColor = "#FFC0CB";
      break;
    default:
        squareColor = "D9D9D9"
  }

  return (
    <div className="squareContainer">
      <div className={`square ${squareColor}`}></div>
    </div>
  );
};

export default Square;
