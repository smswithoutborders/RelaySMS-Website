import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FormControl, Select, MenuItem, Button, Box } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

const LanguageSwitcher = ({ theme = "light" }) => {
	const { i18n } = useTranslation();
	const [selectedLang, setSelectedLang] = useState("en");

	const languages = {
		en: { flag: "🇺🇸", name: "English" },
		fr: { flag: "🇫🇷", name: "Français" },
		es: { flag: "🇪🇸", name: "Español" },
		fa: { flag: "🇮🇷", name: "فارسی" }
	};

	useEffect(() => {
		const savedLang = localStorage.getItem("i18nextLng");
		if (savedLang && languages[savedLang]) {
			setSelectedLang(savedLang);
			i18n.changeLanguage(savedLang);
		} else {
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
		}
	}, [i18n]);

	const handleLanguageChange = (newLang) => {
		localStorage.setItem("i18nextLng", newLang);
		i18n.changeLanguage(newLang);
		setSelectedLang(newLang);
	};

	const getThemeStyles = () => ({
		color: theme === "dark" ? "#ffffff" : "#2d2e2eff",
		"& .MuiSelect-icon": {
			color: theme === "dark" ? "#ffffff" : "#2d2e2eff",
		},
		"& .MuiInput-underline": {
			borderBottomColor: theme === "dark" ? "#ffffff" : "#2d2e2eff",
		},
		
	});

	return (
		<FormControl variant="standard" size="small">
			<Select
				value={selectedLang}
				onChange={(e) => handleLanguageChange(e.target.value)}
				sx={getThemeStyles()}
				IconComponent={theme === "dark" ? KeyboardArrowUp : KeyboardArrowDown}
				renderValue={(value) => (
					<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
						<span>{languages[value]?.flag}</span>
						<span>{languages[value]?.name}</span>
					</Box>
				)}
				MenuProps={{
					anchorOrigin: theme === "dark" ? {
						vertical: 'top',
						horizontal: 'left',
					} : {
						vertical: 'bottom',
						horizontal: 'left',
					},
					transformOrigin: theme === "dark" ? {
						vertical: 'bottom',
						horizontal: 'left',
					} : {
						vertical: 'top',
						horizontal: 'left',
					},
					PaperProps: {
						sx: {
							bgcolor: theme === "dark" ? "#2d2d2d" : "#ffffff",
							color: theme === "dark" ? "#ffffff" : "#2d2e2eff",
							"& .MuiMenuItem-root": {
								"&:hover": {
									backgroundColor: theme === "dark" ? "#404040" : "#f5f5f5",
								}
							}
						}
					}
				}}
			>
				{Object.entries(languages).map(([code, { flag, name }]) => (
					<MenuItem key={code} value={code}>
						<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
							<span>{flag}</span>
							<span>{name}</span>
						</Box>
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default LanguageSwitcher;
