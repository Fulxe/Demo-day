import React from "react";
import "./login.css";
import { useNavigate } from "react-router";
import AnimatedPage from "../AnimatedPage";

function Login() {
  const navigate = useNavigate();
  return (
    <AnimatedPage>
      <div className="login">
        <div className="bubble1"></div>
        <div className="bubble2"></div>
        <div className="bubble3"></div>
        <div class="login-main">
          <form autocomplete="off" className="login-form">
            <button onClick={()=> navigate("/")}>Back</button>
            <h1>Log in</h1>
            <div class="login-input">
              <input type="firstName" required="required" />
              <span>Username or E-mail</span>
              <i></i>
            </div>
            <div class="login-input">
              <input type="lastName" required="required" />
              <span>Password</span>
              <i></i>
            </div>
            <button className="login-main-button">Log in</button>
            <div className="login-sign">
              <p>Don't have an account?</p>
              <p
                className="login-sign-button"
                onClick={() => navigate("/sign-up")}
              >
                Sign Up
              </p>
            </div>
          </form>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Login;
