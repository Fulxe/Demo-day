import "./fruit.css";
import { CategoryContext } from "../../provider/category";
import { useContext } from "react";
import Vegetablepost from "./vegetablepost/vetetablepost";
import Fruitpost from "./vegetablepost/vetetablepost";

function Vegetable() {
  const { buttonText } = useContext(CategoryContext);
  const titles = [
    {
      title: "cabbage",
      goods: [
        {
          name: "apple",
          img: "https://thumbs.dreamstime.com/b/ripe-red-apple-fruit-apple-half-green-leaf-isolated-white-background-apples-leaf-clipping-path-red-apple-121347277.jpg",
        },
      ],
    },
    {
      title: "potate",
      goods: [
        {
          name: "apple",
          img: "https://thumbs.dreamstime.com/b/ripe-red-apple-fruit-apple-half-green-leaf-isolated-white-background-apples-leaf-clipping-path-red-apple-121347277.jpg",
        },
      ],
    },
    {
      title: "carrot",
      goods: [
        {
          name: "apple",
          img: "https://thumbs.dreamstime.com/b/ripe-red-apple-fruit-apple-half-green-leaf-isolated-white-background-apples-leaf-clipping-path-red-apple-121347277.jpg",
        },
      ],
    },
  ];
  return (
    <div className="fr">
      <input placeholder="Search..." className="fruit-cat-input" />
      <div className="fruit">
        {buttonText !== "fruit" ? (
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
        ) : (
          <div className="fruit-child"></div>
        )}
      </div>
    </div>
  );
}

export default Vegetable;
