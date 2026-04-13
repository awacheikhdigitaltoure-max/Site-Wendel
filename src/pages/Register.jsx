import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { Eye, EyeOff, Loader2, Mail, Lock, User, Phone } from 'lucide-react';
import './Auth.css';

const Register = () => {
  const { register } = useAuth();
  const { language } = useLanguage();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: '', email: '', password: '', phone: '' });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const t = {
    fr: {
      title: "Rejoindre Wëndelu",
      sub: "Créez votre compte et commencez votre voyage",
      name: "Nom complet",
      email: "Adresse email",
      password: "Mot de passe",
      phone: "Téléphone (optionnel)",
      btn: "Créer mon compte",
      already: "Déjà un compte ?",
      login: "Se connecter",
      loading: "Création en cours..."
    },
    en: {
      title: "Join Wëndelu",
      sub: "Create your account and start your journey",
      name: "Full name",
      email: "Email address",
      password: "Password",
      phone: "Phone (optional)",
      btn: "Create my account",
      already: "Already have an account?",
      login: "Log in",
      loading: "Creating account..."
    }
  }[language];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await register(form.name, form.email, form.password, form.phone);
      navigate(`/${language}/account`);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-bg-blobs">
        <div className="auth-blob auth-blob-1" />
        <div className="auth-blob auth-blob-2" />
      </div>

      <div className="auth-card glass">
        <div className="auth-logo">
          <span className="auth-logo-text">Wëndelu</span>
          <span className="auth-logo-dot">.</span>
        </div>
        <h1 className="auth-title">{t.title}</h1>
        <p className="auth-sub">{t.sub}</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-field">
            <User size={18} className="auth-icon" />
            <input
              type="text"
              placeholder={t.name}
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="auth-input"
              required
            />
          </div>
          <div className="auth-field">
            <Mail size={18} className="auth-icon" />
            <input
              type="email"
              placeholder={t.email}
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="auth-input"
              required
            />
          </div>
          <div className="auth-field">
            <Lock size={18} className="auth-icon" />
            <input
              type={showPass ? 'text' : 'password'}
              placeholder={t.password}
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              className="auth-input"
              required
              minLength={6}
            />
            <button type="button" className="auth-eye" onClick={() => setShowPass(!showPass)}>
              {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <div className="auth-field">
            <Phone size={18} className="auth-icon" />
            <input
              type="tel"
              placeholder={t.phone}
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
              className="auth-input"
            />
          </div>

          {error && <div className="auth-error">⚠️ {error}</div>}

          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? (
              <span className="auth-loading"><Loader2 size={18} className="spin" /> {t.loading}</span>
            ) : t.btn}
          </button>
        </form>

        <p className="auth-switch">
          {t.already}{' '}
          <Link to={`/${language}/login`} className="auth-link">{t.login}</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
