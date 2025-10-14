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
		
		if (!supportedLanguages.includes(pathLang)) {
			const newPath = location.pathname.replace(/^\/[a-z]{2}/, '/en');
			navigate(newPath, { replace: true });
			return;
		}

		if (i18n.language !== pathLang) {
			i18n.changeLanguage(pathLang);
		}
	}, [lang, i18n, navigate, location.pathname]);

	return children;
};

export default LanguageRouter;
