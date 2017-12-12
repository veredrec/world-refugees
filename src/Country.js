import React, { Component } from 'react';
import './Country.css';

class Country extends Component {
  render() {
    const { title, img, popul, refugees, percent, est } = this.props;
    return (
      <div>
        <div className="main">
          <h2> Country: {title} </h2>
          <img src={img} alt={title} />
        </div>
        <div className="text">
          <h3> Population: {popul} </h3>
          <h3> Refugees: {refugees} </h3>
          <h3> Percent of Population: {percent} </h3>
          <h3> Establishment Year: {est} </h3>
        </div>
      </div>
    );
  }
}

export default Country;
