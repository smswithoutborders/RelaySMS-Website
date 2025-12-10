import { useParams } from 'react-router-dom';

export const useLanguageLink = () => {
	const { lang } = useParams();
	const currentLang = lang || 'en';

	const getLanguageLink = (path) => {
		const cleanPath = path.startsWith('/') ? path.slice(1) : path;
		return `/${currentLang}${cleanPath ? `/${cleanPath}` : ''}`;
	};

	return { getLanguageLink, currentLang };
};

export default useLanguageLink;
