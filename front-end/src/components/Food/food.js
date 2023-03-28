import "./food.css";
import FoodData from "./data";
function Food() {
  const dataa = FoodData;
  function FoodAdditional() {
    return <div></div>;
  }

  return (
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
  );
}

export default Food;
