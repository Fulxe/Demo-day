import "./fruit.css";

import { CategoryContext } from "../../provider/category";
import { useContext, useEffect, useState } from "react";
import AnimatedPage from "../AnimatedPage";
import Vegetable from "./vegetable";
import Fruitpost from "./fruit-vegetable-post/fr-veg-post";
import axios from "axios";

function Fruit() {
  const { buttonText } = useContext(CategoryContext);
  const [titles, setTitles] = useState([]);
  const fruitInfo = async () => {
    try {
      const fruit = await axios.get("http://localhost:8000/fruit", {});
      console.log(fruit);
      setTitles(fruit.data);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    fruitInfo();
  }, []);
  // const titles = [
  //   {
  //     title: "apple",
  //     goods: [
  //       {
  //         name: "apple",
  //         img: "https://thumbs.dreamstime.com/b/ripe-red-apple-fruit-apple-half-green-leaf-isolated-white-background-apples-leaf-clipping-path-red-apple-121347277.jpg",
  //       },
  //     ],
  //   },
  //   {
  //     title: "apple",
  //     goods: [
  //       {
  //         name: "apple",
  //         img: "https://thumbs.dreamstime.com/b/ripe-red-apple-fruit-apple-half-green-leaf-isolated-white-background-apples-leaf-clipping-path-red-apple-121347277.jpg",
  //       },
  //     ],
  //   },
  //   {
  //     title: "banana",
  //     goods: [
  //       {
  //         name: "apple",
  //         img: "https://thumbs.dreamstime.com/b/ripe-red-apple-fruit-apple-half-green-leaf-isolated-white-background-apples-leaf-clipping-path-red-apple-121347277.jpg",
  //       },
  //     ],
  //   },
  //   {
  //     title: "apple",
  //     goods: [
  //       {
  //         name: "apple",
  //         img: "https://thumbs.dreamstime.com/b/ripe-red-apple-fruit-apple-half-green-leaf-isolated-white-background-apples-leaf-clipping-path-red-apple-121347277.jpg",
  //       },
  //     ],
  //   },
  //   {
  //     title: "apple",
  //     goods: [
  //       {
  //         name: "apple",
  //         img: "https://thumbs.dreamstime.com/b/ripe-red-apple-fruit-apple-half-green-leaf-isolated-white-background-apples-leaf-clipping-path-red-apple-121347277.jpg",
  //       },
  //       {
  //         name: "apple",
  //         img: "https://thumbs.dreamstime.com/b/ripe-red-apple-fruit-apple-half-green-leaf-isolated-white-background-apples-leaf-clipping-path-red-apple-121347277.jpg",
  //       },
  //       {
  //         name: "apple",
  //         img: "https://thumbs.dreamstime.com/b/ripe-red-apple-fruit-apple-half-green-leaf-isolated-white-background-apples-leaf-clipping-path-red-apple-121347277.jpg",
  //       },
  //     ],
  //   },
  //   {
  //     title: "banana",
  //     goods: [
  //       {
  //         name: "apple",
  //         img: "https://thumbs.dreamstime.com/b/ripe-red-apple-fruit-apple-half-green-leaf-isolated-white-background-apples-leaf-clipping-path-red-apple-121347277.jpg",
  //       },
  //     ],
  //   },
  // ];
  return (
    <AnimatedPage>
      <div className="fr">
        <div className="fruit">
          {buttonText === "fruit" ? (
            <>
              <input placeholder="Search..." className="fruit-cat-input" />
              <div className="fruit-child">
                {titles.map(({ name, image, description }) => (
                  <div className="fruit-pt">
                    <h1 className="fruit-title">{name}</h1>

                    <div className="fruit-ret">
                      <Fruitpost img={image} />
                      {/* {goods?.map(({ name, img }) => {
                        return (
                          <>
                            <Fruitpost img={img} name={name} />
                          </>
                        );
                      })} */}
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
