import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import { DownloadOutlined } from "@ant-design/icons";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LanguageSwitcher from "./LanguageSwitcher";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { SiBluesky } from "react-icons/si";
import { FaSun, FaMoon, FaDesktop } from "react-icons/fa6";
import { useTheme } from "@mui/material/styles";
import { useThemeMode } from "../ThemeContext";

export default function Navigation() {
	const { t, i18n } = useTranslation();
	const isRtl = i18n.language === "fa" || i18n.language === "farshi";
	const [anchorElNav, setAnchorElNav] = useState(null);
	const [anchorElDevelopers, setAnchorElDevelopers] = useState(null);
	const [scrolled, setScrolled] = useState(false);
	const muiTheme = useTheme();
	const { mode, setMode } = useThemeMode();
	const iconColor = muiTheme.palette.text.primary;

	const themeIcons = { light: FaSun, dark: FaMoon, system: FaDesktop };
	const themeOrder = ["light", "dark", "system"];
	const ThemeIcon = themeIcons[mode];
	const cycleTheme = () => setMode(themeOrder[(themeOrder.indexOf(mode) + 1) % 3]);
	const themeLabel = {
		light: t("Navbar.Theme.Light", "Light"),
		dark: t("Navbar.Theme.Dark", "Dark"),
		system: t("Navbar.Theme.System", "System")
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 60) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = [
		{ label: t("Nav.About", "About"), to: "/about" },
		{
			label: t("Nav.Blog"),
			href: "https://blog.smswithoutborders.com/",
			external: true
		},
		{
			label: t("Nav.Help"),
			href: "https://docs.smswithoutborders.com/",
			external: true
		},
		{ label: t("Nav.Contact"), to: "/contact" }
	];

	const developerLinks = [
		{ label: t("Nav.Overview"), to: "/system-overview" },
		{
			label: t("Nav.Changelog", "Changelog"),
			href: "https://github.com/smswithoutborders/RelaySMS-Android/releases",
			external: true
		},
		{ label: t("Footer.BrandResources", "Brand Resources"), to: "/branding" },
		{ label: t("Footer.Contributing", "Contributing"), to: "/contributing" },
		{
			label: t("Footer.Troubleshooting", "Troubleshooting"),
			href: "https://docs.smswithoutborders.com/docs/Troubleshooting/Troubleshooting-FAQ",
			external: true
		}
	];

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleOpenDevelopersMenu = (event) => {
		setAnchorElDevelopers(event.currentTarget);
	};

	const handleCloseDevelopersMenu = () => {
		setAnchorElDevelopers(null);
	};

	const developerMenuItemSx = {
		my: 0.25,
		mx: 0.5,
		px: 1.75,
		py: 1,
		borderRadius: "8px",
		fontSize: "0.95rem",
		fontWeight: 500,
		transition: "all 0.2s ease",
		"&:hover": {
			backgroundColor: "action.hover",
			color: "secondary.main",
			transform: "translateX(3px)"
		}
	};

	return (
		<AppBar
			dir={isRtl ? "rtl" : "ltr"}
			position="fixed"
			elevation={0}
			sx={{
				backgroundColor: scrolled ? "background.default" : "transparent",
				left: 0,
				right: 0,
				zIndex: (theme) => theme.zIndex.drawer + 1,
				transition: "all 0.3s ease",
				height: 70,
				backgroundImage: "none",

				boxShadow: (theme) =>
					scrolled
						? theme.palette.mode === "dark"
							? "0 4px 24px rgba(0,0,0,0.3)"
							: "0 4px 20px rgba(0,24,113,0.07)"
						: "none"
			}}
		>
			<Toolbar
				sx={{
					maxWidth: 1826,
					mx: "auto",
					width: "100%",
					display: "flex",
					justifyContent: "flex-start",
					alignItems: "center",
					px: { xs: 1, sm: 2 },
					minHeight: { xs: 64, sm: 72 },
					height: "100%",
					transition: "all 0.3s ease"
				}}
			>
				<Box
					sx={{
						mr: { xs: "auto", md: 0 },
						ml: { xs: 0, md: isRtl ? "auto" : 0 }
					}}
				>
					<Link to="/" style={{ textDecoration: "none" }} aria-label={t("Navbar.Aria.Home", "Home")}>
						<Box
							component="img"
							src={muiTheme.palette.mode === "dark" ? "/RelaySMSDark.png" : "/logo.png"}
							alt={t("Navbar.Aria.Logo", "RelaySMS logo")}
							sx={{
								height: { xs: 20, sm: 30, md: 30 },
								display: "block"
							}}
						/>
					</Link>
				</Box>

				<Box
					sx={{
						display: { xs: "none", md: "flex" },
						alignItems: "center",
						gap: 3,
						flexGrow: 1,
						justifyContent: "flex-start",
						ml: 3
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
								sx={{
									color: iconColor,
									textTransform: "none",
									fontWeight: 300,
									fontSize: { md: "15px", lg: "15px", xl: "16px" },
									backgroundImage: "linear-gradient(to right,rgb(23, 114, 184),rgb(5, 105, 155))",
									backgroundSize: "0% 2px",
									backgroundRepeat: "no-repeat",
									backgroundPosition: "left bottom",
									transition: "all 0.3s ease-in-out",
									"&:hover": {
										backgroundSize: "100% 2px"
									}
								}}
							>
								{link.label}
							</Button>
						) : (
							<Button
								key={index}
								component={Link}
								to={link.to}
								onClick={handleCloseNavMenu}
								sx={{
									color: iconColor,
									textTransform: "none",
									fontWeight: 500,
									fontSize: { md: "15px", lg: "15px", xl: "16px" },
									backgroundImage: "linear-gradient(to right,rgb(23, 114, 184),rgb(5, 105, 155))",
									backgroundSize: "0% 2px",
									backgroundRepeat: "no-repeat",
									backgroundPosition: "left bottom",
									transition: "all 0.3s ease-in-out",
									"&:hover": {
										backgroundSize: "100% 2px",
										color: "secondary.main"
									}
								}}
							>
								{link.label}
							</Button>
						)
					)}

					<Button
						onClick={handleOpenDevelopersMenu}
						endIcon={<KeyboardArrowDownIcon fontSize="small" />}
						sx={{
							color: iconColor,
							textTransform: "none",
							fontWeight: 500,
							fontSize: { md: "15px", lg: "15px", xl: "16px" },
							backgroundImage: "linear-gradient(to right,rgb(23, 114, 184),rgb(5, 105, 155))",
							backgroundSize: "0% 2px",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "left bottom",
							transition: "all 0.3s ease-in-out",
							"&:hover": {
								backgroundSize: "100% 2px",
								color: "secondary.main"
							}
						}}
					>
						{t("Nav.Developers", "Developers")}
					</Button>

					<Menu
						anchorEl={anchorElDevelopers}
						open={Boolean(anchorElDevelopers)}
						onClose={handleCloseDevelopersMenu}
						anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
						transformOrigin={{ vertical: "top", horizontal: "left" }}
						PaperProps={{
							elevation: 0,
							sx: {
								mt: 1,
								minWidth: 250,
								borderRadius: "12px",
								border: "1px solid",
								borderColor: "divider",
								backgroundImage: "none",
								boxShadow: (theme) =>
									theme.palette.mode === "dark"
										? "0 10px 24px rgba(0, 0, 0, 0.35)"
										: "0 12px 28px rgba(0, 24, 113, 0.12)"
							}
						}}
						MenuListProps={{
							sx: {
								py: 1,
								px: 0.5
							}
						}}
					>
						{developerLinks.map((link, index) =>
							link.external ? (
								<MenuItem
									key={`dev-${index}`}
									component="a"
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									onClick={handleCloseDevelopersMenu}
									sx={developerMenuItemSx}
								>
									{link.label}
								</MenuItem>
							) : (
								<MenuItem
									key={`dev-${index}`}
									component={Link}
									to={link.to}
									onClick={handleCloseDevelopersMenu}
									sx={developerMenuItemSx}
								>
									{link.label}
								</MenuItem>
							)
						)}
					</Menu>
				</Box>

				<Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", ml: 2, gap: 1 }}>
					<Button
						component={Link}
						to="/download"
						onClick={handleCloseNavMenu}
						startIcon={<DownloadOutlined style={{ fontSize: "16px" }} />}
						sx={{
							color: iconColor,
							textTransform: "none",
							// bgcolor: "secondary.main",
							fontWeight: 500,
							fontSize: "14px",
							border: "1px solid",
							borderColor: "divider",
							borderRadius: "8px",
							px: 2,
							minWidth: "auto",
							"&:hover": {
								borderColor: "secondary.main",
								color: "secondary.main",
								backgroundColor: "action.hover"
							}
						}}
					>
						{t("Nav.Download")}
					</Button>
					<IconButton
						component="a"
						href="https://github.com/smswithoutborders"
						target="_blank"
						rel="noopener noreferrer"
						aria-label={t("Navbar.Aria.GitHub", "GitHub")}
						sx={{ color: iconColor }}
					>
						<FaGithub size={16} />
					</IconButton>
					<IconButton
						component="a"
						href="https://x.com/RelaySMS"
						target="_blank"
						rel="noopener noreferrer"
						aria-label={t("Navbar.Aria.X", "RelaySMS on X")}
						sx={{ color: iconColor }}
					>
						<FaXTwitter size={16} />
					</IconButton>
					<IconButton
						component="a"
						href="https://bsky.app/profile/relaysms.bsky.social"
						target="_blank"
						rel="noopener noreferrer"
						aria-label={t("Navbar.Aria.Bluesky", "RelaySMS on Bluesky")}
						sx={{ color: "primary.light" }}
					>
						<SiBluesky size={16} />
					</IconButton>
					<Tooltip title={t("Navbar.Aria.ThemeTooltip", "Theme") + ": " + themeLabel[mode]}>
						<IconButton
							onClick={cycleTheme}
							aria-label={t("Navbar.Aria.ToggleTheme", "Toggle theme")}
							sx={{ color: iconColor }}
						>
							<ThemeIcon size={16} />
						</IconButton>
					</Tooltip>
				</Box>

				<Box sx={{ display: { xs: "none", md: "flex" }, ml: 2 }}>
					<LanguageSwitcher />
				</Box>

				<Box
					sx={{
						display: { xs: "flex", md: "none" },
						ml: 1,
						alignItems: "center",
						gap: 0.5
					}}
				>
					<Button
						component={Link}
						to="/download"
						onClick={handleCloseNavMenu}
						startIcon={<DownloadOutlined style={{ fontSize: "16px" }} />}
						sx={{
							color: iconColor,
							textTransform: "none",
							fontWeight: 500,
							fontSize: "13px",
							border: "1px solid",
							borderColor: "divider",
							borderRadius: "8px",
							px: 1.2,
							py: 0.5,
							minWidth: "auto",
							"&:hover": {
								borderColor: "secondary.main",
								color: "secondary.main",
								backgroundColor: "action.hover"
							}
						}}
					>
						{t("Nav.Download")}
					</Button>

					<IconButton
						size="large"
						aria-label={t("Navbar.Aria.OpenMenu", "Open navigation menu")}
						aria-controls="menu-appbar"
						aria-haspopup="true"
						onClick={handleOpenNavMenu}
						sx={{
							color: iconColor,
							transition: "transform 0.18s ease",
							"&:hover": { transform: "scale(1.06)" }
						}}
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
						sx={{
							"& .MuiPaper-root": {
								borderRadius: "12px",
								boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
								border: "1px solid",
								borderColor: "divider",
								backdropFilter: "blur(20px)",
								backgroundImage: "none",
								boxShadow: (theme) =>
									theme.palette.mode === "dark"
										? "0 10px 24px rgba(0, 0, 0, 0.35)"
										: "0 12px 28px rgba(0, 24, 113, 0.12)",
								minWidth: "280px",
								mt: 1,
								overflow: "visible",
							},
							"& .MuiList-root": {
								padding: "12px 0"
							},
							"& .MuiMenuItem-root": {
								padding: "12px 24px",
								fontSize: "14px",
								fontWeight: 500,
								borderRadius: "8px",
								margin: "4px 12px",
								transition: "all 0.2s ease",
								"&:hover": {
									backgroundColor: "secondary.main",
									transform: "translateX(4px)"
								},
								"&.language-switcher-item": {
									padding: "8px 24px",
									"&:hover": {
										backgroundColor: "transparent",
										transform: "none"
									}
								},
								"&.social-icons-item": {
									padding: "8px 24px",
									"&:hover": {
										backgroundColor: "transparent",
										transform: "none"
									}
								}
							}
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

						<Divider sx={{ my: 0.5 }} />
						<MenuItem disabled>{t("Nav.Developers", "Developers")}</MenuItem>
						{developerLinks.map((link, index) =>
							link.external ? (
								<MenuItem
									key={`mobile-dev-${index}`}
									component="a"
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									onClick={handleCloseNavMenu}
								>
									{link.label}
								</MenuItem>
							) : (
								<MenuItem
									key={`mobile-dev-${index}`}
									component={Link}
									to={link.to}
									onClick={handleCloseNavMenu}
								>
									{link.label}
								</MenuItem>
							)
						)}

						<MenuItem disableRipple className="language-switcher-item">
							<Box sx={{ width: "100%" }}>
								<LanguageSwitcher />
							</Box>
						</MenuItem>

						<MenuItem disableRipple className="social-icons-item">
							<Box
								sx={{
									display: "flex",
									gap: 1,
									justifyContent: "center",
									width: "100%",
									alignItems: "center"
								}}
							>
								<IconButton
									component={Link}
									to="/download"
									onClick={handleCloseNavMenu}
									aria-label={t("Nav.Download")}
									sx={{
										color: iconColor,
										transition: "transform 0.2s ease",
										"&:hover": { transform: "scale(1.2)", color: "secondary.main" }
									}}
								>
									<DownloadOutlined fontSize="small" />
								</IconButton>
								<IconButton
									component="a"
									href="https://github.com/smswithoutborders"
									target="_blank"
									rel="noopener noreferrer"
									aria-label={t("Navbar.Aria.GitHub", "GitHub")}
									sx={{
										color: iconColor,
										transition: "transform 0.2s ease",
										"&:hover": { transform: "scale(1.2)", color: "secondary.main" }
									}}
								>
									<FaGithub />
								</IconButton>
								<IconButton
									component="a"
									href="https://x.com/RelaySMS"
									target="_blank"
									rel="noopener noreferrer"
									aria-label={t("Navbar.Aria.X", "RelaySMS on X")}
									sx={{
										color: iconColor,
										transition: "transform 0.2s ease",
										"&:hover": { transform: "scale(1.2)", color: "secondary.main" }
									}}
								>
									<FaXTwitter />
								</IconButton>
								<IconButton
									component="a"
									href="https://bsky.app/profile/relaysms.bsky.social"
									target="_blank"
									rel="noopener noreferrer"
									aria-label={t("Navbar.Aria.Bluesky", "RelaySMS on Bluesky")}
									sx={{
										color: "primary.light",
										transition: "transform 0.2s ease",
										"&:hover": { transform: "scale(1.2)" }
									}}
								>
									<SiBluesky />
								</IconButton>
								<Tooltip title={t("Navbar.Aria.ThemeTooltip", "Theme") + ": " + themeLabel[mode]}>
									<IconButton
										onClick={cycleTheme}
										aria-label={t("Navbar.Aria.ToggleTheme", "Toggle theme")}
										sx={{ color: iconColor }}
									>
										<ThemeIcon size={16} />
									</IconButton>
								</Tooltip>
							</Box>
						</MenuItem>
					</Menu>
				</Box>
			</Toolbar>
		</AppBar>
	);
}
