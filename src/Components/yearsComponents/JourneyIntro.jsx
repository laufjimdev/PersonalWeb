import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaCamera } from 'react-icons/fa';
import './styles/JourneyIntro.css';

const JourneyIntro = () => {
  return (
    <section className="journey-intro-section text-center py-5 bg-white text-dark">
      <div className="container">
        <h2 className="fw-bold mb-3">The Beginning of My Journey</h2>
        <p className="mb-5 mx-auto text-muted" style={{ maxWidth: '700px' }}>
          2022 marked the start of my travel adventures. What began as a simple trip to New York
          evolved into a year-long exploration of North American culture, nature, and urban life.
          Each destination taught me something new about the world and myself.
        </p>

        <div className="d-flex flex-column align-items-center gap-4">
          <div className="stat-item">
            <FaMapMarkerAlt size={32} className="mb-1" />
            <h3 className="fw-bold mb-0">3</h3>
            <p className="text-muted">Countries</p>
          </div>

          <div className="stat-item">
            <FaCalendarAlt size={32} className="mb-1" />
            <h3 className="fw-bold mb-0">9</h3>
            <p className="text-muted">Months Traveling</p>
          </div>

          <div className="stat-item">
            <FaCamera size={32} className="mb-1" />
            <h3 className="fw-bold mb-0">847</h3>
            <p className="text-muted">Photos Taken</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyIntro;
