import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

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
      <div className="text-center mb-16">
        <span className="sub-title" style={{color: 'var(--primary-orange)'}}>Wëndelu Help</span>
        <h2 className="section-title text-gradient">{t.title}</h2>
      </div>
      
      <div className="mx-auto space-y-2" style={{ maxWidth: '600px' }}>
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`glass-card cursor-pointer transition-all duration-300 ${activeIndex === index ? 'active-faq' : ''}`}
            onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
            style={{ 
              border: '1px solid var(--glass-border)', 
              background: 'var(--glass-bg)', 
              padding: '12px 20px',
              borderRadius: '15px',
              textAlign: 'center'
            }}
          >
            <div className="flex justify-between items-center text-center">
              <div style={{ width: '20px' }}></div> {/* Symmetry spacer */}
              <h4 className="text-base font-semibold" style={{ flex: 1 }}>{faq.q}</h4>
              <span className="text-lg font-bold" style={{ color: 'var(--primary-orange)', width: '20px' }}>
                {activeIndex === index ? '−' : '+'}
              </span>
            </div>
             {activeIndex === index && (
               <p className="mt-2 opacity-80 leading-relaxed text-center" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                 {faq.a}
               </p>
             )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
