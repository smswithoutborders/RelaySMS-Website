import React, { useState, useEffect } from "react";
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
import LanguageSwitcher from "./LanguageSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBluesky, faXTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Navigation() {
	const { t, i18n } = useTranslation();
	const isRtl = i18n.language === "fa" || i18n.language === "farshi";
	const [anchorElNav, setAnchorElNav] = useState(null);
	const iconColor = "#004080";
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

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

	return (
		<AppBar
			dir={isRtl ? "rtl" : "ltr"}
			position="fixed"
			sx={{
				backgroundColor: scrolled ? "#e0d7c3" : "#faf2e4",
				boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.3)" : 1,
				top: 0,
				left: 0,
				right: 0,
				zIndex: (theme) => theme.zIndex.drawer + 1,
				backdropFilter: "blur(6px)",
				transition: "all 0.3s ease",
				height: scrolled ? 70 : 72
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
							height: { xs: 20, sm: 30, md: 40 },
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
								sx={{
									color: iconColor,
									textTransform: "none",
									fontWeight: 500,
									fontSize: { md: "15px", lg: "16px", xl: "18px" },
									backgroundImage: "linear-gradient(to right,rgb(23, 114, 184),rgb(5, 105, 155))",
									backgroundSize: "0% 2px",
									backgroundRepeat: "no-repeat",
									backgroundPosition: "left bottom",
									transition: "all 0.3s ease-in-out",
									"&:hover": {
										backgroundSize: "100% 2px",
										color: "#E66F00"
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
									fontSize: { md: "15px", lg: "16px", xl: "18px" },
									backgroundImage: "linear-gradient(to right,rgb(23, 114, 184),rgb(5, 105, 155))",
									backgroundSize: "0% 2px",
									backgroundRepeat: "no-repeat",
									backgroundPosition: "left bottom",
									transition: "all 0.3s ease-in-out",
									"&:hover": {
										backgroundSize: "100% 2px",
										color: "#E66F00"
									}
								}}
							>
								{link.label}
							</Button>
						)
					)}
				</Box>

				<Box sx={{ display: { xs: "none", md: "flex" } }}>
					<LanguageSwitcher />
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
						<FontAwesomeIcon icon={faGithub} size="md" />
					</IconButton>
					<IconButton
						component="a"
						href="https://x.com/RelaySMS"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="RelaySMS on X"
						sx={{ color: iconColor }}
					>
						<FontAwesomeIcon icon={faXTwitter} size="md" />
					</IconButton>
					<IconButton
						component="a"
						href="https://bsky.app/profile/relaysms.bsky.social"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="RelaySMS on Bluesky"
						sx={{ color: iconColor }}
					>
						<FontAwesomeIcon icon={faBluesky} size="md" />
					</IconButton>
				</Box>

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

						<MenuItem disableRipple>
							<LanguageSwitcher />
						</MenuItem>

						<MenuItem disableRipple>
							<Box sx={{ display: "flex", gap: 1, pl: 1 }}>
								<IconButton
									component="a"
									href="https://github.com/smswithoutborders"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="GitHub"
									sx={{ color: iconColor }}
								>
									<FontAwesomeIcon icon={faGithub} />
								</IconButton>
								<IconButton
									component="a"
									href="https://x.com/RelaySMS"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="RelaySMS on X"
									sx={{ color: iconColor }}
								>
									<FontAwesomeIcon icon={faXTwitter} />
								</IconButton>
								<IconButton
									component="a"
									href="https://bsky.app/profile/relaysms.bsky.social"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="RelaySMS on Bluesky"
									sx={{ color: iconColor }}
								>
									<FontAwesomeIcon icon={faBluesky} />
								</IconButton>
							</Box>
						</MenuItem>
					</Menu>
				</Box>
			</Toolbar>
		</AppBar>
	);
}
