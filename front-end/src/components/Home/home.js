import "./home.css";
import React from "react";
import nxtfood1 from "./image/nxt-food.jpg";
import nxtfruit1 from "./image/nxt-fruit.jpg";
import Footer from "../Footer/footer";
import { useNavigate } from "react-router-dom";
import food1 from "./image/food1.jpg";
import fruit1 from "./image/fruit.jpg";
import food2 from "./image/food2.jpg";
import fruit2 from "./image/fruit2.jpg";
import AnimatedPage from "../AnimatedPage";

function Home() {
  const navigate = useNavigate();

  return (
    <AnimatedPage>
      <div className="Home">
       <div className="dec3">
        <div className="dec3-dec"></div>
       </div>
        <div className="home">
          <div>
            <p>Welcome To</p>
            <h1>Pineapple</h1>
          </div>
          <div className="images">
            <img alt="" src={food1} />
            <img alt="" src={fruit1} />
            <img alt="" src={food2} />
            <img alt="" src={fruit2} />
          </div>
          <div className="dec"></div>
          <div className="dec2"></div>
        </div>
        <div className="nxt-page">
          <div className="nxt">
            <div onClick={() => navigate("/food")} className="nxt-hool">
              <img src={nxtfood1} alt="" />
              <img src={nxtfood1} alt="" />
              <img src={nxtfood1} alt="" />
              <img src={nxtfood1} alt="" />
              <h1>Food</h1>
            </div>
            <div onClick={() => navigate("/fruit")} className="nxt-huns">
              <img src={nxtfruit1} alt="" />
              <img src={nxtfruit1} alt="" />
              <img src={nxtfruit1} alt="" />
              <img src={nxtfruit1} alt="" />
              <h1>Fruit</h1>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </AnimatedPage>
  );
}

export default Home;
