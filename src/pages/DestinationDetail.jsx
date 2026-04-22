import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { destinationsData } from '../data/destinations';
import { experiencesData } from '../data/experiences';
import Reveal from '../components/Reveal';
import { Star, MapPin, ArrowLeft, Clock, Navigation, Zap, CheckCircle } from 'lucide-react';
import './DestinationDetail.css';

const DestinationDetail = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  
  const destination = destinationsData[language].find(d => d.id === parseInt(id));
  
  // Find nearby experiences from the same region
  const nearbyExperiences = experiencesData[language]
    .filter(exp => exp.region === destination?.region && exp.id !== destination?.id)
    .slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!destination) {
    return (
      <div className="pt-32 text-center min-h-[60vh]">
        <h2 className="text-2xl font-bold">Destination non trouvée</h2>
        <Link to="/" className="text-primary-green hover:underline mt-4 inline-block">
          Retour
        </Link>
      </div>
    );
  }

  const t = {
    fr: {
      back: "Retour",
      activities: "Expériences Signature",
      book: "Réserver l'expérience",
      gallery: "Portfolio Visuel",
      about: "L'Essentiel",
      highlights: "Points Forts",
      nearby: "À découvrir à proximité",
      priceFrom: "À partir de",
      trust: "Paiement sécurisé • Support 24/7",
      included: "Ce qui est inclus",
      excluded: "Non inclus",
      duration: "Durée",
      group: "Groupe"
    },
    en: {
      back: "Back",
      activities: "Signature Experiences",
      book: "Book Experience",
      gallery: "Visual Portfolio",
      about: "The Essentials",
      highlights: "Highlights",
      nearby: "Discover Nearby",
      priceFrom: "Starting from",
      trust: "Secure Payment • 24/7 Support",
      included: "What's included",
      excluded: "Not included",
      duration: "Duration",
      group: "Group"
    }
  }[language];

  return (
    <div className="destination-detail-page minimalist">
      {/* Hero Section - Cinematic */}
      <section className="detail-hero-zen">
        <div className="detail-hero-bg">
          <img src={destination.image} alt={destination.title} />
          <div className="hero-overlay-soft"></div>
        </div>
        
        <div className="detail-hero-content container mx-auto px-4">
          <Link to="/destinations" className="back-link-zen">
            <ArrowLeft size={18} /> {t.back}
          </Link>
          
          <Reveal>
            <div className="hero-text-zen">

              <h1 className="detail-title-zen">{destination.title}</h1>
              
              <div className="hero-quick-meta">
                <div className="meta-item">
                  <Clock size={16} />
                  <span>{destination.duration || "Demi-journée"}</span>
                </div>
                <div className="meta-item">
                  <Navigation size={16} />
                  <span>{destination.region}</span>
                </div>
                <div className="meta-item">
                  <Star fill="#EF7C0F" stroke="none" size={16} />
                  <span>{destination.rating} ({destination.reviews} {language === 'fr' ? 'avis' : 'reviews'})</span>
                </div>
              </div>
              

            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Content - Breathing Space */}
      <section className="detail-main-zen">
        <div className="container mx-auto px-4">
          <div className="zen-grid">
            
            {/* Left Column: Info & Content */}
            <div className="zen-info-col">
              <Reveal>
                <div className="zen-section">
                  <h2 className="zen-section-title">{t.about}</h2>
                  <p className="zen-description">
                    {destination.detailedDescription || destination.description}
                  </p>
                </div>
              </Reveal>

              {/* Highlights section */}
              {destination.highlights && (
                <Reveal>
                  <div className="zen-section">
                    <h3 className="zen-section-title">{t.highlights}</h3>
                    <div className="highlights-grid">
                      {destination.highlights.map((item, idx) => (
                        <div key={idx} className="highlight-tag">
                          <Zap size={16} className="trust-icon" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}

              {/* Signature Activities */}
              {destination.experiences && (
                <Reveal>
                  <div className="zen-section">
                    <h3 className="zen-section-title">{t.activities}</h3>
                    <div className="zen-experiences">
                      {destination.experiences.map((exp, idx) => (
                        <div key={idx} className="zen-exp-item">

                          <div className="zen-exp-text">
                            <strong>{exp.title}</strong>
                            <p className="zen-exp-desc">{exp.desc}</p>
                            <span className="zen-exp-duration">
                              <Clock size={12} style={{display: 'inline', marginRight: '4px'}} />
                              {exp.duration}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}

              {/* Inclusions / Exclusions */}
              {(destination.included || destination.excluded) && (
                <Reveal>
                  <div className="zen-section inclusions-wrap">
                    <div className="inc-col">
                      <h3 className="zen-section-title small">{t.included}</h3>
                      <ul className="inc-list">
                        {destination.included?.map((item, i) => (
                          <li key={i}><CheckCircle size={14} className="text-primary-green" /> {item}</li>
                        )) || <li>Détails sur demande</li>}
                      </ul>
                    </div>
                    <div className="inc-col">
                      <h3 className="zen-section-title small">{t.excluded}</h3>
                      <ul className="inc-list excluded">
                        {destination.excluded?.map((item, i) => (
                          <li key={i}>✕ {item}</li>
                        )) || <li>Détails sur demande</li>}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              )}

              {/* Enhanced Visual Portfolio - Single Image */}
              {destination.gallery && destination.gallery.length > 0 && (
                <Reveal>
                  <div className="zen-section">
                    <h3 className="zen-section-title">{t.gallery}</h3>
                    <div className="premium-single-image">
                      <img src={destination.gallery[0]} alt={destination.title} loading="lazy" />
                    </div>
                  </div>
                </Reveal>
              )}

              {/* Nearby Experiences section */}
              {nearbyExperiences.length > 0 && (
                <Reveal>
                  <div className="zen-section">
                    <h3 className="zen-section-title">{t.nearby}</h3>
                    <div className="zen-experiences">
                       {nearbyExperiences.map((exp, idx) => (
                        <Link key={idx} to={`/${language}/experiences`} className="zen-exp-item" style={{textDecoration: 'none'}}>
                          <div className="zen-exp-dot" style={{background: '#94a3b8'}}></div>
                          <div className="zen-exp-text">
                            <strong>{exp.title}</strong>
                            <p className="zen-exp-desc">{exp.description}</p>
                            <span className="zen-exp-duration">{exp.category} • {exp.duration}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}
            </div>

            {/* Right Column: Floating Concierge Sidebar */}
            <div className="zen-sidebar-col">
              <div className="zen-booking-card">
                <div className="zen-booking-header">
                </div>
                
                <Link to={`/${language}/contact`} className="zen-book-btn" style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}>
                  {t.book}
                </Link>
                

                
                <p className="zen-trust" style={{marginTop: '0', textAlign: 'center'}}>Sénégal • Teranga Experience</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationDetail;
