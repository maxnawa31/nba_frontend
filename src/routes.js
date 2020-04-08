import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Container';
import Landing from './components/Landing/TeamStatsTable';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" component={Landing}></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
