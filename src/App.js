import React from 'react';
import './css/App.css';
import {
  Header, ImageSection, InteractiveTable,
} from './components';

function App() {
  return (
    <div className="wrapper">
      <div className="wrapper__inner">
        <Header />
        <div className="container">
          <ImageSection />
          <InteractiveTable />
        </div>
      </div>
    </div>
  );
}

export default App;
