import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

const pathLanguageDetector = {
	name: 'path',
	lookup() {
		const path = window.location.pathname;
		const langMatch = path.match(/^\/([a-z]{2})(\/|$)/);
		return langMatch ? langMatch[1] : null;
	},
	cacheUserLanguage() {
	}
};

i18n
	.use(HttpBackend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: "en",
		debug: process.env.NODE_ENV !== "production" ? true : false,
		load: "languageOnly",
		supportedLngs: ["en", "es", "fr", "fa"],
		interpolation: {
			escapeValue: false
		},
		react: {
			useSuspense: true
		},
		detection: {
			order: ['path', 'navigator', 'localStorage'],
			lookupFromPathIndex: 0,
			checkWhitelist: true
		}
	});

i18n.services.languageDetector.addDetector(pathLanguageDetector);

export default i18n;
