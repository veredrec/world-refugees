// import './styles/reset';
// import './styles/global';

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import CountryDetails from './CountryDetails';
import Navbar from './Components/Navbar';
import Refugees from './Containers/Refugees';
import About from './Containers/About';
import Sources from './Containers/Sources';
import Help from './Containers/Help';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Refugees} />
            {/* <Route path="/Country/Details/:id" exact component={CountryDetails} /> */}
            <Route path="/About" exact component={About} />
            <Route path="/Sources" exact component={Sources} />
            <Route path="/Help" exact component={Help} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
