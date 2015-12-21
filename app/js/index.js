'use strict';

import React                from 'react';
import ReactDOM             from 'react-dom';

// import createBrowserHistory from 'history/lib/createBrowserHistory';
import createBrowserHistory from 'history/lib/createHasHHistory'; // debug
import {
  Link,
  Route,
  Router,
  ReactRouter
} from 'react-router';

import routes from './routes';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    {routes}
  </Router>,
  document.getElementById('root')
);
