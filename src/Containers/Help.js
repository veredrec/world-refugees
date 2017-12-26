import React, { Component } from 'react';
import './../style/Help.css';

class Help extends Component {
  render() {
    return (
      <div className="help-section">
        <h2 className="help-title"> HOW CAN I HELP? </h2>
        <ul className="help-menu">
          <li className="help-link">
            <a className="link" href="https://helprefugees.org/volunteer/">
              Help Refugees
            </a>
          </li>
          <li className="help-link">
            <a className="link" href="http://www.greekislandvolunteers.com/">
              Greek Islands Volunteers
            </a>
          </li>
          <li className="help-link">
            <a className="link" href="http://www.unhcr.org/get-involved.html">
              UNHCR
            </a>
          </li>
          <li className="help-link">
            <a className="link" href="https://www.rescue.org/volunteer">
              International Rescue Committee
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Help;
