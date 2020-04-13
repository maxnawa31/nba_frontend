import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing/TeamStatsTable';
import IndividualTeam from './components/IndividualTeam';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/teams/:id/:year" component={IndividualTeam}></Route>
      <Route path="/" component={Landing}></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
