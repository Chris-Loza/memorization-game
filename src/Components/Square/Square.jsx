import { GlobalContext } from "../../library/globalstate";
import "./square.css";
import { useContext, useEffect, useState } from "react";

const Square = ({
  hexCode,
  isFlashing,
  flashKey,
  orderArrayIndex,
  squareIndex,
}) => {
  const { orderArray, setOrderArray, comparisonArray, setComparisonArray } =
    useContext(GlobalContext);
  const [isActive, setIsActive] = useState(false);
  const [fadeSquare, setFadeSquare] = useState(false);

  // useEffect to give flash class to flashing squares only for 2 seconds
  useEffect(() => {
    setIsActive(false);
    setFadeSquare(false);
    if (isFlashing) {
      setTimeout(() => {
        setIsActive(true);
        setFadeSquare(true);
      }, orderArrayIndex * 2000);

      const flashTimer = setTimeout(() => {
        setIsActive(false);
        setFadeSquare(false);
      }, orderArrayIndex * 2000 + 1500);

      return () => clearTimeout(flashTimer); // Cleanup function
    } else {
      setIsActive(false);
    }
  }, [isFlashing, flashKey]);

  console.log(
    "Square " + squareIndex + " Order Array index " + orderArrayIndex
  );

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

  const handleSquareClick = () => {
    setComparisonArray([...comparisonArray, squareIndex]);
  };

  console.log(comparisonArray);
  console.log("Order Array " + orderArray);
  return (
    <div className="squareContainer">
      <div
        className={`square ${fadeSquare ? squareColor : ""} ${
          isActive ? "flash" : ""
        }`}
        onClick={handleSquareClick}
        onMouseDown={() => setFadeSquare(true)}
        onMouseUp={() => setFadeSquare(false)}
      ></div>
    </div>
  );
};

export default Square;
