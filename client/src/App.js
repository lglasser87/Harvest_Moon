import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard"
import Plants from "./pages/Plants"
import Search from "./pages/Search"
import Login from "./pages/Login"

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path={["/", "/dasboard"]}>
                        <Dashboard />
                    </Route>
                    <Route exact path="/plants">
                        <Plants />
                    </Route>
                    <Route exact path="/search">
                        <Search />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;