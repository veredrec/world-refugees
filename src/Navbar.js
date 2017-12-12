import React, { Component } from 'react';
import './style/Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <header className="header">
        <div className="logo-wrapper">
          <h1 className="main-title">The World of Refugees</h1>
          {/* <img className="logo" src=""/> */}
        </div>
        <nav className="navbar">
          <ul className="menu">
            <li className="menu-item">About</li>
            <li className="menu-item">Resources</li>
            <li className="menu-item">How Can I help?</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;
