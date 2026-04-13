import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import lompoul from '../assets/lompoul.png';
import './PromotionModal.css';

const PromotionModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const { language } = useLanguage();
  const translations_local = {
    fr: {
      title: "Offre Spéciale : Désert de Lompoul",
      subtitle: "Vivez une nuit magique sous les étoiles.",
      cta: "RÉSERVER MAINTENANT",
      tag: "INCONTOURNABLE"
    },
    en: {
      title: "Special Offer: Lompoul Desert",
      subtitle: "Live a magical night under the stars.",
      cta: "BOOK NOW",
      tag: "MUST-SEE"
    }
  };

  const t = translations_local[language] || translations_local['fr'];

  useEffect(() => {
    // Check if user has already closed it in this session
    const hasSeen = sessionStorage.getItem('promoSeen');
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 4000); // 4 seconds delay
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setIsClosed(true);
    sessionStorage.setItem('promoSeen', 'true');
  };

  if (isClosed || !isVisible) return null;

  return (
    <div className="promo-overlay">
      <div className="promo-container">
        <button className="promo-close" onClick={handleClose}>
          <X size={20} />
        </button>
        
        <div className="promo-image-side">
          <img src={lompoul} alt="Lompoul" />
          <div className="promo-tag">
            <Sparkles size={14} />
            <span>{t.tag}</span>
          </div>
        </div>
        
        <div className="promo-content-side">
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
          <Link to={`/${language}/contact`} className="promo-btn" onClick={handleClose}>
            {t.cta}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PromotionModal;
