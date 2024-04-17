import React from "react";
import LoginNavBar from "./LoginNavBar";
import transition from "../transition";

const LoginPage = () => {
  return (
    <div className="loginBG">
      <div className="LoginPage">
        <LoginNavBar />
      </div>
    </div>
  );
};

export default transition(LoginPage);
