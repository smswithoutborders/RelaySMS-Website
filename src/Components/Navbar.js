import React, { useState, useEffect } from "react";
import {
	Toolbar,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemText,
	useMediaQuery,
	Box,
	Typography,
	AppBar
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [openDrawer, setOpenDrawer] = useState(false);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	const { t, i18n } = useTranslation();
	const isFarsi = i18n.language === "fa";

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = [
		{ label: t("Nav.Home"), href: "/" },
		{ label: t("Nav.Blog"), href: "https://blog.smswithoutborders.com/", external: true },
		{ label: t("Nav.Support"), href: "https://docs.smswithoutborders.com/", external: true },
		{ label: t("Nav.Contact"), to: "/Contact_Us", isRouterLink: true },
		{ label: t("Nav.Download"), to: "/Download", isRouterLink: true }
	];

	const socialLinks = [
		{
			icon: <img src="./x.svg" alt="X" height="20" />,
			href: "https://x.com/RelaySMS",
			title: t("social.x")
		},
		{
			icon: <img src="./bluesky.svg" alt="Bluesky" height="20" />,
			href: "https://bsky.app/profile/relaysms.bsky.social",
			title: t("social.bluesky")
		},
		{
			icon: <FaGithub size={20} />,
			href: "https://github.com/smswithoutborders",
			title: t("social.github")
		}
	];

	return (
		<AppBar
			position="fixed"
			dir={isFarsi ? "rtl" : "ltr"}
			sx={{
				background: scrolled ? "#000158" : "#FAF2E4",
				transition: "0.5s",
				padding: {
					xs: "5px 10px",
					md: scrolled ? "10px 50px" : "10px 100px"
				},
				boxShadow: "none",
				zIndex: 9999
			}}
		>
			<Toolbar
				disableGutters
				sx={{
					width: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between"
				}}
			>
				<Box component="a" href="/" sx={{ display: "flex", alignItems: "center" }}>
					<img
						src={scrolled ? "/RelaySMSDark.png" : "/logo.png"}
						alt="Logo"
						style={{ height: 35, transition: "0.5s" }}
					/>
				</Box>

				{isMobile ? (
					<>
						<IconButton edge="end" color="inherit" onClick={() => setOpenDrawer(!openDrawer)}>
							<MenuIcon sx={{ color: scrolled ? "#fff" : "#262626" }} />
						</IconButton>

						<Drawer
							anchor={isFarsi ? "right" : "left"}
							open={openDrawer}
							onClose={() => setOpenDrawer(false)}
							PaperProps={{
								sx: {
									height: "auto",
									maxHeight: "80vh",
									mt: 8,
									borderRadius: 2
								}
							}}
						>
							<List sx={{ width: 200, bgcolor: "#000158", pt: 2, pb: 2 }}>
								{navLinks.map((item, index) =>
									item.isRouterLink ? (
										<ListItem
											button
											key={index}
											component={Link}
											to={item.to}
											onClick={() => setOpenDrawer(false)}
										>
											<ListItemText
												primary={item.label}
												sx={{ color: "#fff", textAlign: "center" }}
											/>
										</ListItem>
									) : (
										<ListItem
											button
											key={index}
											component="a"
											href={item.href}
											target={item.external ? "_blank" : undefined}
											onClick={() => setOpenDrawer(false)}
										>
											<ListItemText
												primary={item.label}
												sx={{ color: "#fff", textAlign: "center" }}
											/>
										</ListItem>
									)
								)}

								{socialLinks.map((item, index) => (
									<ListItem
										button
										key={`social-${index}`}
										component="a"
										href={item.href}
										target="_blank"
										title={item.title}
										sx={{
											justifyContent: "center",
											color: "#fff",
											"& svg": {
												color: "#fff"
											},
											"& img": {
												filter: "brightness(0) invert(1)"
											}
										}}
									>
										{item.icon}
									</ListItem>
								))}

								<ListItem>
									<Box sx={{ margin: "auto" }}>
										<LanguageSwitcher />
									</Box>
								</ListItem>
							</List>
						</Drawer>
					</>
				) : (
					<Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
						{navLinks.map((item, index) =>
							item.isRouterLink ? (
								<Typography
									key={index}
									component={Link}
									to={item.to}
									sx={{
										position: "relative",
										color: scrolled ? "#fff" : "#000158",
										textDecoration: "none",
										fontWeight: 500,
										fontSize: scrolled ? "1rem" : "1.1rem",
										padding: scrolled ? "4px 12px" : "5px 9px",
										lineHeight: scrolled ? "40px" : "60px",
										borderRadius: "8px",
										transition: "color 0.3s ease",
										borderBottom: "2px solid transparent",

										"&:hover": {
											color: "#007BFF",
											borderBottom: "2px solid #007BFF",
											transition: "border-color 0.3s ease"
										}
									}}
								>
									{item.label}
								</Typography>
							) : (
								<Typography
									key={index}
									component="a"
									href={item.href}
									target={item.external ? "_blank" : undefined}
									sx={{
										position: "relative",
										color: scrolled ? "#fff" : "#000158",
										textDecoration: "none",
										fontWeight: 500,
										fontSize: scrolled ? "1rem" : "1.1rem",
										padding: scrolled ? "8px 12px" : "10px 16px",
										lineHeight: scrolled ? "60px" : "80px",
										borderRadius: "8px",
										transition: "color 0.3s ease",
										borderBottom: "2px solid transparent",

										"&:hover": {
											color: "#007BFF",
											borderBottom: "2px solid #007BFF",
											transition: "border-color 0.3s ease"
										}
									}}
								>
									{item.label}
								</Typography>
							)
						)}

						{socialLinks.map((item, index) => (
							<IconButton
								key={index}
								href={item.href}
								target="_blank"
								title={item.title}
								sx={{
									mx: 1,
									color: scrolled ? "#fff" : "#000158",
									"& svg": {
										color: scrolled ? "#fff" : "#000158"
									},
									"& img": {
										filter: scrolled ? "brightness(0) invert(1)" : "none"
									}
								}}
							>
								{item.icon}
							</IconButton>
						))}

						<LanguageSwitcher />
					</Box>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
