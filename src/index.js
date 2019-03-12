import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App.js';
import ReactGA from 'react-ga';
import * as serviceWorker from './serviceWorker';

ReactGA.initialize('UA-000000-01');
ReactGA.pageview(window.location.pathname);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
