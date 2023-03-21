import { Outlet } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [categorie, setCategorie] = useState(false);
  return (
    <div className="navbar-main">
      <div className="Navbar">
        <div className="nav-logo">
          <h3>Logo</h3>
          <div></div>
        </div>
        <div className="nav-log">
          <button>Sign-up</button>
          <button>Sign-in</button>
          <button>About us</button>
        </div>
      </div>

      <Outlet />
      {categorie && (
        <div className="Categories">
          <button onClick={() => setCategorie(!categorie)}>Cancel</button>
          <div className="cat-heading"></div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
