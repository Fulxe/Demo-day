import { Outlet, Link } from "react-router-dom";
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
          <button onClick={() => navigate("/login")}>Sign-in</button>
          <button>About us</button>
        </div>
      </div>
      <div className="nav-ani"></div>
      <Outlet />
    </div>
  );
}

export default Navbar;
