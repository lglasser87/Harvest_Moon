import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard"

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path={["/", "/dasboard"]}>
                        <Dashboard />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;