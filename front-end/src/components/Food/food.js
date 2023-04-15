import "./food.css";
import FoodData from "./data";
import Footer from "../Footer/footer";
import { useNavigate } from "react-router";
import AnimatedPage from "../AnimatedPage";
function Food() {
  const dataa = FoodData;
  const nav = useNavigate();
  // function FoodAdditional() {
  //   return <div>nyhgbfv</div>;
  // }

  return (
    <AnimatedPage>
      <div className="Food">
        <div className="food">
          {/* {dataa.map((data) => (
        <div className="food-line1">{data.name}</div>
      ))} */}
          <div className="food-line1">
            {dataa.map((data) => (
              <h1 className="food-category">{data.name}</h1>
            ))}
          </div>
          <div className="food-line2"></div>
          <div className="food-line3"></div>
          <div className="food-line1">
            {dataa.map((data) => (
              <h1 className="food-category" onClick={() => nav(`${data.name}`)}>
                {data.name}
              </h1>
            ))}
          </div>
          <Footer />
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Food;
