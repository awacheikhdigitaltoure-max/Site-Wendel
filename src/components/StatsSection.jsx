import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Compass, Users } from 'lucide-react';
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
      icon: <Compass className="stat-icon" />,
      value: "100+",
      label: language === 'fr' ? "Expériences" : "Experiences"
    },
    {
      id: 3,
      icon: <Users className="stat-icon" />,
      value: language === 'fr' ? "Illimitée" : "Unlimited",
      label: language === 'fr' ? "Communauté" : "Community"
    }
  ];

  return (
    <section className="stats-section section-padding">
      <div className="stats-container">
        {stats.map((stat) => (
          <div key={stat.id} className="stat-item">
            <div className="stat-icon-wrapper">{stat.icon}</div>
            <div className="stat-text">
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
