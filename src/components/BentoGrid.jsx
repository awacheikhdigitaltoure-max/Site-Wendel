import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ExperienceCard from './ExperienceCard';
import './BentoGrid.css';

// Image imports
import lompoul from '../assets/lompoul.png';
import goree from '../assets/goree.png';
import casamance from '../assets/casamance.png';
import lacrose from '../assets/lacrose.png';
import saly from '../assets/Saly portudal.png';
import djoudj from '../assets/djoudj_pelicans.jpg.jpg';
import mangrove from '../assets/mangrove.png';
import monument from '../assets/monument-renaissance.jpg';

const BentoGrid = ({ items, title, subtitle }) => {

  const { language } = useLanguage();
  
  const defaultExperiences = {
    fr: [
      { id: 1, title: "Île de Gorée", category: "Histoire & Culture", image: goree },
      { id: 11, title: "Désert de Lompoul", category: "Aventure", image: lompoul },
      { id: 14, title: "Parc des Oiseaux du Djoudj", category: "Nature", image: djoudj },
      { id: 3, title: "Saly Portudal", category: "Détente", image: saly },
      { id: 12, title: "Delta du Saloum", category: "Nature", image: mangrove },
      { id: 10, title: "Le Lac Rose", category: "Découverte", image: lacrose },
      { id: 22, title: "Casamance", category: "Authenticité", image: casamance },
      { id: 20, title: "Monument Renaissance", category: "Culture", image: monument }
    ],
    en: [
      { id: 1, title: "Goree Island", category: "History & Culture", image: goree },
      { id: 11, title: "Lompoul Desert", category: "Adventure", image: lompoul },
      { id: 14, title: "Djoudj Bird Sanctuary", category: "Nature", image: djoudj },
      { id: 3, title: "Saly Portudal", category: "Relaxation", image: saly },
      { id: 4, title: "Somone Lagoon", category: "Nature", image: mangrove },
      { id: 10, title: "The Pink Lake", category: "Discovery", image: lacrose },
      { id: 22, title: "Casamance", category: "Authenticity", image: casamance },
      { id: 20, title: "Renaissance Monument", category: "Culture", image: monument }
    ]
  };


  const displayItems = items || defaultExperiences[language];
  const displayTitle = title || (language === 'fr' ? "Destinations Phares" : "Flagship Destinations");
  const displaySubtitle = subtitle || (language === 'fr' ? "Le Sénégal à Travers Vos Yeux" : "Senegal Through Your Eyes");

  return (
    <section className="bento-section" id="destinations">
      <div className="section-header">
        <h2 className="section-title text-gradient">{displayTitle}</h2>
      </div>
      
      <div className="destinations-grid">
        {displayItems.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default BentoGrid;
