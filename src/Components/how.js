import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import "../How.css";

function How() {
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
		<Container fluid className="blog-section py-5" dir={isFarsi ? "rtl" : "ltr"}>
			<h2 className="faq-header" dir={isFarsi ? "rtl" : "ltr"}>
				{t("Howitworks.Header")}{" "}
			</h2>

			<main className="main">
				<Row className="mt-4 justify-content-center">
					<Col md={4} className="mb-4" data-aos="fade-right">
						<div className="section">
							<Card className="card card-compose-send" style={{ borderTop: "5px solid #2267ac" }}>
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

					<Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="200">
						<div className="section">
							<Card className="card card-save-platforms" style={{ borderTop: "5px solid #2267ac" }}>
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

					<Col md={4} className="mb-4" data-aos="fade-left" data-aos-delay="400">
						<div className="section">
							<Card
								className="card card-receive-publish"
								style={{ borderTop: "5px solid #2267ac" }}
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
										className="Readmore mt-auto" // Added mt-auto to push it down
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
		</Container>
	);
}

export default How;
