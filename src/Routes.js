import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import CountryDetails from './CountryDetails';
import NavBar from './Components/NavBar';

const Main = () => {
  return (
    <AppWrapper>
      <NavBar />
      <Switch>
        <Route path="/Refugees" exact component={Refugees} />
        <Route path="/Country/Details/:id" exact component={CountryDetails} />
      </Switch>
    </AppWrapper>
  );
};

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="*" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
