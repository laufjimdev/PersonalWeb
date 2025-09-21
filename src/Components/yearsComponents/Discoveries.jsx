import React from 'react';
import './styles/Discoveries.css'; 

const Discoveries = ({description, places}) => {
  return (
    <section className="discoveries-section py-5 bg-light text-dark">
      <div className="container">
        <h2 className="fw-bold mb-3 text-center">Discoveries</h2>
        <p className="mb-5 text-center">{description}</p>

        {places.map((place, index) => (
          <div key={index} className="discovery-card mb-5">
            <div className="image-wrapper mb-3">
              <img src={place.image} alt={place.city} className="discovery-image" />
              <div className="date-badge">{place.date}</div>
            </div>
            <div className='discovery-content'>
              <h3 className="mb-0">{place.city}</h3>
              <h5 className="text-muted mb-3">{place.country}</h5>
              <p>{place.description}</p>
              <h6 className="fw-bold">Highlights:</h6>
              <ul className="highlight-list">
                {place.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Discoveries;