import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom'
import {Provider} from 'react-redux';
import 'babel-runtime/core-js/promise';
import 'babel-polyfill';
import 'whatwg-fetch';

import Base from './views/Base';
import Login from './views/Login';
import finalCreateStore from './redux/stores';
import DevTools from './redux/stores/DevTools';

import reducer from './redux/reducers';

const store = finalCreateStore(reducer)
const token = localStorage.getItem('token');

const PrivateRoute = ({ component: Component,...rest }) => (
    <Route {...rest} render={props => (
        token ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/Login',
                state: { from: props.location }
            }}/>
        )
    )}/>
)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <PrivateRoute path="/" component={Base}/>
                <Route path="/Login" component={Login}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById("app")
)
