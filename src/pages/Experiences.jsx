import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { experiencesData } from '../data/experiences';
import { Star, MapPin, Clock, Search, ArrowUpRight, Users, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Pagination from '../components/Pagination';
import heroBanner from '../assets/mangrove.png';
import './Experiences.css';

const Experiences = () => {
  const { language } = useLanguage();
  const [filterRegion, setFilterRegion] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const t = {
    fr: {
      title: "Expériences Authentiques",
      subtitle: "Vivez le Sénégal de l'intérieur à travers des moments inoubliables.",
      searchPlaceholder: "Rechercher une expérience...",
      allCategories: "Tous types",
      allRegions: "Toutes les régions",
      resultsFound: "expérience(s) trouvée(s)",
      noResults: "Aucune expérience trouvée.",
      cta: "Réserver",
      from: "À partir de",
      reviews: "avis"
    },
    en: {
      title: "Authentic Experiences",
      subtitle: "Live Senegal from the inside through unforgettable moments.",
      searchPlaceholder: "Search an experience...",
      allCategories: "All types",
      allRegions: "All regions",
      resultsFound: "experience(s) found",
      noResults: "No experiences found.",
      cta: "Book Now",
      from: "Starting at",
      reviews: "reviews"
    }
  }[language];

  const allData = experiencesData[language];
  const categories = ['all', ...new Set(allData.map(e => e.category))];
  const regions = ['all', ...new Set(allData.map(e => e.region))];

  const filteredData = allData.filter(exp => {
    const matchRegion = filterRegion === 'all' || exp.region.toLowerCase() === filterRegion.toLowerCase();
    const matchCategory = filterCategory === 'all' || exp.category.toLowerCase() === filterCategory.toLowerCase();
    const matchSearch = exp.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       exp.description.toLowerCase().includes(searchTerm.toLowerCase());
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
    <div className="experiences-page">
      {/* Banner Full Width */}
      <section className="experiences-hero">
        <img src={heroBanner} alt="Experiences" className="hero-banner-img" />
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
        <section className="experiences-controls">
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
        <div className="experiences-grid-wrapper">
          {filteredData.length === 0 ? (
            <div className="exp-empty">
              <h3>{t.noResults}</h3>
            </div>
          ) : (
            <div className="experiences-main-grid">
              {currentItems.map((exp, i) => (
                <Reveal key={exp.id} delay={i % 4 * 0.1}>
                  <div className="exp-premium-card">
                    <div className="exp-card-image">
                      <img src={exp.image} alt={exp.title} />
                      <div className="exp-card-price-badge">
                        <span>{t.from}</span>
                        <strong>{exp.price}{exp.currency}</strong>
                      </div>
                    </div>
                    
                    <div className="exp-card-content">
                      <div className="exp-card-header">
                        <h3 className="exp-card-title">{exp.title}</h3>
                        <div className="exp-card-rating">
                          <Star size={14} fill="#FFB800" stroke="none" />
                          <span>{exp.rating}</span>
                        </div>
                      </div>

                      <div className="exp-card-meta">
                        <div className="meta-item"><MapPin size={14} /> {exp.region}</div>
                        <div className="meta-item"><Clock size={14} /> {exp.duration}</div>
                        <div className="meta-item"><Users size={14} /> {exp.groupSize}</div>
                      </div>

                      <p className="exp-card-description">{exp.description}</p>
                      
                      <div className="exp-card-footer">
                        <Link to={`/${language}/contact`} className="exp-card-btn-book">
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

export default Experiences;
