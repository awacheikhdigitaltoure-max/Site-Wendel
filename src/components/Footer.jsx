import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import logo from '../assets/logo-wendelu.png';
import './Footer.css';

/* Icône TikTok SVG custom (lucide n'en a pas) */
const TikTokIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
  </svg>
);

const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/wendelu_excursion/',
  facebook: 'https://www.facebook.com/61585580312236',
  linkedin: 'https://www.linkedin.com/company/110394542/',
  tiktok: 'https://www.tiktok.com/@wendelu_excursion0',
};

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;
  const n = translations[language].nav;

  return (
    <footer className="footer section-padding">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="logo-footer">
            <img src={logo} alt="Wëndelu Logo" className="logo-img-large" style={{ height: '70px', width: 'auto', marginBottom: '10px', filter: 'brightness(0) invert(1)' }} />
          </div>
          <p style={{ 
            fontSize: '1.4rem', 
            fontWeight: '700', 
            color: '#FF9D00', 
            margin: '10px 0', 
            fontFamily: 'Outfit, sans-serif',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            "{t.slogan}"
          </p>
          <p>{t.tagline}</p>
          <div className="social-links" style={{ marginTop: '15px' }}>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram">
              <Instagram size={20} />
            </a>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="social-icon" title="Facebook">
              <Facebook size={20} />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="social-icon" title="TikTok">
              <TikTokIcon size={20} />
            </a>
          </div>
        </div>
        
        <div className="footer-links">
          <h3>{t.explorer}</h3>
          <Link to={`/${language}/destinations`}>{n.destinations}</Link>
          <Link to={`/${language}/experiences`}>{n.services}</Link>
          <Link to={`/${language}/about`}>{n.about}</Link>
          <a href="#faq" onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById('faq');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.location.href = `/${language}#faq`;
            }
          }}>FAQ</a>
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
