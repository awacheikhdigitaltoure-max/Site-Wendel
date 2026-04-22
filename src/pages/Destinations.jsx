import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { destinationsData } from '../data/destinations';
import { Star, MapPin, Clock, ChevronDown, Search, ArrowUpRight, Users, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Pagination from '../components/Pagination';
import heroBanner from '../assets/senegal-hero-banner.png';
import './Destinations.css';

const Destinations = () => {
  const { language } = useLanguage();
  const [filterRegion, setFilterRegion] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCard, setActiveCard] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

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
      results: "destination(s) trouvée(s)"
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
      results: "destination(s) found"
    }
  }[language];

  const allData = destinationsData[language];
  const [filterCategory, setFilterCategory] = useState('all');

  const filteredData = allData.filter(dest => {
    const matchRegion = filterRegion === 'all' || dest.region.toLowerCase() === filterRegion.toLowerCase();
    const matchCategory = filterCategory === 'all' || dest.category.toLowerCase() === filterCategory.toLowerCase();
    const matchSearch = dest.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       dest.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchRegion && matchCategory && matchSearch;
  });

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 400, behavior: 'smooth' }); // Scroll to grid start
  };

  // Reset to page 1 on filter change
  const handleFilterChange = (setter, value) => {
    setter(value);
    setCurrentPage(1);
  };

  const regions = ['all', ...new Set(allData.map(e => e.region))];
  const categories = ['all', ...new Set(allData.map(e => e.category))];

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

              {/* Search compact */}
              <div className="dest-search-wrap">
                <Search size={16} className="dest-search-icon" />
                <input
                  type="text"
                  placeholder={t.filters.search}
                  value={searchTerm}
                  onChange={e => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="dest-search-input"
                />
              </div>

              {/* Séparateur */}
              <div className="dest-filter-divider" />

              {/* Catégorie dropdown */}
              <div className="dest-select-wrap compact">
                <div className="dest-select-box">
                  <select value={filterCategory} onChange={e => handleFilterChange(setFilterCategory, e.target.value)}>
                    {categories.map(c => (
                      <option key={c} value={c}>
                        {c === 'all' ? (language === 'fr' ? 'Toutes catégories' : 'All categories') : c}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={14} />
                </div>
              </div>

              {/* Région dropdown */}
              <div className="dest-select-wrap compact">
                <div className="dest-select-box">
                  <select value={filterRegion} onChange={e => handleFilterChange(setFilterRegion, e.target.value)}>
                    {regions.map(r => (
                      <option key={r} value={r}>
                        {r === 'all' ? t.filters.allRegions : r}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={14} />
                </div>
              </div>

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
              <h3>{language === 'fr' ? "Aucune destination trouvée." : "No destinations found."}</h3>
            </div>
          ) : (
            <div className="destinations-main-grid">
              {currentItems.map((dest, i) => (
                <Reveal key={dest.id} delay={i % 4 * 0.1}>
                  <div className="dest-home-card-grid">
                    <div className="dest-card-image">
                      <img src={dest.image} alt={dest.title} />
                    </div>
                    
                    <div className="dest-card-content">
                      <div className="dest-card-header">
                        <h3 className="dest-card-title">{dest.title}</h3>
                        <div className="dest-card-rating">
                          <Star size={14} fill="#FFB800" stroke="none" />
                          <span>{dest.rating}</span>
                        </div>
                      </div>

                      <div className="dest-card-location">
                        <MapPin size={14} /> <span>{dest.region}</span>
                      </div>

                      <p className="dest-card-description">{dest.description}</p>
                      
                      <div className="dest-card-footer" style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                        <Link to={`/${language}/destinations/${dest.id}`} className="dest-card-btn" style={{ flex: 1 }}>
                          {language === 'fr' ? 'Découvrir' : 'Discover'}
                        </Link>
                        <Link to={`/${language}/contact`} className="dest-card-btn-book" style={{ flex: 1 }}>
                          {language === 'fr' ? 'Réserver' : 'Book'}
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          <Pagination 
            currentPage={currentPage}
            totalItems={filteredData.length}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Destinations;
