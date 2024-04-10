import React from "react";
import "./index.css";

import TitleText from "./components/TitleText";
const App = () => {
  return (
    <>
      <div>
        <img src="" alt="" />
      </div>
      <div className="bgWelcome">
        <img src={require("./assets/darkMatter.gif")} alt="loading..." />
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

export default App;
