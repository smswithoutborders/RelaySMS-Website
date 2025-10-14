import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();
	const navigate = useNavigate();
	const location = useLocation();
	const { lang } = useParams();
	const [selectedLang, setSelectedLang] = useState("en");

	const languages = {
		en: { flag: "🇺🇸", name: "English" },
		fr: { flag: "🇫🇷", name: "Français" },
		es: { flag: "🇪🇸", name: "Español" },
		fa: { flag: "🇮🇷", name: "فارسی" }
	};

	useEffect(() => {
		const currentLang = lang || "en";
		setSelectedLang(currentLang);
	}, [lang]);

	useEffect(() => {
		if (lang) {
			setSelectedLang(lang);
			if (i18n.language !== lang) {
				i18n.changeLanguage(lang);
			}
		} else {
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

			if (!i18n.language || i18n.language === "en") {
				detectLanguage();
			} else {
				setSelectedLang(i18n.language);
			}
		}
	}, [i18n, lang]);

	const handleLanguageChange = (newLang) => {
		localStorage.setItem("i18nextLng", newLang);

		i18n.changeLanguage(newLang);
		setSelectedLang(newLang);

		const currentPath = location.pathname;
		let newPath;

		const langPattern = /^\/([a-z]{2})(\/.*|$)/;
		const match = currentPath.match(langPattern);

		if (match) {
			const pathWithoutLang = match[2] || "/";
			newPath = `/${newLang}${pathWithoutLang}`;
		} else {
			newPath = `/${newLang}${currentPath === "/" ? "" : currentPath}`;
		}

		navigate(newPath);
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
					className={`language-option ${selectedLang === code ? "active" : ""}`}
				>
					<span className="flag-emoji">{flag}</span>
					<span className="language-name">{name}</span>
				</Dropdown.Item>
			))}
		</DropdownButton>
	);
};

export default LanguageSwitcher;
