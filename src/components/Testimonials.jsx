import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { Quote, Star, ArrowLeft, ArrowRight } from 'lucide-react';
import './Testimonials.css';

const Testimonials = ({ className = "" }) => {
  const { language } = useLanguage();
  const t = translations[language].testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);

  const data = {
    fr: [
      { name: "Amadou Diop", review: "Une expérience inoubliable au Lac Rose. L'organisation était parfaite !", role: "Voyageur Solo" },
      { name: "Marie Lefebvre", review: "Wëndelu nous a fait découvrir un Sénégal authentique. Je recommande vivement.", role: "Exploratrice" },
      { name: "Jean-Paul Gomis", review: "La Teranga dans toute sa splendeur. Les guides sont passionnés.", role: "Passionné de Culture" }
    ],
    en: [
      { name: "Amadou Diop", review: "An unforgettable experience at Pink Lake. The organization was perfect!", role: "Solo Traveler" },
      { name: "Marie Lefebvre", review: "Wëndelu showed us an authentic Senegal. I highly recommend it.", role: "Explorer" },
      { name: "Jean-Paul Gomis", review: "Teranga in all its glory. The guides are truly passionate.", role: "Culture Enthusiast" }
    ]
  };

  const currentData = data[language];

  // Auto-slide logic
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= currentData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? currentData.length - 1 : prev - 1));
  };

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
  };

  return (
    <section className={`section-padding testimonials-section ${className}`}>
      <div className="section-header">
        <span className="sub-title">{t.title}</span>
        <h2 className="section-title text-gradient">{t.subtitle}</h2>
      </div>

      <div 
        className="testimonials-slider-master"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="testimonials-slider-viewport">
          <div 
            className="testimonials-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {currentData.map((item, index) => (
              <div key={index} className="testimonial-slide">
                <div className="testimonial-card glass">
                  <Quote className="quote-icon" size={28} />
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="var(--primary-orange)" color="var(--primary-orange)" />
                    ))}
                  </div>
                  <p className="review-text">"{item.review}"</p>
                  <div className="reviewer-info">
                    <div className="reviewer-avatar">{item.name[0]}</div>
                    <div>
                      <h4>{item.name}</h4>
                      <span>{item.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="testi-controls">
          <button className="testi-control-btn prev" onClick={prevSlide}>
            <ArrowLeft size={18} />
          </button>
          <div className="testi-pagination">
            {currentData.map((_, i) => (
              <button 
                key={i} 
                className={`testi-dot ${i === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
          <button className="testi-control-btn next" onClick={nextSlide}>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
