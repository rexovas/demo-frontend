import React from 'react';
// import logo from './logo.svg';
import './css/App.css';
import {
  Header, ImageSection, InteractiveTable, Table,
} from './components';

function App() {
  return (
    <div className="wrapper">
      <div className="wrapper__inner">
        <Header />
        <div className="container">
          <ImageSection />
          <InteractiveTable />
          {/* <div data-aos="fade-right">
            <Table />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
