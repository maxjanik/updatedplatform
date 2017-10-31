import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './components/headercomponent/header.css';

// The Header creates links that can be used to navigate
// between routes.
class Header extends Component {
  render() {
    return (

  <header>
  <div className="headermenu">
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/roster'>Roster</Link></li>
        <li><Link to='/schedule'>Schedule</Link></li>
        <li><Link to='/teams'>Teams</Link></li>
        <li><Link to='/test'>Test</Link></li>
        <li><Link to='/homepage'>HomePage</Link></li>
      </ul>
    </nav>
    </div>
  </header>
);
}
}

export default Header;
