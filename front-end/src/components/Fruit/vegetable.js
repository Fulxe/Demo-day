// import "./fruit.css";
// import { CategoryContext } from "../../provider/category";
// import { useContext } from "react";
// import Fruitpost from "./fruit-vegetable-post/fr-veg-post";

// function Vegetable() {
//   const { buttonText } = useContext(CategoryContext);
//   const titles = [
//     {
//       title: "cabbage",
//       goods: [
//         {
//           name: "apple",
//           img: "https://thumbs.dreamstime.com/b/ripe-red-apple-fruit-apple-half-green-leaf-isolated-white-background-apples-leaf-clipping-path-red-apple-121347277.jpg",
//         },
//       ],
//     },
//     {
//       title: "potate",
//       goods: [
//         {
//           name: "apple",
//           img: "https://thumbs.dreamstime.com/b/ripe-red-apple-fruit-apple-half-green-leaf-isolated-white-background-apples-leaf-clipping-path-red-apple-121347277.jpg",
//         },
//       ],
//     },
//     {
//       title: "carrot",
//       goods: [
//         {
//           name: "apple",
//           img: "https://thumbs.dreamstime.com/b/ripe-red-apple-fruit-apple-half-green-leaf-isolated-white-background-apples-leaf-clipping-path-red-apple-121347277.jpg",
//         },
//       ],
//     },
//   ];
//   return (
//     <div className="fr">
//       <input placeholder="Search..." className="fruit-cat-input" />
//       <div className="fruit">
//         {buttonText !== "fruit" ? (
//           <div className="fruit-child">
//             {titles.map(({ title, goods }) => (
//               <div className="fruit-pt">
//                 <h1 className="fruit-title">{title}</h1>
//                 <div className="fruit-ret">
//                   {goods?.map(({ name, img }) => {
//                     return (
//                       <>
//                         <Fruitpost img={img} name={name} />
//                       </>
//                     );
//                   })}
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="fruit-child"></div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Vegetable;
import "./fruit.css";

import { CategoryContext } from "../../provider/category";
import { useContext, useEffect, useState } from "react";
import AnimatedPage from "../AnimatedPage";
import Fruitpost from "./fruit-vegetable-post/fr-veg-post";
import Fruit from "./fruit";
import axios from "axios";

function Vegetable() {
  const { buttonText } = useContext(CategoryContext);
  const [titles, setTitles] = useState([]);
  const [searchItem, setSearch] = useState(titles);
  const [query, setQuery] = useState("");
  const names = [];

  useEffect(() => {
    setSearch(titles.filter((title) => title.name.includes(query)));
  }, [query]);

  const vegetableInfo = async () => {
    try {
      const vegetable = await axios.get("https://demo-day-bck.vercel.app/fruit", {});
      const value = vegetable.data.filter(
        (cur) => cur.category === "vegetable"
      );
      setTitles(value);
      setSearch(value);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    vegetableInfo();
  }, []);

  console.log(searchItem);

  return (
    <AnimatedPage>
      <div className="fr">
        <div className="fruit">
          {buttonText === "vegetable" ? (
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
            <Fruit />
          )}
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Vegetable;
