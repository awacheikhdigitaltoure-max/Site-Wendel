import React from 'react';
import Reveal from '../components/Reveal';
import BentoGrid from '../components/BentoGrid';
import { destinationsData } from '../data/destinations';
import { useLanguage } from '../context/LanguageContext';

const Destinations = () => {
  const { language } = useLanguage();
  const allDestinations = destinationsData;

  return (
    <div className="page destinations-page pt-[120px] min-h-screen">
      <div className="section-padding" style={{paddingTop: '60px'}}>
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
