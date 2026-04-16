import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { experiencesData } from '../data/experiences';
import { Star, MapPin, Clock, ChevronDown, Search, ArrowRight, Sparkles, Users } from 'lucide-react';
import Reveal from '../components/Reveal';
import heroBanner from '../assets/mangrove.png';
import './Experiences.css';

const Experiences = () => {
  const { language } = useLanguage();
  const [filterRegion, setFilterRegion] = useState('all');
  const [filterBudget, setFilterBudget] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCard, setActiveCard] = useState(null);

  const t = {
    fr: {
      title: "Expériences",
      titleAccent: "Authentiques",
      subtitle: "Partez à la découverte des merveilles du Sénégal",
      filters: {
        region: "Région",
        budget: "Budget",
        category: "Type d'activité",
        allRegions: "Toutes",
        allBudgets: "Tous les prix",
        allCategories: "Tous types",
        search: "Rechercher..."
      },
      stats: {
        from: "À partir de",
        reviews: "avis"
      },
      cta: "Réserver",
      explore: "Explorer",
      featured: "À la une",
      results: "expérience(s) trouvée(s)",
      grid_title: "Toutes nos expériences",
      newsletter_title: "Vivez l'aventure Wëndelu",
      newsletter_desc: "Inscrivez-vous pour recevoir nos pépites de voyage et offres exclusives.",
      subscribe: "S'abonner"
    },
    en: {
      title: "Authentic",
      titleAccent: "Experiences",
      subtitle: "Discover the wonders of Senegal",
      filters: {
        region: "Region",
        budget: "Budget",
        category: "Type of activity",
        allRegions: "All",
        allBudgets: "All prices",
        allCategories: "All types",
        search: "Search..."
      },
      stats: {
        from: "Starting at",
        reviews: "reviews"
      },
      cta: "Book",
      explore: "Explore",
      featured: "Featured",
      results: "experience(s) found",
      grid_title: "All our experiences",
      newsletter_title: "Live the Wëndelu Adventure",
      newsletter_desc: "Sign up to receive our travel gems and exclusive offers.",
      subscribe: "Subscribe"
    }
  }[language];

  const allData = experiencesData[language];
  const filteredData = allData.filter(exp => {
    const matchRegion = filterRegion === 'all' || exp.region.toLowerCase() === filterRegion.toLowerCase();
    const matchBudget = filterBudget === 'all' || exp.budget.toLowerCase() === filterBudget.toLowerCase();
    const matchCategory = filterCategory === 'all' || exp.category.toLowerCase() === filterCategory.toLowerCase();
    const matchSearch = exp.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchRegion && matchBudget && matchCategory && matchSearch;
  });

  const regions = ['all', ...new Set(allData.map(e => e.region))];
  const budgets = ['all', ...new Set(allData.map(e => e.budget))];
  const categories = ['all', ...new Set(allData.map(e => e.category))];

  return (
    <div className="exp-page">

      {/* ── Hero Header ── */}
      <div className="exp-hero-header">
        <div className="exp-hero-banner">
          <img src={heroBanner} alt="Experiences Wëndelu" />
          <div className="exp-hero-overlay" />
        </div>
        
        <div className="container mx-auto px-10 md:px-20 xl:px-[20%] max-w-[1240px]">
          <Reveal>
            <div className="exp-hero-text">
              <span className="exp-eyebrow">
                <Sparkles size={14} />
                Wëndelu Experiences
              </span>
              <h1>
                {t.title} <span className="exp-title-accent">{t.titleAccent}</span>
              </h1>
              <p>{t.subtitle}</p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── Filter Bar ── */}
      <div className="exp-filter-zone">
        <div className="container mx-auto px-10 md:px-20 xl:px-[20%] max-w-[1240px]">
          <Reveal>
            <div className="exp-filter-bar">
              {/* Search */}
              <div className="exp-search-wrap">
                <Search size={16} className="exp-search-icon" />
                <input
                  type="text"
                  placeholder={t.filters.search}
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="exp-search-input"
                />
              </div>

              <div className="exp-filter-divider" />

                {/* Selects */}
                <div className="exp-selects">
                  <div className="exp-select-wrap">
                    <label className="filter-label">{t.filters.budget}</label>
                    <div className="exp-select-box">
                      <select value={filterBudget} onChange={e => setFilterBudget(e.target.value)}>
                        {budgets.map(b => <option key={b} value={b}>{b === 'all' ? t.filters.allBudgets : b}</option>)}
                      </select>
                      <ChevronDown size={14} />
                    </div>
                  </div>

                  <div className="exp-select-wrap">
                    <label className="filter-label">{t.filters.region}</label>
                    <div className="exp-select-box">
                      <select value={filterRegion} onChange={e => setFilterRegion(e.target.value)}>
                        {regions.map(r => <option key={r} value={r}>{r === 'all' ? t.filters.allRegions : r}</option>)}
                      </select>
                      <ChevronDown size={14} />
                    </div>
                  </div>

                  <div className="exp-select-wrap">
                    <label className="filter-label">{t.filters.category}</label>
                    <div className="exp-select-box">
                      <select value={filterCategory} onChange={e => setFilterCategory(e.target.value)}>
                        {categories.map(c => <option key={c} value={c}>{c === 'all' ? t.filters.allCategories : c}</option>)}
                      </select>
                      <ChevronDown size={14} />
                    </div>
                  </div>
                </div>

              {/* Count */}
              <span className="exp-count">{filteredData.length} {t.results}</span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="exp-content-zone">
        <div className="container mx-auto px-10 md:px-20 xl:px-[20%] max-w-[1240px]">

          {filteredData.length === 0 ? (
            <div className="exp-empty">Aucune expérience ne correspond à vos critères.</div>
          ) : (
            <>
              {/* Cards Grid */}
              <div className="exp-grid">
                {filteredData.slice(0, 16).map((exp, i) => (
                  <Reveal key={exp.id} delay={i * 0.1}>
                    <div
                      className={`exp-card ${activeCard === exp.id ? 'is-active' : ''}`}
                      onMouseEnter={() => setActiveCard(exp.id)}
                      onMouseLeave={() => setActiveCard(null)}
                    >
                      <div className="exp-card-img">
                        <img src={exp.image} alt={exp.title} />
                        <div className="exp-card-badge">
                          <Star size={12} fill="#ffc107" strokeWidth={0} />
                          {exp.rating}
                        </div>
                      </div>
                      <div className="exp-card-body">
                        <h3 className="exp-card-title">{exp.title}</h3>
                        
                        <div className="exp-card-meta">
                          <span><MapPin size={14} /> {exp.region}</span>
                          <span><Clock size={14} /> {exp.duration}</span>
                          <span className="exp-category-tag">{exp.category}</span>
                          <span className="exp-group-size"><Users size={14} /> {exp.groupSize}</span>
                        </div>
                        
                        <p className="exp-card-desc">{exp.description}</p>
                        
                        <div className="exp-card-rating">
                          <Star size={13} fill="#FFB800" strokeWidth={0} />
                          <strong>{exp.rating}</strong>
                          <span>({exp.reviews} {t.stats.reviews})</span>
                        </div>
                        
                        <div className="exp-card-footer">
                          <div className="exp-price-wrap">
                            <span className="exp-from-label">{t.stats.from}</span>
                            <div className="exp-price">{exp.price} <span>{exp.currency}</span></div>
                          </div>
                          <button className="exp-book-btn">
                            {t.cta}
                          </button>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Newsletter / CTA Section */}
              <Reveal delay={0.4}>
                <div className="exp-footer-cta">
                  <div className="exp-cta-content">
                    <h3>{t.newsletter_title}</h3>
                    <p>{t.newsletter_desc}</p>
                    <div className="exp-cta-form">
                      <input type="email" placeholder="votre@email.com" />
                      <button>{t.subscribe}</button>
                    </div>
                  </div>
                </div>
              </Reveal>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
