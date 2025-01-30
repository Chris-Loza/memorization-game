import { GlobalContext } from "../../library/globalstate";
import "./square.css";
import { useContext, useState } from "react";

const Square = ({ hexCode, index }) => {
  const { orderArray, setOrderArray, comparisonArray, setComparisonArray } =
    useContext(GlobalContext);
  const [flash, setFlash] = useState(false);
  console.log(index);

  let squareColor;
  switch (hexCode) {
    case "#FF0000":
      squareColor = "red";
      break;
    case "#00FF00":
      squareColor = "green";
      break;
    case "#0000FF":
      squareColor = "blue";
      break;
    case "#FFFF00":
      squareColor = "yellow";
      break;
    case "#800080":
      squareColor = "purple";
      break;
    case "#FFA500":
      squareColor = "orange";
      break;
    case "#964B00":
      squareColor = "brown";
      break;
    case "#808080":
      squareColor = "gray";
      break;
    case "#FFC0CB":
      squareColor = "pink";
      break;
    default:
      squareColor = "D9D9D9";
  }

  return (
    <div className="squareContainer">
      <div className={`square ${squareColor} ${flash ? "flash" : ""}`}></div>
    </div>
  );
};

export default Square;
