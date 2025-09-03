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
		<div>
			<Box
				dir={isRtl ? "rtl" : "ltr"}
				sx={{
					minHeight: { xs: "80vh", lg: "92vh", xl: "100vh" },
					px: { xs: 2, md: 5, lg: 8, xl: 20 },
					py: { xs: 6, md: 2, lg: 5 },
					display: "flex",
					alignItems: "center",
					backgroundColor: "#FFF6EE"
				}}
			>
				<Grid container spacing={4} alignItems="center" justifyContent="center">
					<Grid item xs={12} md={6}>
						<Typography
							sx={{
								mt: { xs: 8, md: 0, lg: 4, xl: 12 },
								fontSize: { xs: "1.75rem", md: "2.75rem", lg: "3.5rem", xl: "4rem" },
								textAlign: { xs: "center", md: "left" },
								fontWeight: 900,
								lineHeight: 1.3,
								color: "#000158",
								whiteSpace: "pre-wrap",
								wordBreak: "break-word",
								minHeight: "80px",
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
								fontSize: { xs: "18px", md: "22px" },
								mt: { xs: 4, md: 0 },
								textAlign: { xs: "center", md: "left" }
							}}
						>
							{t("Landing.h2")}
						</Typography>

						<Box
							sx={{
								display: "flex",
								justifyContent: { xs: "center", md: "flex-start" },
								mt: { xs: 3, md: 4 },
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
					</Grid>

					<Grid item xs={12} md={6}>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								position: "relative",
								height: { xs: 350, sm: 380, md: 400, lg: 450 },
								mt: { xs: 2, sm: 3, md: 4, lg: 6, xl: 0 },
								mb: { xs: 4, sm: 5, md: 0 },
								overflow: "visible",
								width: "100%",
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
										md: "60%", 
										lg: "65%", 
										xl: "70%" 
									},
									maxWidth: { xs: 200, sm: 220, md: 220, lg: 300, xl: 360 },
									height: "auto",
									objectFit: "contain",
									transform: { 
										xs: "rotate(5deg) translate(15px, 0px)",
										sm: "rotate(6deg) translate(18px, -2px)",
										md: "rotate(12deg) translate(60px, -8px)",
										lg: "rotate(12deg) translate(70px, -8px)",
										xl: "rotate(12deg) translate(150px, -8px)"
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
										md: "70%", 
										lg: "75%", 
										xl: "80%" 
									},
									maxWidth: { xs: 220, sm: 250, md: 250, lg: 350, xl: 400 },
									height: "auto",
									objectFit: "contain",
									zIndex: 2,
									transform: { 
										xs: "translate(-8px, 0px)",
										sm: "translate(-10px, 0px)",
										md: "translate(-30px, -2px)",
										lg: "translate(-40px, -3px)",
										xl: "translate(-50px, -4px)"
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
