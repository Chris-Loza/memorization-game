import { useContext, useEffect, useState } from "react";
import "./homepage.css";
import Square from "../Square/Square";
import { GlobalContext } from "../../library/globalstate";

const Homepage = () => {
  const [colorArray, setColorArray] = useState([]);
  const [roundNumber, setRoundNumber] = useState(0);
  const [highestRoundNumber, setHighestRoundNumber] = useState(1000);
  const [gameRunning, setGameRunning] = useState(false);
  const { orderArray, setOrderArray, comparisonArray, setComparisonArray } =
    useContext(GlobalContext);
  const [flashKey, setFlashKey] = useState(0);

  const colors = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#800080",
    "#FFA500",
    "#964B00",
    "#808080",
    "#FFC0CB",
  ];

  const handleGameToggle = () => {
    if (!gameRunning) {
      const randomizedColors = colors.sort(() => Math.random() - 0.5);
      const initialOrderArray = Array.from({ length: 3 }, () =>
        Math.floor(Math.random() * 9)
      );
      setOrderArray(initialOrderArray);
      setColorArray(randomizedColors);
      setFlashKey((prevKey) => prevKey + 1);
    } else {
      setColorArray([]);
    }
    setGameRunning(!gameRunning);
  };

  useEffect(() => {
    setOrderArray([...orderArray]);
  }, [gameRunning]);

  console.log(orderArray);
  return (
    <>
      <div className="parentContainer">
        <div className="headerContainer">
          <a
            href="../../../public/images/FinalResume112524.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Hire Me</p>
          </a>
        </div>
        <div className="gameContainer">
          <p>
            <b>Round: </b>
            {roundNumber}
          </p>
          <div className="squareGridContainer">
            {Array.from({ length: 9 }, (_, i) => (
              <Square
                key={i}
                hexCode={colorArray[i]}
                index={i}
                isFlashing={orderArray.includes(i)}
                flashKey={flashKey}
              />
            ))}
          </div>
          <p>
            <b>Highest Round: </b>
            {highestRoundNumber}
          </p>
        </div>
        <div className="footerContainer">
          <div className="myLinks">
            <a
              href="https://github.com/Chris-Loza?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="../../../images/githubicon.svg"
                alt="Github"
                width={"40px"}
              />
            </a>
            <div className="linkedInImgContainer">
              <a
                href="https://www.linkedin.com/in/christianloza/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="../../../images/linkedInIconBlack.svg"
                  alt="LinkedIn"
                  className="linkedIn"
                  width={"40px"}
                />
              </a>
            </div>
          </div>
          <div className="startStopSubmitButton">
            <button
              className={gameRunning ? "stopButton" : "startButton"}
              onClick={handleGameToggle}
            >
              {gameRunning ? "Stop" : "Start"}
            </button>
            <button className="submitButton">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
