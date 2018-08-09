import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, One, Two } from './Page';

export const Main = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/one' component={One} />
    <Route exact path='/two' component={Two} />
  </Switch>
);
