import React, { useEffect } from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import How from "../Components/how";
import Blog from "../Components/Blog";

const HeroSection = () => {
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
		<div className="hero-container" dir={isFarsi ? "rtl" : "ltr"}>
			<Container fluid="xl">
				<Row className="align-items-center">
					<Col lg={6} className="position-relative z-index-10 pb-5 pt-5" data-aos="fade-right">
						<main className="text-center text-lg-start hero-main">
							<h1 className="hero-title hero-highlight">
								{t("Landing.h1")} <br />
							</h1>

							<p className="hero-description">{t("Landing.h2")}</p>
							<Button as={Link} to="/Download" data-aos="fade-up" className="btn-download btn-lg">
								{t("Landing.Android")}
								<FontAwesomeIcon icon={faArrowDown} className="arrow-icon" />
							</Button>
						</main>
					</Col>
					<Col lg={6} className="d-lg-block position-relative" data-aos="fade-left">
						<Image src="/Relaysms.png" alt="relay" className="hero-image" />
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
	);
};

export default HeroSection;
