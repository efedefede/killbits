//import { useFirebaseApp } from "reactfire";
//import ReactPlayer from "react-player";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import InstagramIcon from "@material-ui/icons/Instagram";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  /* const firebase = useFirebaseApp();
  console.log(firebase); */
  return (
    <div className="Navbar">
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
