import React from "react";
import { useTranslation } from "react-i18next";
import { FormControl, Select, MenuItem } from "@mui/material";

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();
	const [language, setLanguage] = React.useState(i18n.language);

	const handleChange = (event) => {
		const newLanguage = event.target.value;
		setLanguage(newLanguage);
		i18n.changeLanguage(newLanguage);
	};

	return (
		<FormControl variant="outlined" size="small">
			<Select value={language} onChange={handleChange} displayEmpty>
				<MenuItem value="en">🇺🇸 English</MenuItem>
				<MenuItem value="fr">🇫🇷 French</MenuItem>
				<MenuItem value="fa">🇮🇷 فارسی</MenuItem>
			</Select>
		</FormControl>
	);
};

export default LanguageSwitcher;
