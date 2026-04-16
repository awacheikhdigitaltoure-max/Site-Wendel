import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { destinationsData } from '../data/destinations';
import { Star, MapPin, Clock, ChevronDown, Search, ArrowUpRight, Sparkles, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import heroBanner from '../assets/senegal-hero-banner.png';
import './Destinations.css';

const Destinations = () => {
  const { language } = useLanguage();
  const [filterRegion, setFilterRegion] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCard, setActiveCard] = useState(null);

  const t = {
    fr: {
      title: "Explorez le",
      titleAccent: "Sénégal",
      subtitle: "Des savanes dorées aux lagunes azur, découvrez chaque facette de la Terre de la Teranga.",
      filters: {
        region: "Région",
        allRegions: "Toutes les régions",
        search: "Rechercher une destination..."
      },
      stats: {
        from: "À partir de",
        reviews: "avis"
      },
      cta_discover: "Découvrir",
      cta_book: "Réserver",
      results: "destination(s) trouvée(s)",
      eyebrow: "Catalogue Complet"
    },
    en: {
      title: "Explore",
      titleAccent: "Senegal",
      subtitle: "From golden savannas to azure lagoons, discover every facet of the Land of Teranga.",
      filters: {
        region: "Region",
        allRegions: "All Regions",
        search: "Search a destination..."
      },
      stats: {
        from: "Starting at",
        reviews: "reviews"
      },
      cta_discover: "Discover",
      cta_book: "Book Now",
      results: "destination(s) found",
      eyebrow: "Full Catalog"
    }
  }[language];

  const allData = destinationsData[language];
  const filteredData = allData.filter(dest => {
    const matchRegion = filterRegion === 'all' || dest.region.toLowerCase() === filterRegion.toLowerCase();
    const matchSearch = dest.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       dest.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchRegion && matchSearch;
  });

  const regions = ['all', ...new Set(allData.map(e => e.region))];

  return (
    <div className="destinations-page">

      {/* ── Hero Header ── */}
      <section className="dest-hero-header">
        <div className="dest-hero-banner">
          <img src={heroBanner} alt="Destinations Wëndelu" />
          <div className="dest-hero-overlay" />
        </div>
        
        <div className="main-container">
          <Reveal>
            <div className="dest-hero-text">
              <span className="dest-eyebrow">
                <Sparkles size={14} />
                {t.eyebrow}
              </span>
              <h1>
                {t.title} <span className="dest-title-accent">{t.titleAccent}</span>
              </h1>
              <p>{t.subtitle}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Filter Bar ── */}
      <div className="dest-filter-zone">
        <div className="main-container">
          <Reveal>
            <div className="dest-filter-bar">
              {/* Search */}
              <div className="dest-search-wrap">
                <Search size={18} className="dest-search-icon" />
                <input
                  type="text"
                  placeholder={t.filters.search}
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="dest-search-input"
                />
              </div>

              {/* Region Select */}
              <div className="dest-select-wrap">
                <label className="filter-label">{t.filters.region}</label>
                <div className="dest-select-box">
                  <select value={filterRegion} onChange={e => setFilterRegion(e.target.value)}>
                    {regions.map(r => (
                      <option key={r} value={r}>
                        {r === 'all' ? t.filters.allRegions : r}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={16} />
                </div>
              </div>

              {/* Count */}
              <span className="dest-count">{filteredData.length} {t.results}</span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── Grid Content ── */}
      <div className="dest-grid-container">
        <div className="main-container">
          {filteredData.length === 0 ? (
            <div className="dest-empty">
              <h3>Aucune destination ne correspond à votre recherche.</h3>
            </div>
          ) : (
            <div className="dest-grid">
              {filteredData.map((dest, i) => (
                <Reveal key={dest.id} delay={i % 4 * 0.1}>
                  <div 
                    className={`dest-card ${activeCard === dest.id ? 'is-active' : ''}`}
                    onMouseEnter={() => setActiveCard(dest.id)}
                    onMouseLeave={() => setActiveCard(null)}
                  >
                    <div className="dest-card-img">
                      <img src={dest.image} alt={dest.title} />
                      <div className="dest-card-badge">
                        <Star size={12} fill="#ffc107" strokeWidth={0} />
                        {dest.rating || "4.5"}
                      </div>
                    </div>
                    
                    <div className="dest-card-body">
                      <h3 className="dest-card-title">{dest.title}</h3>
                      
                      <div className="dest-card-meta">
                        <span className="dest-meta-tag"><MapPin size={12} /> {dest.region}</span>
                        <span className="dest-meta-tag"><Clock size={12} /> {dest.duration || "Journée"}</span>
                      </div>
                      
                      <p className="dest-card-desc">{dest.description}</p>
                      
                      <div className="dest-card-footer">
                        <div className="dest-price-box">
                          <span className="dest-price-label">{t.stats.from}</span>
                          <div className="dest-price-amount">
                            {dest.price || "25.000"} <span>{dest.currency || "CFA"}</span>
                          </div>
                        </div>
                        
                        <div className="dest-action-btns">
                          <Link to={`/${language}/destinations/${dest.id}`} className="btn-discover">
                            {t.cta_discover}
                          </Link>
                          <Link to={`/${language}/login`} className="btn-book">
                            {t.cta_book}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
