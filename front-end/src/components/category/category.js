import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./category.css";

function Cate(props) {
  const paths = ["Mongolian", "Vegan", "Healthy", "Korean", "Mexican"];
  const [dropdown, showDropdown] = useState(false);

  return (
    <div className="categ " onClick={() => showDropdown(false)}>
      <div className="navbar">
        <div className="dropdown">
          <button
            className="dropbtn"
            onClick={(e) => {
              e.stopPropagation();
              showDropdown(!dropdown);
            }}
          >
            Categories
          </button>
          {dropdown && (
            <div
              className="dropdown-content"
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
  );
}

export default Cate;
