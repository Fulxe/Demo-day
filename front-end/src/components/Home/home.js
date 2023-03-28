import "./home.css";
import React from "react";
import food1 from "./image/food1.jpg";
import fruit1 from "./image/fruit.jpg";
import food2 from "./image/food2.jpg";
import food3 from "./image/food3.jpg";
import fruit2 from "./image/fruit2.jpg";
import fruit3 from "./image/fruit3.jpg";
import nxtfood1 from "./image/nxt-food.jpg";
import nxtfruit1 from "./image/nxt-fruit.jpg";
import Footer from "../Footer/footer";
import {  useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="Home">
      <div className="home">
        <div className="image">
          <span>
            <img src={food1} alt="" />
          </span>
          <span>
            <img src={food2} alt="" />
          </span>
          <span>
            <img src={food3} alt="" />
          </span>
          <span>
            <img src={fruit1} alt="" />
          </span>
          <span>
            <img src={fruit2} alt="" />
          </span>
          <span>
            <img src={fruit3} alt="" />
          </span>
        </div>
        <div className="title">
          <h1>Hello world</h1>
        </div>
      </div>
      <div className="nxt-page">
        <div className="nxt">
          <div className="nxt-hool">
            <img src={nxtfood1} alt="" />
            <img src={nxtfood1} alt="" />
            <img src={nxtfood1} alt="" />
            <img src={nxtfood1} alt="" />
            <h1 onClick={() => navigate("/food")}>Food</h1>
          </div>
          <div className="nxt-huns">
            <img src={nxtfruit1} alt="" />
            <img src={nxtfruit1} alt="" />
            <img src={nxtfruit1} alt="" />
            <img src={nxtfruit1} alt="" />
            <h1 onClick={() => navigate("/fruit")}>Fruit</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
