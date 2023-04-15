import React from "react";
import "./login.css";
import { useNavigate } from "react-router";
import AnimatedPage from "../AnimatedPage";

function Login() {
  const navigate = useNavigate();
  return (
    // <div className="login">
    //   <div className="login-main">
    //     <h1>Log in</h1>
    //     <input placeholder="Username" />
    //     <i></i>
    //     <input placeholder="Password" />
    //     <i></i>
    //     <button>Log in</button>
    //     <div className="login-sign">
    //       <p>Don't have an account?</p>
    //       <p className="login-sign-button" onClick={() => navigate("/sign-up")}>
    //         Sign Up
    //       </p>
    //     </div>
    //   </div>
    //   <div></div>
    // </div>
    <AnimatedPage>
    <div className="login">
      <div class="login-main">
        <form autocomplete="off" className="login-form">
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
