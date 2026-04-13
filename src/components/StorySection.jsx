import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Handshake, Sparkles, Heart } from 'lucide-react';
import './StorySection.css';

const StorySection = () => {
  const { language } = useLanguage();

  const content = {
    fr: {
      subtitle: "L'Âme du Pays",
      title: "Plus qu'un voyage, un héritage",
      description: "Le Sénégal ne se visite pas, il se vit. C'est le sourire d'un guide à Saint-Louis, le savoir-faire d'un tisserand à Ngaye Mékhé, et l'écho des tambours au coucher du soleil.",
      quote: "Au Sénégal, l'invité est un roi. On ne demande pas d'où tu viens, on te demande si tu as faim.",
      author: "Sagesse Locale",
      cards: [
        { icon: <Handshake size={32} />, title: "La Teranga", desc: "Plus qu'une simple hospitalité, c'est l'art de recevoir l'autre comme un frère." },
        { icon: <Sparkles size={32} />, title: "Savoir-Faire", desc: "Nos artisans façonnent l'avenir en préservant les gestes sacrés du passé." },
        { icon: <Heart size={32} />, title: "Fierté Locale", desc: "Wëndelu vous connecte avec ceux qui font battre le cœur du pays : les locaux." }
      ]
    },
    en: {
      subtitle: "The Soul of the Country",
      title: "More than a journey, a heritage",
      description: "Senegal is not just visited, it is experienced. It is the smile of a guide in Saint-Louis, the craftsmanship of a weaver in Ngaye Mékhé, and the echo of drums at sunset.",
      quote: "In Senegal, the guest is a king. We don't ask where you come from, we ask if you are hungry.",
      author: "Local Wisdom",
      cards: [
        { icon: <Handshake size={32} />, title: "Teranga", desc: "More than simple hospitality, it is the art of receiving others as brothers." },
        { icon: <Sparkles size={32} />, title: "Craftsmanship", desc: "Our artisans shape the future by preserving the sacred gestures of the past." },
        { icon: <Heart size={32} />, title: "Local Pride", desc: "Wëndelu connects you with those who make the country's heart beat: the locals." }
      ]
    }
  };

  const t = content[language];

  return (
    <section className="section-padding story-section" id="story">
      <div className="story-content reveal">
        <span className="sub-title">{t.subtitle}</span>
        <h2 className="section-title text-gradient">{t.title}</h2>
        <p className="story-description">
          {t.description}
        </p>
        
        <div className="story-grid">
          {t.cards.map((card, index) => (
            <div key={index} className="story-card glass-card">
              <div className="story-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="story-quote glass">
          <p>"{t.quote}"</p>
          <span>— {t.author}</span>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
