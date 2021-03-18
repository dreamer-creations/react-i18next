import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

let lang = localStorage.getItem('lang');
lang = lang === undefined || lang === "" || lang === null ? "en" : lang;

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: lang,
    fallbackLng: 'en',
    debug: true,
    ns: ['i18n'],
    defaultNS: 'i18n',
    backend: { loadPath: '/assets/{{ns}}/{{lng}}.json' },
    interpolation: { escapeValue: false, formatSeparator: ',' },
    keySeparator: false,
    react: { wait: true, useSuspense: false }
  });

export default i18n;