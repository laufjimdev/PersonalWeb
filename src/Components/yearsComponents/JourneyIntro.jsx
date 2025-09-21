import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaCamera } from 'react-icons/fa';
import './styles/JourneyIntro.css';

const JourneyIntro = ({ title, description, stats={} }) => {

  return (
    <section className="journey-intro-section text-center py-5 bg-white text-dark">
      <div className="container">
        <h2 className="fw-bold mb-3">{title}</h2>
        <p className="mb-5 mx-auto text-muted" style={{ maxWidth: '700px' }}>{description}
        </p>

        <div className="d-flex">
          <div className="stat-item">
            <FaMapMarkerAlt size={32} className="mb-1" />
            <h3 className="fw-bold mb-0">{stats.countries}</h3>
            <p className="text-muted">Countries</p>
          </div>

          <div className="stat-item">
            <FaCalendarAlt size={32} className="mb-1" />
            <h3 className="fw-bold mb-0">{stats.months}</h3>
            <p className="text-muted">Months Traveling</p>
          </div>

          <div className="stat-item">
            <FaCamera size={32} className="mb-1" />
            <h3 className="fw-bold mb-0">{stats.photos}</h3>
            <p className="text-muted">Photos Taken</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyIntro;
