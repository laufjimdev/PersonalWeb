import { Link } from 'react-router-dom';
import './styles/YearHero.css';

const YearHero = ({ backgroundImage, year, title, description }) => {
  return (
    <section
      className="year-hero d-flex align-items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay w-100 h-100 d-flex flex-column justify-content-between">
        <div className="pt-3 ps-4">
          <Link to="/" className="btn btn-md btn-outline-light">
            ← Back to Home
          </Link>
        </div>

        <div className="text-center text-white px-3 pb-5">
          <h1 className="year-text">{year}</h1>
          <h2 className="title-text fw-bold">{title}</h2>
          <p className="desc-text mx-auto">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default YearHero;