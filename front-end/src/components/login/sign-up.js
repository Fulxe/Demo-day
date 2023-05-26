import React, { useState  } from "react";
import "./sign-up.css";
import { useNavigate } from "react-router";
import AnimatedPage from "../AnimatedPage";
import axios from "axios";
import {storage} from "../Profile/firebase.config"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Avatar from "@mui/material/Avatar";

function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ password: "", email: "", username: "", image:"" });
  const signUp = async () => {
    try {
      const user = await axios.post("http://localhost:8000/create", {
        username: form.username,
        email: form.email,
        password: form.password,
        image:form.image
      });
      setForm({ password: "", email: "", username: "" });
      console.log(user);
      // localStorage.setItem("", user.data.data._id);
      if (user) {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    const imageRef = ref(storage, "image");
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
        setImage(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <AnimatedPage>
      <div className="signup">
        <div className="bubble1"></div>
        <div className="bubble2"></div>
        <div className="bubble3"></div>
        <div class="signup-main">
          <form autocomplete="off" className="signup-form">
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
              onClick={() => signUp()}
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
          </form>
          <div className="sign-image">
            <Avatar src={url} sx={{ width: 150, height: 150 }} />
            <input
              alt=""
              type="file"
              // src={Protest}
              onChange={handleImageChange}
            />
            <button onClick={handleSubmit}>Change</button>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default SignUp;
