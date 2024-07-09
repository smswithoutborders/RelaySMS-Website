import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { PageAnimationWrapper } from "../Components/PageAnimationWrapper.js";
import Blog from "../Components/Blog.js";
import Faqs from "../Components/FAQs.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../i18n.js";
import { Container, Row } from "react-bootstrap";
import HowItWorks from "../Components/Howitworks.js";
import Hero from "../Components/Hero.js";

export default function Landing() {
	const { t, i18n } = useTranslation();
	const isRTL = i18n.language === "fa";

	return (
		<PageAnimationWrapper>
			<Container fluid>
				{/* ============================  Hero section ==================================== */}

				<Row
					fluid="lg"
					sx={{
						position: "relative",
						backgroundColor: "#f0f0f0",
						padding: "20px",
						marginBottom: 10,
						direction: isRTL ? "rtl" : "ltr"
					}}
				>
					<Hero />
				</Row>

				{/* ===================================================================================== */}

				{/* ========================= how it works ========================================= */}

				<Row
					fluid="lg"
					sx={{
						position: "relative",
						backgroundColor: "#f0f0f0",
						padding: "20px",
						marginBottom: 10,
						direction: isRTL ? "rtl" : "ltr"
					}}
				>
					<HowItWorks />
				</Row>

				{/* ===========================end of how it works =================================== */}

				{/*==================================== Relay Map =========================================*/}
				<Row sx={{ margin: "auto", maxWidth: 1200, padding: "20px" }}>
					<Grid container rowSpacing={4} sx={{ py: { md: 10, xs: 10 } }}>
						<Grid item md={5} my="auto">
							<Typography
								variant="h3"
								sx={{
									fontWeight: 700,
									fontSize: { md: "48px", xs: "33px" },
									color: "black"
								}}
							>
								{t("Map.RelaySMSMap")}
							</Typography>
						</Grid>
						<Grid item md={7} sx={{ justifyContent: "center", display: "flex", mx: "auto" }}>
							<Box component="img" src="/map.png" sx={{ width: "100%", borderRadius: "20px" }} />
						</Grid>
					</Grid>
				</Row>

				{/* Blog section */}
				<Row
					fluid="lg"
					sx={{
						position: "relative",
						backgroundColor: "#f0f0f0",
						padding: "20px",
						marginBottom: 10,
						direction: isRTL ? "rtl" : "ltr"
					}}
				>
					<h2
						style={{
							fontWeight: 700,
							fontSize: "33px",
							marginTop: "40px",
							textAlign: isRTL ? "right" : "center"
						}}
					>
						{t("Blog.BlogHeader")}
					</h2>
					<Blog />
				</Row>

				{/* FAQ section */}
				<Row
					fluid="lg"
					sx={{
						position: "relative",
						marginTop: 4,
						backgroundColor: "#e0e0e0",
						direction: isRTL ? "rtl" : "ltr"
					}}
				>
					<h2
						style={{
							fontWeight: 700,
							fontSize: { xs: "25px", md: "33px" },
							marginTop: "40px",
							textAlign: isRTL ? "right" : "center"
						}}
					>
						{t("FAQ.FAQ")}
					</h2>
					<Faqs />
				</Row>
			</Container>
		</PageAnimationWrapper>
	);
}
