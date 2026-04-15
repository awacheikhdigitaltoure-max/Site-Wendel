import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const API_URL = import.meta.env.VITE_API_URL || '/api';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('wendelu_token') || null);
  const [loading, setLoading] = useState(true);

  // Charger le profil au démarrage si token présent
  useEffect(() => {
    const loadUser = async () => {
      if (!token) { setLoading(false); return; }
      try {
        const res = await fetch(`${API_URL}/auth/me`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = await res.json();
        if (data.success) {
          setUser(data.user);
        } else {
          logout();
        }
      } catch {
        logout();
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, [token]);

  const login = async (email, password) => {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    
    const contentType = res.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const data = await res.json();
      if (!data.success) throw new Error(data.message || 'Erreur de connexion');
      localStorage.setItem('wendelu_token', data.token);
      setToken(data.token);
      setUser(data.user);
      return data.user;
    } else {
      throw new Error('Le serveur a renvoyé une erreur inattendue. Veuillez vérifier votre connexion ou le déploiement.');
    }
  };

  const register = async (name, email, password, phone) => {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password, phone })
    });
    
    const contentType = res.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Erreur d'inscription");
      localStorage.setItem('wendelu_token', data.token);
      setToken(data.token);
      setUser(data.user);
      return data.user;
    } else {
      throw new Error('Erreur serveur (HTML). Vérifiez que MONGO_URI est bien configuré sur Vercel.');
    }
  };

  const updateProfile = async (name, phone) => {
    const res = await fetch(`${API_URL}/auth/me`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ name, phone })
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.message);
    setUser(data.user);
    return data.user;
  };

  const logout = () => {
    localStorage.removeItem('wendelu_token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      token, 
      loading, 
      login, 
      register, 
      logout, 
      updateProfile, 
      isAuthenticated: !!user,
      isAdmin: user?.role === 'admin'
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth doit être utilisé dans un AuthProvider');
  return ctx;
};
