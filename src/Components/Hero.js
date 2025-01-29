import React, { useEffect } from "react";
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
	const { t, i18n } = useTranslation();
	const isFarsi = i18n.language === "fa";

	useEffect(() => {
		AOS.init({
			duration: 1200,
			easing: "ease-in-out-back",
			once: true,
			anchorPlacement: "top-bottom"
		});
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

	return (
		<div>
			{/* Navbar */}
			<Navbar
				style={{ background: "#FAF2E4" }}
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
							<Nav.Link href="https://x.com/RelaySMS" className="mx-2">
								<img src="./x.svg" alt="X logo" height="20" />
							</Nav.Link>
							<Nav.Link href="https://github.com/smswithoutborders" className="mx-2">
								<FaGithub />
							</Nav.Link>
							<Nav.Link>
								{" "}
								<LanguageSwitcher className="mx-2" />
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			{/* Hero Section */}

			<Box
				sx={{
					backgroundColor: "#FAF2E4",
					py: { xs: 6, md: 12 },
					px: { xs: 3, md: 6 }
				}}
				data-aos="fade-up"
			>
				<Container maxWidth="lg">
					<Grid container spacing={6} alignItems="center" justifyContent="center">
						<Grid item xs={12} md={6}>
							<Typography
								variant="h3"
								sx={{
									fontWeight: "bold",
									lineHeight: 1.2,
									mb: 3,
									fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
									color: "#2D2A5A"
								}}
								data-aos="zoom-in"
							>
								{t("Landing.h1")}
							</Typography>
							<Typography
								variant="body1"
								sx={{
									mb: 4,
									fontSize: { xs: "1rem", sm: "1.2rem" },
									color: "#323252"
								}}
								data-aos="fade-right"
							>
								{t("Landing.h2")}
							</Typography>
							<Box>
								<Button
									as={Link}
									to="/Download"
									variant="contained"
									color="#2D2A5A"
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
			>
				<Container>
					{/* Section Header */}
					<div className="text-center mb-5">
						<h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#2D2A5A" }}>
							{t("Howitworks.Header")}
						</h1>
						<p style={{ fontSize: "1.2rem", color: "#555555" }}>{t("Howitworks.SubHeader")}</p>
					</div>

					{/* Carousel Section */}
					<Carousel
						nextIcon={
							<span
								className="carousel-control-next-icon"
								aria-hidden="true"
								style={{ color: "#FF9E43" }}
							/>
						}
						prevIcon={
							<span
								className="carousel-control-prev-icon"
								aria-hidden="true"
								style={{ color: "#FF9E43" }}
							/>
						}
						indicators
					>
						{/* Carousel 1*/}
						<Carousel.Item>
							<Row className="align-items-center" data-aos="zoom-in">
								<Col lg={6} md={12} sm={12} className="text-center">
									<img src="/Relay.png" alt="Step 1" className="img-fluid" />
								</Col>
								<Col lg={6} md={12} sm={12} className="text-center text-lg-start">
									<h1 className="circle-number" data-aos="flip-left">
										1
									</h1>
									<h2 style={{ color: "#000158" }} data-aos="fade-right">
										{t("Howitworks.title")}
									</h2>
									<p data-aos="fade-left">{t("Howitworks.Aa")}</p>
									<Box sx={{ display: "flex", gap: 2 }}></Box>
								</Col>
							</Row>
						</Carousel.Item>
						{/* Carousel 2*/}
						<Carousel.Item>
							<Row className="align-items-center">
								<Col lg={6} md={12} sm={12} className="text-center text-lg-start">
									<h1 className="circle-number">2</h1>
									<h2 style={{ color: "#000158" }}>{t("Howitworks.titleA")}</h2>
									<p>{t("Howitworks.A")}</p>
									<Box sx={{ display: "flex", gap: 2 }}></Box>
								</Col>
								<Col lg={6} md={12} sm={12} className="text-center">
									<img src="/Relay.png" alt="Step 2" className="img-fluid" />
								</Col>
							</Row>
						</Carousel.Item>
						{/* Carousel 3*/}
						<Carousel.Item>
							<Row className="align-items-center">
								<Col lg={6} md={12} sm={12} className="text-center">
									<img src="/Relay.png" alt="Step 1" className="img-fluid" />
								</Col>
								<Col lg={6} md={12} sm={12} className="text-center text-lg-start">
									<h1 className="circle-number">3</h1>
									<h2 style={{ color: "#000158" }}>{t("Howitworks.titleB")}</h2>
									<p>{t("Howitworks.B")}</p>

									<Box sx={{ display: "flex", gap: 2 }}></Box>
								</Col>
							</Row>
						</Carousel.Item>
						{/* Carousel 4*/}
						<Carousel.Item>
							<Row className="align-items-center">
								<Col lg={6} md={12} sm={12} className="text-center text-lg-start">
									<h1 className="circle-number">4</h1>
									<h2 style={{ color: "#000158" }}>{t("Howitworks.titleC")}</h2>
									<p>{t("Howitworks.C")}</p>

									<Box sx={{ display: "flex", gap: 2 }}></Box>
								</Col>
								<Col lg={6} md={12} sm={12} className="text-center">
									<img src="/Relay.png" alt="Step 1" className="img-fluid" />
								</Col>
							</Row>
						</Carousel.Item>
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
				data-aos="fade-up"
			>
				{/* Section Header */}
				<div className="text-center mb-5">
					<h1
						style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#2D2A5A", margin: "30px" }}
						data-aos="fade-down"
					>
						{t("Blog.Header")}
					</h1>
				</div>

				<Container>
					<Row className="justify-content-center" id="blog">
						{blogs.map((blog, index) => (
							<Col md={4} sm={12} key={index} className="mb-4" data-aos="zoom-in">
								<Card className="h-100" style={{ borderTop: "5px solid #2F3C79" }}>
									<div className="card-number">
										<span className="card-number2"></span>
									</div>
									<Card.Body>
										<Card.Title>{blog.title}</Card.Title>
										<Card.Text>{blog.description}</Card.Text>
										<div className="mt-auto d-flex justify-content-between align-items-center w-100">
											<span className="read-time">{t("Blog.readTime")}</span>
											<Button className="Readmore mt-auto" variant="link" href={blog.link}>
												{t("Howitworks.ReadMore")}
											</Button>
										</div>
									</Card.Body>
								</Card>
							</Col>
						))}
						<Col md={6}>
							<h4 className="mt-4">{t("Blog.ReadOtherArticles")}</h4>
							<ul className="list-unstyled">
								{otherArticles.map((article, index) => (
									<li key={index} className="mb-2">
										<FaFileAlt className="me-2" />
										<a
											href={article.url}
											style={{ color: "#2F3C79" }}
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
							color: "#2D2A5A"
						}}
					>
						{t("Faq.faqTitle")}
					</h1>
				</div>
				<Container>
					{/* Increase gap between cards using g-5 */}
					<Row className="g-5">
						{/* First row with three cards */}
						<Col lg={4} md={6} sm={12}>
							<Card className="h-100" style={{ borderTop: "5px solid #FF9E43" }}>
								<div className="faq-number" style={{ background: " #FF9E43" }}>
									1
								</div>
								<Card.Body>
									<Card.Title style={{ color: "#2F3C79", fontWeight: "bold" }}>
										{t("Faq.faq1.question")}
									</Card.Title>
									<Card.Text>{ReactHtmlParser(t("Faq.faq1.answer"))}</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						{/* Card 2 */}
						<Col lg={4} md={6} sm={12}>
							<Card className="h-100" style={{ borderTop: "5px solid #2D2A5A" }}>
								<div className="faq-number" style={{ background: " #2D2A5A" }}>
									2
								</div>
								<Card.Body>
									<Card.Title style={{ color: "#2F3C79", fontWeight: "bold" }}>
										{t("Faq.faq2.question")}
									</Card.Title>
									<Card.Text>{ReactHtmlParser(t("Faq.faq2.answer"))}</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						{/* Card 3 */}
						<Col lg={4} md={6} sm={12}>
							<Card className="h-100" style={{ borderTop: "5px solid #0E9384" }}>
								<div className="faq-number" style={{ background: " #0E9384" }}>
									3
								</div>
								<Card.Body>
									<Card.Title style={{ color: "#2F3C79", fontWeight: "bold" }}>
										{t("Faq.faq3.question")}
									</Card.Title>
									<Card.Text>{ReactHtmlParser(t("Faq.faq3.answer"))}</Card.Text>
								</Card.Body>
							</Card>
						</Col>

						{/* Second row with two cards */}
						<Col lg={{ span: 4, offset: 2 }} md={6} sm={12}>
							<Card className="h-100" style={{ borderTop: "5px solid #A0A0AB" }}>
								<div className="faq-number" style={{ background: " #A0A0AB" }}>
									4
								</div>
								<Card.Body>
									<Card.Title style={{ color: "#2F3C79", fontWeight: "bold" }}>
										{t("Faq.faq4.question")}
									</Card.Title>
									<Card.Text>{ReactHtmlParser(t("Faq.faq4.answer"))}</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col lg={4} md={6} sm={12}>
							<Card className="h-100" style={{ borderTop: "5px solid #8FA7FF" }}>
								<div className="faq-number" style={{ background: " #8FA7FF" }}>
									5
								</div>
								<Card.Body>
									<Card.Title style={{ color: "#2F3C79", fontWeight: "bold" }}>
										{t("Faq.faq5.question")}
									</Card.Title>
									<Card.Text>{ReactHtmlParser(t("Faq.faq5.answer"))}</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</Box>

			{/* Footer Section */}
		</div>
	);
};

export default App;
