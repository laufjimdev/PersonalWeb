import React from 'react';
import './styles/StatsSection.css'; 

const stats = [
  { icon: '🌍', number: 25, label: 'States Visited' },
  { icon: '📸', number: 1500, label: 'Photos Taken' },
  { icon: '🛫', number: 3, label: 'Years of Adventure' },
  { icon: '⛺', number: 45, label: 'Cities explored' },
];

const StatsSection = () => {
  return (
    <section className="stats-section text-center py-5 bg-light">
      <div className="container">
        <h2 className="mb-3 fw-bold">My Travel Journey</h2>
        <p className="mb-5 text-muted">
          Numbers that tell the story of exploration, discovery, and unforgettable moments
        </p>

        <div className="row">
          {stats.map((stat, index) => (
            <div key={index} className="col-6 col-md-3 mb-4">
              <div className="stat-card d-flex flex-column align-items-center">
                <div className="stat-icon mb-2">{stat.icon}</div>
                <div className="stat-number fs-2 fw-bold">{stat.number}</div>
                <div className="stat-label text-muted">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
