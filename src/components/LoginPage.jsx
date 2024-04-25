import React from "react";
import LoginNavBar from "./LoginNavBar";
import Name from "./LoginPageName";
import { useState } from "react";
const LoginPage = () => {
  const [inputEmailValue, setInputEmailValue] = useState("");
  const handleEmailInputChange = (event) => {
    setInputEmailValue(event.target.value);
  };
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
        <div className="EmailInput">
          <div className="row">
            <input
              className="EmailTextField"
              value={inputEmailValue}
              onChange={handleEmailInputChange}
              required
            />
            <label
              className={`floating-label ${inputEmailValue ? "active" : ""}`}
            >
              Email
            </label>
            <img
              src={require("../assets/email.png")}
              alt="name"
              height={"20px"}
              style={{ marginRight: "20px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
