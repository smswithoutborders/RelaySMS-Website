// src/components/LanguageSwitcher.js
import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	return (
		<div>
			<button onClick={() => changeLanguage("en")}>EN</button>
			<button onClick={() => changeLanguage("fr")}>FR</button>
			<button onClick={() => changeLanguage("fa")}>FA</button>
			<button onClick={() => changeLanguage("es")}>ES</button>
		</div>
	);
};

export default LanguageSwitcher;
