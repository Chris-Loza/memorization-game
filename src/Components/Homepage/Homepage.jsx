import React, { useEffect, useState } from "react";
import "./homepage.css";
import Square from "../Square/Square";

const Homepage = () => {
  const [colorArray, setColorArray] = useState([]);

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
          <p>Hire Me</p>
        </div>
        <div className="gameContainer">
          <p>
            <b>Round: </b>#
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
            <b>Highest Round: </b>#
          </p>
        </div>
        <div className="footerContainer">
          <div className="myLinks">
            <img
              src="../../../public/images/githubicon.svg"
              alt="Github"
              width={"40px"}
            />
            <div className="linkedInImgContainer">
              <img
                src="../../../public/images/linkedInIconBlack.svg"
                alt="LinkedIn"
                className="linkedIn"
                width={"40px"}
              />
            </div>
            <img
              src="../../../public/images/emailIconBlack.png"
              alt="Email"
              width={"40px"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
