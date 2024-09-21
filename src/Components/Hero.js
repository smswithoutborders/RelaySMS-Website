import React, { useEffect } from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
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
						<main className="text-center text-lg-start">
							<h1 className="hero-title">
								{t("Landing.span")} <br />
								<span className="hero-highlight">{t("Landing.h1")}</span>
							</h1>

							<p className="hero-description">{t("Landing.h2")}</p>
							<div className="hero-buttons">
								<Button
									href="https://play.google.com/store/apps/details?id=com.afkanerd.sw0b"
									target="_blank"
									className="hero-btn android-btn"
									data-aos="fade-up"
								>
									<img src="/play.svg" alt="Android" className="hero-icon" />
									<span className="button-title">{t("Landing.Android")}</span>
								</Button>

								<Button
									href="https://apps.apple.com/us/app/relaysms/id6630382970"
									target="_blank"
									className="hero-btn apple-btn"
									data-aos="fade-up"
									data-aos-delay="200"
								>
									<img src="/app.svg" alt="App" className="hero-icon" />
									<span className="button-title">{t("Landing.Apple")}</span>
								</Button>

								<Button
									href="https://github.com/"
									target="_blank"
									className="hero-btn github-btn"
									data-aos="fade-up"
									data-aos-delay="400"
								>
									<img src="/github.svg" alt="GitHub" className="hero-icon" />
									<span className="button-title">{t("Landing.Github")}</span>
								</Button>
							</div>
						</main>
					</Col>
					<Col lg={6} className="d-none d-lg-block position-relative" data-aos="fade-left">
						<Image src="/Relaysms.png" alt="Cover" className="hero-image" />
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
