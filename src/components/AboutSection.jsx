import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { Target, Eye, Heart } from 'lucide-react';
import aboutImage from '../assets/senegal-hero-banner.png';
import './AboutSection.css';

const AboutSection = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section className="section-padding about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title text-gradient">L'Authenticité au Cœur de la Teranga</h2>
          <p className="storytelling-text">
            {t.storytelling}
          </p>
          
          <div className="values-grid">
            <div className="value-card glass">
              <Target className="value-icon primary" size={32} />
              <h3>{t.mission}</h3>
              <p>{t.missionText}</p>
            </div>
            
            <div className="value-card glass">
              <Eye className="value-icon secondary" size={32} />
              <h3>{t.vision}</h3>
              <p>{t.visionText}</p>
            </div>
            
            <div className="value-card glass">
              <Heart className="value-icon accent" size={32} />
              <h3>{t.values}</h3>
              <p>{t.valuesText}</p>
            </div>
          </div>
        </div>

        <div className="about-visual glass">
          <div className="visual-wrapper">
             <img src={aboutImage} alt="Senegal Landscape" className="about-img-main" />
          </div>
          <div className="visual-decoration-top"></div>
          <div className="visual-decoration-bottom"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
