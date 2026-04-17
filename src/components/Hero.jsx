import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { ChevronRight } from 'lucide-react';
import heroImg from '../assets/nouveau-monument.jpg.png';
import './Hero.css';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
     <section className="hero">
       <div className="hero-background">
         <img src={heroImg} alt="Sénégal" />
         <div className="hero-overlay"></div>
       </div>
       
       <div className="hero-content hero-reveal">
         <span className="hero-category">
           {t.title}
         </span>
         <h1 className="hero-title">
           {t.slogan}
         </h1>
         <p className="hero-description">
           {t.subtitle}
         </p>
         <div className="hero-actions">
           <Link to={`/${language}/destinations`} className="btn btn-primary">
             {t.explore} <ChevronRight size={20} />
           </Link>
           <Link to={`/${language}/about`} className="btn btn-outline-white">
             {t.story}
           </Link>
         </div>
       </div>
      
      <div className="hero-stats-bar">
        <div className="stat-item">
          <span className="stat-num">50+</span>
          <span className="stat-label">{language === 'fr' ? 'Destinations' : 'Destinations'}</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-num">15</span>
          <span className="stat-label">{language === 'fr' ? 'Experts Locaux' : 'Local Experts'}</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-num">14</span>
          <span className="stat-label">{language === 'fr' ? 'Régions du Sénégal' : 'Senegal Regions'}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
