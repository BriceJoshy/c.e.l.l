import React from "react";
import { useState } from "react";

const EmailPass = () => {
  const [inputEmailValue, setInputEmailValue] = useState("");
  const handleEmailInputChange = (event) => {
    setInputEmailValue(event.target.value);
  };
  const [inputPasswordValue, setInputPasswordValue] = useState("");
  const handlePasswordInputChange = (event) => {
    setInputPasswordValue(event.target.value);
  };
  return (
    <>
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
      <div>
        <div className="PasswordInput">
          <div className="row">
            <input
              className="PasswordTextField"
              value={inputPasswordValue}
              onChange={handlePasswordInputChange}
              required
            />
            <label
              className={`floating-label ${inputPasswordValue ? "active" : ""}`}
            >
              Password
            </label>
            <img
              src={require("../assets/password.png")}
              alt="name"
              height={"20px"}
              style={{ marginRight: "20px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailPass;
