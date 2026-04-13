// Contact page — Wëndelu
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Reveal from '../components/Reveal';
import SimplifiedBooking from '../components/SimplifiedBooking';
import { useAuth } from '../context/AuthContext';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';
import './Contact.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const Contact = () => {
  const { language } = useLanguage();
  const { user } = useAuth();
  const [form, setForm] = useState({ 
    name: user?.name || '', 
    email: user?.email || '', 
    subject: '', 
    message: '' 
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  // Sync with auth state
  React.useEffect(() => {
    if (user) {
      setForm(prev => ({ ...prev, name: user.name, email: user.email }));
    }
  }, [user]);

  const content = {
    fr: {
      hero: 'Contactez-nous',
      heroSub: 'Notre équipe vous répond sous 24h',
      formTitle: 'Envoyez-nous un message',
      name: 'Votre nom',
      email: 'Votre email',
      subject: 'Sujet',
      message: 'Votre message',
      btn: 'Envoyer le message',
      sending: 'Envoi en cours...',
      successTitle: 'Message envoyé !',
      successMsg: 'Merci pour votre message. Notre équipe vous contactera très rapidement.',
      newMsg: 'Nouveau message',
      infoTitle: 'Informations de contact',
      phone: '+221 77 000 00 00',
      emailAddr: 'contact@wendelu.com',
      address: 'Dakar, Sénégal',
      hours: 'Lun–Sam : 8h–20h',
    },
    en: {
      hero: 'Contact Us',
      heroSub: 'Our team responds within 24 hours',
      formTitle: 'Send us a message',
      name: 'Your name',
      email: 'Your email',
      subject: 'Subject',
      message: 'Your message',
      btn: 'Send message',
      sending: 'Sending...',
      successTitle: 'Message sent!',
      successMsg: 'Thank you for your message. Our team will get back to you very soon.',
      newMsg: 'New message',
      infoTitle: 'Contact information',
      phone: '+221 77 000 00 00',
      emailAddr: 'contact@wendelu.com',
      address: 'Dakar, Senegal',
      hours: 'Mon–Sat: 8am–8pm',
    }
  };

  const t = content[language];

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    if (!form.name || !form.email || !form.message) {
      setError(language === 'fr' ? 'Veuillez remplir tous les champs obligatoires.' : 'Please fill in all required fields.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      setSent(true);
    } catch (err) {
      setError(err.message || 'Erreur serveur');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="contact-hero-bg" />
        <div className="contact-hero-content">
          <span className="contact-hero-tag">Wëndelu</span>
          <h1 className="contact-hero-title">{t.hero}</h1>
          <p className="contact-hero-sub">{t.heroSub}</p>
        </div>
      </div>

      <div className="contact-body">
        {/* Colonne gauche : infos */}
        <Reveal>
          <div className="contact-info-panel glass-card">
            <h2 className="contact-info-title">{t.infoTitle}</h2>
            <div className="contact-info-items">
              <div className="contact-info-item">
                <div className="contact-info-icon"><Phone size={20} /></div>
                <div>
                  <div className="contact-info-label">Téléphone</div>
                  <div className="contact-info-value">{t.phone}</div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon"><Mail size={20} /></div>
                <div>
                  <div className="contact-info-label">Email</div>
                  <div className="contact-info-value">{t.emailAddr}</div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon"><MapPin size={20} /></div>
                <div>
                  <div className="contact-info-label">Adresse</div>
                  <div className="contact-info-value">{t.address}</div>
                </div>
              </div>
            </div>
            <div className="contact-hours">
              <span>🕐</span> {t.hours}
            </div>
            <div className="contact-map-placeholder">
              <iframe
                title="Dakar Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246887.96441406286!2d-17.532939!3d14.716677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f5b3c5bb71%3A0xb17c2d3e9f0a3ce7!2sDakar%2C%20S%C3%A9n%C3%A9gal!5e0!3m2!1sfr!2sfr!4v1680000000000!5m2!1sfr!2sfr"
                style={{ width: '100%', height: '200px', border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>

        {/* Colonne droite : formulaire */}
        <Reveal>
          <div className="contact-form-panel glass-card">
            <h2 className="contact-form-title">{t.formTitle}</h2>

            {sent ? (
              <div className="contact-success">
                <CheckCircle size={48} className="contact-success-icon" />
                <h3>{t.successTitle}</h3>
                <p>{t.successMsg}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                >
                  {t.newMsg}
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label>{t.name} *</label>
                    <input
                      type="text"
                      name="name"
                      className="contact-input"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact-form-group">
                    <label>{t.email} *</label>
                    <input
                      type="email"
                      name="email"
                      className="contact-input"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="contact-form-group">
                  <label>{t.subject}</label>
                  <input
                    type="text"
                    name="subject"
                    className="contact-input"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="contact-form-group">
                  <label>{t.message} *</label>
                  <textarea
                    name="message"
                    className="contact-input contact-textarea"
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {error && <div className="contact-error">⚠️ {error}</div>}

                <button type="submit" className="contact-submit-btn" disabled={loading}>
                  {loading ? (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Loader2 size={18} className="spin" /> {t.sending}
                    </span>
                  ) : (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Send size={18} /> {t.btn}
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>

      {/* Section réservation en bas */}
      <Reveal>
        <SimplifiedBooking />
      </Reveal>
    </div>
  );
};

export default Contact;
