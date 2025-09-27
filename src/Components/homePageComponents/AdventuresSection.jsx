import { Link } from 'react-router-dom';
import './styles/AdventuresSection.css';

const adventures = [
  {
    year: 2022,
    location: 'Maryland',
    summary: 'Relaxed on Ocean City’s beaches and explored the Eastern Shore.',
    tags: ['Ocean City'],
    image: '/PersonalWeb/assets/2022_bg.webp'
  },
  {
    year: 2023,
    location: 'Florida',
    summary: 'Enjoyed vibrant nightlife in Miami, thrills in Orlando, and nature in Williston.',
    tags: ['Miami', 'Orlando', 'Williston'],
    image: '/PersonalWeb/assets/2023_bg.webp'
  },
  {
    year: 2024,
    location: 'Puerto Rico',
    summary: 'Wandered the colorful streets of San Juan, snorkeled in Culebra, and relaxed in Condado.',
    tags: ['San Juan', 'Culebra', 'Condado'],
    image: '/PersonalWeb/assets/2024_bg.webp'
  }
];

const AdventuresSection = () => {
  return (
    <section className="adventures-section text-white py-5" id="all-years">
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
