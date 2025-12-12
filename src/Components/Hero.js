import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useTranslation } from "react-i18next";
import { Grid, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

import GettingStarted from "./GettingStarted";
import Blog from "./Blog";
import FAQ from "./FAQ";
import WhoShouldUse from "./WhoShouldUse";
import SupportedPlatforms from "./SupportedPlatforms";
import TrainingGuide from "./TrainingGuide";

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
					maxWidth: 1826,
					mx: "auto",
					minHeight: "100vh",
					px: { xs: 2, md: 5, lg: 10, xl: 20 },
					pt: { xs: "140px", md: "150px", lg: "130px" },
					pb: { xs: 4, md: 6 },
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					position: "relative",
					overflow: "hidden"
				}}
			>
				<Grid
					container
					spacing={4}
					alignItems="center"
					justifyContent="center"
				>
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
								textAlign: { xs: "center", md: "left" },
								color: "#000158",
								whiteSpace: "pre-wrap",
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
								mt: { xs: 2, md: 1.5 },
								mb: { xs: 3, md: 2, xl: 4 },
								fontFamily: "Ubuntu",
								textAlign: { xs: "center", md: "left" },
								fontSize: { xs: "16px", md: "18px", lg: "18px", xl: "20px" }
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
								to="/download"
								variant="contained"
								size="large"
								sx={{
									backgroundColor: "#001871",
									textTransform: "none",
									py: 1,
									px: 5,
									fontFamily: "Ubuntu",
									fontSize: { xs: "15px", md: "16px" },
									transition: "all 0.3s ease-in-out",
									"&:hover": {
										transform: "translateY(-3px)",
										boxShadow: "0 12px 30px rgba(209, 218, 252, 1)"
									}
								}}
							>
								{t("Landing.Android")}
							</Button>
						</Box>

						<Box
							display="flex"
							alignItems="flex-start"
							sx={{ py: { md: 2, xl: 3 }, gap: 1, mt: { xs: 2, md: 1, xl: 3 } }}
						>
							<Typography
								variant="body1"
								sx={{
									// fontSize: { xs: "15px", md: "20px" },
									fontFamily: "Ubuntu",
									lineHeight: 1.6,
									textAlign: { xs: "center", md: "left" }
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
										textDecoration: "none"
									}}
								>
									{t("Landing.auditMessage.link")}
								</a>
								&nbsp;{t("Landing.auditMessage.part2")}
							</Typography>
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
					</Grid>
				</Grid>
			</Box>

			{/* ========== OTHER SECTIONS ========== */}
			<GettingStarted />
			<WhoShouldUse />
			<TrainingGuide />
			<SupportedPlatforms />
			<Blog />
			<FAQ />
		</div>
	);
};

export default Hero;
