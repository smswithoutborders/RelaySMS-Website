import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FormControl, Select, MenuItem, Box } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { darkTheme } from "../theme";

const LanguageSwitcher = ({ theme: themeProp }) => {
	const { i18n } = useTranslation();
	const [selectedLang, setSelectedLang] = useState("en");
	const muiTheme = useTheme();
	const activeTheme = themeProp === "dark" ? darkTheme : muiTheme;
	const isDark = activeTheme.palette.mode === "dark";
	const textColor = activeTheme.palette.text.primary;
	const bgColor = activeTheme.palette.background.paper;
	const hoverColor = activeTheme.palette.action.hover;
	const dividerColor = activeTheme.palette.divider;

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
		color: textColor,
		"& .MuiSelect-icon": { color: textColor },
		"& .MuiInput-underline": { borderBottomColor: textColor }
	});

	return (
		<FormControl variant="standard" size="small">
			<Select
				value={selectedLang}
				onChange={(e) => handleLanguageChange(e.target.value)}
				sx={getThemeStyles()}
				IconComponent={isDark ? KeyboardArrowDown : KeyboardArrowDown}
				renderValue={(value) => (
					<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
						<span>{languages[value]?.flag}</span>
						<span>{languages[value]?.name}</span>
					</Box>
				)}
				MenuProps={{
					anchorOrigin: isDark
						? {
								vertical: "top",
								horizontal: "left"
							}
						: {
								vertical: "bottom",
								horizontal: "left"
							},
					transformOrigin: isDark
						? {
								vertical: "bottom",
								horizontal: "left"
							}
						: {
								vertical: "top",
								horizontal: "left"
							},
					slotProps: {
						paper: {
							elevation: 0,
							sx: {
								bgcolor: bgColor,
								color: textColor,
								borderRadius: "12px",
								border: "1px solid",
								borderColor: dividerColor,
								backdropFilter: "blur(20px)",
								backgroundImage: "none",
								boxShadow: isDark
									? "0 10px 24px rgba(0, 0, 0, 0.35)"
									: "0 12px 28px rgba(0, 24, 113, 0.12)",
								mt: 1,
								overflow: "visible",
								"& .MuiMenuItem-root": {
									"&:hover": {
										backgroundColor: hoverColor
									}
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
