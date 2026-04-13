import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { lang } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [language, setLanguage] = useState(lang || 'fr');

  useEffect(() => {
    if (lang && lang !== language) {
      setLanguage(lang);
    }
  }, [lang, language]);

  const switchLanguage = (newLang) => {
    const currentPath = location.pathname;
    const newPath = currentPath.startsWith(`/${language}`) 
      ? currentPath.replace(`/${language}`, `/${newLang}`)
      : `/${newLang}${currentPath}`;
    
    setLanguage(newLang);
    navigate(newPath);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
