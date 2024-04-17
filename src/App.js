import React, { useEffect, useState } from "react";
import "./index.css";
import WelcomePage from "./components/WelcomePage";
import LoadingScreen from "./components/LoadingScreen";
import { AnimatePresence } from "framer-motion";
import LoginPage from "./components/LoginPage";

const App = () => {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setisLoading(false);
      }, 5000);
    };

    fakeDataFetch();
  }, []);
  return (
    <AnimatePresence mode="wait">
      {isLoading ? <LoadingScreen /> : <WelcomePage />}
    </AnimatePresence>
  );
};

export default App;
