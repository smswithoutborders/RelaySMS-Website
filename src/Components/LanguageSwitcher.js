import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { FaGlobe } from "react-icons/fa";

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();
	const [selectedLang, setSelectedLang] = useState(i18n.language || "en");

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

		if (!i18n.language || i18n.language === "en") {
			detectLanguage();
		}
	}, [i18n]);

	const handleLanguageChange = (lang) => {
		i18n.changeLanguage(lang);
		setSelectedLang(lang);
	};

	return (
		<DropdownButton
			drop="start"
			variant="outline-secondary"
			title={
				<>
					<FaGlobe className="me-2" />
					{selectedLang === "en"
						? "English"
						: selectedLang === "es"
							? "Español"
							: selectedLang === "fr"
								? "Français"
								: "فارسی"}
				</>
			}
			id="language-dropdown"
			className="language-switcher"
		>
			<Dropdown.Item onClick={() => handleLanguageChange("en")}>🇺🇸 English</Dropdown.Item>
			<Dropdown.Item onClick={() => handleLanguageChange("fr")}>🇫🇷 Français</Dropdown.Item>
			<Dropdown.Item onClick={() => handleLanguageChange("es")}>🇪🇸 Español</Dropdown.Item>
			<Dropdown.Item onClick={() => handleLanguageChange("fa")}>🇮🇷 فارسی</Dropdown.Item>
		</DropdownButton>
	);
};

export default LanguageSwitcher;
