import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import fr from './locales/fr.json';
import en from './locales/en.json';
import ar from './locales/ar.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: fr },
      en: { translation: en },
      ar: { translation: ar }
    },
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

// Set document direction based on language
const setDocumentDirection = () => {
  const currentLang = i18n.language;
  const dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.setAttribute('dir', dir);
  document.documentElement.setAttribute('lang', currentLang);
};

i18n.on('languageChanged', setDocumentDirection);
setDocumentDirection();

export default i18n;
