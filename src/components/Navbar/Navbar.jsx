import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import InstagramIcon from "@material-ui/icons/Instagram";
import { NavLink } from "react-router-dom";
import logo from "../../images/kbpngnegro.png";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="Navbar">
      <NavLink to="/kb/home" className="link">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="vertical-line"></div>
      </NavLink>

      <NavLink to="/kb/home" className="link">
        <button>
          <HomeIcon />
          <h4>Inicio</h4>
        </button>
      </NavLink>

      <NavLink to="/about" className="link">
        <button>
          <InfoIcon />
          <h4>Sobre nosotros</h4>
        </button>
      </NavLink>

      <NavLink to="/contact" className="link">
        <button>
          <InstagramIcon />
          <h4>Contactanos</h4>
        </button>
      </NavLink>
    </div>
  );
}

export default Navbar;
