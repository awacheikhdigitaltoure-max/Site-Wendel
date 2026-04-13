import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { User, Settings, LogOut, Package, CreditCard, Camera, Info, Wallet, Loader2 } from 'lucide-react';
import './Account.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const Account = () => {
  const { language } = useLanguage();
  const { user, token, logout, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');

  // Profil (initialisé avec les données réelles)
  const [profile, setProfile] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || ''
  });
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Réservations réelles
  const [bookings, setBookings] = useState([]);
  const [bookingsLoading, setBookingsLoading] = useState(false);

  // État pour les paiements (Correction du crash)
  const [omLinked, setOmLinked] = useState(false);
  const [cards, setCards] = useState([
    { id: 1, last4: '4242', type: 'Visa', exp: '12/26' },
  ]);

  const handleLinkOM = () => {
    const confirmation = window.confirm(language === 'fr' ? "Relier votre compte Orange Money ?" : "Link your Orange Money account?");
    if (confirmation) setOmLinked(true);
  };

  const handleAddCard = () => {
    alert(language === 'fr' ? "L'ajout de carte sera bientôt disponible." : "Adding a card will be available soon.");
  };

  const handleRemoveCard = (id) => {
    setCards(cards.filter(c => c.id !== id));
  };

  // Sync profil quand user change
  useEffect(() => {
    if (user) setProfile({ name: user.name, email: user.email, phone: user.phone || '' });
  }, [user]);

  // Charger les réservations
  useEffect(() => {
    if (activeTab === 'bookings' && token) {
      setBookingsLoading(true);
      fetch(`${API_URL}/bookings/me`, {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(r => r.json())
        .then(data => { if (data.success) setBookings(data.bookings); })
        .catch(console.error)
        .finally(() => setBookingsLoading(false));
    }
  }, [activeTab, token]);

  const content = {
    fr: {
      title: "Mon Compte",
      subtitle: "Gérez votre expérience Teranga",
      tabs: {
        profile: "Profil",
        payments: "Paiements",
        bookings: "Réservations",
        settings: "Paramètres"
      },
      profile: {
        info: "Informations Personnelles",
        name: "Nom complet",
        email: "Adresse Email",
        phone: "Numéro de téléphone",
        save: isSaving ? "Enregistrement..." : (saveSuccess ? "✓ Enregistré" : "Enregistrer les modifications")
      },
      payments: {
        title: "Méthodes de Paiement",
        desc: "Gérez vos comptes Wave, Orange Money et cartes bancaires.",
        add: "Ajouter une carte",
        local: "Solutions Locales Sénégalaises",
        cards: "Cartes Bancaires",
        link: "Relier",
        linked: "Connecté"
      },
      logout: "Déconnexion"
    },
    en: {
      title: "My Account",
      subtitle: "Manage your Teranga experience",
      tabs: {
        profile: "Profile",
        payments: "Payments",
        bookings: "Bookings",
        settings: "Settings"
      },
      profile: {
        info: "Personal Information",
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        save: isSaving ? "Saving..." : (saveSuccess ? "✓ Saved" : "Save Changes")
      },
      payments: {
        title: "Payment Methods",
        desc: "Manage your Wave, Orange Money, and bank cards.",
        add: "Add card",
        local: "Local Senegalese Solutions",
        cards: "Bank Cards",
        link: "Link",
        linked: "Connected"
      },
      logout: "Log Out"
    }
  };

  const t = content[language];

  // Handlers
  const handleSaveProfile = async () => {
    setIsSaving(true);
    setSaveSuccess(false);
    try {
      await updateProfile(profile.name, profile.phone);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (e) {
      console.error(e);
    } finally {
      setIsSaving(false);
    }
  };

  const handleLogout = () => {
    if (window.confirm(language === 'fr' ? 'Voulez-vous vraiment vous déconnecter ?' : 'Are you sure you want to log out?')) {
      logout();
      navigate(`/${language}`);
    }
  };

  const handlePhotoClick = () => {
    alert(language === 'fr' ? 'Fonctionnalité de changement de photo bientôt disponible !' : 'Photo change feature coming soon!');
  };

  return (
    <div className="page account-page pb-60 min-h-screen">
      <div style={{ height: '180px' }} aria-hidden="true" />
      <div className="account-bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      
      <Reveal>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          {/* Centered Header & Profile */}
          <div className="account-header-centered">
            <div className="avatar-section">
              <div className="avatar-outer-halo">
                <div className="avatar-wrapper-premium">
                  <div className="avatar-display-premium glass">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop" 
                      alt={profile.name} 
                      className="avatar-img-premium"
                    />
                  </div>
                  <button 
                    className="avatar-edit-premium glass-card" 
                    title="Changer la photo"
                    onClick={handlePhotoClick}
                  >
                     <Camera size={24} />
                  </button>
                </div>
              </div>
              <div className="profile-titles mt-12">
                <h1 className="account-name text-gradient">{profile.name}</h1>
              </div>
            </div>

            {/* Horizontal Navigation */}
            <nav className="account-tabs-premium glass">
              <button 
                className={`tab-btn-premium ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                <User size={18} /> {t.tabs.profile}
              </button>
              <button 
                className={`tab-btn-premium ${activeTab === 'payments' ? 'active' : ''}`}
                onClick={() => setActiveTab('payments')}
              >
                <Wallet size={18} /> {t.tabs.payments}
              </button>
              <button 
                className={`tab-btn-premium ${activeTab === 'bookings' ? 'active' : ''}`}
                onClick={() => setActiveTab('bookings')}
              >
                <Package size={18} /> {t.tabs.bookings}
              </button>
              <button 
                className={`tab-btn-premium ${activeTab === 'settings' ? 'active' : ''}`}
                onClick={() => setActiveTab('settings')}
              >
                <Settings size={18} /> {t.tabs.settings}
              </button>
            </nav>
          </div>

          {/* Centered Content Area */}
          <div className="account-content-premium mt-16">
            {activeTab === 'profile' && (
              <div className="tab-pane reveal-fade">
                <div className="content-card-premium glass-card">
                  <div className="card-header-premium">
                    <div className="header-icon-box"><Info size={20} /></div>
                    <h3>{t.profile.info}</h3>
                  </div>
                  <div className="form-stack-premium">
                    <div className="input-group-premium">
                      <label>{t.profile.name}</label>
                      <input 
                        type="text" 
                        className="premium-field" 
                        value={profile.name}
                        onChange={(e) => setProfile({...profile, name: e.target.value})}
                      />
                    </div>
                    <div className="input-group-premium">
                      <label>{t.profile.email}</label>
                      <input 
                        type="email" 
                        className="premium-field" 
                        value={profile.email}
                        onChange={(e) => setProfile({...profile, email: e.target.value})}
                      />
                    </div>
                    <div className="input-group-premium">
                      <label>{t.profile.phone}</label>
                      <input 
                        type="tel" 
                        className="premium-field" 
                        value={profile.phone}
                        onChange={(e) => setProfile({...profile, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  <button 
                    className={`btn btn-primary-premium w-full mt-12 ${saveSuccess ? 'bg-green-600' : ''}`}
                    onClick={handleSaveProfile}
                    disabled={isSaving}
                  >
                    {t.profile.save}
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'payments' && (
              <div className="tab-pane reveal-fade">
                <div className="content-card-premium glass-card">
                  <div className="card-header-premium">
                    <div className="header-icon-box orange"><Wallet size={20} /></div>
                    <h3>{t.payments.title}</h3>
                  </div>
                  <p className="tab-subtitle-text">{t.payments.desc}</p>
                  
                  <div className="payments-layout-premium">
                    {/* Solutions Locales */}
                    <div className="payment-heading">{t.payments.local}</div>
                    <div className="local-grid-premium">
                      <div className="local-card wave active">
                        <div className="card-chip"></div>
                        <div className="brand-logo">Wave</div>
                        <div className="account-info">
                          <div className="acc-num">77 ••• 12 34</div>
                          <div className="acc-status">Principal</div>
                        </div>
                      </div>
                      <div className={`local-card om ${omLinked ? 'active' : ''}`}>
                         <div className="card-chip"></div>
                        <div className="brand-logo">Orange Money</div>
                        <div className="account-info">
                          <div className="acc-num">{omLinked ? '78 ••• 56 78' : '---- ---- ----'}</div>
                          <button 
                            className={`link-btn-om ${omLinked ? 'opacity-50 cursor-default' : ''}`}
                            onClick={handleLinkOM}
                          >
                            {omLinked ? t.payments.linked : t.payments.link}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Standard Cards */}
                    <div className="payment-heading mt-12">{t.payments.cards}</div>
                    <div className="cards-visual-stack">
                      {cards.map(card => (
                        <div key={card.id} className="card-item-premium glass">
                          <div className="card-item-left">
                            <div className="card-item-icon"><CreditCard size={24} /></div>
                            <div className="card-item-text">
                              <span className="num">•••• •••• •••• {card.last4}</span>
                              <span className="type">{card.type} • Exp: {card.exp}</span>
                            </div>
                          </div>
                          <button 
                            className="remove-card-btn hover:text-red-500"
                            onClick={() => handleRemoveCard(card.id)}
                          >
                            ×
                          </button>
                        </div>
                      ))}
                      
                      <button 
                        className="btn-add-payment-premium hover:bg-slate-50"
                        onClick={handleAddCard}
                      >
                        <span className="icon">+</span> {t.payments.add}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'bookings' && (
              <div className="tab-pane reveal-fade">
                <div className="content-card-premium glass-card">
                  <div className="card-header-premium">
                    <div className="header-icon-box"><Package size={20} /></div>
                    <h3>{t.tabs.bookings}</h3>
                  </div>
                  {bookingsLoading ? (
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
                      <Loader2 size={32} className="spin" style={{ color: 'var(--primary-green)' }} />
                    </div>
                  ) : bookings.length === 0 ? (
                    <div className="empty-state-premium" style={{ padding: '40px', textAlign: 'center' }}>
                      <Package size={48} style={{ opacity: 0.3, marginBottom: '16px' }} />
                      <p style={{ color: 'rgba(255,255,255,0.4)' }}>
                        {language === 'fr' ? 'Aucune réservation pour le moment.' : 'No bookings yet.'}
                      </p>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
                      {bookings.map(b => (
                        <div key={b._id} className="card-item-premium glass" style={{ flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                            <span style={{ fontWeight: 600, color: '#fff' }}>{b.destination}</span>
                            <span style={{
                              fontSize: '11px', padding: '3px 10px', borderRadius: '20px', fontWeight: 600,
                              background: b.status === 'confirmed' ? 'rgba(45,106,79,0.3)' : b.status === 'cancelled' ? 'rgba(255,107,107,0.2)' : 'rgba(212,168,83,0.2)',
                              color: b.status === 'confirmed' ? '#4ade80' : b.status === 'cancelled' ? '#ff8a8a' : '#d4a853'
                            }}>
                              {b.status === 'confirmed' ? '✓ Confirmé' : b.status === 'cancelled' ? '✗ Annulé' : '⏳ En attente'}
                            </span>
                          </div>
                          <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
                            <span>📅 {new Date(b.departureDate).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                            <span>👤 {b.travellers} voyageur{b.travellers > 1 ? 's' : ''}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="tab-pane empty-state-premium glass-card">
                <div className="empty-visual">
                  <Settings size={50} className="empty-icon" />
                </div>
                <h3>Paramètres</h3>
                <p>Cette section sera disponible prochainement.</p>
              </div>
            )}
            
            <div className="account-footer-actions">
              <button 
                className="btn-logout-premium"
                onClick={handleLogout}
              >
                 <LogOut size={18} /> {t.logout}
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </div>




  );
};

export default Account;

