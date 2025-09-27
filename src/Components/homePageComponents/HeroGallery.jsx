
import React, { useState, useEffect } from 'react';
import './styles/HeroGallery.css';


const images = [
  '/PersonalWeb/assets/bg1.webp',
  '/PersonalWeb/assets/bg2.webp',
  '/PersonalWeb/assets/bg3.webp'
];

const HeroGallery = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [nextImage, setNextImage] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (images.indexOf(currentImage) + 1) % images.length;
      setNextImage(images[nextIndex]);
      setFadeIn(true);

      // Wait for fade to complete before swapping
      setTimeout(() => {
        setCurrentImage(images[nextIndex]);
        setNextImage(null);
        setFadeIn(false);
      }, 500); // match fade duration
    }, 4000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="hero-gallery">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${currentImage})` }}
      />

      {nextImage && (
        <div
          className={`background-image fade-in`}
          style={{ backgroundImage: `url(${nextImage})` }}
        />
      )}

      <div className="overlay-content text-center text-white">
        <h1 className="display-4 fw-bold">Journey Through <br /> <span className='highlight-color'>My Adventures</span></h1>
        <p className="lead">Years of wanderlust captured through lens and memory, from hidden gems to iconic landmarks around the United States</p>
        <a href="#stats-section"><button className="btn btn-light mt-3">See More</button></a>
      </div>
    </div>
  );
};

export default HeroGallery;