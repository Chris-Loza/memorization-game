import React from "react";
import "./homepage.css";

const Homepage = () => {
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
            Individual Square Component x9
          </div>
          <p>
            <b>Highest Round: </b>#
          </p>
        </div>
        <div className="footerContainer">
					<div className="myLinks">My Links</div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
