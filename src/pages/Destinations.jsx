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
  
  // Dynamic Grouping Mapping
  const categoryGroups = {
    fr: {
      "Nature & Aventure": ["Aventure", "Lagune & Nature", "Biodiversité", "Ornithologie", "Nature & Loisirs", "Safari & Nature", "Incontournable", "Montagnes"],
      "Culture & Histoire": ["Histoire", "Élégance Coloniale", "Art & Falaises", "Culture & Vue", "Culture & Coquillages", "Authenticité"],
      "Plages & Détente": ["Détente", "Surf & Île", "Plage Tropicale"]
    },
    en: {
      "Nature & Adventure": ["Adventure", "Lagoon & Nature", "Biodiversity", "Ornithology", "Nature & Leisure", "Safari & Nature", "Must-See", "Mountains"],
      "Culture & History": ["History", "Colonial Elegance", "Art & Cliffs", "Culture & View", "Culture & Shells", "Authenticity"],
      "Beach & Relaxation": ["Relaxation", "Surf & Island", "Tropical Beach"]
    }
  }[language];

  const getGroup = (cat) => {
    for (const [groupName, categories] of Object.entries(categoryGroups)) {
      if (categories.includes(cat)) return groupName;
    }
    return language === 'fr' ? "Autres" : "Others";
  };

  const groupedData = filteredData.reduce((acc, dest) => {
    const group = getGroup(dest.category);
    if (!acc[group]) acc[group] = [];
    acc[group].push(dest);
    return acc;
  }, {});

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

      {/* ── Categorized Sections ── */}
      <div className="dest-sections-container">
        {Object.entries(groupedData).map(([groupName, items], gIdx) => (
          <section key={groupName} className="dest-category-section">
            <div className="main-container">
              <Reveal delay={0.1}>
                <div className="dest-section-header">
                  <div className="header-line" />
                  <h2 className="dest-section-title">{groupName}</h2>
                  <span className="dest-count-tag">{items.length} {t.results}</span>
                </div>
              </Reveal>

              <div className="dest-grid">
                {items.map((dest, i) => (
                  <Reveal key={dest.id} delay={i % 4 * 0.1}>
                    <div className="dest-simple-card">
                      <div className="dest-card-media">
                        <img src={dest.image} alt={dest.title} />
                        <div className="dest-card-overlay">
                          <Link to={`/${language}/destinations/${dest.id}`} className="btn-simple-discover">
                            {t.cta_discover} <ArrowUpRight size={18} />
                          </Link>
                        </div>
                        <div className="dest-card-badge">
                          {dest.category}
                        </div>
                      </div>
                      
                      <div className="dest-card-info">
                        <div className="info-top">
                          <h3 className="info-title">{dest.title}</h3>
                          <div className="info-rating">
                            <Star size={12} fill="#ffc107" strokeWidth={0} />
                            <span>{dest.rating}</span>
                          </div>
                        </div>
                        
                        <div className="info-meta">
                          <span><MapPin size={12} /> {dest.region}</span>
                          <span><Clock size={12} /> {dest.duration}</span>
                        </div>

                        <p className="info-desc">{dest.description}</p>
                        
                        <div className="info-footer">
                          <div className="info-price">
                            <span className="price-val">{dest.price}</span>
                            <span className="price-unit">{dest.currency}</span>
                          </div>
                          <Link to={`/${language}/login`} className="btn-book-small">
                            {t.cta_book}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
