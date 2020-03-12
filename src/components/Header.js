import React from 'react';
import logo from '../assets/logo.svg';

const Header = () => (
  <header className="header">
    <div className="shell">
      <div className="header__inner">
        {/* <a href="/" className="logo"> */}
        <img src={logo} className="logo" alt="Crossix" />
        {/* </a> */}
      </div>
    </div>
  </header>
);

export default Header;
