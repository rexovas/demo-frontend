import React from 'react';
import '../css/components/InteractiveTable.css';
import SearchBox from './SearchBox';
import TableSection from './TableSection';

const InteractiveTable = () => (
  <div>
    <section className="section-title" data-aos="fade-left" id="section-1">
      <div className="shell">
        <div className="section__head">
          <h3>Age-Adjusted Death Rates for the Top 10 Leading Causes of Death in the US</h3>
        </div>
        <div className="search-box">
          <SearchBox column="state" />
          <SearchBox column="cause-name" />
        </div>
        {/* <div className="section__body">
                <SearchBox column="state" />
                <SearchBox column="cause-name" />
              </div> */}
      </div>
    </section>
    <TableSection />
  </div>
);


export default InteractiveTable;
