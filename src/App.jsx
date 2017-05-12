import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Provider} from 'react-redux';

import Base from './views/Base';
import finalCreateStore from './redux/stores';

import reducer from './redux/reducers';  // 引入reducers集合

const store = finalCreateStore(reducer)
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={Base} />
        </Router>
    </Provider>,
    document.getElementById("app")
)