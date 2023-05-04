import { Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./navbar.css";
import Fruitpost from "../Fruit/fruit";
import { CategoryContext } from "../../provider/category";

function Navbar() {
  // const [categorie, setCategorie] = useState(false);
  const navigate = useNavigate();
  const { buttonText, setButtonText } = useContext(CategoryContext);
  const location = useLocation();
  function changeWord() {
    if (buttonText === "fruit") {
      setButtonText("vegetable");
    } else setButtonText("fruit");
  }

  return (
    <div className="navbar-main">
      <div className="Navbar">
        <div className="nav-logo">
          <h3 onClick={() => navigate("/")}>Pineapple</h3>
          <div></div>
        </div>
        <div className="nav-log">
          <button onClick={() => navigate("/login")}>Sign-in</button>
          <button onClick={() => navigate("/about")}>About us</button>
          {location.pathname === "/fruit" && (
            <button onClick={changeWord}>{buttonText}</button>
          )}
          {/* {buttonText === "fruit" && <Fruitpost />} */}
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
