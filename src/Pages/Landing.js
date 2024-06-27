import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import Container from "@mui/material/Container";
import { GooglePlayButton } from "react-mobile-app-button";
import { PageAnimationWrapper } from "../Components/PageAnimationWrapper";
import { FaArrowCircleRight } from "react-icons/fa";
import Blog from "../Components/Blog.js";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../i18n.js";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Landing() {
	const { t, i18n } = useTranslation();
	const APKUrl = "https://play.google.com/store/apps/details?id=com.afkanerd.sw0b";

	const isRTL = i18n.language === "fa";

	const cardContent = [
		{ key: "HowItWorksA", imageSrc: "/permission.png" },
		{ key: "HowItWorksB", imageSrc: "/composeMessage.png" },
		{ key: "HowItWorksC", imageSrc: "/Online-world.png" },
		{ key: "HowItWorksD", imageSrc: "/recievedNotification.png" }
	];

	return (
		<>
			<PageAnimationWrapper>
				<Box
					dir={isRTL ? "rtl" : "ltr"}
					sx={{
						backgroundColor: "background.paper",
						position: "relative",
						pt: 4,
						pb: { xs: 8, md: 10 }
					}}
				>
					{/* Banner Page */}
					<Container maxWidth="lg">
						<Grid container spacing={0} sx={{ flexDirection: { xs: "column", md: "unset" } }}>
							<Grid item xs={12} md={7}>
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
												mb: 2
											}}
										>
											<Typography
												component="mark"
												sx={{
													position: "relative",
													color: "primary.main",
													fontSize: "inherit",
													fontWeight: "inherit",
													backgroundColor: "unset",
													mb: 2
												}}
											>
												{t("Landing.landingh1a")}
												<Box
													sx={{
														position: "absolute",
														top: { xs: 24, md: 34 },
														left: 2,
														transform: "rotate(3deg)",
														"& img": { width: { xs: 146, md: 210 }, height: "auto" }
													}}
												></Box>
											</Typography>
											{t("Landing.landingh1")}
										</Typography>
									</Box>
									<Box sx={{ mb: 4, width: { xs: "100%", md: "70%" } }}>
										<Typography sx={{ color: "text.secondary", lineHeight: 1.6 }}>
											{t("Landing.landingh2")}
										</Typography>
									</Box>

									{/*  */}
									<Box sx={{ "& button": { mr: 2 } }}>
										{/*  */}
										<Button>
											<GooglePlayButton
												color="primary"
												url={APKUrl}
												height={52}
												theme="dark"
												width={250}
												fontSize={10}
												className={"custom-style"}
											/>
											{/* {t("Landing.Android")} */}
										</Button>
										{/*  */}
										<Button color="primary" variant="outlined">
											{t("Landing.Desktop")}
										</Button>
									</Box>
									{/*  */}
								</Box>
							</Grid>
							<Grid item xs={12} md={4} my={"auto"} sx={{ position: "relative", marginTop: 4 }}>
								<Box
									component="img"
									src="/phonem.png"
									alt="image"
									sx={{
										width: { md: "100%", xs: "60%", mx: "center" },
										maxWidth: "80%",
										height: "auto",
										transform: "rotate(10deg)"
									}}
								/>
							</Grid>
						</Grid>
					</Container>
					{/*======================================= end of Hero section -------------------------------------*/}
					{/* ------------------------------------------Start of how it works section------------------------ */}
					<Container
						fluid="lg"
						item
						xs={12}
						md={4}
						my={"auto"}
						sx={{ position: "relative", marginTop: 4 }}
					>
						<Grid spacing={0} sx={{ flexDirection: { xs: "column", md: "unset" } }}>
							<Typography
								align="center"
								variant="h4"
								sx={{ fontWeight: 700, fontSize: { xs: "25px", md: "33px" }, mb: 2 }}
							>
								{t("Howitworks.HowItWorks")}
							</Typography>
							<Typography
								variant="subtitle1"
								align="center"
								sx={{ mb: 4, fontSize: { xs: "18px", md: "20px" } }}
							>
								{t("Howitworks.HowItWorksSubtitle")}
							</Typography>
							{/* cards */}
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
												<Card.Title className="custom-card-title">Card title</Card.Title>
												<Card.Title className="custom-card-text">
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
					{/* -------------------------------------========= End ==========------------------------------- */}
					{/*  */}

					{/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
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
					{/* ------------------------------------------------------------------------------------ */}

					<Container
						fluid="lg"
						item
						xs={12}
						md={4}
						my={"auto"}
						sx={{ position: "relative", marginTop: 4 }}
					>
						<Typography
							align="center"
							variant="h4"
							sx={{ fontWeight: 700, fontSize: { xs: "25px", md: "33px" }, mb: 2 }}
						>
							{t("Blog.WhatsNew")}
						</Typography>
						<Typography
							variant="subtitle1"
							align="center"
							sx={{ mb: 4, fontSize: { xs: "18px", md: "20px" } }}
						>
							{t("Blog.WhatsNew")}
						</Typography>
						{/* cards */}
						<Blog />
					</Container>
				</Box>
			</PageAnimationWrapper>
		</>
	);
}
