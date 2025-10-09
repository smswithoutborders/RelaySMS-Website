import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Dropdown, DropdownButton } from "react-bootstrap";

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();
	const [selectedLang, setSelectedLang] = useState("en"); // Start with default

	// Language configuration with flags and names
	const languages = {
		en: { flag: "🇺🇸", name: "English" },
		fr: { flag: "🇫🇷", name: "Français" },
		es: { flag: "🇪🇸", name: "Español" },
		fa: { flag: "🇮🇷", name: "فارسی" }
	};

	// Sync with i18n language changes
	useEffect(() => {
		const currentLang = i18n.language || "en";
		setSelectedLang(currentLang);
	}, [i18n.language]);

	useEffect(() => {
		const detectLanguage = () => {
			const userLang = navigator.language || navigator.languages[0];
			let initialLang = "en";

			if (userLang.startsWith("fr")) {
				initialLang = "fr";
			} else if (userLang.startsWith("es")) {
				initialLang = "es";
			} else if (userLang.startsWith("fa")) {
				initialLang = "fa";
			}

			setSelectedLang(initialLang);
			i18n.changeLanguage(initialLang);
		};

		// Only detect language if no language is set or it's the default
		if (!i18n.language || i18n.language === "en") {
			detectLanguage();
		} else {
			// Use the already set language
			setSelectedLang(i18n.language);
		}
	}, [i18n]);

	const handleLanguageChange = (lang) => {
		i18n.changeLanguage(lang);
		setSelectedLang(lang);
	};

	return (
		<DropdownButton
			drop="down"
			variant="outline-primary"
			style={{ borderColor: "#d45703ff", color: "#ffffff" }}
			title={
				<span className="language-title">
					<span className="flag-emoji">{languages[selectedLang]?.flag}</span>
					<span className="language-name">{languages[selectedLang]?.name}</span>
				</span>
			}
			id="language-dropdown"
			className="language-switcher"
		>
			{Object.entries(languages).map(([code, { flag, name }]) => (
				<Dropdown.Item 
					key={code}
					onClick={() => handleLanguageChange(code)}
					className={`language-option ${selectedLang === code ? 'active' : ''}`}
				>
					<span className="flag-emoji">{flag}</span>
					<span className="language-name">{name}</span>
				</Dropdown.Item>
			))}
		</DropdownButton>
	);
};

export default LanguageSwitcher;
