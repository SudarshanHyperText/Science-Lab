import React, { useRef } from "react";
import Home from "./Home";

const Login = () => {
  const password = useRef();
  const getPassword = localStorage.getItem("passwordData");
  const handleSubmit = () => {
    if (password.current.value == "Test@123") {
      localStorage.setItem("passwordData", "Test@123");
    }
  };
  return (
    <div>
      {getPassword ? (
        <Home />
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label> Password</label>
            <input type={password} ref={password} />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
