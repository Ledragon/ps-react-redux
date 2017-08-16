import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import configureStore from './store/configureStore';

import '../styles.css';
require('../node_modules/bootstrap/dist/css/bootstrap.css');

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>    ,
    document.getElementById('example')
)