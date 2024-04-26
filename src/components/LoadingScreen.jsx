import { div } from "three/examples/jsm/nodes/Nodes.js";
import "../index.css";

const LoadingScreen = () => {
  return (
    <div className="bgWelcome">
      <div className="centreText">
        <img
          src={require("../assets/loading.gif")}
          // width={150}
          height={400}
          alt="loading gif"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
