import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { Quote, Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = ({ className = "" }) => {
  const { language } = useLanguage();
  const t = translations[language].testimonials;

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

  return (
    <section className={`section-padding testimonials-section ${className}`}>
      <div className="section-header">
        <span className="sub-title">{t.title}</span>
        <h2 className="section-title text-gradient">{t.subtitle}</h2>
      </div>

      <div className="testimonials-grid">
        {data[language].map((item, index) => (
          <div key={index} className="testimonial-card glass">
            <Quote className="quote-icon" size={40} />
            <div className="stars">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--primary-orange)" color="var(--primary-orange)" />)}
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
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
