import React from "react";
import { useState } from "react";

const Name = () => {
  const [inputfirstNameValue, setInputFirstNameValue] = useState("");
  const [inputLastNameValue, setInputLastNameValue] = useState("");
  const handleFirstNameInputChange = (event) => {
    setInputFirstNameValue(event.target.value);
  };
  const handleLastNameInputChange = (event) => {
    setInputLastNameValue(event.target.value);
  };
  return (
    <div className="row">
      <div className="NameInput1">
        <div className="row">
          <input
            className="nameTextField"
            value={inputfirstNameValue}
            onChange={handleFirstNameInputChange}
            required
          />
          <label
            className={`floating-label ${inputfirstNameValue ? "active" : ""}`}
          >
            First name
          </label>
          <img src={require("../assets/name.png")} alt="name" height={"20px"} />
        </div>
      </div>
      <div className="NameInput2">
        <div className="row">
          <input
            className="nameTextField"
            value={inputLastNameValue}
            onChange={handleLastNameInputChange}
            required
          />
          <label
            className={`floating-label ${inputLastNameValue ? "active" : ""}`}
          >
            Last name
          </label>
          <img src={require("../assets/name.png")} alt="name" height={"20px"} />
        </div>
      </div>
    </div>
  );
};

export default Name;
