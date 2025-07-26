import React from 'react';
import './styles/CallToActionSection.css';

const CallToActionSection = () => {
  return (
    <section className="cta-section text-center py-5">
      <div className="container">
        <h2 className="fw-bold mb-3">Ready to Explore?</h2>
        <p className="mb-4">
          Dive deeper into each year's adventures and discover the stories behind the photographs.
        </p>
        <div className="cta-buttons d-flex flex-column gap-3 align-items-center">
          <button className="cta-btn-dark">View All Years</button>
          <button className="cta-btn-light">Start a New Journey</button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
