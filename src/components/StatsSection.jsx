import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Users, Globe } from 'lucide-react';
import './StatsSection.css';

const StatsSection = () => {
  const { language } = useLanguage();

  const stats = [
    {
      id: 1,
      icon: <MapPin className="stat-icon" />,
      value: "50+",
      label: language === 'fr' ? "Destinations" : "Destinations"
    },
    {
      id: 2,
      icon: <Users className="stat-icon" />,
      value: "20+",
      label: language === 'fr' ? "Experts Locaux" : "Local Experts"
    },
    {
      id: 3,
      icon: <Globe className="stat-icon" />,
      value: "14",
      label: language === 'fr' ? "Régions du Sénégal" : "Senegal Regions"
    }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat) => (
          <div key={stat.id} className="stat-card">
            <div className="stat-icon-wrapper">{stat.icon}</div>
            <div className="stat-info">
              <h3 className="stat-big-num">{stat.value}</h3>
              <p className="stat-desc">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
