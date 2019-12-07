import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import TablePage from "./component/TablePage";
import Auth from "./component/Auth";

const history = createBrowserHistory();


function App() {
    return (
        <BrowserRouter history={history}>
            <Route path="/login" component={Auth}/>
            <Route path="/" exact component={TablePage}/>
        </BrowserRouter>

    );
}

export default App;