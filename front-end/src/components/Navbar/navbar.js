import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [categorie, setCategorie] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="navbar-main">
      <div className="Navbar">
        <div className="nav-logo">
          <h3>Logo</h3>
          <div></div>
        </div>
        <div className="nav-log">
          <button>Sign-up</button>
<<<<<<< HEAD
          <button onClick={() => navigate("/login")}>Sign-in</button>
          <button>About us</button>
=======
          <button>Sign-in</button>
          <button onClick={() => navigate("/about")}>
            About us
          </button>
        </div>
      </div>
      {/* <div className="nav-angilal">
        <div className="nav-angi" onClick={() => setCategorie(!categorie)}>
          <p>АНГИЛАЛ</p>
>>>>>>> 9274b31 (g)
        </div>
      </div> */}

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
