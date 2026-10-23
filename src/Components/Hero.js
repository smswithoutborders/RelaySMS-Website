import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useTranslation } from "react-i18next";
import { Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

import GettingStarted from "./GettingStarted";
import Blog from "./Blog";
import FAQ from "./FAQ";
import WhoShouldUse from "./WhoShouldUse";
import SupportedPlatforms from "./SupportedPlatforms";
import TrainingGuide from "./TrainingGuide";
import RelayFeatures from "./RelayFeatures";
import NewsletterForm from "./NewsletterForm";

const SECTION_SPACING = { xs: 8, md: 15 };

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
							? `radial-gradient(ellipse 90% 55% at 50% -10%, rgba(77, 108, 192, 0.25) 0%, transparent 65%),
						   linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
						   linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`
							: `radial-gradient(ellipse 90% 55% at 50% -10%, rgba(0,24,113,0.09) 0%, transparent 65%),
							   linear-gradient(rgba(0,24,113,0.05) 1px, transparent 1px),
							   linear-gradient(90deg, rgba(0,24,113,0.05) 1px, transparent 1px)`,
					backgroundSize: "auto, 44px 44px, 44px 44px"
				}}
			>
				<Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							width: { xs: "100%", md: "50%" }
						}}
					>
						<Typography
							sx={{
								mb: { xs: 2, md: 3, lg: 1 },
								fontSize: { xs: "2rem", md: "2.5rem", lg: "2.5rem", xl: "3.8rem" },
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
								mt: { xs: 3, md: 3 },
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
									fontFamily: "Unbounded",
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
								to="/resources"
								component={Link}
								sx={{
									textTransform: "none",
									color: "text.primary",
									fontFamily: "Unbounded",
									transition: "all 0.3s ease-in-out",
									"&:hover": {
										transform: "translateY(-3px)"
									}
								}}
							>
								{t("HowRelaySMSWorks.TrainingTitle", "Download Training Guides")}
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>

			<Box sx={{ mt: SECTION_SPACING }}>
				<RelayFeatures />
			</Box>
			<Box sx={{ mt: SECTION_SPACING }}>
				<GettingStarted />
			</Box>
			<Box sx={{ mt: SECTION_SPACING }}>
				<SupportedPlatforms />
			</Box>
			{/* <Box sx={{ mt: SECTION_SPACING }}>
				<TrainingGuide />
			</Box> */}
			<Box sx={{ mt: SECTION_SPACING }}>
				<WhoShouldUse />
			</Box>
			<Box
				data-aos="fade-up"
				sx={{
					mt: { xs: 3, md: 4 },
					textAlign: "center",
					px: 2
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

			<Box sx={{ mt: SECTION_SPACING }}>
				<Blog />
			</Box>

			<Box sx={{ mt: SECTION_SPACING }}>
				<FAQ />
			</Box>

			<Box
				sx={{
					mt: SECTION_SPACING,
					mb: SECTION_SPACING,
					mx: { xs: 3, md: 6 },
					textAlign: "center",
					display: "flex",
					flexDirection: "column",
					alignItems: "center"
				}}
			>
				<NewsletterForm showHeading large align="center" sx={{ width: "100%", maxWidth: 800 }} />
			</Box>
		</>
	);
};

export default Hero;
