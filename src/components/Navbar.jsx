import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Globe, Menu, X, Search, User, LogOut, ChevronDown, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { translations } from '../i18n/translations';
import { destinationsData } from '../data/destinations';
import logo from '../assets/logo-wendelu.png';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDest, setSelectedDest] = useState(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { language, switchLanguage } = useLanguage();
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const t = translations[language].nav;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.nav-user-menu')) setUserMenuOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setSearchTerm('');
  };

  const handleLogout = () => {
    logout();
    setUserMenuOpen(false);
    navigate(`/${language}`);
  };

  const filteredDestinations = searchTerm.length > 1
    ? destinationsData[language].filter(d =>
        d.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.category.toLowerCase().includes(searchTerm.toLowerCase())
      ).slice(0, 5)
    : [];

  const initials = user?.name
    ? user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    : '?';

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to={`/${language}`} className="logo" onClick={closeMenu}>
          <img src={logo} alt="Wëndelu Logo" className="logo-img" />
        </Link>

        <div className={`nav-links-container ${mobileMenuOpen ? 'active' : ''}`}>
          <div className="nav-links">
            <Link to={`/${language}`} onClick={closeMenu}>{t.home}</Link>
            <Link to={`/${language}/destinations`} onClick={closeMenu}>{t.destinations}</Link>
            <Link to={`/${language}/experiences`} onClick={closeMenu}>{t.services}</Link>
            <Link to={`/${language}/about`} onClick={closeMenu}>{t.about}</Link>
          </div>

          <div className="nav-search-bar mobile-search">
            <div className="search-input-wrapper">
              <Search size={18} className="search-icon-inline" />
              <input
                type="text"
                className="nav-search-input"
                placeholder={t.search}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {filteredDestinations.length > 0 && (
                <div className="search-results-dropdown glass-card">
                  {filteredDestinations.map(dest => (
                    <div
                      key={dest.id}
                      className="search-result-item"
                      onClick={() => {
                        setSelectedDest(dest);
                        setSearchTerm('');
                        closeMenu();
                      }}
                    >
                      <img src={dest.image} alt="" className="result-thumb" />
                      <div className="result-info">
                        <div className="result-title">{dest.title}</div>
                        <div className="result-cat">{dest.category}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="nav-actions">
            <button onClick={() => switchLanguage(language === 'fr' ? 'en' : 'fr')} className="lang-btn">
              <Globe size={18} />
              <span>{language.toUpperCase()}</span>
            </button>

            {isAuthenticated ? (
              <div className="nav-user-menu">
                <button
                  className="nav-user-btn"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  title={user?.name}
                >
                  <div className="nav-avatar">{initials}</div>
                  <span className="nav-username">{user?.name?.split(' ')[0]}</span>
                  <ChevronDown size={14} className={`nav-chevron ${userMenuOpen ? 'open' : ''}`} />
                </button>
                {userMenuOpen && (
                  <div className="nav-user-dropdown glass-card">
                    <div className="nav-user-info">
                      <div className="nav-user-avatar-lg">{initials}</div>
                      <div>
                        <div className="nav-user-name">{user?.name}</div>
                        <div className="nav-user-email">{user?.email}</div>
                      </div>
                    </div>
                    <div className="nav-dropdown-divider" />
                    <Link
                      to={`/${language}/account`}
                      className="nav-dropdown-item"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <User size={16} />
                      {language === 'fr' ? 'Mon compte' : 'My account'}
                    </Link>
                    
                    {user?.role === 'admin' && (
                      <Link
                        to={`/${language}/admin`}
                        className="nav-dropdown-item"
                        style={{ color: 'var(--primary-gold)' }}
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <ShieldCheck size={16} />
                        {language === 'fr' ? 'Dashboard Admin' : 'Admin Dashboard'}
                      </Link>
                    )}

                    <button className="nav-dropdown-item nav-dropdown-logout" onClick={handleLogout}>
                      <LogOut size={16} />
                      {language === 'fr' ? 'Déconnexion' : 'Log out'}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to={`/${language}/login`} className="nav-login-btn" onClick={closeMenu}>
                <User size={18} />
                <span>{language === 'fr' ? 'Connexion' : 'Login'}</span>
              </Link>
            )}

            <Link to={`/${language}/contact`} className="btn nav-btn-booking" onClick={closeMenu}>
              {t.booking}
            </Link>
          </div>
        </div>

        {selectedDest && (
          <div className="quick-view-overlay" onClick={() => setSelectedDest(null)}>
            <div className="quick-view-modal glass-card" onClick={e => e.stopPropagation()}>
              <button className="close-quick-view" onClick={() => setSelectedDest(null)}><X size={24} /></button>
              <img src={selectedDest.image} alt={selectedDest.title} className="quick-view-img" />
              <div className="quick-view-content">
                <span className="quick-view-cat">{selectedDest.category}</span>
                <h2>{selectedDest.title}</h2>
                <p>{language === 'fr'
                  ? "Découvrez cette destination exceptionnelle avec Wëndelu. Entre culture, nature et authenticité, vivez une expérience inoubliable au Sénégal."
                  : "Discover this exceptional destination with Wëndelu. Between culture, nature and authenticity, live an unforgettable experience in Senegal."}
                </p>
                <div className="flex gap-4 mt-6">
                  <Link
                    to={`/${language}/destinations/${selectedDest.id}`}
                    className="btn btn-primary"
                    onClick={() => setSelectedDest(null)}
                  >
                    {language === 'fr' ? 'En savoir plus' : 'Learn More'}
                  </Link>
                  <Link to={`/${language}/contact`} className="btn btn-outline" onClick={() => setSelectedDest(null)}>
                    {t.booking}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
