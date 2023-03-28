import { Outlet } from "react-router-dom";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  // const [categorie, setCategorie] = useState(false);
  const navigate = useNavigate();
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
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
