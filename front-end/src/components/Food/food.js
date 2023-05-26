import "./food.css";
import "../login/sign-up.css";
import Footer from "../Footer/footer";
import AnimatedPage from "../AnimatedPage";
import Cate from "../category/category";
import { useState } from "react";
import Post from "./post/post";
import React from "react";

function Food() {
  const [category, setCategory] = useState(false);
  const [post, setPost] = useState(false);
  const textRef = React.useRef();
  const [value, setValue] = React.useState();
  const onChnage = (event) => {
    setValue(event.target.value);
  };
  React.useEffect(() => {
    if (textRef && textRef.current) {
      textRef.current.style.height = "0px";
      const taHeight = textRef.current.scrollHeight;
      textRef.current.style.height = taHeight + "px";
    }
  }, [value]);
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
              <button>Post</button>
              <div className="post-cate" onClick={() => setCategory(!category)}>
                <p>Category</p>
                {category && (
                  <div className="add-category">
                    <Cate/>
                  </div>
                )}
              </div>
              <div className="post-post">
                <input placeholder="Food name"></input>
                <input type="file"></input>
              </div>
              <div className="post-post2">
                <div>
                  <span>Ingredients</span>
                  <textarea
                    className="form-control"
                    ref={textRef}
                    onChange={onChnage}
                  >
                    {value}
                  </textarea>
                </div>
                <div>
                  <span>Recipe</span>
                  <textarea
                    className="form-control"
                    ref={textRef}
                    onChange={onChnage}
                  >
                    {value}
                  </textarea>
                </div>
              </div>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </AnimatedPage>
  );
}

export default Food;
