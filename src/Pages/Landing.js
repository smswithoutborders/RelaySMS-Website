import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { PageAnimationWrapper } from "../Components/PageAnimationWrapper.js";
import { FaArrowCircleRight } from "react-icons/fa";
import Blog from "../Components/Blog.js";
import Faqs from "../Components/FAQs.js";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../i18n.js";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { FaDesktop } from "react-icons/fa";
import Row from "react-bootstrap/Row";

export default function Landing() {
	const { t, i18n } = useTranslation();

	const isRTL = i18n.language === "fa";

	const cardContent = [
		{ key: "HowItWorksA", title: "HowItWorkstitleA", imageSrc: "/permission.png" },
		{ key: "HowItWorksB", title: "HowItWorkstitleB", imageSrc: "/composeMessage.png" },
		{ key: "HowItWorksC", title: "HowItWorkstitleC", imageSrc: "/Online-world.png" },
		{ key: "HowItWorksD", title: "HowItWorkstitleD", imageSrc: "/recievedNotification.png" }
	];

	return (
		<>
			<PageAnimationWrapper>
				<Box>
					{/* Banner Page */}
					<Container
						dir={isRTL ? "rtl" : "ltr"}
						sx={{
							pt: 4,
							pb: { xs: 10, md: 10 }
						}}
					>
						<Row>
							<Col lg={8} md={6} sm={4} xs={12} className="hero-text-container">
								{" "}
								<Box
									sx={{
										textAlign: { xs: "center", md: "left" },
										height: "100%",
										display: "flex",
										flexDirection: "column",
										justifyContent: "center"
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
												textAlign: isRTL ? "right" : "left"
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
												<Box
													sx={{
														position: "absolute",
														top: { xs: 24, md: 34 }
													}}
												></Box>
											</Typography>
											{t("Landing.landingh1")}
										</Typography>
									</Box>
									<Box sx={{ mb: 4, width: { xs: "100%", md: "70%" } }}>
										<Typography
											sx={{
												color: "text.secondary",
												lineHeight: 1.8,
												textAlign: isRTL ? "right" : "left"
											}}
										>
											{t("Landing.landingh2")}
										</Typography>
									</Box>

									{/* Buttons */}
									<Box sx={{ "& button": { mr: 2 } }}>
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
							<Col sm={4} xs={12}>
								{" "}
								<Grid item xs={12} md={4} my={"auto"} sx={{ marginTop: 4 }}>
									<Box
										component="img"
										src="/phone3.png"
										alt="image"
										sx={{
											width: { md: "100%", xs: "60%", mx: "center" },
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

					{/* ========================================================================================= */}
					{/* How it works section */}
					<Container fluid="lg" sx={{ position: "relative", marginTop: 2 }}>
						<Grid spacing={0} sx={{ flexDirection: { xs: "column", md: "unset" } }}>
							<Typography
								variant="h2"
								align="center"
								sx={{
									fontSize: { xs: 30, md: 50 },
									fontWeight: "bold",
									mb: 2
								}}
							>
								{t("Howitworks.HowItWorks")}
							</Typography>
							<Typography
								variant="subtitle1"
								align="center"
								sx={{ mb: 4, fontSize: { xs: "20px", md: "25px" } }}
							>
								{t("Howitworks.HowItWorksSubtitle")}
							</Typography>
							{/* Cards */}
							<Row xs={1} md={2} className="g-4">
								{cardContent.map((card, idx) => (
									<Col key={idx}>
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
												<Card.Title
													className="custom-card-text"
													style={{ textAlign: isRTL ? "right" : "left" }}
												>
													{t(`Howitworks.${card.key}`)}
												</Card.Title>
											</Card.Body>
										</Card>
									</Col>
								))}
							</Row>

							{/* Getting Started Button */}
							<Grid item xs={12}>
								<motion.div initial="hidden">
									<Box textAlign="center" sx={{ p: 1 }}>
										<a
											href="https://smswithoutborders.github.io/docs/tutorials/getting-started/"
											target="_blank"
											rel="noreferrer noopener"
											style={{ textDecoration: "none" }}
										>
											<Typography
												variant="body1"
												sx={{
													p: 4,
													textDecoration: "underline",
													fontWeight: "bold",
													color: "primary.main",
													display: "inline-flex",
													alignItems: "center",
													fontSize: { xs: "20px", md: "24px" },
													"&:hover": {
														color: "secondary.main",
														textDecoration: "none",
														transform: "scale(1.05)"
													},
													transition: "transform 0.2s ease-in-out"
												}}
											>
												{t("Howitworks.GettingStartedButton")}{" "}
												<FaArrowCircleRight
													size="20px"
													style={{ marginLeft: "8px", rotate: "-30deg" }}
												/>
											</Typography>
										</a>
									</Box>
								</motion.div>
							</Grid>
						</Grid>
					</Container>
					{/* Relay Map */}
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
						<Typography
							variant="subtitle1"
							align="center"
							sx={{
								mb: 4,
								fontSize: { xs: "18px", md: "20px" },
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
