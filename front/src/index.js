import React, {Fragment} from 'react';
import ReactDom from 'react-dom';
import "./style.css";

const App = () => (
    <Fragment>
        <Header/>
        <Main/>
        <Footer/>
    </Fragment>
);

const Header = () => (
    <div className="header">Header</div>
);

const Main = () => (
    <div className="main">
        <Sidebar/>
        <Content/>
    </div>
);

const Sidebar = () => (
    <div className="sidebar">Sidebar</div>
);

const Content = () => (
    <div className="content">Content</div>
);

const Footer = () => (
    <div className="footer">Footer</div>
);

ReactDom.render(<App/>, document.getElementById('root'));