import React, { useEffect } from "react";
import { Container, Row, Col, Navbar, Nav, Button, Card, Accordion } from "react-bootstrap";
import { FaArrowDown, FaGithub } from "react-icons/fa";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";
import { FaFileAlt } from "react-icons/fa";
import ReactHtmlParser from "react-html-parser";

const Hero = () => {
	const { t, i18n } = useTranslation();
	const isFarsi = i18n.language === "fa";
	const isMobile = window.innerWidth <= 768;

	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: "ease-in-out",
			once: true
		});
	}, []);

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

	const cards = [
		{
			title: t("Howitworks.titleA"),
			description: t("Howitworks.A"),
			link: "https://docs.smswithoutborders.com/docs/App%20Tutorial/New-Tutorial#step-5-save-access-to-platforms",
			linkText: t("Howitworks.ReadMore")
		},
		{
			title: t("Howitworks.titleB"),
			description: t("Howitworks.B"),
			link: "https://docs.smswithoutborders.com/docs/App%20Tutorial/New-Tutorial#step-1-click-the-compose-button",
			linkText: t("Howitworks.ReadMore")
		},
		{
			title: t("Howitworks.titleC"),
			description: t("Howitworks.C"),
			link: "https://docs.smswithoutborders.com/docs/contributing/introduction",
			linkText: t("Howitworks.ReadMore")
		}
	];

	const blogs = [
		{
			title: t("Blog.IDHeader"),
			description: t("Blog.IDD"),
			link: "https://blog.smswithoutborders.com/posts/relaysms-expands-user-control-with-device-id-registration"
		}
	];

	return (
		<>
			{/* Responsive Navbar */}
			<Navbar
				variant="light"
				expand="lg"
				fixed="top"
				dir={isFarsi ? "rtl" : "ltr"}
				className="custom-navbar"
			>
				{/* Logo aligned to the left */}
				<Navbar.Brand href="#home" className="navbar-logo">
					<img src="./logo.png" alt="Logo" height="40" className="logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbar-nav" />
				<Navbar.Collapse id="navbar-nav" className="justify-content-end">
					{/* Links aligned to the right */}
					<Nav className="nav-links">
						<Nav.Link href="/" className="mx-2">
							{t("Nav.Home")}
						</Nav.Link>
						<Nav.Link href="https://blog.smswithoutborders.com/" className="mx-2">
							{t("Nav.Blog")}
						</Nav.Link>
						<Nav.Link href="https://docs.smswithoutborders.com/" className="mx-2">
							{t("Nav.Support")}
						</Nav.Link>
						<Nav.Link as={Link} to="/Contact_Us" className="mx-2">
							{t("Nav.Contact")}
						</Nav.Link>
					</Nav>
					{/* Social Media Icons */}
					<Nav className="social-icons">
						<Nav.Link href="https://x.com/RelaySMS" className="mx-2">
							<img src="./x.svg" alt="X logo" height="20" />
						</Nav.Link>
						<Nav.Link href="https://github.com/smswithoutborders" className="mx-2">
							<FaGithub />
						</Nav.Link>
						<LanguageSwitcher className="mx-2" />
					</Nav>
				</Navbar.Collapse>
			</Navbar>

			<div className="hero-section" style={{ marginTop: "50px" }} dir={isFarsi ? "rtl" : "ltr"}>
				<Container fluid>
					{/* ======================== */}

					<Row className="hero align-items-center justify-content-center">
						{/* Hero Text Column */}
						<Col xs={12} md={6} className="text-center text-md-start p-4">
							<h1 className="hero-title" style={{ fontWeight: "bold", fontSize: "2.5rem" }}>
								{t("Landing.h1")}
							</h1>
							<p className="hero-description mt-3" style={{ fontSize: "1.25rem", color: "#555" }}>
								{t("Landing.h2")}
							</p>
							<Button
								as={Link}
								to="/Download"
								className="mt-4 px-5 py-3 download-button"
								style={{
									background: "#2f3c79",
									border: "none",
									borderRadius: "12px",
									fontSize: "1rem",
									marginTop: "10px",
									paddingTop: "2.5%",
									paddingBottom: "2.5%"
								}}
							>
								{t("Landing.Android")} <FaArrowDown className="ms-2 icon-animated" />
							</Button>
						</Col>

						{/* Image Column */}
						<Col xs={12} md={6} className="text-center p-4">
							<img
								src="/Relay.png"
								alt="App preview"
								className="img-fluid"
								style={{ borderRadius: "15px", maxWidth: "100%", height: "auto" }}
							/>
						</Col>
					</Row>

					{/* ======================== Hero Section =============================*/}

					{/* ============================================================================================= */}

					{/* ========================== how it works ============================== */}

					<Row className="justify-content-center">
						<h2
							className="text-center"
							dir={isFarsi ? "rtl" : "ltr"}
							style={{
								fontSize: "2rem",
								fontWeight: "bold",
								color: "#333",
								margin: "100px",
								transition: "color 0.3s ease, transform 0.3s ease"
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.color = "#0056b3";
								e.currentTarget.style.transform = "scale(1.05)";
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.color = "#333";
								e.currentTarget.style.transform = "scale(1)";
							}}
						>
							{t("Howitworks.Header")}
						</h2>

						{cards.map((card, idx) => (
							<Col xs={12} sm={8} md={6} lg={4} key={idx} className="mb-4">
								<Card className="h-100 shadow-sm" style={{ borderTop: "5px solid #2F3C79" }}>
									<div className="card-number">{idx + 1}</div>
									<Card.Body className="d-flex flex-column">
										<Card.Title>{card.title}</Card.Title>
										<Card.Text>{card.description}</Card.Text>
										<div className="mt-auto d-flex justify-content-between align-items-center w-100">
											<Button className="Readmore" variant="link" href={card.link}>
												{card.linkText}
											</Button>
										</div>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>

					{/* ========================== blog section ============================== */}
					<Row className="justify-content-center" id="blog">
						<h2
							className="text-center"
							dir={isFarsi ? "rtl" : "ltr"}
							style={{
								fontSize: "2rem",
								fontWeight: "bold",
								color: "#333",
								margin: "100px",
								transition: "color 0.3s ease, transform 0.3s ease"
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.color = "#0056b3";
								e.currentTarget.style.transform = "scale(1.05)";
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.color = "#333";
								e.currentTarget.style.transform = "scale(1)";
							}}
						>
							{t("Blog.Header")}
						</h2>
						{blogs.map((blog, index) => (
							<Col md={4} sm={12} key={index} className="mb-4">
								<Card className="h-100" style={{ borderTop: "5px solid #2F3C79" }}>
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
							<h4>{t("Blog.ReadOtherArticles")}</h4>
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

					{/* =============== faq section ================== */}
					<Row className="my-5">
						<Col>
							<h2
								className="text-center mt-5"
								dir={isFarsi ? "rtl" : "ltr"}
								style={{
									fontSize: "2rem",
									fontWeight: "bold",
									color: "#333",
									marginBottom: "5rem",
									transition: "color 0.3s ease, transform 0.3s ease",
									padding: "0 15px"
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.color = "#0056b3";
									e.currentTarget.style.transform = "scale(1.05)";
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.color = "#333";
									e.currentTarget.style.transform = "scale(1)";
								}}
							>
								{t("Faq.faqTitle")}
							</h2>

							<Accordion
								defaultActiveKey="0"
								style={{
									marginLeft: isMobile ? "0%" : "15%",
									marginRight: isMobile ? "0%" : "15%",
									width: isMobile ? "100%" : "auto"
								}}
							>
								{Array.from({ length: 5 }).map((_, idx) => (
									<Accordion.Item eventKey={`${idx}`} key={idx} style={{ border: "none" }}>
										<Accordion.Header
											aria-controls={`faq-${idx}`}
											aria-expanded={idx === 0}
											style={{
												borderBottom: "1px solid #ddd",
												paddingBottom: "10px"
											}}
										>
											{t(`Faq.faq${idx + 1}.question`)}
										</Accordion.Header>
										<Accordion.Body
											style={{
												borderBottom: "1px solid #ddd",
												paddingBottom: "15px"
											}}
										>
											{ReactHtmlParser(t(`Faq.faq${idx + 1}.answer`))}
										</Accordion.Body>
									</Accordion.Item>
								))}
							</Accordion>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default Hero;
