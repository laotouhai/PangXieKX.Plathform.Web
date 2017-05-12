import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Dashboard from '../../views/Dashboard'

class Maincontent extends React.Component {

    render() {
        return (
            <div className="page-content">
                <Router>
                    <Route path="/" component={Dashboard} />
                </Router>
            </div>
        );
    }
}

export default Maincontent;