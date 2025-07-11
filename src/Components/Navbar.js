import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import LanguageSwitcher from "./LanguageSwitcher";
import { FaGithub } from "react-icons/fa";

const languages = [
	{ code: "en", label: "English", flag: "🇬🇧" },
	{ code: "fr", label: "Français", flag: "🇫🇷" },
	{ code: "fa", label: "فارسی", flag: "🇮🇷" },
	{ code: "es", label: "Español", flag: "🇪🇸" }
];

export default function Navigation() {
	const { t, i18n } = useTranslation();

	const [anchorElNav, setAnchorElNav] = useState(null);
	const [anchorElLang, setAnchorElLang] = useState(null);

	const iconColor = "#004080"; // consistent blue

	const navLinks = [
		{ label: t("Nav.Home"), to: "/" },
		{
			label: t("Nav.Blog"),
			href: "https://blog.smswithoutborders.com/",
			external: true
		},
		{
			label: t("Nav.Support"),
			href: "https://docs.smswithoutborders.com/",
			external: true
		},
		{ label: t("Nav.Contact"), to: "/Contact_Us" }
	];

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleOpenLangMenu = (event) => {
		setAnchorElLang(event.currentTarget);
	};
	const handleCloseLangMenu = () => {
		setAnchorElLang(null);
	};

	const changeLanguage = (code) => {
		i18n.changeLanguage(code);
		handleCloseLangMenu();
	};

	return (
		<AppBar position="sticky" sx={{ backgroundColor: "#faf2e4", boxShadow: 1 }}>
			<Toolbar
				sx={{
					maxWidth: 1950,
					mx: "auto",
					width: "100%",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					px: { xs: 1, sm: 2 },
					minHeight: { xs: 64, sm: 72 }
				}}
			>
				<Link to="/" style={{ textDecoration: "none" }} aria-label="Home">
					<Box
						component="img"
						src="/logo.png"
						alt="Logo"
						sx={{
							height: { xs: 20, sm: 30, md: 40 },
							mr: 1
						}}
					/>
				</Link>

				{/* Desktop links */}
				<Box
					sx={{
						display: { xs: "none", md: "flex" },
						alignItems: "center",
						gap: 3,
						flexGrow: 1,
						justifyContent: "center"
					}}
				>
					{navLinks.map((link, index) =>
						link.external ? (
							<Button
								key={index}
								component="a"
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								sx={{ color: iconColor, textTransform: "none", fontWeight: 600 }}
							>
								{link.label}
							</Button>
						) : (
							<Button
								key={index}
								component={Link}
								to={link.to}
								onClick={handleCloseNavMenu}
								sx={{ color: iconColor, textTransform: "none", fontWeight: 600 }}
							>
								{link.label}
							</Button>
						)
					)}
				</Box>

				{/* Language selector desktop */}
				<Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
					<LanguageSwitcher />
				</Box>

				{/* Social icons desktop */}
				<Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", ml: 2, gap: 1 }}>
					<IconButton
						component="a"
						href="https://github.com/smswithoutborders"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
						sx={{ color: iconColor }}
					>
						<FaGithub size={22} />
					</IconButton>
					<IconButton
						component="a"
						href="https://x.com/RelaySMS"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="RelaySMS on X"
						sx={{ color: iconColor }}
					>
						{/* If you have an SVG or image for X logo, use <Box component="img" /> */}
						<img src="/x-w.png" alt="X logo" style={{ height: 22, width: 22 }} />
					</IconButton>
					<IconButton
						component="a"
						href="https://bsky.app/profile/relaysms.bsky.social"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="RelaySMS on Bluesky"
						sx={{ color: iconColor }}
					>
						<img src="/bluesky.svg" alt="Bluesky logo" style={{ height: 22, width: 22 }} />
					</IconButton>
				</Box>

				{/* Mobile menu icon */}
				<Box sx={{ display: { xs: "flex", md: "none" } }}>
					<IconButton
						size="large"
						aria-label="open navigation menu"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						onClick={handleOpenNavMenu}
						sx={{ color: iconColor }}
					>
						<MenuIcon />
					</IconButton>
					<Menu
						id="menu-appbar"
						anchorEl={anchorElNav}
						open={Boolean(anchorElNav)}
						onClose={handleCloseNavMenu}
						keepMounted
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "right"
						}}
						transformOrigin={{
							vertical: "top",
							horizontal: "right"
						}}
					>
						{navLinks.map((link, index) =>
							link.external ? (
								<MenuItem
									key={index}
									component="a"
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									onClick={handleCloseNavMenu}
								>
									{link.label}
								</MenuItem>
							) : (
								<MenuItem key={index} component={Link} to={link.to} onClick={handleCloseNavMenu}>
									{link.label}
								</MenuItem>
							)
						)}

						{/* Language menu in mobile */}
						<MenuItem onClick={handleOpenLangMenu} sx={{ cursor: "pointer" }}>
							<LanguageIcon sx={{ mr: 1, color: iconColor }} />
							{languages.find((l) => l.code === i18n.language)?.flag || "🌐"}
						</MenuItem>
						<Menu
							anchorEl={anchorElLang}
							open={Boolean(anchorElLang)}
							onClose={handleCloseLangMenu}
							keepMounted
							anchorOrigin={{
								vertical: "top",
								horizontal: "right"
							}}
							transformOrigin={{
								vertical: "top",
								horizontal: "right"
							}}
						>
							{languages.map((lang) => (
								<MenuItem
									key={lang.code}
									onClick={() => {
										changeLanguage(lang.code);
										handleCloseNavMenu();
									}}
									selected={lang.code === i18n.language}
								>
									{lang.flag} {lang.label}
								</MenuItem>
							))}
						</Menu>
					</Menu>
				</Box>
			</Toolbar>
		</AppBar>
	);
}
