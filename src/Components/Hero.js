import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../index.css";
import "../App.css";
import "../i18n.js";

const Hero = () => {
	const { t, i18n } = useTranslation();
	const isRTL = i18n.dir() === "rtl";

	useEffect(() => {
		const handleScroll = () => {
			const elements = document.querySelectorAll(".slide-in");
			elements.forEach((el) => {
				const rect = el.getBoundingClientRect();
				if (rect.top < window.innerHeight * 0.9) {
					el.classList.add("visible");
				} else {
					el.classList.remove("visible");
				}
			});
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<Container
			fluid
			id="hero"
			className="hero-section"
			style={{ direction: isRTL ? "rtl" : "ltr" }}
		>
			<Row
				className="align-items-center hero-row"
				style={{
					marginLeft: 35,
					marginRight: 35,
					direction: isRTL ? "rtl" : "ltr"
				}}
			>
				<Col xs={12} md={6} className="content hero-text-box">
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
					xs={12}
					md={6}
					className="hero-image-container d-flex justify-content-center justify-content-md-end align-items-center"
				>
					<div className="hero-img-box move-down-sm">
						<img
							src="/one1.png"
							alt="Relaysms App"
							className="hero-img img-fluid"
							style={{ width: "450px", height: "auto" }}
						/>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Hero;
