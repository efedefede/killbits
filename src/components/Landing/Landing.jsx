//import { useFirebaseApp } from "reactfire";
import ReactPlayer from "react-player";
/* import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import InstagramIcon from "@material-ui/icons/Instagram"; */
import { NavLink } from "react-router-dom";
import landingVideo from "../../videos/landingvideo.mp4";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import "./Landing.css";
function Landing() {
  return (
    <div className="Landing content">
      <div className="LandingVideo">
        <video src={landingVideo} autoPlay muted loop></video>
      </div>
      <div className="overColor"></div>
      <div className="landing-content">
        <h1>K.B.T.K.B.C.Sa.B</h1>
        <NavLink to="/kb/home" className="landing-content-navlink">
          <button>
            <PlayCircleOutlineIcon />
            Ingresar
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Landing;
