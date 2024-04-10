import { useState, useCallback, useEffect } from "react";
import "../index.css";

const WelcomeTexts = [
  "VERSATILITY",
  "ADAPTABILITY",
  "PROFICIENCY",
  "COMPETENCE",
  "MULTIFARIOUS",
];

const TitleText = () => {
  let i = 0;
  const [newTitle, setnewTitle] = useState("");
  const Title = useCallback(() => {
    setnewTitle(WelcomeTexts[i]);
    i = (i + 1) % WelcomeTexts.length;
    console.log(i);
  }, []);

  //   console.log("sjbojef");
  useEffect(() => {
    const intervalID = setInterval(Title, 3000);
    return () => clearInterval(intervalID);
  }, [Title]);
  return (
    <div className="typewriterDiv">
      <div id="arrowBlink">{"<"}</div>
      <h1 className="typewriterText">{newTitle}</h1>
      <div id="arrowBlink">{"/>"}</div>
    </div>
  );
};

export default TitleText;
