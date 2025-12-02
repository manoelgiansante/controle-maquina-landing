import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ptBR from '../locales/pt-BR.json';
import esES from '../locales/es-ES.json';

const resources = {
  'pt-BR': { translation: ptBR },
  'es-ES': { translation: esES },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt-BR',
    supportedLngs: ['pt-BR', 'es-ES'],
    detection: {
      order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
      lookupQuerystring: 'lang',
      lookupLocalStorage: 'preferredLanguage',
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

export const changeLanguage = (lang: string) => {
  i18n.changeLanguage(lang);
  localStorage.setItem('preferredLanguage', lang);
};

export const getCurrentLanguage = () => i18n.language;

export const SUPPORTED_LANGUAGES = [
  { code: 'pt-BR', name: 'Português (Brasil)', flag: '🇧🇷' },
  { code: 'es-ES', name: 'Español', flag: '🇪🇸' },
];
