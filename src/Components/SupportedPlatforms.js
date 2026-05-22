import React, { useState, useEffect } from "react";
import { Box, Typography, CircularProgress, Grid, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslation, Trans } from "react-i18next";

const capitalize = (s) => s && s.charAt(0).toUpperCase() + s.slice(1);

const SupportedPlatforms = () => {
	const { t, i18n } = useTranslation();
	const isRtl = i18n.language === "fa" || i18n.language === "farshi";
	const muiTheme = useTheme();
	const isDark = muiTheme.palette.mode === "dark";
	const [platforms, setPlatforms] = useState([]);
	const [loading, setLoading] = useState(true);
	const [hoveredPlatform, setHoveredPlatform] = useState(null);

	useEffect(() => {
		const fetchPlatforms = async () => {
			try {
				const response = await fetch("https://publisher.smswithoutborders.com/v1/platforms", {
					method: "GET",
					headers: { "Content-Type": "application/json" },
					mode: "cors"
				});

				if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

				const data = await response.json();
				setPlatforms(data.filter((p) => p.name !== "reliability" && p.service_type !== "test"));
			} catch (err) {
				console.error("Error fetching platforms:", err);
				setPlatforms([
					{
						name: "gmail",
						icon_png:
							"https://raw.githubusercontent.com/smswithoutborders/gmail-oauth2-adapter/main/icons/gmail.png",
						icon_svg:
							"https://raw.githubusercontent.com/smswithoutborders/gmail-oauth2-adapter/main/icons/gmail.svg"
					},
					{
						name: "mastodon",
						icon_png:
							"https://raw.githubusercontent.com/smswithoutborders/mastodon-oauth2-adapter/main/icons/mastodon.png",
						icon_svg:
							"https://raw.githubusercontent.com/smswithoutborders/mastodon-oauth2-adapter/main/icons/mastodon.svg"
					},
					{
						name: "telegram",
						icon_png:
							"https://raw.githubusercontent.com/smswithoutborders/telegram-pnba-adapter/main/icons/telegram.png",
						icon_svg:
							"https://raw.githubusercontent.com/smswithoutborders/telegram-pnba-adapter/main/icons/telegram.svg"
					},
					{
						name: "bluesky",
						icon_png:
							"https://raw.githubusercontent.com/smswithoutborders/bluesky-oauth2-adapter/main/icons/bluesky.png",
						icon_svg:
							"https://raw.githubusercontent.com/smswithoutborders/bluesky-oauth2-adapter/main/icons/bluesky.svg"
					},
					{
						name: "twitter",
						icon_png:
							"https://raw.githubusercontent.com/smswithoutborders/twitter-oauth2-adapter/main/icons/twitter.png",
						icon_svg:
							"https://raw.githubusercontent.com/smswithoutborders/twitter-oauth2-adapter/main/icons/twitter.svg"
					}
				]);
			} finally {
				setLoading(false);
			}
		};

		fetchPlatforms();
	}, []);

	if (loading) {
		return (
			<Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
				<CircularProgress sx={{ color: "secondary.main" }} />
			</Box>
		);
	}

	const displayName = capitalize(hoveredPlatform || (platforms[0]?.name ?? ""));

	return (
		<Container
			maxWidth="lg"
			dir={isRtl ? "rtl" : "ltr"}
			sx={{
				py: { xs: 6, md: 8 },
				px: { xs: 3, md: 6, lg: 10 },
				bgcolor: "background.default"
			}}
		>
			<Grid
				container
				spacing={{ xs: 5, md: 8 }}
				alignItems="center"
				direction={isRtl ? "row-reverse" : "row"}
			>
				{/* Left: text */}
				<Grid item xs={12} md={6}>
					<Typography
						variant="h4"
						sx={{
							fontSize: { xs: "1.5rem", md: "1.9rem" },
							color: "text.primary",
							fontWeight: 700,
							fontFamily: "'Unbounded', Ubuntu",
							lineHeight: 1.25,
							mb: 1.5
						}}
					>
						{t("SupportedPlatforms.Header", "Supported Platforms")}
					</Typography>

					<Typography
						sx={{
							fontFamily: "Ubuntu",
							fontSize: "1rem",
							color: "text.secondary",
							lineHeight: 1.7,
							minHeight: "3.4em",
							transition: "opacity 0.2s ease"
						}}
					>
						<Trans
							i18nKey="SupportedPlatforms.SubText"
							values={{ platform: displayName }}
							components={{ bold: <strong /> }}
						/>
					</Typography>
				</Grid>

				<Grid item xs={12} md={6}>
					<Grid container spacing={{ xs: 3, sm: 4 }} alignItems="center">
						{platforms.map((platform) => (
							<Grid item key={platform.name} xs="auto">
								<Box
									onMouseEnter={() => setHoveredPlatform(platform.name)}
									onMouseLeave={() => setHoveredPlatform(null)}
									sx={{
										width: { xs: 48, sm: 56 },
										height: { xs: 48, sm: 56 },
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										cursor: "default"
									}}
								>
									<Box
										component="img"
										src={
											platform.name === "twitter"
												? isDark
													? "/x-logo-white.png"
													: "/x-logo-black.png"
												: platform.icon_png || platform.icon_svg
										}
										alt={platform.name}
										sx={{
											width: platform.name === "twitter" ? { xs: 26, sm: 32 } : { xs: 36, sm: 44 },
											height: platform.name === "twitter" ? { xs: 26, sm: 32 } : { xs: 36, sm: 44 },
											objectFit: "contain",
											filter: "none",
											transform: hoveredPlatform === platform.name ? "scale(1.15)" : "scale(1)",
											transition: "filter 0.25s ease, transform 0.25s ease"
										}}
										onError={(e) => {
											if (platform.icon_svg && e.target.src !== platform.icon_svg) {
												e.target.src = platform.icon_svg;
											}
										}}
									/>
								</Box>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default SupportedPlatforms;
