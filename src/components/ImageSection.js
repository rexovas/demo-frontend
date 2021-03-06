import React from 'react';
import '../css/components/ImageSection.css';

const ImageSection = () => (
  <section className="section-slider" data-aos="fade-right">
    <div className="slider-image">
      <div className="shell">

        <h1 className="image-header">Demo Application</h1>
        <p className="image-text">
          This dataset presents the age-adjusted death rates for the 10 leading causes
          of death in the United States beginning in 1999. Data are based on information
          from all resident death certificates filed in the 50 states and the District of
          Columbia using demographic and medical characteristics
        </p>
        {/* <a className="image-link" href="https://catalog.data.gov/dataset/age-adjusted-death-rates-for-the-top-10-leading-causes-of-death-united-states-2013">
          Source: National Center for Health Statistics
        </a> */}
        <a className="btn btn--red" href="https://catalog.data.gov/dataset/age-adjusted-death-rates-for-the-top-10-leading-causes-of-death-united-states-2013">
          Learn More
        </a>
      </div>
    </div>
  </section>
);

export default ImageSection;
