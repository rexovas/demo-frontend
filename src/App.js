import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <div className="wrapper__inner">
        <header className="header">
          <div className="shell">
            <div className="header__inner">
              {/* <a href="/" className="Crossix-Logo"> */}
              <img src={logo} className="Crossix-logo" alt="Crossix" />
              {/* </a> */}
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
