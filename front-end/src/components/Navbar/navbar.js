import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./navbar.css";
import { CategoryContext } from "../../provider/category";
// import Logo from "../about/picture/food.svg"

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
          <div></div>
          <h3 onClick={() => navigate("/")}>Pineapple</h3>
        </div>
        <div className="nav-log">
          <button onClick={() => navigate("/profile")}>Profile</button>
          <button onClick={() => navigate("/login")}>Sign-in</button>
          <button onClick={() => navigate("/about")}>About us</button>
          {location.pathname === "/fruit" && (
            <button onClick={changeWord}>{buttonText}</button>
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
