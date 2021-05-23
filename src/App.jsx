import { Route, Switch } from "react-router";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing.jsx";
import ViewVideo from "./components/ViewVideo/ViewVideo.jsx";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route path="/kb" component={Navbar} />
      <Route exact path="/kb/home" component={Home} />
      <Route path="/kb/home/:id" component={ViewVideo} />
    </div>
  );
}

export default App;
