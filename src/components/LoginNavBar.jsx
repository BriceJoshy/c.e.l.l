import "../index.css";

const LoginNavBar = () => {
  return (
    <div className="LoginNavBar">
      <div className="row">
        <img src={require("../assets/loading.gif")} height={50} alt="logo" />
        Welcome to C.E.L.L.
      </div>
      <div className="hover-underline-animation">Home</div>
      <div className="hover-underline-animation">Join</div>
    </div>
  );
};

export default LoginNavBar;
