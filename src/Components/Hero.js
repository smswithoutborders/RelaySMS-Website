import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useTranslation } from "react-i18next";
import { Grid, Typography, Box, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

import GettingStarted from "./GettingStarted";
import Blog from "./Blog";
import FAQ from "./FAQ";
import WhoShouldUse from "./WhoShouldUse";
import SupportedPlatforms from "./SupportedPlatforms";
import TrainingGuide from "./TrainingGuide";
import AppFeatures from "./AppFeatures";
import { ArrowDownOutlined } from "@ant-design/icons";

const Hero = () => {
	const [showCursor, setShowCursor] = useState(true);
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

	return (
		<>
			<Box
				dir={isRtl ? "rtl" : "ltr"}
				sx={{
					mx: { md: "auto", xs: 2 },
					minHeight: { md: "100vh", xs: "95vh" },
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					position: "relative",
					overflow: "hidden",
					textAlign: "center",
					background: (theme) =>
						theme.palette.mode === "dark"
							? `radial-gradient(ellipse 90% 55% at 50% -10%, rgba(77, 125, 192, 0.25) 0%, transparent 65%),
						   linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
						   linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`
							: `radial-gradient(ellipse 90% 55% at 50% -10%, rgba(0,24,113,0.09) 0%, transparent 65%),
							   linear-gradient(rgba(0,24,113,0.05) 1px, transparent 1px),
							   linear-gradient(90deg, rgba(0,24,113,0.05) 1px, transparent 1px)`,
					backgroundSize: "auto, 44px 44px, 44px 44px"
				}}
			>
				<Grid container spacing={4} alignItems="center" justifyContent="center">
					<Grid
						item
						xs={12}
						md={6}
						sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
					>
						<Typography
							sx={{
								mb: { xs: 2, md: 3, lg: 1 },
								fontSize: { xs: "1.8rem", md: "2.5rem", lg: "2.3rem", xl: "3rem" },
								whiteSpace: "pre-wrap",
								fontWeight: 700,
								wordBreak: "break-word",
								fontFamily: "'Unbounded', Ubuntu"
							}}
							gutterBottom
						>
							<Typewriter
								key={i18n.language}
								words={[t("Landing.h1", "No Internet? No Problem. RelaySMS Keeps You Connected.")]}
								loop={1}
								cursor={showCursor}
								cursorStyle="_"
								typeSpeed={70}
								deleteSpeed={50}
								delaySpeed={1000}
							/>
						</Typography>

						<Typography
							variant="h6"
							color="text.secondary"
							paragraph
							sx={{
								mt: { xs: 2, md: 2 },
								mb: 2,
								fontFamily: "Ubuntu",
								fontSize: { xs: "16px", md: "18px", lg: "18px", xl: "20px" }
							}}
						>
							{t("Landing.h2")}
						</Typography>
						<Box
							sx={{
								display: "flex",
								flexDirection: { xs: "column", sm: "row" },
								justifyContent: "center",
								gap: 2,
								mt: { xs: 3, md: 2 },
								mb: { xs: 2, md: 1 },
								px: { xs: 2, md: 0 },
								width: "100%"
							}}
						>
							<Button
								component={Link}
								to="/download"
								variant="contained"
								size="large"
								sx={{
									bgcolor: "primary.main",
									textTransform: "none",
									// py: 1.5,
									// px: 6,
									fontFamily: "Ubuntu",
									// fontSize: { xs: "15px", md: "19px" },
									transition: "all 0.3s ease-in-out",
									"&:hover": {
										transform: "translateY(-3px)"
									}
								}}
							>
								{t("Landing.Android")}
							</Button>
							<Button
								variant="text"
								size="large"
								onClick={() => {
									const el = document.getElementById("training-guide");
									if (el) {
										const navbarHeight = 100;
										const top = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
										window.scrollTo({ top, behavior: "smooth" });
									}
								}}
								sx={{
									textTransform: "none",
									color: (theme) =>
										theme.palette.mode === "dark" ? "primary.light" : "primary.main",
									fontFamily: "Ubuntu",
									transition: "all 0.3s ease-in-out",
									"&:hover": {
										transform: "translateY(-3px)"
									}
								}}
							>
								{t("HowRelaySMSWorks.TrainingTitle", "Download Training Guides")}
							</Button>
						</Box>
					</Grid>

					{/* <Grid
						item
						xs={12}
						md={6}
						sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
					>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center"
							}}
						>
							<Box
								component="img"
								src="/new-phones.png"
								alt="RelaySMS Background"
								sx={{
									width: { xl: "620px", xs: "100%", md: "100%", sm: "80%", lg: "80%" }
								}}
							/>
						</Box>
					</Grid> */}
				</Grid>
			</Box>

			{/* ========== OTHER SECTIONS ========== */}
			<GettingStarted />
			<TrainingGuide />
			<WhoShouldUse />
			{/* <AppFeatures /> */}
			<Box
				data-aos="fade-up"
				sx={{
					textAlign: "center",
					px: 2,
					pb: 4
				}}
			>
				<Typography variant="body1" color="text.secondary" sx={{ fontFamily: "Ubuntu" }}>
					{t("Landing.auditMessage.part1")}&nbsp;
					<a
						href="https://www.opentech.fund/security-safety-audits/smswithoutborders-penetration-testt/"
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: "inherit", opacity: 0.75, textDecoration: "underline" }}
					>
						{t("Landing.auditMessage.link")}
					</a>
					&nbsp;{t("Landing.auditMessage.part2")}
				</Typography>
			</Box>
			<SupportedPlatforms />
			<Blog />
			<FAQ />
		</>
	);
};

export default Hero;
