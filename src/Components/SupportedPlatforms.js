import React, { useState, useEffect, useRef } from "react";
import {
	Box,
	Typography,
	Container,
	CircularProgress,
	IconButton
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { FaPause, FaPlay } from "react-icons/fa";

const SupportedPlatforms = () => {
	const { t, i18n } = useTranslation();
	const isRtl = i18n.language === "fa" || i18n.language === "farshi";
	const [platforms, setPlatforms] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [isPaused, setIsPaused] = useState(false);
	const carouselRef = useRef(null);

	useEffect(() => {
		const fetchPlatforms = async () => {
			try {
				const response = await fetch("https://publisher.smswithoutborders.com/v1/platforms", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					},
					mode: "cors"
				});

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const data = await response.json();
				// console.log("Fetched platforms:", data); 

				const filteredPlatforms = data.filter(
					(platform) => platform.name !== "reliability" && platform.service_type !== "test"
				);

				setPlatforms(filteredPlatforms);
			} catch (err) {
				console.error("Error fetching platforms:", err);
				setError(err.message);

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

				// console.log("Using fallback platforms data");
				setPlatforms(fallbackPlatforms);
				setError(null);
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

	const multiPlePlatforms = [...platforms, ...platforms, ...platforms];

	const togglePause = () => {
		setIsPaused(!isPaused);
	};

	return (
		<Box
			dir={isRtl ? "rtl" : "ltr"}
			sx={{
				py: { xs: 6, md: 8 },
				px: { xs: 3, md: 6 },
				backgroundColor: "#ffffff"
			}}
		>
			<Container maxWidth="lg">
				<Box sx={{ 
					mb: 4, 
					display: "flex", 
					justifyContent: "space-between", 
					alignItems: "center" 
				}}>
					<Typography
						variant="h6"
						sx={{
							fontSize: "1.2rem",
							color: "#2D2A5A",
							fontWeight: 600,
							fontFamily: "Ubuntu"
						}}
					>
						{t("SupportedPlatforms.Header", "Supported Platforms")}:
					</Typography>
					
					<IconButton
						onClick={togglePause}
						sx={{
							backgroundColor: "#2D2A5A",
							color: "white",
							width: 40,
							height: 40,
							"&:hover": {
								backgroundColor: "#1f1a3d",
								transform: "scale(1.05)"
							},
							transition: "all 0.2s ease"
						}}
					>
						{isPaused ? <FaPlay size={14} /> : <FaPause size={14} />}
					</IconButton>
				</Box>

				<Box
					sx={{
						position: "relative",
						overflow: "hidden",
						width: "100%",
						mb: 3
					}}
				>
					<Box
						ref={carouselRef}
						sx={{
							display: "flex",
							alignItems: "center",
							gap: 4,
							width: "max-content",
							animation: isPaused ? "none" : "scroll 20s linear infinite",
							"@keyframes scroll": {
								"0%": {
									transform: "translateX(0)"
								},
								"100%": {
									transform: `translateX(-${(platforms.length * (80 + 16))}px)`
								}
							}
						}}
					>
						{multiPlePlatforms.map((platform, index) => (
							<Box
								key={`${platform.name}-${index}`}
								sx={{
									minWidth: 80,
									height: 80,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									transition: "all 0.3s ease",
									"&:hover": {
										transform: "scale(1.1)",
									}
								}}
							>
								<Box
									component="img"
									src={platform.icon_png || platform.icon_svg}
									alt={`${platform.name} icon`}
									sx={{
										width: 40,
										height: 40,
										objectFit: "contain"
									}}
									onError={(e) => {
										if (platform.icon_svg && e.target.src !== platform.icon_svg) {
											e.target.src = platform.icon_svg;
										}
									}}
								/>
							</Box>
						))}
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default SupportedPlatforms;
