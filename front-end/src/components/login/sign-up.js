import React, { useState } from "react";
import "./sign-up.css";
import { useNavigate } from "react-router";
import AnimatedPage from "../AnimatedPage";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ password: "", email: "", username: "" });
  const signUp = async () => {
    try {
      const { data: user } = await axios.post("https://back-end-muruuuu8-gmailcom.vercel.app//create", {
        username: form.username,
        email: form.email,
        password: form.password,
      });
      setForm({ password: "", email: "", username: "" });
      console.log(user);
      if (user) {
        localStorage.setItem("id", user.data._id);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AnimatedPage>
      <div className="signup">
        <div className="bubble1"></div>
        <div className="bubble2"></div>
        <div className="bubble3"></div>
        <div class="signup-main">
          <div autocomplete="off" className="signup-form">
            <h1>Sign Up</h1>
            <div className="signup-input">
              <input
                required="required"
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                }}
              />
              <span>E-mail</span>
              <i></i>
            </div>
            <div className="signup-input">
              <input
                type="firsName"
                required="required"
                onChange={(e) => {
                  setForm({ ...form, username: e.target.value });
                }}
              />
              <span>Username</span>
              <i></i>
            </div>
            <div className="signup-input">
              <input
                type="password"
                required="required"
                onChange={(e) => {
                  setForm({ ...form, password: e.target.value });
                }}
              />
              <span type="password">Password</span>
              <i></i>
            </div>
            <button
              type="button"
              className="signup-main-button"
              onClick={() => signUp(navigate("/"))}
            >
              Sign Up
            </button>
            <div className="sign-sign">
              <p>Already have an account?</p>
              <p
                className="sign-sign-button"
                onClick={() => navigate("/login")}
              >
                Log In
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default SignUp;
