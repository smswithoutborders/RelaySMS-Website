import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTranslation } from "react-i18next";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Select from "@mui/material/Select";

function MobileNav({ darkMode, toggleDarkMode }) {
	const { t, i18n } = useTranslation("navbar");
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
		handleCloseNavMenu(); // Close the dropdown after selecting a language
	};

	return (
		<nav style={{ backgroundColor: "transparent" }}>
			<Container
				maxWidth="sm"
				sx={{
					display: { xs: "flex", md: "none" },
					justifyContent: "space-between",
					alignItems: "center"
				}}
			>
				<Box display="flex">
					<Typography variant="body1" sx={{ fontWeight: 600, px: 2 }}>
						RelaySMS
					</Typography>
				</Box>{" "}
				<Toolbar disableGutters>
					<Box sx={{ flexGrow: 0, left: 0 }}>
						<IconButton
							size="large"
							aria-label="menu"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "right"
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right"
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" }
							}}
						>
							<MenuItem onClick={handleCloseNavMenu}>
								<Typography
									textAlign="center"
									component="a"
									href="https://smswithoutborders.github.io/docs/tutorials/getting-started/"
									target="_blank"
									rel="noreferrer noopener"
								>
									{t("help")}
								</Typography>
							</MenuItem>

							<MenuItem
								onClick={handleCloseNavMenu}
								component="a"
								href="https://github.com/deku-messaging"
								target="_blank"
								rel="noreferrer noopener"
							>
								<Typography textAlign="center">{t("github")}</Typography>
							</MenuItem>

							<MenuItem
								onClick={handleCloseNavMenu}
								component="a"
								href="https://blog.smswithoutborders.com/"
								target="_blank"
								rel="noreferrer noopener"
							>
								<Typography textAlign="center">{t("blog")}</Typography>
							</MenuItem>

							<MenuItem onClick={handleCloseNavMenu}>
								<Typography textAlign="center">{t("donate")}</Typography>
							</MenuItem>
						</Menu>
						<Select
							value={i18n.language}
							onChange={(e) => changeLanguage(e.target.value)}
							IconComponent={ArrowDropDownIcon}
							sx={{ ml: 1 }}
						>
							<MenuItem value="en">🇺🇸</MenuItem>
							<MenuItem value="fr">🇫🇷</MenuItem>
							<MenuItem value="fa">🇮🇷</MenuItem>
							<MenuItem value="es">🇪🇸</MenuItem>
						</Select>
						<IconButton
							onClick={toggleDarkMode}
							sx={{ ml: 2 }}
							aria-label={darkMode ? "Light Mode" : "Dark Mode"}
							color="inherit"
						>
							{darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
						</IconButton>
					</Box>
				</Toolbar>
			</Container>
		</nav>
	);
}
export default MobileNav;
