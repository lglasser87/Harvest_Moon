import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/home">
            <Dashboard />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signUp">
            <Signup />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/userList">
            <UserList />
          </Route>
          <Route exact path="/plantSearch">
            <PlantSearch />
          </Route>
          <Route exact path="/plantInfo">
            <PlantInfo />
          </Route>
          <Route exact path="/landing">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;