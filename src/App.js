import React, { useEffect, useState } from "react";
import "./index.css";
import WelcomePage from "./components/WelcomePage";
import LoadingScreen from "./components/LoadingScreen";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
]);

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
  return isLoading ? <LoadingScreen /> : <RouterProvider router={router} />;
};

export default App;
