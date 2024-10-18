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
							<div className="hero-buttons d-flex flex-column flex-md-row justify-content-md-start justify-content-center">
								<Button
									href="https://play.google.com/store/apps/details?id=com.afkanerd.sw0b"
									target="_blank"
									className="hero-btn Download-btn mx-auto mx-md-0"
									data-aos="fade-up"
								>
									<span className="button-title">{t("Landing.Android")}</span>

									<FontAwesomeIcon icon={faArrowDown} className="hero-icon apple" />
								</Button>
							</div>
						</main>
					</Col>
					<Col lg={6} className="image-section d-lg-block position-relative" data-aos="fade-left">
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
