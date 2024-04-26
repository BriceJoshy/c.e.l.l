import React, { useEffect, useState } from "react";
import "./index.css";
import WelcomePage from "./components/WelcomePage";
import LoadingScreen from "./components/LoadingScreen";
import Transition from "./components/Transition";

const App = () => {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setisLoading(false);
      }, 3000);
    };

    fakeDataFetch();
  }, []);
  return isLoading ? <LoadingScreen /> : <Transition />;
};

export default App;
