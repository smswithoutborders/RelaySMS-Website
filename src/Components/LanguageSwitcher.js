import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { FaGlobe } from "react-icons/fa";

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();
	const [selectedLang, setSelectedLang] = useState(i18n.language);

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
					<FaGlobe />
					{selectedLang === "en" ? "English" : selectedLang === "fr" ? "Français" : "فارسی"}
				</>
			}
			id="language-dropdown"
		>
			<Dropdown.Item onClick={() => handleLanguageChange("en")}>🇺🇸 English</Dropdown.Item>
			<Dropdown.Item onClick={() => handleLanguageChange("fr")}>🇫🇷 Français</Dropdown.Item>
			<Dropdown.Item onClick={() => handleLanguageChange("fa")}>🇮🇷 فارسی</Dropdown.Item>
		</DropdownButton>
	);
};

export default LanguageSwitcher;
