import React from 'react';
import '../css/components/InteractiveTable.css';
import SearchBox from './SearchBox';

const InteractiveTable = () => (
  <div>
    {/* <section className="section-title" data-aos="fade-left" id="section-1"> */}
    <section className="section-title" id="section-1" data-aos="fade-left">
      <div className="shell">
        <div className="section__head">
          <h3>Age-Adjusted Death Rates for the Top 10 Leading Causes of Death in the US</h3>
        </div>

        {/* <div style={{ display: 'flex', backgroundColor: '#003d71' }}> */}

          <SearchBox />

        {/* </div> */}
      </div>
    </section>
  </div>
);


export default InteractiveTable;
