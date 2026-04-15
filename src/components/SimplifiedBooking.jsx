import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, ShieldCheck, Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './SimplifiedBooking.css';

const API_URL = import.meta.env.VITE_API_URL || '/api';

const SimplifiedBooking = () => {
  const { language } = useLanguage();
  const { user } = useAuth();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    guestName: user?.name || '',
    guestEmail: user?.email || '',
    destination: '',
    departureDate: '',
    travellers: 1,
    message: ''
  });

  // Mettre à jour le formulaire si l'utilisateur se connecte/déconnecte
  React.useEffect(() => {
    if (user) {
      setForm(prev => ({
        ...prev,
        guestName: user.name,
        guestEmail: user.email
      }));
    }
  }, [user]);

  const content = {
    fr: {
      subtitle: "Réservation Intuitive",
      title: "Préparez votre immersion",
      text: "Chaque voyage est unique. Nos experts locaux conçoivent pour vous un itinéraire sur mesure qui respecte vos envies et l'authenticité du terrain.",
      expertise: "Expertise Locale",
      expertiseDesc: "Guides passionnés et certifiés.",
      serenity: "Sérénité",
      serenityDesc: "Paiement 100% sécurisé et assistance 24/7.",
      labelName: "Votre nom complet",
      labelEmail: "Votre email",
      labelDest: "Votre prochaine destination",
      labelDate: "Date du départ",
      labelTravellers: "Nombre de voyageurs",
      btn: "Vérifier la disponibilité",
      footer: "Sans engagement • Réponse sous 24h",
      options: ["Désert de Lompoul (Aventure)", "Île de Gorée (Histoire)", "Casamance (Nature Sauvage)", "Lac Rose (Découverte)", "Dakar (Ville & Culture)", "Sine-Saloum (Mangroves)"]
    },
    en: {
      subtitle: "Intuitive Booking",
      title: "Prepare your immersion",
      text: "Every journey is unique. Our local experts design a tailor-made itinerary for you that respects your desires and local authenticity.",
      expertise: "Local Expertise",
      expertiseDesc: "Passionate and certified guides.",
      serenity: "Serenity",
      serenityDesc: "100% secure payment and 24/7 assistance.",
      labelName: "Your full name",
      labelEmail: "Your email",
      labelDest: "Your next destination",
      labelDate: "Departure date",
      labelTravellers: "Number of travellers",
      btn: "Check availability",
      footer: "No commitment • Response within 24h",
      options: ["Lompoul Desert (Adventure)", "Goree Island (History)", "Casamance (Wild Nature)", "Pink Lake (Discovery)", "Dakar (City & Culture)", "Sine-Saloum (Mangroves)"]
    }
  };

  const t = content[language];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!form.guestName || !form.guestEmail || !form.departureDate) {
      setError(language === 'fr' ? 'Veuillez remplir tous les champs obligatoires.' : 'Please fill in all required fields.');
      return;
    }

    setIsLoading(true);
    try {
      const token = localStorage.getItem('wendelu_token');
      const headers = { 'Content-Type': 'application/json' };
      if (token) headers['Authorization'] = `Bearer ${token}`;

      const payload = {
        ...form,
        destination: form.destination || t.options[0],
        travellers: Number(form.travellers)
      };

      const res = await fetch(`${API_URL}/bookings`, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Erreur lors de la réservation');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="section-padding booking-section" id="booking">
        <div className="booking-container glass reveal success-state">
          <div className="success-content">
            <div className="success-icon">✓</div>
            <h2 className="text-gradient">Merci !</h2>
            <p>
              {language === 'fr'
                ? "Votre demande a été enregistrée. Un expert Wëndelu vous contactera sous 24h."
                : "Your request has been recorded. A Wëndelu expert will contact you within 24h."}
            </p>
            <button onClick={() => { setIsSubmitted(false); setForm({ guestName: '', guestEmail: '', destination: '', departureDate: '', travellers: 1, message: '' }); }} className="btn btn-primary mt-6">
              {language === 'fr' ? "Nouvelle demande" : "New request"}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding booking-section" id="booking">
      <div className="booking-container glass reveal">
        <div className="booking-info">
          <span className="sub-title" style={{color: 'var(--primary-orange)'}}>{t.subtitle}</span>
          <h2 className="section-title text-gradient">{t.title}</h2>
          <p className="booking-text">{t.text}</p>

          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-icon"><Sparkles size={24} color="var(--primary-green)" /></div>
              <div>
                <h4>{t.expertise}</h4>
                <p>{t.expertiseDesc}</p>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon"><ShieldCheck size={24} color="var(--primary-green)" /></div>
              <div>
                <h4>{t.serenity}</h4>
                <p>{t.serenityDesc}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="booking-card glass-card">
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>{t.labelName} *</label>
                <input
                  type="text"
                  name="guestName"
                  className="premium-input"
                  value={form.guestName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>{t.labelEmail} *</label>
                <input
                  type="email"
                  name="guestEmail"
                  className="premium-input"
                  value={form.guestEmail}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>{t.labelDest}</label>
              <select name="destination" className="premium-input" value={form.destination} onChange={handleChange}>
                {t.options.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>{t.labelDate} *</label>
                <input
                  type="date"
                  name="departureDate"
                  className="premium-input"
                  value={form.departureDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
              <div className="form-group">
                <label>{t.labelTravellers}</label>
                <input
                  type="number"
                  name="travellers"
                  min="1"
                  max="20"
                  className="premium-input"
                  value={form.travellers}
                  onChange={handleChange}
                />
              </div>
            </div>

            {error && (
              <div style={{ color: '#ff6b6b', fontSize: '14px', padding: '8px 12px', background: 'rgba(255,107,107,0.1)', borderRadius: '8px', marginBottom: '8px' }}>
                ⚠️ {error}
              </div>
            )}

            <button type="submit" className="btn btn-secondary w-full" disabled={isLoading}>
              {isLoading ? (
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <Loader2 size={18} className="animate-spin" />
                  {language === 'fr' ? 'Envoi en cours...' : 'Sending...'}
                </span>
              ) : t.btn}
            </button>
            <p className="form-footer">{t.footer}</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SimplifiedBooking;
