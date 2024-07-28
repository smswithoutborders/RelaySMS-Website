import React, { useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../index.css";
import { FaArrowCircleRight } from "react-icons/fa";
import AOS from "aos";

const Features = () => {
	const { t, i18n } = useTranslation();
	const isRTL = i18n.dir() === "rtl";

	const cardContent = [
		{ key: "HowItWorksA", title: "HowItWorkstitleA", imageSrc: "/swob.png" },
		{ key: "HowItWorksB", title: "HowItWorkstitleB", imageSrc: "/compose.jpg" },
		{ key: "HowItWorksC", title: "HowItWorkstitleC", imageSrc: "/noti.jpg" }
	];

	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	return (
		<div className="container">
			<div className="row justify-content-center">
				<Row className="justify-content-center mb-4">
					<Col xs={12}>
						<h2
							data-aos="fade-up"
							className="text-center fw-bold section-title"
							style={{ fontSize: "33px", marginTop: "20px", color: "#2666af" }}
						>
							{t("Howitworks.HowItWorks")}
						</h2>
						<p
							className={`text-center section-subtitle ${isRTL ? "text-end" : "text-start"}`}
							style={{ fontSize: "calc(1rem + 0.5vw)", marginTop: "30px", marginBottom: "60px" }}
						>
							{t("Howitworks.HowItWorksSubtitle")}
						</p>
					</Col>
				</Row>

				<Row className="justify-content-center">
					{cardContent.map((card, idx) => (
						<Col
							xs={12}
							sm={8}
							md={6}
							lg={4}
							key={idx}
							className="mb-4 d-flex justify-content-center"
							data-aos="fade-right"
							data-aos-offset="300"
							data-aos-easing="ease-in-sine"
						>
							<Card className="custom-card h-100 shadow-sm d-flex flex-column">
								<Card.Img
									variant="top"
									src={card.imageSrc}
									alt={card.key}
									className="custom-card-img"
								/>
								<Card.Body className="d-flex flex-column">
									<Card.Title
										className="custom-card-title"
										style={{ textAlign: isRTL ? "right" : "left" }}
									>
										{t(`Howitworks.${card.title}`)}
									</Card.Title>
									<Card.Text
										className="custom-card-text flex-grow-1"
										style={{ textAlign: isRTL ? "right" : "left" }}
									>
										{t(`Howitworks.${card.key}`)}
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
				<Row className="mt-4">
					<Col xs={12}>
						<div className="text-center p-1 howitworks">
							<a
								href="https://smswithoutborders.github.io/docs/tutorials/getting-started/"
								target="_blank"
								rel="noreferrer noopener"
								className="getting-started-link"
							>
								{t("Howitworks.GettingStartedButton")}
								<FaArrowCircleRight className="ml-2 arrow-icon" />
							</a>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Features;
