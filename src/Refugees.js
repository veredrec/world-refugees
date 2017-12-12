import React, { Component } from 'react';
import Country from './Country';
import './Refugees.css';

class Refugees extends Component {
  render() {
    return (
      <div className="country-section">
        <Country
          title="Turkey"
          img="turkey.jpg"
          popul="79,510,000"
          refugees="2,900,000"
          percent="3.64%"
          est="1923"
        />
      </div>
    );
  }
}

export default Refugees;
