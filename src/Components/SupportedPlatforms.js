import React, { useState, useEffect } from "react";
import {
	Box,
	Typography,
	Container,
	Grid,
	Card,
	CardContent,
	CircularProgress
} from "@mui/material";
import { useTranslation } from "react-i18next";

const SupportedPlatforms = () => {
	const { t, i18n } = useTranslation();
	const isRtl = i18n.language === "fa" || i18n.language === "farshi";
	const [platforms, setPlatforms] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchPlatforms = async () => {
			try {
				const response = await fetch("https://publisher.smswithoutborders.com/v1/platforms", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					},
					mode: "cors" // Explicitly set CORS mode
				});

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const data = await response.json();
				console.log("Fetched platforms:", data); // Debug log

				// Filter out test/internal platforms like "reliability"
				const filteredPlatforms = data.filter(
					(platform) => platform.name !== "reliability" && platform.service_type !== "test"
				);

				setPlatforms(filteredPlatforms);
			} catch (err) {
				console.error("Error fetching platforms:", err);
				setError(err.message);

				// Fallback data in case of network issues
				const fallbackPlatforms = [
					{
						name: "gmail",
						shortcode: "g",
						protocol_type: "oauth2",
						service_type: "email",
						icon_svg:
							"https://raw.githubusercontent.com/smswithoutborders/gmail-oauth2-adapter/main/icons/gmail.svg",
						icon_png:
							"https://raw.githubusercontent.com/smswithoutborders/gmail-oauth2-adapter/main/icons/gmail.png"
					},
					{
						name: "mastodon",
						shortcode: "m",
						protocol_type: "oauth2",
						service_type: "text",
						icon_svg:
							"https://raw.githubusercontent.com/smswithoutborders/mastodon-oauth2-adapter/main/icons/mastodon.svg",
						icon_png:
							"https://raw.githubusercontent.com/smswithoutborders/mastodon-oauth2-adapter/main/icons/mastodon.png"
					},
					{
						name: "telegram",
						shortcode: "T",
						protocol_type: "pnba",
						service_type: "message",
						icon_svg:
							"https://raw.githubusercontent.com/smswithoutborders/telegram-pnba-adapter/main/icons/telegram.svg",
						icon_png:
							"https://raw.githubusercontent.com/smswithoutborders/telegram-pnba-adapter/main/icons/telegram.png"
					},
					{
						name: "bluesky",
						shortcode: "b",
						protocol_type: "oauth2",
						service_type: "text",
						icon_svg:
							"https://raw.githubusercontent.com/smswithoutborders/bluesky-oauth2-adapter/main/icons/bluesky.svg",
						icon_png:
							"https://raw.githubusercontent.com/smswithoutborders/bluesky-oauth2-adapter/main/icons/bluesky.png"
					},
					{
						name: "twitter",
						shortcode: "t",
						protocol_type: "oauth2",
						service_type: "text",
						icon_svg:
							"https://raw.githubusercontent.com/smswithoutborders/twitter-oauth2-adapter/main/icons/twitter.svg",
						icon_png:
							"https://raw.githubusercontent.com/smswithoutborders/twitter-oauth2-adapter/main/icons/twitter.png"
					}
				];

				console.log("Using fallback platforms data");
				setPlatforms(fallbackPlatforms);
				setError(null); // Clear error since we have fallback data
			} finally {
				setLoading(false);
			}
		};

		fetchPlatforms();
	}, []);

	if (loading) {
		return (
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					py: 8
				}}
			>
				<CircularProgress sx={{ color: "#FF9E43" }} />
			</Box>
		);
	}

	if (error && platforms.length === 0) {
		return (
			<Box
				sx={{
					textAlign: "center",
					py: 8,
					px: 3
				}}
			>
				<Typography variant="body1" color="error">
					{t(
						"SupportedPlatforms.Error",
						"Unable to load supported platforms. Please try again later."
					)}
				</Typography>
			</Box>
		);
	}

	return (
		<Box
			dir={isRtl ? "rtl" : "ltr"}
			sx={{
				py: { xs: 8, md: 12 },
				px: { xs: 3, md: 6 },
				backgroundColor: "#ffffff"
			}}
		>
			<Container maxWidth="lg">
				<Box
					sx={{
						textAlign: "center",
						mb: 6
					}}
				>
					<Typography
						variant="h3"
						sx={{
							fontSize: "2rem",
							color: "#2D2A5A",
							fontWeight: 700,
							fontFamily: "'Unbounded', Ubuntu",
							mb: 3
						}}
					>
						{t("SupportedPlatforms.Header", "Supported Platforms")}
					</Typography>
					<Typography
						variant="body1"
						sx={{
							fontSize: "1.1rem",
							color: "#555555",
							fontFamily: "Ubuntu",
							lineHeight: 1.7,
							maxWidth: 800,
							mx: "auto"
						}}
					>
						{t(
							"SupportedPlatforms.Description",
							"Send messages to these online platforms through SMS using RelaySMS, even when you don't have internet access."
						)}
					</Typography>
				</Box>

				<Grid container spacing={3} justifyContent="center">
					{platforms.map((platform, index) => (
						<Grid item xs={6} sm={4} md={3} lg={2} key={index}>
							<Box
								sx={{
									height: "100%",
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									p: 3,
									backgroundColor: "#ffffff",
									borderRadius: 3,
									transition: "all 0.3s ease",
									border: "2px solid transparent",
									"&:hover": {
										transform: "translateY(-5px)",
										borderColor: "#FF9E43",
										boxShadow: "0 8px 25px rgba(255, 158, 67, 0.15)"
									}
								}}
							>
								<CardContent
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										textAlign: "center",
										p: 0,
										"&:last-child": { pb: 0 }
									}}
								>
									<Box
										component="img"
										src={platform.icon_png || platform.icon_svg}
										alt={`${platform.name} icon`}
										sx={{
											width: { xs: 40, sm: 50, md: 60 },
											height: { xs: 40, sm: 50, md: 60 },
											mb: 2,
											objectFit: "contain"
										}}
										onError={(e) => {
											// Fallback to SVG if PNG fails
											if (platform.icon_svg && e.target.src !== platform.icon_svg) {
												e.target.src = platform.icon_svg;
											}
										}}
									/>
									<Typography
										variant="h6"
										sx={{
											fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
											fontWeight: 600,
											color: "#2D2A5A",
											fontFamily: "'Unbounded', Ubuntu",
											textTransform: "capitalize",
											letterSpacing: "0.02em"
										}}
									>
										{platform.name}
									</Typography>
								</CardContent>
							</Box>
						</Grid>
					))}
				</Grid>

				<Box
					sx={{
						textAlign: "center",
						mt: 4
					}}
				>
					<Typography
						variant="body2"
						sx={{
							fontSize: "0.9rem",
							color: "#777",
							fontStyle: "italic"
						}}
					>
						{t(
							"SupportedPlatforms.Note",
							"More platforms are continuously being added. Stay tuned for updates!"
						)}
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default SupportedPlatforms;
