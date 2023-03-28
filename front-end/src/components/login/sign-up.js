import React from "react";
import "./sign-up.css";

function SignUp() {
  return (
    <div className="signup">
      <div class="signup-main">
        <form autocomplete="off" className="signup-form">
          <h1>Sign Up</h1>
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
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
