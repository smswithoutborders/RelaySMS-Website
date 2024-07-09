// Hero.js

import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../index.css";
import "../i18n.js";

const Hero = () => {
	const { t, i18n } = useTranslation();
	const isRTL = i18n.dir() === "rtl";

	return (
		<Container fluid className="hero-section" style={{ direction: isRTL ? "rtl" : "ltr" }}>
			<Row
				className="align-items-center"
				style={{
					marginLeft: 30,
					marginRight: 30,
					direction: isRTL ? "rtl" : "ltr"
				}}
			>
				<Col xl={8} lg={8} md={6} sm={12} xs={12} className="hero-text-container hero-text-box">
					<h1 className="heading-primary">{t("Landing.landingh1")}</h1>
					<p className="hero-description">{t("Landing.landingh2")}</p>

					<div className="button-wrapper">
						<Button
							href="https://play.google.com/store/apps/details?id=com.afkanerd.sw0b"
							target="_blank"
							className="hero-btn btn btn--fill"
							size="lg"
							style={{
								backgroundColor: "#367ed0",
								color: "#FFFFFF",
								justifyContent: "center",
								width: "100%",
								maxWidth: "200px"
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
							className="hero-btn btn btn--outline"
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
				<Col
					xl={4}
					lg={4}
					md={6}
					sm={12}
					xs={12}
					className="hero-image-container d-none d-md-block"
				>
					<div className="hero-img-box move-down-sm">
						<img src="/phone1.png" alt="Relaysms App" className="hero-img img-fluid" />
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Hero;
