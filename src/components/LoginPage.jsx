import React from "react";
import LoginNavBar from "./LoginNavBar";
import Name from "./LoginPageName";
import EmailPass from "./LoginEmailPass";

const LoginPage = () => {
  return (
    <div className="loginBG">
      <div className="LoginPage">
        <LoginNavBar />
      </div>
      <div style={{ marginLeft: "100px", color: "gray", marginBottom: "15px" }}>
        START FOR FREE
      </div>
      <div style={{ fontSize: "40px", marginLeft: "100px" }}>
        Create new account <span style={{ color: "#1d8ff4" }}>.</span>
      </div>
      <div
        style={{
          marginLeft: "100px",
          color: "gray",
          marginTop: "25px",
          fontSize: "15px",
        }}
      >
        Already a member? <span style={{ color: "#1d8ff4" }}>Log In</span>
      </div>
      <div style={{ display: "inline-block" }}>
        <Name />
      </div>
      <div>
        <EmailPass />
      </div>

      <div
        className="CreateAccount"
        onClick={() => {
          // setScreen("LOGIN");
        }}
      >
        Create Account
      </div>
      <div className="LoginPageGif">
        <img
          src={require("../assets/loginrobot.gif")}
          height={500}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default LoginPage;
