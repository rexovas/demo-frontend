import React from 'react';
import '../css/components/ImageSection.css';

const ImageSection = () => (
  <section className="section-slider" data-aos="fade-right">
    <div className="slider-image">
      <div className="shell">
        <div className="slider__content">
          <h1 style={{ fontWeight: 700, fontSize: 42 }}>Interactive Dataset</h1>
          <p>
            This dataset presents the age-adjusted death rates for the 10 leading causes of death
            in the United States beginning in 1999. Data are based on information from all resident death
            certificates filed in the 50 states and the District of Columbia using demographic and medical characteristics
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ImageSection;
