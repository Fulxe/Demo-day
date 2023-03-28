import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Fruit from "./components/Fruit/fruit";
import Food from "./components/Food/food";
import Login from "./components/login/login";
import SignUp from "./components/login/sign-up";
import About from "./components/about/about";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="" element={<App />} />
          <Route path="/fruit" element={<Fruit />} />
          <Route path="/food" element={<Food />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
