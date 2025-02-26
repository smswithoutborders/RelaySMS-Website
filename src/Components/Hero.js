import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Navbar, Nav, Carousel, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import { FaFileAlt } from "react-icons/fa";
import { Grid, Typography, Box, Button } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import LanguageSwitcher from "./LanguageSwitcher";
import ReactHtmlParser from "react-html-parser";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const App = () => {
	const [scrollDirection, setScrollDirection] = useState(null);
	const { t, i18n } = useTranslation();
	const isFarsi = i18n.language === "fa";

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

	return (
		<div>
			{/* Navbar */}
			<Navbar
				style={{ background: "#FAF2E4", fontFamily: "'Mona Sans', ubuntu" }}
				dir={isFarsi ? "rtl" : "ltr"}
				expand="lg"
				sticky="top"
			>
				<Container>
					<Navbar.Brand href="#">
						<img
							src="/logo.png"
							alt="My Website Logo"
							className="d-inline-block align-top"
							style={{ height: "35px" }}
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link href="/">{t("Nav.Home")}</Nav.Link>
							<Nav.Link href="https://blog.smswithoutborders.com/">{t("Nav.Blog")}</Nav.Link>
							<Nav.Link href="https://docs.smswithoutborders.com/">{t("Nav.Support")}</Nav.Link>
							<Nav.Link as={Link} to="/Contact_Us">
								{t("Nav.Contact")}
							</Nav.Link>

							<Nav.Link href="https://x.com/RelaySMS" className="mx-2" title={t("social.x")}>
								<img src="./x.svg" alt="X logo" height="20" />
							</Nav.Link>

							<Nav.Link
								href="https://bsky.app/profile/relaysms.bsky.social"
								className="mx-2"
								title={t("social.bluesky")}
							>
								<img src="./bluesky.svg" alt="Bluesky logo" height="20" />
							</Nav.Link>

							<Nav.Link
								href="https://github.com/smswithoutborders"
								className="mx-2"
								title={t("social.github")}
							>
								<FaGithub size={20} />
							</Nav.Link>

							<Nav.Link>
								<LanguageSwitcher className="mx-2" />
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			{/* ================= Hero Section=========================== */}
			<Box
				sx={{
					backgroundColor: "#FAF2E4",
					py: { xs: 6, md: 12 },
					px: { xs: 3, md: 6 }
				}}
				data-aos={scrollDirection === "down" ? "fade-up" : "fade-down"}
			>
				<Container maxWidth="lg">
					<Grid container spacing={6} alignItems="center" justifyContent="center">
						<Grid item xs={12} md={6}>
							<Typography
								variant="h3"
								style={{ fontFamily: "'Unbounded', ubuntu" }}
								sx={{
									fontWeight: "bold",
									lineHeight: 1.2,
									mb: 3,
									fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
									color: "#2D2A5A"
								}}
								data-aos={scrollDirection === "down" ? "fade-up" : "fade-down"}
							>
								{t("Landing.h1")}
							</Typography>
							<Typography
								variant="body1"
								style={{ fontFamily: "'Mona Sans', ubuntu" }}
								sx={{
									mb: 4,
									fontSize: { xs: "1rem", sm: "1.2rem" },
									color: "#323252"
								}}
								data-aos={scrollDirection === "down" ? "zoom-in" : "zoom-out"}
							>
								{t("Landing.h2")}
							</Typography>
							<Box>
								<Button
									as={Link}
									to="/Download"
									variant="contained"
									color="#2D2A5A"
									style={{ fontFamily: "'Mona Sans', ubuntu" }}
									sx={{
										px: 5,
										py: 1,
										backgroundColor: "#FF9E43",
										textTransform: "none",
										fontSize: "1rem",
										borderRadius: 3,
										border: "1px solid #000158",
										"&:hover": {
											backgroundColor: "#FF9E43"
										},
										textDecoration: "none"
									}}
									data-aos={scrollDirection === "down" ? "fade-left" : "fade-right"}
									endIcon={<ArrowDownwardIcon />}
								>
									{t("Landing.Android")}
								</Button>
							</Box>
						</Grid>

						<Grid item xs={12} md={6}>
							<Box
								sx={{
									width: "100%",
									maxWidth: 500,
									margin: "0 auto",
									borderRadius: 4,
									overflow: "hidden"
								}}
							>
								<img
									src="/Relay.png"
									alt="Meet the Best Doctors"
									style={{
										width: "100%",
										height: "auto",
										display: "block",
										objectFit: "cover"
									}}
								/>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>

			{/* ================================ How It Works Section ============================== */}
			<Box
				sx={{
					backgroundColor: "#EBE4D8",
					py: { xs: 6, md: 12 },
					px: { xs: 3, md: 6 }
				}}
				data-aos={scrollDirection === "down" ? "fade-left" : "fade-right"}
			>
				<Container>
					{/* Section Header */}
					<div className="text-center mb-5">
						<h1
							style={{
								fontSize: "2.5rem",
								fontWeight: "bold",
								color: "#2D2A5A",
								fontFamily: "'Unbounded', ubuntu"
							}}
						>
							{t("Howitworks.Header", "Getting Started with RelaySMS")}
						</h1>
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
									{/* Content Section */}
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
											variant="h3"
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
													"<a style='text-decoration: none; color: #007bff;' " // Removes underline and keeps link color
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
											href={item.link} // Dynamic link based on the carousel item
											sx={{
												backgroundColor: "#2D2A5A",
												":hover": { backgroundColor: "#1F1B3E" },
												textDecoration: "none"
											}}
										>
											{item.buttonText}
										</Button>
									</Grid>

									{/* Image Section */}
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
												maxWidth: "80%",
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
				{/* Section Header */}
				<div className="text-center mb-5">
					<h1
						style={{
							fontSize: "2.5rem",
							fontWeight: "bold",
							color: "#2D2A5A",
							margin: "30px",
							fontFamily: "'Unbounded', ubuntu"
						}}
						data-aos="fade-down"
					>
						{t("Blog.Header")}
					</h1>
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

			{/* -------------------------------FAQ Section ======================================*/}
			<Box
				sx={{
					backgroundColor: "#EBE4D8",
					py: { xs: 6, md: 12 },
					px: { xs: 3, md: 6 }
				}}
				id="Blog"
			>
				<div className="text-center mb-5">
					<h1
						dir={isFarsi ? "rtl" : "ltr"}
						style={{
							fontWeight: "bold",
							margin: "60px",
							transition: "color 0.3s ease, transform 0.3s ease",
							fontSize: "2.5rem",
							color: "#2D2A5A",
							fontFamily: "'Unbounded', ubuntu"
						}}
						data-aos={scrollDirection === "down" ? "fade-left" : "fade-right"}
					>
						{t("Faq.faqTitle")}
					</h1>
				</div>
				<Container>
					{/* Increase gap between cards using g-5 */}
					<Row className="g-5">
						{/* First row with three cards */}
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
											fontWeight: "bold",
											fontFamily: "'Unbounded', ubuntu"
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
						{/* Card 2 */}
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
											fontWeight: "bold",
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
						{/* Card 3 */}
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
											fontWeight: "bold",
											fontFamily: "'Unbounded', ubuntu"
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

						{/* Second row with two cards */}
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
											fontWeight: "bold",
											fontFamily: "'Unbounded', ubuntu"
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
											fontWeight: "bold",
											fontFamily: "'Unbounded', ubuntu"
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

export default App;
