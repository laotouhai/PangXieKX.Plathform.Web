import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Provider} from 'react-redux';
import 'babel-runtime/core-js/promise';
import 'babel-polyfill';
import 'whatwg-fetch';

import Base from './views/Base';
import finalCreateStore from './redux/stores';
import DevTools from './redux/stores/DevTools';

import reducer from './redux/reducers';  // 引入reducers集合

const store = finalCreateStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router>
                <Route path="/" component={Base} />
            </Router>
            {/*<DevTools />*/}
        </div>
    </Provider>,
    document.getElementById("app")
)
