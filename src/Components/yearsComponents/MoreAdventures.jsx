import React from 'react';
import './styles/MoreAdventures.css'; 

const MoreAdventures = ({btnTxt}) => {
  return (
    <section className="more-adventures-section py-5 text-center bg-white">
      <div className="container">
        <h2 className="fw-bold mb-4">More Adventures Await</h2>

        <div className="d-flex flex-column align-items-center gap-3">
          <button className="btn btn-primary btn-lg w-100 max-w-500">
            Explore All Years
          </button>

          <button className="btn btn-outline-secondary btn-lg w-100 max-w-500">
            ← {btnTxt}
          </button>
        </div>
      </div>
    </section>
  );
};

export default MoreAdventures;
