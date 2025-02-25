import React, { useState } from 'react';
import './Hero.css';
import sheetalniwas from '../Assests/sheetalniwas.jpg';
import lumbini from '../Assests/lumbini.png';
import Everest from '../Assests/Everest.jpg';
import janki from '../Assests/Janki_Mandir.jpg';

export default function Hero() {
  const images = [sheetalniwas, lumbini, Everest, janki];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="hero">
      <div className="imgsec">
        <a href="#" className="control_prev" onClick={handlePrevClick}>
          ←
        </a>
        <a href="#" className="control_next" onClick={handleNextClick}>
          →
        </a>
        <div className="image-container">
          <img
            src={images[currentIndex]}
            className="images"
            alt={`Image ${currentIndex + 1}`}
          />
        </div>
      </div>
    </div>
  );
}
