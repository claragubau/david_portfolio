import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import App from './App.js';
import Info from './components/Info.js';
import MainPage from './components/MainPage.js'

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <Route path="/" component={MainPage}/>
    <Route path="/some/where" component={Info} />
  </Route>
);