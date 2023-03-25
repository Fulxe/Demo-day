import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Fruit from "./components/Fruit/fruit" ; 
import Food from "./components/Food/food";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="" element={<App />} />
          <Route path="/fruit" element={<Fruit />} />
          <Route path="/food" element={<Food />} />
        </Route>
        <Route path="/login" />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
