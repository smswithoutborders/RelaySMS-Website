import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa"; // Ensure you have react-icons installed

function HowItWorks() {
	const { t } = useTranslation();

	const steps = [
		{
			id: 1,
			title: t("Howitworks.titleA"),
			description: t("Howitworks.A"),
			imageUrl: "/11.png",
			link: "https://docs.smswithoutborders.com/docs/App%20Tutorial/New-Tutorial#step-5-save-access-to-platforms"
		},
		{
			id: 2,
			title: t("Howitworks.titleB"),
			description: t("Howitworks.B"),
			imageUrl: "/22.png",
			link: "https://docs.smswithoutborders.com/docs/App%20Tutorial/New-Tutorial#step-1-click-the-compose-button"
		},
		{
			id: 3,
			title: t("Howitworks.titleC"),
			description: t("Howitworks.C"),
			imageUrl: "/33.png",
			link: "https://docs.smswithoutborders.com/docs/contributing/introduction"
		}
	];

	return (
		<Container fluid className="how-it-works-section py-5">
			<h2 className="text-center mb-5" style={styles.header}>
				{t("Howitworks.Header")}
			</h2>
			<Row className="justify-content-center">
				{steps.map((step, index) => (
					<Col md={4} key={step.id} className="mb-4 d-flex">
						<div className="how-it-works-card flex-fill">
							<div className="step-number">{index + 1}</div>
							<img src={step.imageUrl} alt={step.title} className="how-it-works-icon" />
							<h4 style={styles.title}>{step.title}</h4>
							<p style={styles.text}>{step.description}</p>
							<a href={step.link} style={styles.link}>
								{t("Howitworks.ReadMore")} <FaArrowRight />
							</a>
						</div>
					</Col>
				))}
			</Row>
		</Container>
	);
}

const styles = {
	header: {
		fontSize: "2.5rem",
		color: "#333",
		marginBottom: "2rem"
	},
	title: {
		fontSize: "1.5rem",
		color: "#333",
		fontWeight: "600",
		margin: "1rem 0"
	},
	text: {
		color: "#555",
		lineHeight: "1.6",
		marginBottom: "1rem"
	},
	link: {
		color: "#041c94",
		textDecoration: "none",
		fontWeight: "600",
		display: "inline-flex",
		alignItems: "center",
		border: "2px solid #041c94",
		padding: "0.5rem 1rem",
		borderRadius: "4px",
		transition: "background-color 0.3s"
	}
};

export default HowItWorks;
