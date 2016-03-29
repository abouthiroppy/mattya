'use strict';

import React from 'react';
import {
  Route,
  IndexRoute
} from 'react-router';

import App         from './components/App';
import Work        from './components/Work';
import Blog        from './components/Blog';
import Photo       from './components/Photo';
import Github      from './components/Github';
import Profile     from './components/Profile';
import Dashboard   from './components/Dashboard';
import Programming from './components/Programming';

export default (
  <Route path="/" component={App}>
    <Route path="works" component={Work}/>
    <Route path="blogs" component={Blog}/>
    <Route path="photos" component={Photo}/>
    <Route path="profile" component={Profile}/>
    <Route path="github" component={Github}/>
    <Route path="programming" component={Programming}/>
    <IndexRoute component={Dashboard}/>
  </Route>
);
