import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Mountain, Leaf, Landmark, Sun, Map } from 'lucide-react';
import './ServicesSection.css';

// Import images for the experiences
import lompoulImg from '../assets/lompoul.png';
import casamanceImg from '../assets/casamance.png';
import goreeImg from '../assets/goree.png';
import lacroseImg from '../assets/lacrose.png';
import nouveauMonumentImg from '../assets/nouveau-monument.jpg.png';

const ServicesSection = () => {
  const { language } = useLanguage();
  
  const experiences = {
    fr: [
      {
        icon: <Mountain size={28} />,
        title: "Aventure",
        description: "Des sensations fortes pour les esprits audacieux.",
        image: lompoulImg
      },
      {
        icon: <Leaf size={28} />,
        title: "Nature",
        description: "Une immersion apaisante dans des paysages sauvages et préservés.",
        image: casamanceImg
      },
      {
        icon: <Landmark size={28} />,
        title: "Culture",
        description: "Une plongée fascinante dans les traditions et l'histoire locale.",
        image: goreeImg
      },
      {
        icon: <Sun size={28} />,
        title: "Détente",
        description: "Des moments de relaxation absolue sous le soleil sénégalais.",
        image: lacroseImg
      },
      {
        icon: <Map size={28} />,
        title: "Découverte",
        description: "L'exploration inédite de joyaux cachés hors des sentiers battus.",
        image: nouveauMonumentImg
      }
    ],
    en: [
      {
        icon: <Mountain size={28} />,
        title: "Adventure",
        description: "Thrills for bold spirits.",
        image: lompoulImg
      },
      {
        icon: <Leaf size={28} />,
        title: "Nature",
        description: "A soothing immersion in wild and preserved landscapes.",
        image: casamanceImg
      },
      {
        icon: <Landmark size={28} />,
        title: "Culture",
        description: "A fascinating dive into local traditions and history.",
        image: goreeImg
      },
      {
        icon: <Sun size={28} />,
        title: "Relaxation",
        description: "Moments of absolute relaxation under the Senegalese sun.",
        image: lacroseImg
      },
      {
        icon: <Map size={28} />,
        title: "Discovery",
        description: "The unprecedented exploration of hidden gems off the beaten path.",
        image: nouveauMonumentImg
      }
    ]
  };

  const t = language === 'fr' 
    ? { title: "Spécialités", subtitle: "Expériences Authentiques" }
    : { title: "Specialties", subtitle: "Authentic Experiences" };

  return (
    <section className="section-padding services-section" id="services">
      <div className="section-header">
        <span className="sub-title">{t.title}</span>
        <h2 className="section-title text-gradient">{t.subtitle}</h2>
      </div>
      
      <div className="services-grid">
        {experiences[language].map((exp, index) => (
          <div key={index} className="service-card glass-card">
            <div className="service-image-wrapper">
              <img src={exp.image} alt={exp.title} className="service-img" />
              <div className="service-icon-badge">{exp.icon}</div>
            </div>
            <div className="service-content">
              <h3>{exp.title}</h3>
              <p>{exp.description}</p>
              <Link to={`/${language}/destinations`} className="service-link">
                {language === 'fr' ? 'Explorer' : 'Explore'} →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
