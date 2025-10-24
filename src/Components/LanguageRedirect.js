import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const supportedLanguages = ['en', 'es', 'fr', 'fa'];

const LanguageRedirect = () => {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const path = location.pathname;
		
		// Skip language redirect for /android and /ios routes (WIP)
		if (path === '/android' || path === '/ios') {
			return;
		}
		
		const hasLangPrefix = supportedLanguages.some(lang => 
			path.startsWith(`/${lang}/`) || path === `/${lang}`
		);

		if (!hasLangPrefix && path !== '/') {
			let detectedLang = 'en'; 
			
			const userLang = navigator.language || navigator.languages[0];
			if (userLang.startsWith('fr')) {
				detectedLang = 'fr';
			} else if (userLang.startsWith('es')) {
				detectedLang = 'es';
			} else if (userLang.startsWith('fa')) {
				detectedLang = 'fa';
			}
			
			const savedLang = localStorage.getItem('i18nextLng');
			if (savedLang && supportedLanguages.includes(savedLang)) {
				detectedLang = savedLang;
			}

			const newPath = `/${detectedLang}${path}`;
			navigate(newPath, { replace: true });
		} else if (path === '/') {
			let detectedLang = 'en';
			const savedLang = localStorage.getItem('i18nextLng');
			if (savedLang && supportedLanguages.includes(savedLang)) {
				detectedLang = savedLang;
			} else {
				const userLang = navigator.language || navigator.languages[0];
				if (userLang.startsWith('fr')) {
					detectedLang = 'fr';
				} else if (userLang.startsWith('es')) {
					detectedLang = 'es';
				} else if (userLang.startsWith('fa')) {
					detectedLang = 'fa';
				}
			}
			navigate(`/${detectedLang}`, { replace: true });
		}
	}, [navigate, location.pathname]);

	return null; 
};

export default LanguageRedirect;
