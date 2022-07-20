import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import BeerDetail from "./components/BeerDetail/BeerDetail";
import Login from "./components/login/login";
import Signup from "./components/Signup";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route path="/beers/detail/:id" component={BeerDetail} />
          <Route path="/login" component={Login} />
          <Route path="/test" component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
