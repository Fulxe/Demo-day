import React from "react";
import "./login.css";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="login">
      <div className="login-main">
        <h1>Log in</h1>
        <input placeholder="Username" />
        <input placeholder="Password" />
        <button>Log in</button>
        <div className="login-sign">
          <p>Don't have an account?</p>
          <p className="login-sign-button" onClick={() => navigate("/sign-up")}>
            Sign Up
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Login;
