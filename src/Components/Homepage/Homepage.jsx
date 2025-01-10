import React, { useEffect, useState } from "react";
import "./homepage.css";
import Square from "../Square/Square";

const Homepage = () => {
  const [colorArray, setColorArray] = useState([]);
  const [roundNumber, setRoundNumber] = useState(0);
  const [highestRoundNumber, setHighestRoundNumber] = useState(1000);

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

  useEffect(() => {
    const randomizedColors = colors.sort(() => Math.random() - 0.5);
    setColorArray(randomizedColors);
  }, []);

  console.log(colorArray);
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
            <b>Round: </b>{roundNumber}
          </p>
          <div className="squareGridContainer">
            <Square hexCode={colorArray[0]} />
            <Square hexCode={colorArray[1]} />
            <Square hexCode={colorArray[2]} />
            <Square hexCode={colorArray[3]} />
            <Square hexCode={colorArray[4]} />
            <Square hexCode={colorArray[5]} />
            <Square hexCode={colorArray[6]} />
            <Square hexCode={colorArray[7]} />
            <Square hexCode={colorArray[8]} />
          </div>
          <p>
            <b>Highest Round: </b>{highestRoundNumber}
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
                src="../../../public/images/githubicon.svg"
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
                  src="../../../public/images/linkedInIconBlack.svg"
                  alt="LinkedIn"
                  className="linkedIn"
                  width={"40px"}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
