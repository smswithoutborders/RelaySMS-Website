import { Typography, Box, IconButton } from "@mui/material";
import React from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTranslation } from "react-i18next";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Select from "@mui/material/Select";

export default function Nav({ darkMode, toggleDarkMode }) {
	const { t, i18n } = useTranslation();

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	return (
		<>
			<Box
				component="nav"
				sx={{
					display: { md: "flex", xs: "none", sm: "none" },
					justifyContent: "end",
					py: 1.5,
					mx: 5,
					right: 0,
					color: "white"
				}}
			>
				<Box sx={{ display: "flex" }}>
					<Box
						className="cards"
						sx={{
							display: "flex",

							borderRadius: 7,
							p: 1,
							px: 2,
							justifyItems: "space-between"
						}}
					>
						<a href="/">
							<Typography sx={{ mx: 4 }} textAlign={"center"}>
								{t("Home")}
							</Typography>
						</a>
						<a
							href="https://smswithoutborders.github.io/docs/tutorials/getting-started/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<Typography sx={{ mx: 4 }} textAlign={"center"}>
								{t("help")}
							</Typography>
						</a>
						<a href="https://github.com/deku-messaging" target="_blank" rel="noreferrer">
							<Typography sx={{ mx: 4 }} textAlign={"center"}>
								{t("github")}
							</Typography>
						</a>
						<a href="https://blog.smswithoutborders.com/" target="_blank" rel="noreferrer">
							<Typography sx={{ mx: 4 }} textAlign={"center"}>
								{t("Blog")}
							</Typography>
						</a>
					</Box>
					<Select
						className="cards"
						sx={{ borderRadius: 7, px: 3, py: 1, ml: 1 }}
						value={i18n.language}
						onChange={(e) => changeLanguage(e.target.value)}
						IconComponent={ArrowDropDownIcon}
					>
						<MenuItem value="en"> EN 🇺🇸</MenuItem>
						<MenuItem value="fr"> Fr 🇫🇷</MenuItem>
						<MenuItem value="fa"> FA 🇮🇷</MenuItem>
					</Select>
					{/* Dark/Light mode toggle */}
					<IconButton
						className="cards"
						onClick={toggleDarkMode}
						sx={{ ml: 2 }}
						aria-label={darkMode ? "Light Mode" : "Dark Mode"}
						color="inherit"
					>
						{darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
					</IconButton>
				</Box>
			</Box>
		</>
	);
}
