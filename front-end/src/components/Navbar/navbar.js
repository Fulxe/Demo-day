import { Outlet, Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
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
      <div className="nav-ani"></div>
      <Outlet />
    </div>
  );
}

export default Navbar;
