import "./fruit.css";
import Fruitpost from "./fruitpost/fruit-post";
import { CategoryContext } from "../../provider/category";
import { useContext } from "react";

function Fruit() {
  const { buttonText } = useContext(CategoryContext);
  return (
    <div className="fruit">
      {buttonText === "fruit" && (
        <>
          <Fruitpost />
          <Fruitpost />
          <Fruitpost />
          <Fruitpost />
          <Fruitpost />
          <Fruitpost />
        </>
      )}
      {buttonText !== "fruit" && (
        <>
          <Fruitpost />
          <Fruitpost />
          <Fruitpost />
          <Fruitpost />
        </>
      )}
    </div>
  );
}

export default Fruit;
