import React, { useEffect } from "react";
import { Container, Row, Col, Navbar, Nav, Button } from "react-bootstrap";
import { FaDownload, FaGithub } from "react-icons/fa";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";
import How from "../Components/how";
import Blog from "../Components/Blog";

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
							{t("Nav.Help")}
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
						<Col md={6} xs={12} className="text-center" data-aos="fade-up">
							<img src="/Relay.png" alt="relay" className="hero-image img-fluid" />
						</Col>
					</Row>
				</Container>
				<div data-aos="fade-up">
					<How />
				</div>
				<div data-aos="fade-up" data-aos-delay="200">
					<Blog />
				</div>
			</div>
		</>
	);
};

export default Hero;
