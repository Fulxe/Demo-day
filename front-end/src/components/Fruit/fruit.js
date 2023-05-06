import "./fruit.css";

import { CategoryContext } from "../../provider/category";
import { useContext } from "react";
import AnimatedPage from "../AnimatedPage";
import Vegetable from "./vegetable";
import Fruitpost from "./fruit-vegetable-post/fr-veg-post";

function Fruit() {
  const { buttonText } = useContext(CategoryContext);
  const titles = [
    {
      title: "apple",
      goods: [
        {
          name: "apple",
          img: "https://thumbs.dreamstime.com/b/ripe-red-apple-fruit-apple-half-green-leaf-isolated-white-background-apples-leaf-clipping-path-red-apple-121347277.jpg",
        },
      ],
    },
    {
      title: "apple",
      goods: [
        {
          name: "apple",
          img: "https://thumbs.dreamstime.com/b/ripe-red-apple-fruit-apple-half-green-leaf-isolated-white-background-apples-leaf-clipping-path-red-apple-121347277.jpg",
        },
      ],
    },
    {
      title: "banana",
      goods: [
        {
          name: "apple",
          img: "https://thumbs.dreamstime.com/b/ripe-red-apple-fruit-apple-half-green-leaf-isolated-white-background-apples-leaf-clipping-path-red-apple-121347277.jpg",
        },
      ],
    },
    {
      title: "apple",
      goods: [
        {
          name: "apple",
          img: "https://thumbs.dreamstime.com/b/ripe-red-apple-fruit-apple-half-green-leaf-isolated-white-background-apples-leaf-clipping-path-red-apple-121347277.jpg",
        },
      ],
    },
    {
      title: "apple",
      goods: [
        {
          name: "apple",
          img: "https://thumbs.dreamstime.com/b/ripe-red-apple-fruit-apple-half-green-leaf-isolated-white-background-apples-leaf-clipping-path-red-apple-121347277.jpg",
        },
      ],
    },
    {
      title: "banana",
      goods: [
        {
          name: "apple",
          img: "https://thumbs.dreamstime.com/b/ripe-red-apple-fruit-apple-half-green-leaf-isolated-white-background-apples-leaf-clipping-path-red-apple-121347277.jpg",
        },
      ],
    },
  ];
  return (
    <AnimatedPage>
      <div className="fr">
        <div className="fruit">
          {buttonText === "fruit" ? (
            <>
              <input placeholder="Search..." className="fruit-cat-input" />
              <div className="fruit-child">
                {titles.map(({ title, goods }) => (
                  <div className="fruit-pt">
                    <h1 className="fruit-title">{title}</h1>
                    <div className="fruit-ret">
                      {goods?.map(({ name, img }) => {
                        return (
                          <>
                            <Fruitpost img={img} name={name} />
                          </>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <Vegetable />
          )}
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Fruit;
