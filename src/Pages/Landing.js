import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { PageAnimationWrapper } from "../Components/PageAnimationWrapper.js";
import { FaArrowCircleRight } from "react-icons/fa";
import Blog from "../Components/Blog.js";
import Faqs from "../Components/FAQs.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../i18n.js";
import { Card, Col, Row, Button } from "react-bootstrap";

export default function Landing() {
	const { t, i18n } = useTranslation();
	const isRTL = i18n.language === "fa";

	const cardContent = [
		{ key: "HowItWorksA", title: "HowItWorkstitleA", imageSrc: "/authoriza.svg" },
		{ key: "HowItWorksB", title: "HowItWorkstitleB", imageSrc: "/compose.svg" },
		{ key: "HowItWorksC", title: "HowItWorkstitleC", imageSrc: "/notification.svg" }
	];

	return (
		<PageAnimationWrapper>
			<Container
				fluid
				sx={{
					pt: 1,
					pb: { xs: 5, md: 5 }
				}}
			>
				{/* ============================  Hero section ==================================== */}
				<Row>
					<Col xl={8} lg={8} md={6} sm={12} xs={12} className="hero-text-container hero-text-box">
						<h1 className="heading-primary">{t("Landing.landingh1")}</h1>
						<p className="hero-description">{t("Landing.landingh2")}</p>

						<div className="button-wrapper">
							<Button
								href="https://play.google.com/store/apps/details?id=com.afkanerd.sw0b"
								target="_blank"
								className="hero-btn btn btn--fill"
								size="lg"
								style={{
									backgroundColor: "#367ed0",
									color: "#FFFFFF",
									justifyContent: "center",
									width: "100%",
									maxWidth: "200px"
								}}
							>
								<div className="d-flex w-100">
									<img
										src="/playstore.svg"
										alt="Android"
										className="img-fluid logo"
										style={{ maxWidth: "40px", marginRight: "10px" }}
									/>
									<div className="text-start">
										<span className="button-subtitle fs-8">{t("Landing.AndroidSub")}</span>
										<br />
										<span className="button-title fs-4">{t("Landing.Android")}</span>
									</div>
								</div>
							</Button>

							<Button
								href="https://play.google.com/store/apps/details?id=com.afkanerd.sw0b"
								target="_blank"
								className="hero-btn btn btn--outline"
								size="lg"
								style={{
									backgroundColor: "white",
									color: "#1c222c",
									justifyContent: "center",
									width: "100%",
									maxWidth: "200px"
								}}
							>
								<div className="d-flex w-100">
									<img
										src="/desktop.svg"
										alt="Desktop"
										className="img-fluid logo"
										style={{ maxWidth: "40px", marginRight: "10px" }}
									/>
									<div className="text-start">
										<span className="button-subtitle  fs-8">{t("Landing.DesktopSub")}</span>
										<br />
										<span className="button-title  fs-4">{t("Landing.Desktop")}</span>
									</div>
								</div>
							</Button>
						</div>
					</Col>
					<Col xl={4} lg={4} md={6} sm={12} xs={12} className="hero-image-container">
						<div className="hero-img-box move-down-sm">
							<img src="/phone3.png" alt="Relaysms App" className="hero-img" />
						</div>
					</Col>
				</Row>

				{/* ===================================================================================== */}

				{/* ========================= how it works ========================================= */}
				<Row className="justify-content-center mb-2">
					<Col xs={12}>
						<h2
							className="text-center move-down-sm"
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

				<Row style={{ marginTop: "20px" }}>
					<Col xs={12}>
						<div className="text-center p-1 howitworks">
							<a
								href="https://smswithoutborders.github.io/docs/tutorials/getting-started/"
								target="_blank"
								rel="noreferrer noopener"
								style={{ textDecoration: "none", fontSize: "25px" }}
							>
								{t("Howitworks.GettingStartedButton")}
								<FaArrowCircleRight
									size="20px"
									style={{ marginLeft: "10px", transform: "rotate(-30deg)" }}
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
