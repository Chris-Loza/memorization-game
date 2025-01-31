import { GlobalContext } from "../../library/globalstate";
import "./square.css";
import { useContext, useEffect, useState } from "react";

const Square = ({ hexCode, isFlashing, flashKey }) => {
  const { orderArray, setOrderArray, comparisonArray, setComparisonArray } =
    useContext(GlobalContext);
  const [isActive, setIsActive] = useState(false);

  // useEffect to give flash class to flashing squares only for 2 seconds
  useEffect(() => {
    if (isFlashing) {
      setIsActive(false);
      setTimeout(() => setIsActive(true), 0);
      const flashTimer = setTimeout(() => {
        setIsActive(false);
      }, 3000);

      return () => clearTimeout(flashTimer); // Cleanup function
    } else {
      setIsActive(false);
    }
  }, [isFlashing, flashKey]);

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
      <div className={`square ${squareColor} ${isActive ? "flash" : ""}`}></div>
    </div>
  );
};

export default Square;
