import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import NotFoundPage from './components/NotFoundPage';

import './../animate/animate.min.css';
import './style.scss';


window.onload = () => {
    ReactDOM.render((
        <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
            </Route>
            <Route path="*" component={NotFoundPage} />
        </Router>
    ), document.getElementById('root'))
};
