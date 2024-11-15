import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import es from './locales/es.json';
import bg from './locales/bg.json';
import ca from './locales/ca.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
    bg: { translation: bg },
    ca: { translation: ca },


  },
  lng: 'en', 
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
