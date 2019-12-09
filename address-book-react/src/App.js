import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TablePage from "./component/TablePage";
import Auth from "./component/Auth";
import AuthenticatedRoute from "./component/AuthenticatedRoute";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Auth}/>
                <Route path="/login" exact component={Auth}/>
                <AuthenticatedRoute path="/courses" exact component={TablePage}/>
            </Switch>
        </Router>
    );
}

export default App;