import "./food.css";
import FoodData from "./data";
import Footer from "../Footer/footer";
function Food() {
  const dataa = FoodData;
  function FoodAdditional() {
    return <div>nyhgbfv</div>;
  }

  return (
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
      </div>
      <Footer />
    </div>
  );
}

export default Food;
