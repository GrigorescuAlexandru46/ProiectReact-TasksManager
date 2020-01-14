import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import PanelMain from "./components/PanelMain";
import PanelContact from "./components/PanelContact";
import PanelAbout from "./components/PanelAbout";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <NavigationBar />
        </header>
        <Route path="/" exact={true}>
          <PanelMain />
        </Route>
        <Route path="/contact" exact={true}>
          <PanelContact />
        </Route>
        <Route path="/about" exact={true}>
          <PanelAbout />
        </Route>
      </div>
    </Router>
  );
}

export default App;
