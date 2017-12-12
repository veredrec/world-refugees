import React, { Component } from 'react';
import CountryList from './CountryList';
import Navbar from './Navbar';
import CountryMenu from './CountryMenu';
import './style/Refugees.css';

class Refugees extends Component {
  render() {
    return (
      <div className="refugees-app">
        <Navbar />
        <CountryMenu />
        <div className="country-section">
          <CountryList />
        </div>
      </div>
    );
  }
}

export default Refugees;
