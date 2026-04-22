import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './CardImageSlider.css';

const CardImageSlider = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const handleNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleDotClick = (e, index) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex(index);
  };

  return (
    <div className="card-image-slider">
      <div 
        className="slider-track" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="slider-slide">
            <img src={img} alt={`${title} - view ${idx + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button className="slider-nav prev" onClick={handlePrev}>
            <ChevronLeft size={18} />
          </button>
          <button className="slider-nav next" onClick={handleNext}>
            <ChevronRight size={18} />
          </button>
          
          <div className="slider-dots">
            {images.map((_, idx) => (
              <span 
                key={idx} 
                className={`dot ${currentIndex === idx ? 'active' : ''}`}
                onClick={(e) => handleDotClick(e, idx)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CardImageSlider;
