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
            <div className="food-post-title">
              <p>username</p>
              <h4>food name</h4>
            </div>
            <div className="food-post-image">
              <img alt="" />
            </div>
            <div className="food-post-comment">
              <div>Like</div>
              <div>comment</div>
            </div>
            <div className="food-line2">
              <Post />
            </div>
            <div className="food-line2">
              <Post />
            </div>
            <div className="food-line3"></div>
          </div>
          <Footer className="food-footer" />
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Food;
