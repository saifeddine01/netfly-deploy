import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App';
import Admin from './components/Admin';
import Home from './components/Home';
import NotFoundPage from './components/NotFoundPage';

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/admin" component={Admin}>
            </Route>
        </Route>
        <Route path="*" component={NotFoundPage} />
    </Router>
))

export default routes;
