import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Home, ArrowLeft } from 'lucide-react';
import { translations } from '../i18n/translations';
import './NotFound.css';

const NotFound = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const t = translations[language].error;

  return (
    <div className="notfound-page">
      <div className="notfound-bg">
        <img 
          src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="African Baobab" 
          className="notfound-image"
        />
        <div className="notfound-overlay"></div>
      </div>

      <div className="notfound-content">
        <div className="notfound-code">{t.title}</div>
        <h1 className="notfound-subtitle">{t.subtitle}</h1>
        <p className="notfound-text">{t.text}</p>
        
        <div className="notfound-actions">
          <button onClick={() => navigate(`/${language}`)} className="btn btn-primary">
            <Home size={18} />
            {t.back}
          </button>
          <button onClick={() => navigate(-1)} className="btn btn-outline">
            <ArrowLeft size={18} />
            {language === 'fr' ? 'Retour' : 'Back'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
