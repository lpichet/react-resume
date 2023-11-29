import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18nfr from './i18n-fr.json';

const resources = {
    en: {
        translation: {
        'Download CV': 'Download CV',
        'Hire Me': 'Hire Me',
        'About Me': 'About Me',
        'Age': 'Age',
        'Email': 'Email',
        },
    },
    fr: {
        translation: i18nfr
    },
    };

    i18n
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            resources,
            fallbackLng: 'en',
        });

export default i18n;