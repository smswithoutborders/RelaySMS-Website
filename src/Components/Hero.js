import React, { useEffect } from "react";
import { Container, Row, Col, Navbar, Nav, Button, Card, Accordion } from "react-bootstrap";
import { FaDownload, FaGithub } from "react-icons/fa";
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

	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: "ease-in-out",
			once: true
		});
	}, []);

	const articleText = t("Blog.IDD");
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
		<>
			{/* Responsive Navbar */}
			<Navbar expand="lg" fixed="top" dir={isFarsi ? "rtl" : "ltr"} className="custom-navbar">
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
					{/* ======================== Hero Section =============================*/}
					<Row className="align-items-center my-5">
						<Col
							md={6}
							xs={12}
							className="text-center text-md-start mb-4 mb-md-0"
							data-aos="fade-up"
						>
							<h1 className="display-4" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
								{t("Landing.h1")}
							</h1>

							<p className="Description" style={{ fontSize: "1.25rem", color: "#555" }}>
								{t("Landing.h2")}
							</p>
							<Button
								variant="primary"
								as={Link}
								to="/Download"
								size="lg"
								className="download-button mt-3"
								style={{ fontSize: "1rem", padding: "10px 20px" }}
							>
								{t("Landing.Android")} <FaDownload />
							</Button>
						</Col>
						<Col md={6} xs={12} className="text-center" data-aos="fade-up">
							<img
								src="/Relay.png"
								alt="relay"
								className="hero-image img-fluid"
								style={{ maxWidth: "100%", height: "auto" }}
							/>
						</Col>
					</Row>

					{/* ============================================================================================= */}

					{/* ========================== how it works ============================== */}
					<h2
						className="text-center mt-5"
						dir={isFarsi ? "rtl" : "ltr"}
						style={{
							fontSize: "2rem",
							fontWeight: "bold",
							color: "#333",
							margin: "25px",
							transition: "color 0.3s ease, transform 0.3s ease",
							padding: "50px"
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

					<Row className="justify-content-center mx-2">
						{/* Card 1 */}
						<Col xs={12} sm={6} md={4} className="mb-4 d-flex">
							<Card
								className="flex-fill shadow-sm border-top-primary"
								style={{ borderTop: "5px solid #2F3C79", minHeight: "250px" }}
							>
								<div
									className="card-number"
									style={{
										position: "absolute",
										top: "-10px",
										left: "-10px",
										background: "#2F3C79",
										color: "#fff",
										width: "30px",
										height: "30px",
										borderRadius: "50%",
										display: "flex",
										justifyContent: "center",
										alignItems: "center"
									}}
								>
									1
								</div>
								<Card.Body className="d-flex flex-column">
									<Card.Title>{t("Howitworks.titleA")}</Card.Title>
									<Card.Text>{t("Howitworks.A")}</Card.Text>
									<a
										href="https://docs.smswithoutborders.com/docs/App%20Tutorial/New-Tutorial#step-5-save-access-to-platforms"
										target="_blank"
										rel="noopener noreferrer"
										className="Readmore mt-auto"
										style={{ color: "#0056b3", textDecoration: "none" }}
									>
										{t("Howitworks.ReadMore")}
									</a>
								</Card.Body>
							</Card>
						</Col>

						{/* Card 2 */}
						<Col xs={12} sm={6} md={4} className="mb-4 d-flex">
							<Card
								className="flex-fill shadow-sm border-top-primary"
								style={{ borderTop: "5px solid #2F3C79", minHeight: "250px" }}
							>
								<div
									className="card-number"
									style={{
										position: "absolute",
										top: "-10px",
										left: "-10px",
										background: "#2F3C79",
										color: "#fff",
										width: "30px",
										height: "30px",
										borderRadius: "50%",
										display: "flex",
										justifyContent: "center",
										alignItems: "center"
									}}
								>
									2
								</div>
								<Card.Body className="d-flex flex-column">
									<Card.Title>{t("Howitworks.titleB")}</Card.Title>
									<Card.Text>{t("Howitworks.B")}</Card.Text>
									<a
										href="https://docs.smswithoutborders.com/docs/App%20Tutorial/New-Tutorial#step-1-click-the-compose-button"
										target="_blank"
										rel="noopener noreferrer"
										className="Readmore mt-auto"
										style={{ color: "#0056b3", textDecoration: "none" }}
									>
										{t("Howitworks.ReadMore")}
									</a>
								</Card.Body>
							</Card>
						</Col>

						{/* Card 3 */}
						<Col xs={12} sm={6} md={4} className="mb-4 d-flex">
							<Card
								className="flex-fill shadow-sm border-top-primary"
								style={{ borderTop: "5px solid #2F3C79", minHeight: "250px" }}
							>
								<div
									className="card-number"
									style={{
										position: "absolute",
										top: "-10px",
										left: "-10px",
										background: "#2F3C79",
										color: "#fff",
										width: "30px",
										height: "30px",
										borderRadius: "50%",
										display: "flex",
										justifyContent: "center",
										alignItems: "center"
									}}
								>
									3
								</div>
								<Card.Body className="d-flex flex-column">
									<Card.Title>{t("Howitworks.titleC")}</Card.Title>
									<Card.Text>{t("Howitworks.C")}</Card.Text>
									<a
										href="https://docs.smswithoutborders.com/docs/contributing/introduction"
										target="_blank"
										rel="noopener noreferrer"
										className="Readmore mt-auto"
										style={{ color: "#0056b3", textDecoration: "none" }}
									>
										{t("Howitworks.ReadMore")}
									</a>
								</Card.Body>
							</Card>
						</Col>
					</Row>

					{/* ==================================== blog section ==================================== */}
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
					<Row className="blog-section">
						<Col md={6} className="mb-4">
							<Card className="blog-card" style={{ borderTop: "5px solid #2267ac" }}>
								<Card.Body className="d-flex flex-column">
									<div>
										<Card.Title className="card-title">{t("Blog.IDHeader")}</Card.Title>
										<Card.Text className="card-text">{articleText}</Card.Text>
									</div>
									<div className="mt-auto d-flex justify-content-between align-items-center">
										<a
											href="https://blog.smswithoutborders.com/posts/relaysms-expands-user-control-with-device-id-registration"
											target="_blank"
											rel="noopener noreferrer"
											className="read-more"
										>
											{t("Howitworks.ReadMore")}
										</a>

										<span className="read-time">{t("Blog.readTime")}</span>
									</div>
								</Card.Body>
							</Card>
						</Col>

						<Col md={6}>
							<h4>{t("Blog.ReadOtherArticles")}</h4>
							<ul className="list-unstyled">
								{otherArticles.map((article, index) => (
									<li key={index} className="mb-2">
										<FaFileAlt className="me-2" />
										<a href={article.url} target="_blank" className="article-link" rel="noreferrer">
											{article.title}
										</a>
									</li>
								))}
							</ul>
						</Col>
					</Row>
					{/* =============== faq section ================== */}
					<Row className="mt-5">
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
								{t("footer.faqTitle")}
							</h2>
							<Accordion defaultActiveKey="0" className="w-100">
								{Array.from({ length: 5 }).map((_, idx) => (
									<Accordion.Item eventKey={`${idx}`} key={idx}>
										<Accordion.Header aria-controls={`faq-${idx}`} aria-expanded={idx === 0}>
											{t(`footer.faq${idx + 1}.question`)}
										</Accordion.Header>
										<Accordion.Body>
											{ReactHtmlParser(t(`footer.faq${idx + 1}.answer`))}
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
