import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Carousel, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import { FaFileAlt } from "react-icons/fa";
import { Grid, Typography, Box, Button } from "@mui/material";
import ReactHtmlParser from "react-html-parser";
import { keyframes } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";

import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
	const [scrollDirection, setScrollDirection] = useState(null);
	const { t, i18n } = useTranslation();
	const isFarsi = i18n.language === "fa";

	const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
`;

	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: "ease-out-back",
			once: false,
			anchorPlacement: "top-bottom"
		});

		let lastScrollY = window.scrollY;

		const updateScrollDirection = () => {
			const currentScrollY = window.scrollY;
			if (currentScrollY > lastScrollY) {
				setScrollDirection("down");
			} else if (currentScrollY < lastScrollY) {
				setScrollDirection("up");
			}
			lastScrollY = currentScrollY;
		};

		window.addEventListener("scroll", updateScrollDirection);
	}, []);

	const carouselItems = [
		{
			number: 1,
			title: t("Howitworks.Step1Title"),
			description: t("Howitworks.Step1Desc"),
			image: "/Download.png",
			buttonText: t("Howitworks.Step1Button", "Get Started"),
			link: "https://play.google.com/store/apps/details?id=com.afkanerd.sw0b"
		},
		{
			number: 2,
			title: t("Howitworks.Step2Title"),
			description: t("Howitworks.Step2Desc"),
			image: "/Login.png",
			buttonText: t("Howitworks.Step2Button", "Learn More"),
			link: "https://docs.smswithoutborders.com/docs/Android%20Tutorial/Getting-Started-With-Android#step-2-create-an-account"
		},
		{
			number: 3,
			title: t("Howitworks.Step3Title"),
			description: t("Howitworks.Step3Desc"),
			image: "/saveplatform.png",
			buttonText: t("Howitworks.Step3Button", "Set Up Now"),
			link: "https://docs.smswithoutborders.com/docs/Android%20Tutorial/Getting-Started-With-Android#step-5-save-access-to-platforms"
		},
		{
			number: 4,
			title: t("Howitworks.Step4Title"),
			description: t("Howitworks.Step4Desc"),
			image: "/Gateway.png",
			buttonText: t("Howitworks.Step4Button", "Configure Gateway"),
			link: "https://docs.smswithoutborders.com/docs/Android%20Tutorial/Getting-Started-With-Android#step-6-choose-a-gateway-client"
		},
		{
			number: 5,
			title: t("Howitworks.Step5Title"),
			description: t("Howitworks.Step5Desc"),
			image: "/text.png",
			buttonText: t("Howitworks.Step5Button", "Start Messaging"),
			link: "https://docs.smswithoutborders.com/docs/Android%20Tutorial/Getting-Started-With-Android#step-3-compose-your-message-and-send-as-sms"
		}
	];

	const blogs = [
		{
			title: t("Blog.IDHeader"),
			description: t("Blog.IDD"),
			link: "https://blog.smswithoutborders.com/posts/relaysms-expands-user-control-with-device-id-registration"
		}
	];

	const otherArticles = [
		{
			title: t("Blog.articles1"),
			url: "https://blog.smswithoutborders.com/posts/resilience-of-gateway-clients-in-smswithoutborders"
		},
		{
			title: t("Blog.articles2"),
			url: "https://blog.smswithoutborders.com/posts/reliability-of-gateway-clients-in-smswithoutborders"
		},
		{
			title: t("Blog.articles3"),
			url: "https://blog.smswithoutborders.com/releases/vault-0-1-0"
		}
	];

	return (
		<div>
			{/* ================= Hero Section=========================== */}
			<Box
				sx={{
					minHeight: {
						xs: "80vh",
						sm: "70vh",
						md: "78vh",
						lg: "92vh",
						xl: "100vh"
					},
					px: {
						xs: 2,
						sm: 3,
						md: 5,
						lg: 8,
						xl: 10
					},
					py: {
						xs: 6,
						sm: 2,
						md: 2,
						lg: 5,
						xl: 6
					},
					display: "flex",
					alignItems: "center",
					backgroundColor: "#FAF2E4"
				}}
			>
				<Grid container spacing={4} alignItems="center" justifyContent="center">
					<Grid item xs={12} md={6}>
						<Typography
							sx={{
								mt: {
									xs: 8,
									sm: 8,
									md: 0,
									lg: 4,
									xl: 5
								},
								fontSize: {
									xs: "1.75rem",
									sm: "2.25rem",
									md: "2.75rem",
									lg: "3.5rem",
									xl: "5rem"
								},
								textAlign: {
									xs: "center",
									md: "left"
								},
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
								words={[t("Landing.h1")]}
								loop={1}
								cursor
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
								fontSize: { xs: "18px", sm: "20px", md: "25px" },
								mt: { xs: 4, sm: 5, md: 0 },
								textAlign: {
									xs: "center",
									md: "left"
								}
							}}
						>
							{t("Landing.h2")}
						</Typography>

						{/* Button */}
						<Box
							sx={{
								display: {
									xs: "flex",
									sm: "flex",
									md: "block"
								},
								justifyContent: {
									xs: "center",
									sm: "center"
								},
								mt: 2
							}}
						>
							<Button
								variant="contained"
								size="large"
								sx={{
									backgroundColor: "#FF9E43",
									color: "rgba(1, 64, 136, 0.86)",
									textTransform: "none",
									fontWeight: 600,
									py: 1.2,
									display: "flex",
									alignItems: "center",
									gap: 1,
									px: 5,
									fontSize: { xs: "15px", sm: "18px", md: "20px" },
									borderRadius: 3,
									border: "1px solid rgba(240, 135, 37, 0.41)",
									boxShadow: "0 2px 6px rgba(39, 44, 48, 0.55)",
									transition: "all 0.3s ease-in-out",
									"&:hover": {
										backgroundColor: "#FF9E43",
										boxShadow: "0 6px 18px rgba(0, 0, 0, 0.46)"
									},
									textDecoration: "none"
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
										animation: `${bounce} 1.4s infinite`
									}}
								/>
							</Button>
						</Box>

						{/* Recognition Text */}
						<Box
							display="flex"
							alignItems="flex-start"
							mt={3}
							sx={{ py: 3, flexDirection: "row", gap: 1 }}
						>
							<VerifiedIcon sx={{ color: "rgba(240, 135, 37, 0.96)", mt: 0.5 }} />

							<Typography
								variant="body1"
								sx={{
									fontSize: { xs: "15px", sm: "18px", md: "20px" },
									lineHeight: 1.6
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
								&nbsp;
								{t("Landing.auditMessage.part2")}
							</Typography>
						</Box>
					</Grid>

					{/* Image Section */}
					<Grid item xs={12} md={6}>
						<Box
							component="img"
							src="/RelayHome.png"
							alt="Relay Home"
							sx={{
								width: {
									xs: "100%",
									sm: "95%",
									md: "85%",
									lg: "70%",
									xl: "60%"
								},
								height: {
									xs: 340,
									sm: 420,
									md: 520,
									lg: 520,
									xl: 600
								},
								objectFit: "contain",
								mx: "auto",
								display: "block",
								mt: { xs: 2, sm: 3, md: 2, lg: 6, xl: 0 }
							}}
						/>
					</Grid>
				</Grid>
			</Box>

			{/* =================================================== How It Works Section ================================================== */}
			<Box
				sx={{
					backgroundColor: "#EBE4D8",
					py: { xs: 6, md: 12 },
					px: { xs: 3, md: 6 }
				}}
				data-aos={scrollDirection === "down" ? "fade-left" : "fade-right"}
			>
				<Container>
					<div className="text-center mb-5">
						<h3
							style={{
								fontSize: "1.8rem",
								fontWeight: "bold",
								color: "#2D2A5A",
								fontFamily: "'Unbounded', ubuntu"
							}}
						>
							{t("Howitworks.Header", "Getting Started with RelaySMS")}
						</h3>
						<p
							data-aos={scrollDirection === "down" ? "zoom-in" : "zoom-out"}
							style={{ fontSize: "1.2rem", color: "#555555", fontFamily: "'Mona Sans', ubuntu" }}
						>
							{t(
								"Howitworks.SubHeader",
								"Learn how to set up and use RelaySMS for seamless offline communication."
							)}
						</p>
					</div>

					<Carousel>
						{carouselItems.map((item, index) => (
							<Carousel.Item key={index}>
								<Grid container spacing={4} alignItems="center">
									<Grid
										item
										xs={12}
										md={6}
										sx={{
											order: { xs: 0, md: 1 },
											textAlign: "left",
											p: { xs: 2, md: 4 }
										}}
										data-aos="fade-left"
									>
										<h1 className="circle-number"> {item.number}</h1>
										<Typography
											variant="h5"
											sx={{
												fontWeight: "bold",
												color: "#2D2A5A",
												mb: 2,
												fontFamily: "'Unbounded', ubuntu"
											}}
										>
											{item.title}
										</Typography>
										<Typography
											style={{ fontFamily: "'Mona Sans', ubuntu", textDecoration: "none" }}
											variant="body1"
											sx={{ mb: 4, color: "#555555" }}
											dangerouslySetInnerHTML={{
												__html: item.description.replace(
													/<a /g,
													"<a style='text-decoration: none; color: #007bff;' "
												)
											}}
										/>

										<Button
											variant="contained"
											color="primary"
											style={{
												fontFamily: "'Mona Sans', ubuntu",
												textDecoration: "none"
											}}
											href={item.link}
											sx={{
												backgroundColor: "#2D2A5A",
												":hover": { backgroundColor: "#1F1B3E" },
												textDecoration: "none"
											}}
										>
											{item.buttonText}
										</Button>
									</Grid>

									<Grid
										item
										xs={12}
										md={6}
										sx={{ order: { xs: 1, md: 0 }, textAlign: "center" }}
										data-aos="fade-right"
									>
										<img
											src={item.image}
											alt={item.title}
											style={{
												maxWidth: "40%",
												borderRadius: "12px",
												height: "auto"
											}}
										/>
									</Grid>
								</Grid>
							</Carousel.Item>
						))}
					</Carousel>
				</Container>
			</Box>

			{/* ========================== blog section ============================== */}
			<Box
				sx={{
					backgroundColor: "#f8f9fa",
					py: { xs: 6, md: 12 },
					px: { xs: 3, md: 6 }
				}}
				id="Blog"
				data-aos={scrollDirection === "down" ? "zoom-in" : "zoom-out"}
			>
				<div className="text-center mb-5">
					<h3
						style={{
							fontSize: "1.8rem",
							fontWeight: "bold",
							color: "#2D2A5A",
							margin: "30px",
							fontFamily: "'Unbounded', ubuntu"
						}}
						data-aos="fade-down"
					>
						{t("Blog.Header")}
					</h3>
				</div>

				<Container>
					<Row
						className="justify-content-center"
						id="blog"
						data-aos={scrollDirection === "down" ? "zoom-in" : "zoom-out"}
					>
						{blogs.map((blog, index) => (
							<Col md={4} sm={12} key={index} className="mb-4" data-aos="zoom-in">
								<Card className="h-100" style={{ borderTop: "5px solid #2F3C79" }}>
									<div className="card-number">
										<span className="card-number2"></span>
									</div>
									<Card.Body>
										<Card.Title style={{ fontFamily: "'Unbounded', ubuntu" }}>
											<a
												href="https://blog.smswithoutborders.com/posts/relaysms-expands-user-control-with-device-id-registration"
												style={{
													color: "#2F3C79",
													textDecoration: "none",
													fontWeight: "500"
												}}
												target="_blank"
												rel="noreferrer"
											>
												{blog.title}
											</a>
										</Card.Title>

										<Card.Text>{blog.description}</Card.Text>
										<div className="mt-auto d-flex justify-content-between align-items-center w-100">
											<span className="read-time">{t("Blog.readTime")}</span>
											<Button
												className="Readmore mt-auto"
												variant="link"
												href="https://blog.smswithoutborders.com/posts/relaysms-expands-user-control-with-device-id-registration"
											>
												{t("Howitworks.ReadMore")}
											</Button>
										</div>
									</Card.Body>
								</Card>
							</Col>
						))}
						<Col md={6}>
							<h4
								className="mt-4"
								style={{ fontFamily: "'Unbounded', ubuntu", marginBottom: "3rem" }}
							>
								{t("Blog.ReadOtherArticles")}
							</h4>
							<ul style={{ fontFamily: "'Mona Sans', ubuntu" }} className="list-unstyled">
								{otherArticles.map((article, index) => (
									<li
										key={index}
										className="d-flex align-items-center"
										style={{ marginBottom: "2rem" }}
									>
										<FaFileAlt className="me-2" style={{ color: "#2F3C79", fontSize: "1.2rem" }} />
										<a
											href={article.url}
											style={{
												color: "#2F3C79",
												textDecoration: "none",
												fontWeight: "500"
											}}
											target="_blank"
											className="article-link"
											rel="noreferrer"
										>
											{article.title}
										</a>
									</li>
								))}
							</ul>
						</Col>
					</Row>
				</Container>
			</Box>

			{/* ========================= FAQ Section ====================*/}
			<Box
				sx={{
					backgroundColor: "#EBE4D8",
					py: { xs: 6, md: 12 },
					px: { xs: 3, md: 6 }
				}}
				id="Blog"
			>
				<div className="text-center mb-5">
					<h3
						dir={isFarsi ? "rtl" : "ltr"}
						style={{
							fontWeight: "bold",
							margin: "60px",
							transition: "color 0.3s ease, transform 0.3s ease",
							fontSize: "1.8rem",
							color: "#2D2A5A",
							fontFamily: "'Unbounded', ubuntu"
						}}
						data-aos={scrollDirection === "down" ? "fade-left" : "fade-right"}
					>
						{t("Faq.faqTitle")}
					</h3>
				</div>
				<Container>
					<Row className="g-5">
						<Col lg={4} md={6} sm={12}>
							<Card
								data-aos={scrollDirection === "down" ? "fade-left" : "fade-right"}
								className="h-100"
								style={{ borderTop: "5px solid #FF9E43" }}
							>
								<div className="faq-number" style={{ background: " #FF9E43" }}>
									1
								</div>
								<Card.Body>
									<Card.Title
										style={{
											color: "#2F3C79",
											fontFamily: "'Unbounded', ubuntu",
											fontSize: "18px"
										}}
									>
										{t("Faq.faq1.question")}
									</Card.Title>
									<Card.Text style={{ fontFamily: "'Mona Sans', ubuntu" }}>
										{ReactHtmlParser(t("Faq.faq1.answer"))}
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>

						<Col lg={4} md={6} sm={12}>
							<Card
								data-aos={scrollDirection === "down" ? "fade-right" : "fade-left"}
								className="h-100"
								style={{ borderTop: "5px solid #2D2A5A" }}
							>
								<div className="faq-number" style={{ background: " #2D2A5A" }}>
									2
								</div>
								<Card.Body>
									<Card.Title
										style={{
											color: "#2F3C79",
											fontSize: "18px",
											fontFamily: "'Unbounded', ubuntu"
										}}
									>
										{t("Faq.faq2.question")}
									</Card.Title>
									<Card.Text style={{ fontFamily: "'Mona Sans', ubuntu" }}>
										{ReactHtmlParser(t("Faq.faq2.answer"))}
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>

						<Col lg={4} md={6} sm={12}>
							<Card
								data-aos={scrollDirection === "down" ? "fade-up" : "fade-down"}
								className="h-100"
								style={{ borderTop: "5px solid #0E9384" }}
							>
								<div className="faq-number" style={{ background: " #0E9384" }}>
									3
								</div>
								<Card.Body>
									<Card.Title
										style={{
											color: "#2F3C79",
											fontFamily: "'Unbounded', ubuntu",
											fontSize: "18px"
										}}
									>
										{t("Faq.faq3.question")}
									</Card.Title>
									<Card.Text style={{ fontFamily: "'Mona Sans', ubuntu" }}>
										{ReactHtmlParser(t("Faq.faq3.answer"))}
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>

						<Col lg={{ span: 4, offset: 2 }} md={6} sm={12}>
							<Card
								data-aos={scrollDirection === "down" ? "fade-right" : "fade-left"}
								className="h-100"
								style={{ borderTop: "5px solid #A0A0AB" }}
							>
								<div className="faq-number" style={{ background: " #A0A0AB" }}>
									4
								</div>
								<Card.Body>
									<Card.Title
										style={{
											color: "#2F3C79",
											fontFamily: "'Unbounded', ubuntu",
											fontSize: "18px"
										}}
									>
										{t("Faq.faq4.question")}
									</Card.Title>
									<Card.Text style={{ fontFamily: "'Mona Sans', ubuntu" }}>
										{ReactHtmlParser(t("Faq.faq4.answer"))}
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col lg={4} md={6} sm={12}>
							<Card
								data-aos={scrollDirection === "down" ? "fade-left" : "fade-right"}
								className="h-100"
								style={{ borderTop: "5px solid #8FA7FF", textDecoration: "none" }}
							>
								<div className="faq-number" style={{ background: " #8FA7FF" }}>
									5
								</div>
								<Card.Body>
									<Card.Title
										style={{
											color: "#2F3C79",
											fontFamily: "'Unbounded', ubuntu",
											fontSize: "18px"
										}}
									>
										{t("Faq.faq5.question")}
									</Card.Title>
									<Card.Text
										style={{
											fontFamily: "'Mona Sans', ubuntu",
											textDecoration: "none"
										}}
									>
										{ReactHtmlParser(
											t("Faq.faq5.answer").replace(
												/<a /g,
												"<a style='text-decoration: none; color: blue;' "
											)
										)}
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</Box>
		</div>
	);
};

export default Hero;
