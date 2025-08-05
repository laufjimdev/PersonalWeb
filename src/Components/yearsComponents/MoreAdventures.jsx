import React from 'react';
import { Link } from 'react-router-dom'
import './styles/MoreAdventures.css'; 

const MoreAdventures = ({btnTxt, btnRoute}) => {
  return (
    <section className="more-adventures-section py-5 text-center bg-white">
      <div className="container">
        <h2 className="fw-bold mb-4">More Adventures Await</h2>

        <div className="d-flex flex-column align-items-center gap-3">
          <Link className="btn btn-primary btn-lg w-100 max-w-500">
            Explore All Years
          </Link>
          <Link to={btnRoute} className="btn btn-outline-secondary btn-lg w-100 max-w-500">
              {btnTxt}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MoreAdventures;
