import "./home.css";
import React from "react";
import nxtfood1 from "./image/nxt-food.jpg";
import nxtfruit1 from "./image/nxt-fruit.jpg";
import Footer from "../Footer/footer";
import { useNavigate } from "react-router-dom";
import food1 from "./image/food1.jpg";
import fruit1 from "./image/fruit.jpg";
import food2 from "./image/food2.jpg";
import fruit2 from "./image/fruit2.jpg"

function Home() {
  const navigate = useNavigate();

  return (
    <div className="Home">
      <div className="home">
        <h1>Pineapple</h1>
        <div className="images">
          <img alt="" src={food1} />
          <img alt="" src={fruit1} />
          <img alt="" src={food2} />
          <img alt="" src={fruit2}/>
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
