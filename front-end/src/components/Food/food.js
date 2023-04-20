import "./food.css";
import Footer from "../Footer/footer";
import AnimatedPage from "../AnimatedPage";
import Cate from "../category/category";

import Post from "./post/post";

function Food() {
  return (
    <AnimatedPage>
      <div className="Food">
        <div className="food">
          <div className="food-line1">
            <Cate />
          </div>
          <div className="food-line2">
            <Post />
            <Post />
          </div>
          <div className="food-line3"></div>
        </div>
        <Footer />
      </div>
    </AnimatedPage>
  );
}

export default Food;
