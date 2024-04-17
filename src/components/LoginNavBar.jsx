const LoginNavBar = () => {
  return (
    <div className="LoginNavBar">
      <div className="row">
        <img
          src={require("../assets/darkMatter.gif")}
          height={50}
          alt="logo image"
        />
        Welcome Back.
      </div>
      <div className="DimSpace">Home</div>
      <div className="DimSpace">Join</div>
    </div>
  );
};

export default LoginNavBar;
