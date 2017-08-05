import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';

import '../styles.css';
require('../node_modules/bootstrap/dist/css/bootstrap.css');

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('example')
)