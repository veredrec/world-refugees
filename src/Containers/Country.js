import React, { Component } from 'react';
import './../style/Country.css';

class Country extends Component {
  render() {
    const { title, img, popul, refugees, percent } = this.props;
    return (
      <div className="country-item">
        <div className="main">
          <h2 class="country-title"> {title} </h2>
          <img className="country-img" src={img} alt={title} />
        </div>
        <div className="text">
          <h3>
            Refugees: <span className="num"> {refugees} </span>
          </h3>
          <h3>
            Population: <span className="num"> {popul} </span>
          </h3>
          <h3>
            Percent of Population: <span className="num"> {percent} </span>{' '}
          </h3>
        </div>
      </div>
    );
  }
}

export default Country;
