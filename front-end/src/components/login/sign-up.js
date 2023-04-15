import React from "react";
import "./sign-up.css";
import { useNavigate } from "react-router";
import AnimatedPage from "../AnimatedPage";

function SignUp() {
  const navigate = useNavigate();
  return (
    <AnimatedPage>
      <div className="signup">
        <div class="signup-main">
          <form autocomplete="off" className="signup-form">
            <h1>Sign Up</h1>
            <div class="signup-input">
              <input type="firstName" required="required" />
              <span>E-mail</span>
              <i></i>
            </div>
            <div class="signup-input">
              <input type="firstName" required="required" />
              <span>Username</span>
              <i></i>
            </div>
            <div class="signup-input">
              <input type="lastName" required="required" />
              <span>Password</span>
              <i></i>
            </div>
            <button className="signup-main-button">Sign Up</button>
            <div className="sign-sign">
              <p>Already have an account?</p>
              <p
                className="sign-sign-button"
                onClick={() => navigate("/login")}
              >
                Log In
              </p>
            </div>
          </form>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default SignUp;
