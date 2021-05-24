import { useFirebaseApp } from "reactfire";
import firebase from "firebase";
import Cards from "../Cards/cards";
import urls from "../../URLS/urls";
import logo from "../../images/kbpngamarillo.png";
import "./Home.css";

function Home() {
  const firebase1 = useFirebaseApp();
  const db = firebase1.firebase_.firestore();
  console.log("REACT_FIRE", firebase1.firebase_.firestore());
  console.log("FIREBASE", firebase.firestore());
  return (
    <div className="Home">
      <div className="fondo">
        <div className="header-img">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="titulo">
        <h1>Nuestro material</h1>
      </div>
      <div className="cartita">
        {urls &&
          urls.map((u) => <Cards img={u.img} title={u.title} id={u.id} />)}
      </div>
      <footer className="footer">
        todos los dechos reservados a &copy; kill-bits 2021
      </footer>
    </div>
  );
}

export default Home;
