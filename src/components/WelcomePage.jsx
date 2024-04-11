import React from "react";
import TitleText from "./TitleText";
import "../index.css";

const WelcomePage = () => {
  return (
    <>
      <div className="bgWelcome">
        <div className="logo">
          <img
            src={require("../assets/logo.png")}
            // width={150}
            height={80}
            alt="logo image"
          />
        </div>
        <div className="logoText">C.E.L.L</div>
        <img src={require("../assets/darkMatter.gif")} alt="loading..." />
        <div className="centreText">
          <TitleText />
        </div>
        <div className="centresubtitle">
          <a>THE FUTURE OF AI</a>
        </div>
      </div>
      <div className="exploreButton">
        <a>EXPLORE</a>
      </div>
    </>
  );
};

export default WelcomePage;
