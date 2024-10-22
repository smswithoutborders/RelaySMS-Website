import React, { useEffect } from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import How from "../Components/how";
import Blog from "../Components/Blog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "../App.css";

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
		<>
			<section className="hero-container">
				<Container className={`hero-main ${isFarsi ? "rtl" : ""}`}>
					<Row className="align-items-center">
						<Col lg={6} md={10} className="text-start">
							<h1 className="hero-title">{t("Landing.h1")}</h1>
							<div className="hero-description-section mt-4">
								<h5 className="hero-description">{t("Landing.h2")}</h5>
							</div>
							<Button as={Link} to="/Download" data-aos="fade-up" className="btn-download btn-lg">
								{t("Landing.Android")}
								<FontAwesomeIcon icon={faArrowDown} className="arrow-icon" />
							</Button>
						</Col>
						<Col lg={6} md={10} className="image-section" data-aos="fade-left">
							<Image
								src="/Relaysms.png"
								alt="RelaySMS application interface"
								className="hero-image"
							/>
						</Col>
					</Row>
				</Container>
			</section>

			<div data-aos="fade-up">
				<How />
			</div>
			<div data-aos="fade-up" data-aos-delay="200">
				<Blog />
			</div>
		</>
	);
};

export default HeroSection;
