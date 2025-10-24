import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const supportedLanguages = ['en', 'es', 'fr', 'fa'];

const LanguageRouter = ({ children }) => {
	const { lang } = useParams();
	const navigate = useNavigate();
	const location = useLocation();
	const { i18n } = useTranslation();

	useEffect(() => {
		const pathLang = lang || 'en';
		
		// If the language is not supported, redirect to whatever was intended ()without lang prefix) (WIP)
		if (!supportedLanguages.includes(pathLang)) {
			// Navigate to 404 without the invalid lang prefix
			navigate('/', { replace: true });
			return;
		}

		if (i18n.language !== pathLang) {
			i18n.changeLanguage(pathLang);
		}
	}, [lang, i18n, navigate, location.pathname]);

	// Don't render children if language is invalid
	if (lang && !supportedLanguages.includes(lang)) {
		return null;
	}

	return children;
};

export default LanguageRouter;
