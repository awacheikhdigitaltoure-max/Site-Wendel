import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { destinationsData } from '../data/destinations';
import { Star, MapPin, Search, ArrowUpRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Pagination from '../components/Pagination';
import heroBanner from '../assets/senegal-hero-banner.png';
import './Destinations.css';

const Destinations = () => {
  const { language } = useLanguage();
  const [filterRegion, setFilterRegion] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const t = {
    fr: {
      title: "Explorez le Sénégal",
      subtitle: "Des savanes dorées aux lagunes azur, découvrez chaque facette de la Terre de la Teranga.",
      searchPlaceholder: "Rechercher une destination...",
      allCategories: "Toutes les catégories",
      allRegions: "Toutes les régions",
      resultsFound: "destination(s) trouvée(s)",
      noResults: "Aucune destination trouvée.",
      cta: "Découvrir"
    },
    en: {
      title: "Explore Senegal",
      subtitle: "From golden savannas to azure lagoons, discover every facet of the Land of Teranga.",
      searchPlaceholder: "Search a destination...",
      allCategories: "All Categories",
      allRegions: "All Regions",
      resultsFound: "destination(s) found",
      noResults: "No destinations found.",
      cta: "Discover"
    }
  }[language];

  const allData = destinationsData[language];
  const categories = ['all', ...new Set(allData.map(e => e.category))];
  const regions = ['all', ...new Set(allData.map(e => e.region))];

  const filteredData = allData.filter(dest => {
    const matchRegion = filterRegion === 'all' || dest.region.toLowerCase() === filterRegion.toLowerCase();
    const matchCategory = filterCategory === 'all' || dest.category.toLowerCase() === filterCategory.toLowerCase();
    const matchSearch = dest.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       dest.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchRegion && matchCategory && matchSearch;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 500, behavior: 'smooth' });
  };

  const handleFilterChange = (setter, value) => {
    setter(value);
    setCurrentPage(1);
  };

  return (
    <div className="destinations-page">
      {/* Banner Full Width */}
      <section className="destinations-hero">
        <img src={heroBanner} alt="Senegal" className="hero-banner-img" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <Reveal>
            <h1>{t.title}</h1>
            <p>{t.subtitle}</p>
          </Reveal>
        </div>
      </section>

      <div className="main-container">
        {/* Modern Filter Bar */}
        <section className="destinations-controls">
          <div className="filters-glass-bar">
            <div className="search-premium">
              <Search size={20} className="search-icon" />
              <input 
                type="text" 
                placeholder={t.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => handleFilterChange(setSearchTerm, e.target.value)}
              />
            </div>

            <div className="filter-select-group">
              <div className="custom-select-wrapper">
                <select value={filterCategory} onChange={(e) => handleFilterChange(setFilterCategory, e.target.value)}>
                  {categories.map(c => (
                    <option key={c} value={c}>
                      {c === 'all' ? t.allCategories : c}
                    </option>
                  ))}
                </select>
                <ChevronDown size={16} className="select-arrow" />
              </div>

              <div className="custom-select-wrapper">
                <select value={filterRegion} onChange={(e) => handleFilterChange(setFilterRegion, e.target.value)}>
                  {regions.map(r => (
                    <option key={r} value={r}>
                      {r === 'all' ? t.allRegions : r}
                    </option>
                  ))}
                </select>
                <ChevronDown size={16} className="select-arrow" />
              </div>
            </div>
          </div>
          
          <div className="results-badge">
            {filteredData.length} {t.resultsFound}
          </div>
        </section>

        {/* Grid Content */}
        <div className="destinations-grid-wrapper">
          {filteredData.length === 0 ? (
            <div className="dest-empty">
              <h3>{t.noResults}</h3>
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
                      
                      <div className="dest-card-footer">
                        <Link to={`/${language}/destinations/${dest.id}`} className="dest-card-btn-book">
                          {t.cta} <ArrowUpRight size={18} />
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
