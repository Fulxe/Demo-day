import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Login from "./components/login/login";
import SignUp from "./components/login/sign-up";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
<<<<<<< HEAD
          <Route element={<App />} index />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
=======
          <Route path="" element={<App />} />
          <Route path="/about" element={<AboutUs/>}/>
>>>>>>> 9274b31 (g)
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
