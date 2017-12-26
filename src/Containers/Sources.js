import React, { Component } from 'react';
import './../style/Sources.css';

class Sources extends Component {
  render() {
    return (
      <div className="sources-section">
        <h2 className="sources-title"> For More Information </h2>
        <ul className="sources-menu">
          <li className="source-link">
            <a className="source" href="https://en.wikipedia.org/wiki/Refugee">
              Wikipedia - Refugees
            </a>
          </li>
          <li className="help-link">
            <a className="link" href="http://www.unhcr.org/en-ie/">
              The UN Refugee Agency
            </a>
          </li>
          <li className="help-link">
            <a className="link" href="http://www.unhcr.org/get-involved.html">
              The Refugee Project
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sources;
