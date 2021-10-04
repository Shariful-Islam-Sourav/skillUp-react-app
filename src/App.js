import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Unavailable from "./components/Unavailable/Unavailable";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contacts">
            <Contacts />
          </Route>
          <Route path="*">
            <Unavailable />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
