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
              {/* <a href="/" className="logo"> */}
              <img src={logo} className="logo" alt="Crossix" />
              {/* </a> */}
            </div>
          </div>
        </header>
        <div className="container">
          {/* <section className="section-slider" data-aos="fade-right">
            <div className="slider-intro">
              test
            </div>
          </section> */}
          <section className="section-partners" data-aos="fade-left" id="section-1">
            <div className="shell">
              <div className="section__head">
                <h3>Age-Adjusted Death Rates for the Top 10 Leading Causes of Death in the US</h3>
              </div>
              <div className="section__body">
                test4
              </div>
            </div>
            test2
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
