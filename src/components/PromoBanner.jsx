import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';
import './PromoBanner.css';
import bgImage from '../assets/hero-bg-premium.png';


const PromoBanner = ({ className = "" }) => {
  const { language } = useLanguage();

  const content = language === 'fr' 
    ? {
        title: "Prêt pour une aventure inoubliable ?",
        subtitle: "Réservez dès maintenant votre circuit sur-mesure et découvrez le Sénégal autrement.",
        btn: "Commencer l'aventure"
      }
    : {
        title: "Ready for an unforgettable adventure?",
        subtitle: "Book your tailor-made tour now and discover Senegal differently.",
        btn: "Start the adventure"
      };

  return (
    <section className={`promo-banner-container ${className}`}>
      <div className="promo-banner" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="promo-overlay"></div>
        <div className="promo-content">
          <h2 className="promo-title">{content.title}</h2>
          <p className="promo-subtitle">{content.subtitle}</p>
          <Link to={`/${language}/destinations`} className="promo-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            {content.btn} <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
