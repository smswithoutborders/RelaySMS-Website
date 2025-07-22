import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import { Grid, Typography, Box, Button, keyframes } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

import Howitworks from "./Howitworks";
import Blog from "./Blog";
import FAQ from "./FAQ";

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
`;

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
					px: { xs: 2, md: 5, lg: 8, xl: 10 },
					py: { xs: 6, md: 2, lg: 5 },
					display: "flex",
					alignItems: "center",
					backgroundColor: "#FAF2E4"
				}}
			>
				<Grid container spacing={4} alignItems="center" justifyContent="center">
					<Grid item xs={12} md={6}>
						<Typography
							sx={{
								mt: { xs: 8, md: 0, lg: 4 },
								fontSize: { xs: "1.75rem", md: "2.75rem", lg: "3.5rem", xl: "5rem" },
								textAlign: { xs: "center", md: "left" },
								fontWeight: 600,
								lineHeight: 1.2,
								color: "#000158",
								whiteSpace: "pre-wrap",
								wordBreak: "break-word",
								minHeight: "80px"
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
								fontSize: { xs: "18px", md: "25px" },
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
									color: "rgba(1, 64, 136, 0.86)",
									textTransform: "none",
									fontWeight: 600,
									py: 1.2,
									px: 5,
									fontSize: { xs: "15px", md: "20px" },
									borderRadius: 3,
									border: "1px solid rgba(240, 135, 37, 0.41)",
									boxShadow: "0 2px 6px rgba(1, 64, 136, 0.86)",
									transition: "all 0.3s ease-in-out",
									display: "flex",
									alignItems: "center",
									"&:hover": {
										backgroundColor: "rgba(1, 64, 136, 0.86)",
										color: "white",
										boxShadow: "0 6px 18px #FF9E43",
										"& img": {
											filter: "brightness(0) invert(1)"
										}
									}
								}}
							>
								{t("Landing.Android")}
								<Box
									component="img"
									src="/download.gif"
									alt="Play Store"
									sx={{
										width: 24,
										height: 24,
										ml: 1,
										animation: `${bounce} 1.4s infinite`
									}}
								/>
							</Button>
						</Box>

						<Box display="flex" alignItems="flex-start" mt={3} sx={{ py: 3, gap: 1 }}>
							<VerifiedIcon sx={{ color: "rgba(240, 135, 37, 0.96)", mt: 0.5 }} />
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
							component="img"
							src="/RelayHome.png"
							alt="Relay Home"
							sx={{
								width: { xs: "100%", md: "85%", lg: "70%", xl: "60%" },
								height: { xs: 340, md: 520, xl: 600 },
								objectFit: "contain",
								mx: "auto",
								display: "block",
								mt: { xs: 2, lg: 6, xl: 0 }
							}}
						/>
					</Grid>
				</Grid>
			</Box>

			{/* ========== OTHER SECTIONS ========== */}
			<Howitworks />
			<Blog />
			<FAQ />
		</div>
	);
};

export default Hero;
