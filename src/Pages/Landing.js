import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { PageAnimationWrapper } from "../Components/PageAnimationWrapper.js";
import { FaArrowCircleRight } from "react-icons/fa";
import Blog from "../Components/Blog.js";
import Faqs from "../Components/FAQs.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../i18n.js";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Landing() {
	const { t, i18n } = useTranslation();
	const isRTL = i18n.language === "fa";

	const cardContent = [
		{ key: "HowItWorksA", title: "HowItWorkstitleA", imageSrc: "/authoriza.svg" },
		{ key: "HowItWorksB", title: "HowItWorkstitleB", imageSrc: "/compose.svg" },
		{ key: "HowItWorksC", title: "HowItWorkstitleC", imageSrc: "/notification.svg" }
	];

	return (
		<>
			<PageAnimationWrapper>
				<Container
					dir={isRTL ? "rtl" : "ltr"}
					sx={{
						pt: 4,
						pb: { xs: 10, md: 10 }
					}}
				>
					{/* ... */}
					<Row>
						<Col lg={8} md={6} sm={12} xs={12} className="hero-text-container">
							<Box
								sx={{
									textAlign: { xs: "center", md: "left" },
									height: "100%",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: { xs: "center", md: "flex-start" }
								}}
							>
								<Box sx={{ mb: 3 }}>
									<Typography
										component="h2"
										sx={{
											position: "relative",
											fontSize: { xs: 36, md: 72 },
											letterSpacing: 1.5,
											fontWeight: "bold",
											lineHeight: 1.3,
											mb: 2,
											textAlign: isRTL ? "right" : { xs: "center", md: "left" }
										}}
									>
										{t("Landing.landingh1")}
									</Typography>
								</Box>
								<Box
									sx={{
										mb: 4,
										width: { xs: "90%", md: "70%" },
										textAlign: { xs: "center", md: "left" }
									}}
								>
									<Typography
										sx={{
											color: "text.secondary",
											lineHeight: 1.8,
											textAlign: isRTL ? "right" : { xs: "center", md: "left" }
										}}
									>
										{t("Landing.landingh2")}
									</Typography>
								</Box>

								{/* Buttons */}
								<Box
									sx={{
										display: "flex",
										flexDirection: { xs: "column", md: "row" },
										justifyContent: { xs: "center", md: "flex-start" },
										alignItems: "center",
										width: "100%"
									}}
								>
									<a
										href="https://play.google.com/store/apps/details?id=com.afkanerd.sw0b"
										className="hero-btn-link"
										style={{ marginBottom: { xs: 2, md: 0 }, marginRight: { xs: 0, md: 2 } }}
									>
										<button className="hero-btn d-flex">
											<img src="/playstore.svg" alt="Android" style={{ marginRight: "4px" }} />
											{t("Landing.Android")}
										</button>
									</a>
									<a
										href="https://smswithoutborders.com"
										className="hero-btn-link"
										style={{ marginBottom: { xs: 2, md: 0 }, marginRight: { xs: 0, md: 2 } }}
									>
										<button className="hero-btn d-flex">
											<img src="/desktop.svg" alt="Desktop" style={{ marginRight: "4px" }} />
											{t("Landing.Desktop")}
										</button>
									</a>
								</Box>
							</Box>
						</Col>
						<Col lg={4} md={6} sm={8} xs={12} className="hero-image-container">
							<Grid
								item
								xs={12}
								md={4}
								my={"auto"}
								sx={{ mt: { xs: 3, md: 0 }, display: "flex", justifyContent: "center" }}
							>
								<Box
									component="img"
									src="/phone3.png"
									alt="image"
									sx={{
										width: { md: "100%", xs: "85%" },
										maxWidth: "100%",
										height: "auto",
										transform: "rotate(10deg)",
										textAlign: isRTL ? "left" : "right",
										paddingTop: "10px"
									}}
								/>
							</Grid>
						</Col>
					</Row>

					{/* ===================================================================================== */}

					{/* ========================= how it works ========================================= */}
					<Row className="justify-content-center mb-2">
						<Col xs={12}>
							<h2
								className="text-center"
								style={{ fontSize: "calc(1.875rem + 1.5vw)", fontWeight: "bold" }}
							>
								{t("Howitworks.HowItWorks")}
							</h2>
							<p className="text-center" style={{ fontSize: "calc(1.25rem + 0.5vw)" }}>
								{t("Howitworks.HowItWorksSubtitle")}
							</p>
						</Col>
					</Row>

					<Row className="justify-content-center">
						{cardContent.map((card, idx) => (
							<Col xs={10} sm={4} lg={6} key={idx} className="mb-4">
								<Card className="custom-card">
									<Card.Img
										variant="top"
										src={card.imageSrc}
										alt={card.key}
										className="custom-card-img"
									/>
									<Card.Body>
										<Card.Title
											className="custom-card-title"
											style={{ textAlign: isRTL ? "right" : "left" }}
										>
											{t(`Howitworks.${card.title}`)}
										</Card.Title>
										<Card.Text
											className="custom-card-text"
											style={{ textAlign: isRTL ? "right" : "left" }}
										>
											{t(`Howitworks.${card.key}`)}
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>

					<Row>
						<Col xs={12}>
							<div className="text-center p-1">
								<a
									href="https://smswithoutborders.github.io/docs/tutorials/getting-started/"
									target="_blank"
									rel="noreferrer noopener"
									style={{ textDecoration: "none" }}
								>
									{t("Howitworks.GettingStartedButton")}
									<FaArrowCircleRight
										size="20px"
										style={{ marginLeft: "8px", transform: "rotate(-30deg)" }}
									/>
								</a>
							</div>
						</Col>
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
						sx={{ position: "relative", marginTop: 4, direction: isRTL ? "rtl" : "ltr" }}
					>
						<Typography
							align="center"
							variant="h4"
							sx={{
								fontWeight: 700,
								fontSize: { xs: "25px", md: "33px" },
								mb: 2,
								textAlign: isRTL ? "right" : "center"
							}}
						>
							{t("Blog.WhatsNew")}
						</Typography>
						<Blog />
					</Row>

					{/* FAQ section */}
					<Row
						fluid="lg"
						sx={{ position: "relative", marginTop: 4, direction: isRTL ? "rtl" : "ltr" }}
					>
						<Typography
							align="center"
							variant="h4"
							sx={{
								fontWeight: 700,
								fontSize: { xs: "25px", md: "33px" },
								mb: 2,
								textAlign: isRTL ? "right" : "center"
							}}
						>
							{t("FAQ.FAQ")}
						</Typography>
						<Faqs />
					</Row>
				</Container>
			</PageAnimationWrapper>
		</>
	);
}
