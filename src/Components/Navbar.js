import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguageLink } from "../hooks/useLanguageLink";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageSwitcher from "./LanguageSwitcher";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { SiBluesky } from "react-icons/si";

export default function Navigation() {
	const { t, i18n } = useTranslation();
	const { getLanguageLink } = useLanguageLink();
	const isRtl = i18n.language === "fa" || i18n.language === "farshi";
	const [anchorElNav, setAnchorElNav] = useState(null);
	const iconColor = "#2d2e2eff";
	const [scrolled, setScrolled] = useState(false);

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
		{ label: t("Nav.Contact"), to: "/contact" },
		{ label: t("Nav.Overview"), to: "/system-overview" }
	];

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar
			dir={isRtl ? "rtl" : "ltr"}
			position="fixed"
			elevation={scrolled ? 2 : 0}
			sx={{
				backgroundColor: scrolled ? "#ffffffff" : "#ffffff02",
				top: 0,
				left: 0,
				right: 0,
				zIndex: (theme) => theme.zIndex.drawer + 1,
				transition: "all 0.3s ease",
				height: scrolled ? 70 : 70
			}}
		>
			<Toolbar
				sx={{
					maxWidth: 1950,
					mx: "auto",
					width: "100%",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					px: { xs: 1, sm: 2 },
					minHeight: { xs: 64, sm: 72 },
					height: "100%",
					transition: "all 0.3s ease"
				}}
			>
				<Link to="/" style={{ textDecoration: "none" }} aria-label="Home">
					<Box
						component="img"
						src="/logo.png"
						alt="Logo"
						sx={{
							height: { xs: 20, sm: 30, md: 32 },
							mr: 1
						}}
					/>
				</Link>

				<Box
					sx={{
						display: { xs: "none", md: "flex" },
						alignItems: "center",
						gap: 3,
						flexGrow: 1,
						justifyContent: "flex-end"
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
									fontWeight: 500,
									fontSize: { md: "15px", lg: "16px", xl: "16px" },
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
									fontSize: { md: "15px", lg: "16px", xl: "16px" },
									backgroundImage: "linear-gradient(to right,rgb(23, 114, 184),rgb(5, 105, 155))",
									backgroundSize: "0% 2px",
									backgroundRepeat: "no-repeat",
									backgroundPosition: "left bottom",
									transition: "all 0.3s ease-in-out",
									"&:hover": {
										backgroundSize: "100% 2px",
										color: "#FF9E43"
									}
								}}
							>
								{link.label}
							</Button>
						)
					)}
				</Box>

				<Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", ml: 2, gap: 1 }}>
					<IconButton
						component="a"
						href="https://github.com/smswithoutborders"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
						sx={{ color: iconColor }}
					>
						<FaGithub size={16} />
					</IconButton>
					<IconButton
						component="a"
						href="https://x.com/RelaySMS"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="RelaySMS on X"
						sx={{ color: iconColor }}
					>
						<FaXTwitter size={16} />
					</IconButton>
					<IconButton
						component="a"
						href="https://bsky.app/profile/relaysms.bsky.social"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="RelaySMS on Bluesky"
						sx={{ color: iconColor }}
					>
						<SiBluesky size={16} color="#4f9bd9"/>
					</IconButton>
				</Box>

				<Box sx={{ display: { xs: "none", md: "flex" }, ml: 2 }}>
					<LanguageSwitcher />
				</Box>

				<Box sx={{ display: { xs: "flex", md: "none" } }}>
					<IconButton
						size="large"
						aria-label="open navigation menu"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						onClick={handleOpenNavMenu}
						sx={{
							color: iconColor,
							transition: "transform 0.2s ease",
							"&:hover": {
								transform: "scale(1.1)"
							}
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
								border: "1px solid rgba(255, 255, 255, 0.2)",
								backdropFilter: "blur(20px)",
								background: "rgba(255, 255, 255, 0.95)",
								minWidth: "280px",
								mt: 1,
								overflow: "visible",
								"&::before": {
									content: '""',
									display: "block",
									position: "absolute",
									top: 0,
									right: 14,
									width: 10,
									height: 10,
									backgroundColor: "rgba(255, 255, 255, 0.95)",
									transform: "translateY(-50%) rotate(45deg)",
									zIndex: 0
								}
							},
							"& .MuiList-root": {
								padding: "12px 0"
							},
							"& .MuiMenuItem-root": {
								padding: "12px 24px",
								fontSize: "16px",
								fontWeight: 500,
								borderRadius: "8px",
								margin: "4px 12px",
								transition: "all 0.2s ease",
								"&:hover": {
									backgroundColor: "rgba(255, 158, 67, 0.1)",
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

						<MenuItem disableRipple className="language-switcher-item">
							<Box sx={{ width: "100%" }}>
								<LanguageSwitcher />
							</Box>
						</MenuItem>

						<MenuItem disableRipple className="social-icons-item">
							<Box sx={{ display: "flex", gap: 1, justifyContent: "center", width: "100%" }}>
								<IconButton
									component="a"
									href="https://github.com/smswithoutborders"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="GitHub"
									sx={{
										color: iconColor,
										transition: "transform 0.2s ease",
										"&:hover": {
											transform: "scale(1.2)",
											color: "#FF9E43"
										}
									}}
								>
									<FaGithub />
								</IconButton>
								<IconButton
									component="a"
									href="https://x.com/RelaySMS"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="RelaySMS on X"
									sx={{
										color: iconColor,
										transition: "transform 0.2s ease",
										"&:hover": {
											transform: "scale(1.2)",
											color: "#FF9E43"
										}
									}}
								>
									<FaXTwitter />
								</IconButton>
								<IconButton
									component="a"
									href="https://bsky.app/profile/relaysms.bsky.social"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="RelaySMS on Bluesky"
									sx={{
										color: iconColor,
										transition: "transform 0.2s ease",
										"&:hover": {
											transform: "scale(1.2)",
											color: "#FF9E43"
										}
									}}
								>
									<SiBluesky />
								</IconButton>
							</Box>
						</MenuItem>
					</Menu>
				</Box>
			</Toolbar>
		</AppBar>
	);
}
