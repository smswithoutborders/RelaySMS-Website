import React, { useEffect } from "react";
import { Navbar, Nav, Container, Row, Col, Button } from "react-bootstrap";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../Components/LanguageSwitcher";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
	const { t, i18n } = useTranslation();
	const isRTL = i18n.dir() === "rtl";

	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	return (
		<div>
			{/* ===  Navbar ====== */}
			<Navbar bg="white" expand="lg" className="navbar-custom fixed-top">
				<Container>
					<Navbar.Brand href="#home" className="me-auto">
						<img src="/logo.png" alt="RelaySMS Logo" style={{ height: "40px" }} />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#Blog">Blog</Nav.Link>
							<Nav.Link href="#help">Help</Nav.Link>
							<Nav.Link href="#contact">Contact Us</Nav.Link>
							<Nav.Link href="https://twitter.com" target="_blank">
								<FaTwitter />
							</Nav.Link>
							<Nav.Link href="https://github.com" target="_blank">
								<FaGithub />
							</Nav.Link>
							<LanguageSwitcher className="ms-3" />
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			{/* Hero Section */}
			<div className="hero-section">
				<Container className="my-5 pt-5">
					<Row className="align-items-center">
						<Col md={6}>
							<span>{t("Landing.span")}</span>
							<h1>{t("Landing.h1")}</h1>
							<p>{t("Landing.h2")}</p>
							<div className="d-block d-md-flex justify-content-center justify-content-md-start text-center text-md-start button-wrapper">
								<Button
									href="https://play.google.com/store/apps/details?id=com.afkanerd.sw0b"
									target="_blank"
									className="hero-btn mb-3 mb-md-0 d-flex align-items-center mx-auto mx-md-0"
									size="lg"
									style={{
										backgroundColor: "#367ed0",
										color: "#FFFFFF",
										width: "100%",
										maxWidth: "220px",
										marginLeft: "5%"
									}}
								>
									<img src="/playstore.svg" alt="Android" className="img-fluid logo" />
									<span className="button-title fs-4">{t("Landing.Android")}</span>
								</Button>
								<Button
									href="https://apps.apple.com/us/app/relaysms/id6630382970"
									target="_blank"
									className="hero-btn mb-3 mb-md-0 d-flex align-items-center mx-auto mx-md-0"
									size="lg"
									style={{
										backgroundColor: "white",
										color: "#1c222c",
										width: "100%",
										maxWidth: "220px",
										marginLeft: "5%"
									}}
								>
									<img
										src="/app.png"
										alt="App Store"
										className="img-fluid logo"
										style={{ maxWidth: "40px", marginRight: "10px" }}
									/>
									<span className="button-title fs-4">{t("Landing.Apple")}</span>
								</Button>
								<Button
									href="https://github.com"
									target="_blank"
									className="hero-btn mb-3 mb-md-0 d-flex align-items-center mx-auto mx-md-0"
									size="lg"
									style={{
										backgroundColor: "#000000",
										color: "#FFFFFF"
									}}
								>
									<FaGithub size={30} style={{ marginRight: "10px" }} />
									<span className="button-title fs-4">{t("Landing.Github")}</span>
								</Button>
							</div>
						</Col>
						<Col md={6}>
							<img src="/RelaySMS.png" alt="Hero" className="img-fluid" />
						</Col>
					</Row>
				</Container>
			</div>

			{/* About Section */}
			<section
				id="about"
				className={`section_all bg-light ${isRTL ? "text-end" : "text-start"}`}
				data-aos="zoom-out"
			>
				<Container>
					<Row>
						<Col lg={12}>
							<div
								className={`blog-head text-center section-subtitle ${isRTL ? "text-end" : "text-start"}`}
							>
								<h1
									className="text-4xl md:text-5xl md:leading-tight font-bold text-gray-800"
									data-aos="fade-right"
								>
									{t("Howitworks.Header")}
								</h1>
							</div>
						</Col>
					</Row>

					<Row className="mt-3">
						<Col lg={4}>
							<div className="about_content_box_all mt-3">
								<div className="about_detail text-center">
									<div className="about_icon">
										<img
											src="/authorize.png"
											alt="Swob logo"
											className="img-fluid mx-auto d-block"
										/>
									</div>
									<h5 className="text-dark text-capitalize mt-3 font-weight-bold">
										{t("Howitworks.titleA")}
									</h5>
									<p className="edu_desc mt-3 mb-0 text-muted">{t("Howitworks.A")}</p>
								</div>
							</div>
						</Col>
						<Col lg={4}>
							<div className="about_content_box_all mt-3">
								<div className="about_detail text-center">
									<div className="about_icon">
										<img
											src="/compose.jpg"
											alt="Compose message"
											className="img-fluid mx-auto d-block"
										/>
									</div>
									<h5 className="text-dark text-capitalize mt-3 font-weight-bold">
										{t("Howitworks.titleB")}
									</h5>
									<p className="edu_desc mb-0 mt-3 text-muted">{t("Howitworks.B")}</p>
								</div>
							</div>
						</Col>
						<Col lg={4}>
							<div className="about_content_box_all mt-3">
								<div className="about_detail text-center">
									<div className="about_icon">
										<img
											src="./notifMessages.jpg"
											alt="Notification messages"
											className="img-fluid mx-auto d-block"
										/>
									</div>
									<h5 className="text-dark text-capitalize mt-3 font-weight-bold">
										{t("Howitworks.titleC")}
									</h5>
									<p className="edu_desc mb-0 mt-3 text-muted">{t("Howitworks.C")}</p>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</div>
	);
}

export default Hero;
