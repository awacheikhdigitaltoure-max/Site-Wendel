import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import saintlouisImg from '../assets/Saint louis.png';
import './FAQSection.css';

const FAQSection = ({ className = "" }) => {
  const { language } = useLanguage();
  const t = translations[language].footer.faq;
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    { q: t.q1, a: t.a1 },
    { q: t.q2, a: t.a2 },
    { q: t.q3, a: t.a3 },
  ];

  return (
    <section className={`section-padding faq-section ${className}`} id="faq">
      <div className="section-header text-center mb-12">
        <h2 className="section-title text-gradient">{t.title}</h2>
      </div>
      
      <div className="faq-container">
        <div className="faq-image-wrapper">
          <img src={saintlouisImg} alt="Senegal FAQ" className="faq-image" />
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item-card ${activeIndex === index ? 'active-faq' : ''}`}
              onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
            >
              <div className="faq-q-row">
                <h4>{faq.q}</h4>
                <span className="faq-icon">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </div>
               {activeIndex === index && (
                 <div className="faq-a-content">
                   <p>{faq.a}</p>
                 </div>
               )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
