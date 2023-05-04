import "./fruit.css";
import Fruitpost from "./fruitpost/fruit-post";
import { CategoryContext } from "../../provider/category";
import { useContext } from "react";
import AnimatedPage from "../AnimatedPage";

function Fruit() {
  const { buttonText } = useContext(CategoryContext);
  return (
    <AnimatedPage>
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
    </AnimatedPage>
  );
}

export default Fruit;
