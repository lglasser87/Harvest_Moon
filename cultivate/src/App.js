import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "./components/grid";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import UserList from "./pages/userList";
import PlantSearch from "./pages/plantSearch";
import PlantInfo from "./pages/plantInfo";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/user-list" component={UserList} />
          <Route exact path="/plant-search" component={PlantSearch} />
          <Route exact path="/plant-info" component={PlantInfo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
