import "./food.css";
import Footer from "../Footer/footer";
import AnimatedPage from "../AnimatedPage";
import Cate from "../category/category";
import { useState } from "react";

import Post from "./post/post";

function Food() {
  const [post, setPost] = useState(false);
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
        <div className="post-add">
          <button onClick={() => setPost(!post)}>Post</button>
        </div>
        {post && (
          <div className="add-post">
            <div className="add">
              <button onClick={() => setPost(!post)}>Cancel</button>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </AnimatedPage>
  );
}

export default Food;
