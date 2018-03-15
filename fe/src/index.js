import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import rootReducer from './setup/rootReducer'

import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
