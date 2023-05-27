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
  const [searchItem, setSearch] = useState(titles);
  const [query, setQuery] = useState("");
  const names = [];
  useEffect(() => {
    setSearch(titles.filter((title) => title.name.includes(query)));
  }, [query]);
  const fruitInfo = async () => {
    try {
      const fruit = await axios.get("http://localhost:8000/fruit", {});
      const value = fruit.data.filter((cur) => cur.category === "fruit");
      setTitles(value);
      setSearch(value);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    fruitInfo();
  }, []);

  return (
    <AnimatedPage>
      <div className="fr">
        <div className="fruit">
          {buttonText === "fruit" ? (
            <>
              <input
                placeholder="Search..."
                className="fruit-cat-input"
                onChange={(e) => setQuery(e.target.value)}
              />
              {names.map((value) => (
                <h1 key={value.name}>{value.name}</h1>
              ))}
              <div className="fruit-child">
                {searchItem.map(({ name, image, description }) => (
                  <div className="fruit-pt">
                    <h1 className="fruit-title">{name}</h1>

                    <div className="fruit-ret">
                      <Fruitpost
                        img={image}
                        description={description}
                        name={name}
                      />
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
