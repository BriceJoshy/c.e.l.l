import { motion } from "framer-motion";
import "../index.css";
import WelcomePage from "./WelcomePage";
import LoginPage from "./LoginPage";
import HomeScreen from "./HomeScreen";
import { useState } from "react";

const Transition = () => {
  const [screen, setScreen] = useState("WELCOME");
  return (
    <div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: screen === "WELCOME" ? 1 : 0 }}
        transition={{ duration: 1 }}
        style={{ display: screen === "WELCOME" ? "block" : "none" }}
      >
        <WelcomePage setScreen={setScreen} />
      </motion.div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: screen === "LOGIN" ? 1 : 0 }}
        transition={{ duration: 1 }}
        style={{ display: screen === "LOGIN" ? "block" : "none" }}
      >
        <LoginPage setScreen={setScreen} />
      </motion.div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: screen === "HOME" ? 1 : 0 }}
        transition={{ duration: 1 }}
        style={{ display: screen === "HOME" ? "block" : "none" }}
      >
        <HomeScreen setScreen={setScreen} />
      </motion.div>
    </div>
  );
};

export default Transition;
