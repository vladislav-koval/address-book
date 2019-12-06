import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import TablePage from "./component/TablePage";
import Auth from "./component/Auth";

const history = createBrowserHistory();


function App() {
    return (
        <BrowserRouter history={history}>
            <Route path="/" exact component={Auth}/>
            <Route path="/addresses" component={TablePage}/>
        </BrowserRouter>

    );
}

export default App;