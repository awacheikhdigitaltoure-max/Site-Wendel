import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ExperienceCard.css';

const ExperienceCard = ({ id, title, category, image }) => {
  const { language } = useLanguage();
  const btnText = language === 'fr' ? 'Découvrir' : 'Discover';

  return (
    <div className="experience-card">
      <div className="card-image">
        <img src={image} alt={title} />
        <div className="card-overlay"></div>
      </div>
      <div className="card-content">
        <span className="card-category">{category}</span>
        <h3 className="card-title">{title}</h3>
        <Link to={`/${language}/destinations/${id || 1}`} className="card-btn">
          {btnText} <ArrowUpRight size={20} strokeWidth={2.5} />
        </Link>
      </div>
    </div>
  );
};

export default ExperienceCard;
