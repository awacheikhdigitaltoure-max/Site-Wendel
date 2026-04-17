import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, ShieldCheck, Users, Sparkles } from 'lucide-react';
import casamanceImg from '../assets/casamance.png'; // L'image de la pirogue sur le fleuve (mangrove) correspond parfaitement
import './WhyWendelu.css';

const WhyWendelu = ({ className = "" }) => {
  const { language } = useLanguage();

  const data = {
    fr: {
      title: "Pourquoi Wëndelu ?",
      features: [
        {
          icon: <MapPin size={20} />,
          title: "Destinations authentiques",
          text: "Découvrez le Sénégal hors des sentiers battus"
        },
        {
          icon: <ShieldCheck size={20} />,
          title: "Réservation sécurisée",
          text: "Paiement 100% sécurisé et service réactif"
        },
        {
          icon: <Users size={20} />,
          title: "Guides locaux experts",
          text: "Accompagnement par des professionnels passionnés"
        },
        {
          icon: <Sparkles size={20} />,
          title: "Expériences sur mesure",
          text: "Activités adaptées à tous les voyageurs"
        }
      ]
    },
    en: {
      title: "Why Choose Wëndelu?",
      features: [
        {
          icon: <MapPin size={26} />,
          title: "Authentic Destinations",
          text: "Discover Senegal off the beaten path"
        },
        {
          icon: <ShieldCheck size={26} />,
          title: "Secure Booking",
          text: "100% secure payment and responsive service"
        },
        {
          icon: <Users size={26} />,
          title: "Expert Local Guides",
          text: "Accompaniment by passionate professionals"
        },
        {
          icon: <Sparkles size={26} />,
          title: "Tailor-made Experiences",
          text: "Activities adapted for all travelers"
        }
      ]
    }
  };

  const content = data[language];

  return (
    <section className={`section-padding why-section ${className}`}>
      <div className="why-container">
        <div className="why-content">
          <h2 className="why-title text-gradient">{content.title}</h2>
          
          <div className="features-grid">
            {content.features.map((feature, index) => (
              <div key={index} className="feature-mini-card">
                <div className="feature-icon-mini">
                  {feature.icon}
                </div>
                <h4 className="feature-title-mini">{feature.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWendelu;
