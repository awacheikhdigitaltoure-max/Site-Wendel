import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { Eye, EyeOff, Loader2, Mail, Lock } from 'lucide-react';
import './Auth.css';

const Login = () => {
  const { login } = useAuth();
  const { language } = useLanguage();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '' });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const t = {
    fr: {
      title: "Bon retour !",
      sub: "Connectez-vous à votre espace Wëndelu",
      email: "Adresse email",
      password: "Mot de passe",
      btn: "Se connecter",
      noAccount: "Pas encore de compte ?",
      register: "Créer un compte",
      loading: "Connexion..."
    },
    en: {
      title: "Welcome back!",
      sub: "Log in to your Wëndelu account",
      email: "Email address",
      password: "Password",
      btn: "Log in",
      noAccount: "No account yet?",
      register: "Create one",
      loading: "Logging in..."
    }
  }[language];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(form.email, form.password);
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
            />
            <button type="button" className="auth-eye" onClick={() => setShowPass(!showPass)}>
              {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {error && <div className="auth-error">⚠️ {error}</div>}

          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? (
              <span className="auth-loading"><Loader2 size={18} className="spin" /> {t.loading}</span>
            ) : t.btn}
          </button>
        </form>

        <p className="auth-switch">
          {t.noAccount}{' '}
          <Link to={`/${language}/register`} className="auth-link">{t.register}</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
