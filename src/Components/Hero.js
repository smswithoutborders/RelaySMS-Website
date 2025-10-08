import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import { Grid, Typography, Box, Button } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

import Howitworks from "./Howitworks";
import Blog from "./Blog";
import FAQ from "./FAQ";
import WhoShouldUse from "./WhoShouldUse";
import HowRelaySMSWorks from "./HowRelaySMSWorks";
import SupportedPlatforms from "./SupportedPlatforms";
import { Download } from "@mui/icons-material";

const Hero = () => {
	const [showCursor, setShowCursor] = useState(true);
	const [platforms, setPlatforms] = useState([]);
	const { t, i18n } = useTranslation();
	const isRtl = i18n.language === "fa" || i18n.language === "farshi";

	useEffect(() => {
		const timer = setTimeout(() => setShowCursor(false), 3000);
		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: "ease-out-back",
			once: false,
			anchorPlacement: "top-bottom"
		});
	}, []);

	// Fetch platforms for the hero section
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

				// Filter out test/internal platforms and limit to first 5 for hero section
				const filteredPlatforms = data
					.filter((platform) => platform.name !== "reliability" && platform.service_type !== "test")
					.slice(0, 5);

				setPlatforms(filteredPlatforms);
			} catch (err) {
				console.error("Error fetching platforms:", err);

				// Fallback data in case of network issues
				const fallbackPlatforms = [
					{
						name: "gmail",
						icon_png:
							"https://raw.githubusercontent.com/smswithoutborders/gmail-oauth2-adapter/main/icons/gmail.png",
						icon_svg:
							"https://raw.githubusercontent.com/smswithoutborders/gmail-oauth2-adapter/main/icons/gmail.svg"
					},
					{
						name: "twitter",
						icon_png:
							"https://raw.githubusercontent.com/smswithoutborders/twitter-oauth2-adapter/main/icons/twitter.png",
						icon_svg:
							"https://raw.githubusercontent.com/smswithoutborders/twitter-oauth2-adapter/main/icons/twitter.svg"
					},
					{
						name: "telegram",
						icon_png:
							"https://raw.githubusercontent.com/smswithoutborders/telegram-pnba-adapter/main/icons/telegram.png",
						icon_svg:
							"https://raw.githubusercontent.com/smswithoutborders/telegram-pnba-adapter/main/icons/telegram.svg"
					},
					{
						name: "mastodon",
						icon_png:
							"https://raw.githubusercontent.com/smswithoutborders/mastodon-oauth2-adapter/main/icons/mastodon.png",
						icon_svg:
							"https://raw.githubusercontent.com/smswithoutborders/mastodon-oauth2-adapter/main/icons/mastodon.svg"
					},
					{
						name: "bluesky",
						icon_png:
							"https://raw.githubusercontent.com/smswithoutborders/bluesky-oauth2-adapter/main/icons/bluesky.png",
						icon_svg:
							"https://raw.githubusercontent.com/smswithoutborders/bluesky-oauth2-adapter/main/icons/bluesky.svg"
					}
				];

				setPlatforms(fallbackPlatforms);
			}
		};

		fetchPlatforms();
	}, []);

	return (
		<div>
			<Box
				dir={isRtl ? "rtl" : "ltr"}
				sx={{
					minHeight: { xs: "80vh", md: "85vh", lg: "95vh", xl: "100vh" },
					px: { xs: 2, md: 5, lg: 8, xl: 20 },
					py: { xs: 6, md: 8, lg: 10, xl: 12 },
					pt: { xs: 6, md: 12, lg: 16, xl: 20 }, // Added top padding to push content below nav
					display: "flex",
					alignItems: "center",
					backgroundColor: "#fce9d8ff",
					position: "relative",
					overflow: "hidden" // Prevent phone images from overlapping nav
				}}
			>
				<Grid
					container
					spacing={4}
					alignItems="center"
					justifyContent="center"
					sx={{ height: "100%" }}
				>
					<Grid
						item
						xs={12}
						md={6}
						sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
					>
						<Typography
							sx={{
								mt: { xs: 10, md: 8, lg: 2, xl: 4 },
								mb: { xs: 2, md: 3, lg: 1 },
								fontSize: { xs: "1.8rem", md: "2.5rem", lg: "3.2rem", xl: "4rem" },
								textAlign: { xs: "center", md: "left" },
								fontWeight: 900,
								lineHeight: 1.2,
								color: "#000158",
								whiteSpace: "pre-wrap",
								wordBreak: "break-word",
								minHeight: { xs: "60px", md: "80px", lg: "100px" },
								fontFamily: "'Unbounded', Ubuntu"
							}}
							gutterBottom
						>
							<Typewriter
								key={i18n.language}
								words={[t("Landing.h1", "Stay Connected with RelaySMS")]}
								loop={1}
								cursor={showCursor}
								cursorStyle="_"
								typeSpeed={70}
								deleteSpeed={50}
								delaySpeed={1000}
							/>
						</Typography>

						<Typography
							variant="body1"
							color="text.secondary"
							paragraph
							sx={{
								fontSize: { xs: "18px", md: "20px", lg: "22px" },
								mt: { xs: 2, md: 1.5 },
								mb: { xs: 3, md: 4 },
								textAlign: { xs: "center", md: "left" },
								lineHeight: 1.6
							}}
						>
							{t("Landing.h2")}
						</Typography>

						<Box
							sx={{
								display: "flex",
								justifyContent: { xs: "center", md: "flex-start" },
								mt: { xs: 3, md: 1 },
								mb: { xs: 2, md: 1 },
								width: "100%"
							}}
						>
							<Button
								component={Link}
								to="/Download"
								variant="contained"
								size="large"
								sx={{
									backgroundColor: "#FF9E43",
									color: "#1a1a2cff",
									textTransform: "none",
									py: 1.2,
									px: 5,
									fontSize: { xs: "15px", md: "18px" },
									transition: "all 0.3s ease-in-out",
									display: "flex",
									alignItems: "center",
									border: "1.5px solid #001871",
									borderRadius: "12px",
									boxShadow: "0 4px 15px rgba(0, 24, 113, 0.2)",
									"&:hover": {
										backgroundColor: "#001871",
										color: "white",
										borderColor: "#FFB366",
										transform: "translateY(-3px)",
										boxShadow: "0 12px 30px rgba(0, 24, 113, 0.4)",
										"& img": {
											filter: "brightness(0) invert(1)"
										}
									}
								}}
							>
								{t("Landing.Android")}
								<Download fontSize="10px" sx={{ ml: 1 }} />
							</Button>
						</Box>

						<Box display="flex" alignItems="flex-start" mt={3} sx={{ py: 3, gap: 1 }}>
							<VerifiedIcon sx={{ color: "rgba(31, 75, 22, 0.96)", mt: 0.5 }} />
							<Typography
								variant="body1"
								sx={{
									fontSize: { xs: "15px", md: "20px" },
									lineHeight: 1.6,
									fontStyle: "italic"
								}}
								color="text.secondary"
							>
								{t("Landing.auditMessage.part1")}&nbsp;
								<a
									href="https://www.opentech.fund/security-safety-audits/smswithoutborders-penetration-testt/"
									target="_blank"
									rel="noopener noreferrer"
									style={{
										color: "rgba(0, 1, 88, 0.85)",
										textDecoration: "none",
										fontWeight: 600
									}}
								>
									{t("Landing.auditMessage.link")}
								</a>
								&nbsp;{t("Landing.auditMessage.part2")}
							</Typography>
						</Box>

						{/* Supported Platforms Circles */}
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: { xs: "center", md: "flex-start" },
								gap: 1,
								mt: 2,
								mb: 1
							}}
						>
							<Typography
								variant="body2"
								sx={{
									fontSize: { xs: "14px", md: "16px" },
									fontWeight: 600,
									color: "#000158",
									mr: 1
								}}
							>
								{t("Landing.supportedPlatforms", "Supported:")}
							</Typography>
							{/* Dynamic Platform Icons */}
							<Box sx={{ display: "flex", gap: 0.8, alignItems: "center" }}>
								{platforms.map((platform, index) => (
									<Box
										key={platform.name || index}
										sx={{
											width: { xs: 32, md: 36 },
											height: { xs: 32, md: 36 },
											borderRadius: "50%",
											backgroundColor: "#ffffff",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
											border: "2px solid #f1f3f4",
											transition: "all 0.3s ease",
											"&:hover": {
												transform: "translateY(-2px)",
												boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
												borderColor: "#FF9E43"
											}
										}}
									>
										<Box
											component="img"
											src={platform.icon_png || platform.icon_svg}
											alt={platform.name}
											sx={{
												width: { xs: 20, md: 22 },
												height: { xs: 20, md: 22 },
												objectFit: "contain"
											}}
											onError={(e) => {
												// Fallback to SVG if PNG fails
												if (platform.icon_svg && e.target.src !== platform.icon_svg) {
													e.target.src = platform.icon_svg;
												}
											}}
										/>
									</Box>
								))}
							</Box>
						</Box>
					</Grid>

					<Grid
						item
						xs={12}
						md={6}
						sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
					>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								position: "relative",
								height: { xs: 350, sm: 380, md: 400, lg: 450, xl: 500 },
								mt: { xs: 2, sm: 3, md: 0 },
								mb: { xs: 4, sm: 5, md: 0 },
								overflow: "visible",
								width: "100%",
								maxWidth: { xs: "100%", md: "90%", lg: "85%", xl: "80%" },
								px: { xs: 2, sm: 3, md: 0 }
							}}
						>
							{/* Background image (2.png) - tilted behind */}
							<Box
								component="img"
								src="/2.png"
								alt="RelaySMS Background"
								sx={{
									position: "absolute",
									width: {
										xs: "45%",
										sm: "50%",
										md: "55%",
										lg: "60%",
										xl: "65%"
									},
									maxWidth: { xs: 200, sm: 220, md: 200, lg: 280, xl: 320 },
									height: "auto",
									objectFit: "contain",
									transform: {
										xs: "rotate(5deg) translate(15px, 0px)",
										sm: "rotate(6deg) translate(18px, -2px)",
										md: "rotate(10deg) translate(40px, -5px)",
										lg: "rotate(10deg) translate(50px, -5px)",
										xl: "rotate(10deg) translate(60px, -5px)"
									},
									opacity: { xs: 0.8, md: 1 },
									zIndex: 1
								}}
							/>
							{/* Foreground image (1.png) */}
							<Box
								component="img"
								src="/1.png"
								alt="RelaySMS Main"
								sx={{
									position: "relative",
									width: {
										xs: "55%",
										sm: "60%",
										md: "65%",
										lg: "70%",
										xl: "75%"
									},
									maxWidth: { xs: 220, sm: 250, md: 230, lg: 320, xl: 390 },
									height: "auto",
									objectFit: "contain",
									zIndex: 2,
									transform: {
										xs: "translate(-8px, 0px)",
										sm: "translate(-10px, 0px)",
										md: "translate(-20px, -2px)",
										lg: "translate(-25px, -3px)",
										xl: "translate(-30px, -4px)"
									}
								}}
							/>
						</Box>
					</Grid>
				</Grid>
			</Box>

			{/* ========== OTHER SECTIONS ========== */}
			<Howitworks />
			<WhoShouldUse />
			<HowRelaySMSWorks />
			<SupportedPlatforms />
			<Blog />
			<FAQ />
		</div>
	);
};

export default Hero;
