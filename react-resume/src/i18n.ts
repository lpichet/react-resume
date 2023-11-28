import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
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
        translation: {
            'Download CV': 'Télécharger CV',
            'Hire Me': 'Me contacter',
            'About Me': 'A propos de moi',
            'Age': 'Âge',
            'Email': 'Email',
            'Phone': 'Téléphone',
            'Location': 'Localisation',
            'Professional Skills': 'Compétences Professionnelles',
            'Work Experience': 'Expériences Professionnelles',
            'Education': 'Education',
        },
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