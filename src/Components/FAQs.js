import React from "react";
import { Accordion, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const FAQ = () => {
	const { t, i18n } = useTranslation();

	return (
		<Container className="my-5" dir={i18n.language === "fa" ? "rtl" : "ltr"}>
			<h2 className="text-center mb-4">{t("FAQ.Header")}</h2>

			<Accordion>
				<Accordion.Item eventKey="0">
					<Accordion.Header>{t("FAQ.Q1")}</Accordion.Header>
					<Accordion.Body dangerouslySetInnerHTML={{ __html: t("FAQ.A1") }} />
				</Accordion.Item>

				<Accordion.Item eventKey="1">
					<Accordion.Header>{t("FAQ.Q2")}</Accordion.Header>
					<Accordion.Body>{t("FAQ.A2")}</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="2">
					<Accordion.Header>{t("FAQ.Q3")}</Accordion.Header>
					<Accordion.Body dangerouslySetInnerHTML={{ __html: t("FAQ.A3") }} />
				</Accordion.Item>

				<Accordion.Item eventKey="3">
					<Accordion.Header>{t("FAQ.Q4")}</Accordion.Header>
					<Accordion.Body>{t("FAQ.A4")}</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="4">
					<Accordion.Header>{t("FAQ.Q5")}</Accordion.Header>
					<Accordion.Body dangerouslySetInnerHTML={{ __html: t("FAQ.A5") }} />
				</Accordion.Item>

				<Accordion.Item eventKey="5">
					<Accordion.Header>{t("FAQ.Q6")}</Accordion.Header>
					<Accordion.Body dangerouslySetInnerHTML={{ __html: t("FAQ.A6") }} />
				</Accordion.Item>

				<Accordion.Item eventKey="6">
					<Accordion.Header>{t("FAQ.Q7")}</Accordion.Header>
					<Accordion.Body>{t("FAQ.A7")}</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</Container>
	);
};

export default FAQ;
