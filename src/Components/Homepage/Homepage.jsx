import React from "react";
import "./homepage.css";

const Homepage = () => {
  return (
    <>
      <div className="parentContainer">
        Homepage
        <div className="headerContainer">Hire Me</div>
        <div className="gameContainer">
          Game Container
					<p><b>Round: </b>#</p>
					<div className="squareGridContainer">
						Individual Square Component x9
					</div>
					<p><b>Highest Round: </b>#</p>
				</div>
        <div className="footerContainer">My Links</div>
      </div>
    </>
  );
};

export default Homepage;
