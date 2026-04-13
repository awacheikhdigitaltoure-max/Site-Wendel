import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { Instagram, Facebook, Linkedin, Video } from 'lucide-react';
import logo from '../assets/logo-wendelu.png';
import './Footer.css';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;
  const n = translations[language].nav;

  return (
    <footer className="footer section-padding">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="logo-footer">
            <img src={logo} alt="Wëndelu Logo" className="logo-img-large" style={{ height: '110px', width: 'auto', marginBottom: '20px', filter: 'brightness(0) invert(1)' }} />
          </div>
          <p style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--primary-orange)', margin: '15px 0', fontFamily: 'Outfit, sans-serif' }}>
            "{t.slogan}"
          </p>
          <p>{t.tagline}</p>
          <div className="social-links" style={{ marginTop: '25px' }}>
            <a href="#" className="social-icon"><Instagram size={20} /></a>
            <a href="#" className="social-icon"><Facebook size={20} /></a>
            <a href="#" className="social-icon"><Linkedin size={20} /></a>
            <a href="#" className="social-icon" title="TikTok"><Video size={20} /></a>
          </div>
        </div>
        
        <div className="footer-links">
          <h3>{t.explorer}</h3>
          <Link to={`/${language}/destinations`}>{n.destinations}</Link>
          <Link to={`/${language}/experiences`}>{n.services}</Link>
          <Link to={`/${language}/about`}>{n.about}</Link>
          <a href={`/${language}#faq`}>FAQ</a>
        </div>
        
        <div className="footer-newsletter">
          <h3>{t.newsletter}</h3>
          <p>{t.newsletterText}</p>
          <div className="newsletter-form">
            <input type="email" placeholder={language === 'fr' ? "Votre email" : "Your email"} />
            <button 
              className="btn btn-primary" 
              onClick={() => alert(language === 'fr' ? "Merci pour votre inscription !" : "Thank you for subscribing!")}
            >
              {t.subscribe}
            </button>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 Wëndelu - {t.rights} <span className="local-text" style={{ color: 'var(--primary-orange)', fontWeight: 'bold', marginLeft: '10px' }}>{t.slogan}</span></p>
      </div>
    </footer>
  );
};

export default Footer;
