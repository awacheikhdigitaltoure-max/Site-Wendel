import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Star } from 'lucide-react';
import { experiencesData } from '../data/experiences';
import './PopularExperiences.css';

const PopularExperiences = ({ className = "" }) => {

  const { language } = useLanguage();

  const data = experiencesData;

  const t = language === 'fr'
    ? { subtitle: "Incontournables", title: "Expériences Populaires" }
    : { subtitle: "Must-Do", title: "Popular Experiences" };

  return (
    <section className={`section-padding popular-section ${className}`}>
      <div className="section-header">
        <span className="sub-title">{t.subtitle}</span>
        <h2 className="section-title text-gradient">{t.title}</h2>
      </div>

      <div className="popular-grid">
        {data[language].slice(0, 6).map((item) => (
          <div key={item.id} className="popular-card glass-card">
            <div className="popular-image-wrapper">
              <img src={item.image} alt={item.title} className="popular-img" />
            </div>
            <div className="popular-content">
              <div className="popular-meta">
                <span className="popular-duration">{item.duration}</span>
                <span className="popular-dot">•</span>
                <span className="popular-rating">
                  <Star size={16} fill="#FFB800" strokeWidth={0} className="star-icon" /> 
                  <strong>{item.rating}</strong> ({item.reviews})
                </span>
              </div>
              <h3 className="popular-title">{item.title}</h3>
              <div className="popular-footer">
                <div className="popular-price">
                  <span className="amount">{item.price}</span>
                  <span className="currency">{item.currency}</span>
                </div>
                <Link to={`/${language}/contact`} className="btn btn-primary compact-btn">
                  {language === 'fr' ? 'Réserver' : 'Book Now'}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularExperiences;
