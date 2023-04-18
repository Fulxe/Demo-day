import "./food.css";
import Footer from "../Footer/footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedPage from "../AnimatedPage";
import Post from "./post/post";



function Food() {
  const paths = ["Mongolian", "Vegan", "Healthy", "Korean", "Mexican"];
  const [dropdown, showDropdown] = useState(false);
  return (
    <AnimatedPage>
      <div className="Food" onClick={() => showDropdown(false)}>
        <div className="food">
          <div className="food-line1">
            <div class="navbar">
              <div class="dropdown">
                <button
                  class="dropbtn"
                  onClick={(e) => {
                    e.stopPropagation();
                    showDropdown(!dropdown);
                  }}
                >
                  Categories
                </button>
                {dropdown && (
                  <div
                    class="dropdown-content"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    {paths.map((path) => (
                      <div>
                        <Link className="food-path" to={path.toLowerCase()}>
                          {path}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="food-line2">
            <Post/>
          </div>
          <div className="food-line3"></div>
        </div>
        <Footer className="food-footer" />
      </div>
    </AnimatedPage>
  );
}

export default Food;
