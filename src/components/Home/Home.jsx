import { useFirebaseApp } from "reactfire";
import firebase from "firebase";
import Cards from "../Cards/cards";
import urls from "../../URLS/urls";
import "./Home.css";

function Home() {
  const firebase1 = useFirebaseApp();
  const db = firebase1.firebase_.firestore();
  console.log("REACT_FIRE", firebase1.firebase_.firestore());
  console.log("FIREBASE", firebase.firestore());
  return (
    <div className="Home">
      <div className="cartita">
        {urls &&
          urls.map((u) => <Cards img={u.img} title={u.title} id={u.id} />)}
      </div>
    </div>
  );
}

export default Home;
