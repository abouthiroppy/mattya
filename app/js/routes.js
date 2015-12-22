'use strict';

import React from 'react';
import {
  Route,
  IndexRoute
} from 'react-router';

import App         from './components/App';
import Work        from './components/Work';
import Blog        from './components/Blog';
import Profile     from './components/Profile';
import Dashboard   from './components/Dashboard';
import Programming from './components/Programming';

export default (
  <Route path="/" component={App}>
    <Route path="work" component={Work}/>
    <Route path="blog" component={Blog}/>
    <Route path="profile" component={Profile}/>
    <Route path="programming" component={Programming}/>
    <IndexRoute component={Dashboard}/>
  </Route>
);
