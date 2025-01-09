import React from "react";
import "./homepage.css";
import Square from "../Square/Square";

const Homepage = () => {
  return (
    <>
      <div className="parentContainer">
        <div className="headerContainer"><p>Hire Me</p></div>
        <div className="gameContainer">
          <p>
            <b>Round: </b>#
          </p>
          <div className="squareGridContainer">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
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
