import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router";
import AnimatedPage from "../AnimatedPage";
import axios from "axios";
// import { CategoryContext } from "../../provider/category";

function Login() {
  const navigate = useNavigate();
  // const {id , setId} = useContext(CategoryContext);
  const [form, setForm] = useState({ password: "", email: "" });

  const logIn = async () => {
    try {
      const user = await axios.post("http://localhost:8000/login", {
        email: form.email,
        password: form.password,
      });

      setForm({ password: "", email: "" });
      if (user) {
        localStorage.setItem("id", user.data.id);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <AnimatedPage>
      <div className="login">
        <div className="bubble1"></div>
        <div className="bubble2"></div>
        <div className="bubble3"></div>
        <div class="login-main">
          <div className="login-form">
            <button onClick={() => navigate("/")}>Back</button>
            <h1>Log in</h1>
            <div className="login-input">
              <input
                type="firstName"
                required="required"
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                }}
              />
              <span>Username or E-mail</span>
              <i></i>
            </div>
            <div className="login-input">
              <input
                type="password"
                required="required"
                onChange={(e) => {
                  setForm({ ...form, password: e.target.value });
                }}
              />
              <span>Password</span>
              <i></i>
            </div>
            <button type="button" className="login-main-button" onClick={logIn}>
              Log in
            </button>
            <div className="login-sign">
              <p>Don't have an account?</p>
              <p
                className="login-sign-button"
                onClick={() => navigate("/sign-up")}
              >
                Sign Up
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Login;
