import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    ns: [
      'auth',
      'registration',
      'accountSettings',
      'companySettings',
      'deleteAccountModal',
      'teamPage',
      'groupPage',
      'plans',
      'pnf404',
      'mainLayout',
      'notifications',
      'paymentMethodModal',
      'documents',
      'menuItems',
      'shareModal',
      'filePreview',
      'publicLink',
    ],
    react: {
      useSuspense: true,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
