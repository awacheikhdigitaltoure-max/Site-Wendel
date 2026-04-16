import React from 'react';
import Reveal from '../components/Reveal';
import BentoGrid from '../components/BentoGrid';
import { destinationsData } from '../data/destinations';
import { useLanguage } from '../context/LanguageContext';

const Destinations = () => {
  const { language } = useLanguage();
  const allDestinations = destinationsData;

  return (
    <div className="page destinations-page min-h-screen">
      <div className="main-container py-20">
         <Reveal>
           <BentoGrid 
             items={allDestinations[language]} 
             title={language === 'fr' ? "Explorez le Sénégal" : "Explore Senegal"}
             subtitle={language === 'fr' ? "Catalogue Complet" : "Full Catalog"}
           />
         </Reveal>
      </div>
    </div>
  );
};

export default Destinations;
