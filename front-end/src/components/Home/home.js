import "./home.css";
import React from "react";
import nxtfood1 from "./image/nxt-food.jpg";
import nxtfruit1 from "./image/nxt-fruit.jpg";
import Footer from "../Footer/footer";
import { useNavigate } from "react-router-dom";
import food1 from "./food2.png"

function Home() {
  const navigate = useNavigate();

  return (
    <div className="Home">
      <div className="home">
        <div className="image">
          <div className="back-style">
            <img alt="" src={food1}/>
          </div>
        </div>
        <div className="title">
          <h1>Pineapple</h1>
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
