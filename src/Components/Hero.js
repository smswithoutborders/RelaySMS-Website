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

			{/* ========== Hero Section =============*/}
			<div className="hero-section" style={{ marginTop: "50px" }} dir={isFarsi ? "rtl" : "ltr"}>
				<Container fluid>
					<Row className="align-items-center">
						<Col md={6} xs={12} className="text-md-left" data-aos="fade-up">
							<h1 className="display-4">{t("Landing.h1")}</h1>
							<p className="Description">{t("Landing.h2")}</p>
							<Button
								variant="primary"
								as={Link}
								to="/Download"
								size="lg"
								className="download-button"
							>
								{t("Landing.Android")} <FaDownload />
							</Button>
						</Col>
						<Col md={6} xs={12} className="text-center image" data-aos="fade-up">
							<img src="/Relay.png" alt="relay" className="hero-image img-fluid" />
						</Col>
					</Row>

					{/* ========================== how it works ============================== */}
					<h2 className="how-header" dir={isFarsi ? "rtl" : "ltr"}>
						{t("Howitworks.Header")}{" "}
					</h2>
					<main className="how-main">
						<Row className="mt-4 justify-content-center">
							{/* Card 1 */}
							<Col
								xs={12}
								sm={12}
								md={8}
								lg={4}
								xl={4}
								xxl={4}
								className="mb-4"
								data-aos="fade-right"
							>
								<div className="section">
									<Card
										className="card card-compose-send"
										style={{ borderTop: "5px solid #2F3C79" }}
									>
										<div className="card-number">1</div>
										<Card.Body className="d-flex flex-column">
											<div>
												<div className="card-title text-bold">{t("Howitworks.titleA")}</div>
												<div className="card-text text-muted">{t("Howitworks.A")}</div>
											</div>
											<a
												href="https://docs.smswithoutborders.com/docs/App%20Tutorial/New-Tutorial#step-5-save-access-to-platforms"
												target="_blank"
												rel="noopener noreferrer"
												className="Readmore mt-auto"
											>
												{t("Howitworks.ReadMore")}
											</a>
										</Card.Body>
									</Card>
								</div>
							</Col>

							{/* Card 2 */}
							<Col
								xs={12}
								sm={12}
								md={8}
								lg={4}
								xl={4}
								xxl={4}
								className="mb-4"
								data-aos="fade-up"
								data-aos-delay="200"
							>
								<div className="section">
									<Card
										className="card card-save-platforms"
										style={{ borderTop: "5px solid #2F3C79" }}
									>
										<div className="card-number">2</div>
										<Card.Body className="d-flex flex-column">
											<div>
												<div className="card-title text-bold">{t("Howitworks.titleB")}</div>
												<div className="card-text text-muted">{t("Howitworks.B")}</div>
											</div>
											<a
												href="https://docs.smswithoutborders.com/docs/App%20Tutorial/New-Tutorial#step-1-click-the-compose-button"
												target="_blank"
												rel="noopener noreferrer"
												className="Readmore mt-auto"
											>
												{t("Howitworks.ReadMore")}
											</a>
										</Card.Body>
									</Card>
								</div>
							</Col>

							{/* Card 3 */}
							<Col
								xs={12}
								sm={12}
								md={8}
								lg={4}
								xl={4}
								xxl={4}
								className="mb-4"
								data-aos="fade-left"
								data-aos-delay="400"
							>
								<div className="section">
									<Card
										className="card card-receive-publish"
										style={{ borderTop: "5px solid #2F3C79" }}
									>
										<div className="card-number">3</div>
										<Card.Body className="d-flex flex-column">
											<div>
												<div className="card-title text-bold">{t("Howitworks.titleC")}</div>
												<div className="card-text text-muted">{t("Howitworks.C")}</div>
											</div>
											<a
												href="https://docs.smswithoutborders.com/docs/contributing/introduction"
												target="_blank"
												className="Readmore mt-auto"
												rel="noopener noreferrer"
											>
												{t("Howitworks.ReadMore")}
											</a>
										</Card.Body>
									</Card>
								</div>
							</Col>
						</Row>
					</main>

					{/* ==================================== blog section ==================================== */}

					<h2 className="blog-header">{t("Blog.Header")}</h2>
					<Row className="blog-section">
						<Col md={6} className="mb-4">
							<Card className="blog-card" style={{ borderTop: "5px solid #2267ac" }}>
								<Card.Body className="d-flex flex-column">
									<div>
										<Card.Title className="card-title">{t("Blog.IDHeader")}</Card.Title>
										<Card.Text className="card-text">{articleText}</Card.Text>
									</div>
									{/* Move this section downward */}
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
					{/* FAQ Section */}
					<Row className="mt-4">
						<Col>
							<h5 className="faq-header mb-3">{t("footer.faqTitle")}</h5>
							<Accordion defaultActiveKey="0">
								<Accordion.Item eventKey="0">
									<Accordion.Header aria-controls="faq-0" aria-expanded="true">
										{t("footer.faq1.question")}
									</Accordion.Header>
									<Accordion.Body>{ReactHtmlParser(t("footer.faq1.answer"))}</Accordion.Body>
								</Accordion.Item>

								<Accordion.Item eventKey="1">
									<Accordion.Header aria-controls="faq-1" aria-expanded="false">
										{t("footer.faq2.question")}
									</Accordion.Header>
									<Accordion.Body>{ReactHtmlParser(t("footer.faq2.answer"))}</Accordion.Body>
								</Accordion.Item>

								<Accordion.Item eventKey="2">
									<Accordion.Header aria-controls="faq-2" aria-expanded="false">
										{t("footer.faq3.question")}
									</Accordion.Header>
									<Accordion.Body>{ReactHtmlParser(t("footer.faq3.answer"))}</Accordion.Body>
								</Accordion.Item>

								<Accordion.Item eventKey="3">
									<Accordion.Header aria-controls="faq-3" aria-expanded="false">
										{t("footer.faq4.question")}
									</Accordion.Header>
									<Accordion.Body>{ReactHtmlParser(t("footer.faq4.answer"))}</Accordion.Body>
								</Accordion.Item>

								<Accordion.Item eventKey="4">
									<Accordion.Header aria-controls="faq-4" aria-expanded="false">
										{t("footer.faq5.question")}
									</Accordion.Header>
									<Accordion.Body>{ReactHtmlParser(t("footer.faq5.answer"))}</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default Hero;
