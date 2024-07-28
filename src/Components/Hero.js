import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Container, Col, Button } from "react-bootstrap";
import "../index.css";
import "../i18n.js";
import AOS from "aos";

const Hero = () => {
	const { t, i18n } = useTranslation();
	const isRTL = i18n.dir() === "rtl";

	useEffect(() => {
		AOS.init({});
	}, []);

	return (
		<Container fluid id="hero" style={{ direction: isRTL ? "rtl" : "ltr" }} data-aos="fade-up">
			<div className="hero-container" style={{ direction: isRTL ? "rtl" : "ltr" }}>
				<Col xs={12} md={6} className="content hero-info" data-aos="fade-right">
					<h6>{t("Landing.span")}</h6>
					<h1>{t("Landing.landingh1")}</h1>
					<hr />
					<p>{t("Landing.landingh2")}</p>

					<div className="d-block d-md-flex justify-content-center justify-content-md-start text-center text-md-start button-wrapper">
						<Button
							href="https://play.google.com/store/apps/details?id=com.afkanerd.sw0b"
							target="_blank"
							className="market-btn mb-3 mb-md-0 d-flex align-items-center mx-auto mx-md-0"
							size="lg"
							style={{
								backgroundColor: "#367ed0",
								color: "#FFFFFF",
								justifyContent: "center",
								width: "100%",
								maxWidth: "200px",
								marginLeft: "5%"
							}}
						>
							<div className="d-flex w-100">
								<img
									src="/playstore.svg"
									alt="Android"
									className="img-fluid logo"
									style={{ maxWidth: "40px", marginRight: "10px" }}
								/>
								<div className="text-start">
									<span className="button-subtitle fs-8">{t("Landing.AndroidSub")}</span>
									<br />
									<span className="button-title fs-4">{t("Landing.Android")}</span>
								</div>
							</div>
						</Button>

						<Button
							href="https://play.google.com/store/apps/details?id=com.afkanerd.sw0b"
							target="_blank"
							className="market-btn mb-3 mb-md-0 d-flex align-items-center mx-auto mx-md-0"
							size="lg"
							style={{
								backgroundColor: "white",
								color: "#1c222c",
								justifyContent: "center",
								width: "100%",
								maxWidth: "200px"
							}}
						>
							<div className="d-flex w-100">
								<img
									src="/desktop.svg"
									alt="Desktop"
									className="img-fluid logo"
									style={{ maxWidth: "40px", marginRight: "10px" }}
								/>
								<div className="text-start">
									<span className="button-subtitle fs-8">{t("Landing.DesktopSub")}</span>
									<br />
									<span className="button-title fs-4">{t("Landing.Desktop")}</span>
								</div>
							</div>
						</Button>
					</div>
				</Col>

				<Col md={6} className="text-center">
					<img src="/one1.png" alt="Hero" className="hero-image" />
				</Col>
			</div>
		</Container>
	);
};

export default Hero;
