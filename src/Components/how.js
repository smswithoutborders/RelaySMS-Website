import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../Blog.css";

function How() {
	const { t, i18n } = useTranslation();
	const isFarsi = i18n.language === "fa";

	return (
		<Container fluid className="blog-section py-5" dir={isFarsi ? "rtl" : "ltr"}>
			<header>
				<h3 className="text-lighter">{t("Howitworks.Header")}</h3>
			</header>

			<main className="main">
				<Row className="mt-4 justify-content-center">
					<Col md={4} className="mb-4">
						<div className="section">
							<Card className="card card-compose-send" style={{ borderTop: "3px solid #3c54b4" }}>
								<div className="card-number">1</div>
								<Card.Body>
									<div className="card-title text-bold">{t("Howitworks.titleA")}</div>
									<div className="card-text text-muted">{t("Howitworks.A")}</div>
									<div className="card-text">
										<a
											href="https://docs.smswithoutborders.com/docs/App%20Tutorial/New-Tutorial#step-5-save-access-to-platforms"
											target="_blank"
											rel="noopener noreferrer"
										>
											{t("Howitworks.ReadMore")}
										</a>
									</div>
								</Card.Body>
							</Card>
						</div>
					</Col>

					<Col md={4} className="mb-4">
						<div className="section">
							<Card className="card card-save-platforms" style={{ borderTop: "3px solid #a0b0e8" }}>
								<div className="card-number">2</div>
								<Card.Body>
									<div className="card-title text-bold">{t("Howitworks.titleB")}</div>
									<div className="card-text text-muted">{t("Howitworks.B")}</div>
									<div className="card-text">
										<a
											href="https://docs.smswithoutborders.com/docs/App%20Tutorial/New-Tutorial#step-1-click-the-compose-button"
											target="_blank"
											rel="noopener noreferrer"
										>
											{t("Howitworks.ReadMore")}
										</a>
									</div>
								</Card.Body>
							</Card>
						</div>
					</Col>

					<Col md={4} className="mb-4">
						<div className="section">
							<Card
								className="card card-receive-publish"
								style={{ borderTop: "3px solid #041c94" }}
							>
								<div className="card-number">3</div>
								<Card.Body>
									<div className="card-title text-bold">{t("Howitworks.titleC")}</div>
									<div className="card-text text-muted">{t("Howitworks.C")}</div>
									<div className="card-text">
										<a
											href="https://docs.smswithoutborders.com/docs/contributing/introduction"
											target="_blank"
											rel="noopener noreferrer"
										>
											{t("Howitworks.ReadMore")}
										</a>
									</div>
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
