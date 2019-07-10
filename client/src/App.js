import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import search from "./pages/search";
import saved from "./pages/saved";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={search} />
          <Route exact path="/books" component={saved} />
          <Route exact path="/books/:id" component={saved} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;

