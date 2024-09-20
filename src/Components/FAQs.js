import React from "react";
import { Container, Accordion } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function FAQ() {
	const { t, i18n } = useTranslation();
	const isFarsi = i18n.language === "fa"; // Check if the selected language is Farsi

	return (
		<Container fluid className="faq-section py-5" dir={isFarsi ? "rtl" : "ltr"}>
			<h2 className="text-center mb-5" style={faqStyles.header}>
				{t("FAQ.Header")}
			</h2>
			<Accordion defaultActiveKey="0" flush>
				{faqData.map((faq, idx) => (
					<Accordion.Item eventKey={idx.toString()} key={idx} className="faq-item">
						<Accordion.Header style={faqStyles.question}>{t(faq.question)}</Accordion.Header>
						<Accordion.Body
							style={faqStyles.answer}
							dangerouslySetInnerHTML={{ __html: t(faq.answer) }}
						/>
					</Accordion.Item>
				))}
			</Accordion>
		</Container>
	);
}

const faqData = [
	{
		question: "FAQ.Q1",
		answer: "FAQ.A1"
	},
	{
		question: "FAQ.Q2",
		answer: "FAQ.A2"
	},
	{
		question: "FAQ.Q3",
		answer: "FAQ.A3"
	}
];

const faqStyles = {
	header: {
		fontSize: "2.5rem",
		color: "#333",
		marginBottom: "2rem"
	},
	question: {
		fontSize: "1.25rem",
		color: "#333",
		fontWeight: "600"
	},
	answer: {
		color: "#555",
		lineHeight: "1.6"
	}
};

export default FAQ;
