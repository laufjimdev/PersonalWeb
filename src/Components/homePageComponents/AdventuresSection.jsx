import { Link } from 'react-router-dom';
import './styles/AdventuresSection.css';

const adventures = [
  {
    year: 2022,
    location: 'New York',
    summary: 'Explored the iconic skyline and diverse neighborhoods.',
    tags: ['Manhattan', 'Brooklyn', 'Queens'],
    image: '/assets/bg1.jpeg'
  },
  {
    year: 2023,
    location: 'Arizona',
    summary: 'Hiked the Grand Canyon and witnessed stunning sunsets.',
    tags: ['Sedona', 'Phoenix', 'Flagstaff'],
    image: '/assets/bg2.jpeg'
  },
  {
    year: 2024,
    location: 'Alaska',
    summary: 'Chased the Northern Lights and kayaked with glaciers.',
    tags: ['Anchorage', 'Fairbanks', 'Denali'],
    image: '/assets/bg3.jpeg'
  }
];

const AdventuresSection = () => {
  return (
    <section className="adventures-section text-white py-5">
      <div className="container">
        <h2 className="fw-bold mb-3">Adventures by Year</h2>
        <p className="mb-5">Each year brought new horizons, cultures, and memories to treasure forever</p>

        <div className="row">
          {adventures.map((adv, index) => (
            <div key={index} className="col-md-4 mb-4">
              <Link to={`/${adv.year}`}>
                <div
                  className="adventure-card"
                  style={{ backgroundImage: `url(${adv.image})` }}
                >
                  <div className="overlay">
                    <div className="card-text">
                      <h4 className="year">{adv.year}</h4>
                      <h5 className="location">{adv.location}</h5>
                      <p className="summary">{adv.summary}</p>
                      <div className="tags mt-3">
                        {adv.tags.map((tag, i) => (
                          <span key={i} className="tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                      <button className="action-button" aria-label="Go to details">
                        ➤
                      </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdventuresSection;
