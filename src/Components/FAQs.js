import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../App.css";

function FAQ() {
	const { t, i18n } = useTranslation();
	const isFarsi = i18n.language === "fa";

	return (
		<Container fluid className="faq-section py-5" dir={isFarsi ? "rtl" : "ltr"}>
			<h2 className="faq-header">{t("FAQ.Header")}</h2>
			<Row className="justify-content-center">
				<Col md={10} lg={8}>
					<Accordion defaultActiveKey="0" flush>
						{faqData.map((faq, idx) => (
							<Accordion.Item eventKey={idx.toString()} key={idx} className="faq-item">
								<Accordion.Header className="faq-question">{t(faq.question)}</Accordion.Header>
								<Accordion.Body className="faq-answer">
									{faq.answers.map((answer, answerIdx) => (
										<div
											key={answerIdx}
											className="faq-answer-item"
											dangerouslySetInnerHTML={{ __html: t(answer) }}
										/>
									))}
								</Accordion.Body>
							</Accordion.Item>
						))}
					</Accordion>
				</Col>
			</Row>
		</Container>
	);
}

const faqData = [
	{ question: "FAQ.Q1", answers: ["FAQ.A1", "FAQ.A12"] },
	{ question: "FAQ.Q2", answers: ["FAQ.A2"] },
	{ question: "FAQ.Q3", answers: ["FAQ.A3"] },
	{
		question: "FAQ.Q4",
		answers: ["FAQ.A4", "FAQ.A41", "FAQ.A42", "FAQ.A43", "FAQ.A44", "FAQ.A45"]
	},
	{ question: "FAQ.Q5", answers: ["FAQ.A5", "FAQ.A51"] },
	{ question: "FAQ.Q6", answers: ["FAQ.A6", "FAQ.A61", "FAQ.A62"] }
];

export default FAQ;
