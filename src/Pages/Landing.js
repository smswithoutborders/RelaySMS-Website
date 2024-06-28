import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { PageAnimationWrapper } from "../Components/PageAnimationWrapper.js";
import { FaArrowCircleRight, FaDesktop } from "react-icons/fa";
import Blog from "../Components/Blog.js";
import Faqs from "../Components/FAQs.js";
// import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../i18n.js";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function Landing() {
	const { t, i18n } = useTranslation();
	const isRTL = i18n.language === "fa";

	const cardContent = [
		{ key: "HowItWorksC", title: "HowItWorkstitleC", imageSrc: "/Online-world.png" },
		{ key: "HowItWorksD", title: "HowItWorkstitleD", imageSrc: "/recievedNotification.png" }
	];

	const cardContent2 = [
		{ key: "HowItWorksA", title: "HowItWorkstitleA", imageSrc: "/permission.png" },
		{ key: "HowItWorksB", title: "HowItWorkstitleB", imageSrc: "/composeMessage.png" }
	];

	return (
		<>
			<PageAnimationWrapper>
				<Box>
					{/* Landing Page section */}
					<Container
						dir={isRTL ? "rtl" : "ltr"}
						sx={{
							pt: 4,
							pb: { xs: 10, md: 10 }
						}}
					>
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
												fontSize: { xs: 40, md: 72 },
												letterSpacing: 1.5,
												fontWeight: "bold",
												lineHeight: 1.3,
												mb: 2,
												textAlign: isRTL ? "right" : { xs: "center", md: "left" }
											}}
										>
											<Typography
												sx={{
													position: "relative",
													color: "primary.main",
													fontSize: "inherit",
													fontWeight: "inherit",
													mb: 2
												}}
											>
												{t("Landing.landingh1a")} <br />
											</Typography>
											{t("Landing.landingh1")}
										</Typography>
									</Box>
									<Box
										sx={{
											mb: 4,
											width: { xs: "100%", md: "70%" },
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
											"& button": { mr: 2 },
											display: "flex",
											justifyContent: { xs: "center", md: "flex-start" }
										}}
									>
										<a
											href="https://play.google.com/store/apps/details?id=com.afkanerd.sw0b"
											className="hero-btn-link"
										>
											<button className="hero-btn">
												<img src="/playstore.svg" alt="Android" style={{ marginRight: "8px" }} />
												{t("Landing.Android")}
											</button>
										</a>
										<a href="https://smswithoutborders.com" className="hero-btn-link">
											<button className="hero-btn">
												<FaDesktop style={{ marginRight: "8px" }} />
												{t("Landing.Desktop")}
											</button>
										</a>
									</Box>
								</Box>
							</Col>
							<Col lg={4} md={6} sm={12} xs={12} className="hero-image-container">
								<Grid
									item
									xs={12}
									md={4}
									my={"auto"}
									sx={{ mt: { xs: 4, md: 0 }, display: "flex", justifyContent: "center" }}
								>
									<Box
										component="img"
										src="/phone3.png"
										alt="image"
										sx={{
											width: { md: "100%", xs: "60%" },
											maxWidth: "80%",
											height: "auto",
											transform: "rotate(10deg)",
											textAlign: isRTL ? "left" : "right"
										}}
									/>
								</Grid>
							</Col>
						</Row>
					</Container>

					{/* ===================================================================================== */}

					{/* ========================= how it works ========================================= */}
					<Container className="mt-4">
						<Row className="justify-content-center mb-4">
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
								<Col xs={12} sm={6} lg={6} key={idx} className="mb-4">
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
						<Row className="justify-content-center">
							{cardContent2.map((card, idx) => (
								<Col xs={12} sm={6} lg={6} key={idx} className="mb-4">
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
										<Button
											variant="link"
											className="p-4 text-decoration-none font-weight-bold"
											style={{ fontSize: "calc(1.25rem + 0.5vw)", color: "#007bff" }}
										>
											{t("Howitworks.GettingStartedButton")}
											<FaArrowCircleRight
												size="20px"
												style={{ marginLeft: "8px", transform: "rotate(-30deg)" }}
											/>
										</Button>
									</a>
								</div>
							</Col>
						</Row>
					</Container>

					{/* ===========================end of how it works =================================== */}

					{/*==================================== Relay Map =========================================*/}
					<Box sx={{ margin: "auto", maxWidth: 1200, padding: "20px" }}>
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
					</Box>

					{/* Blog section */}
					<Container
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
					</Container>

					{/* FAQ section */}
					<Container
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
					</Container>
				</Box>
			</PageAnimationWrapper>
		</>
	);
}
