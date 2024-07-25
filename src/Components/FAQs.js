import * as React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import { Container, Row } from "react-bootstrap";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";

const FAQ = [
	{
		question: "FAQ.FAQ1",
		answer: "FAQ.faq1"
	},
	{
		question: "FAQ.FAQ2",
		answer: "FAQ.faq2"
	},
	{
		question: "FAQ.FAQ3",
		answer: "FAQ.faq3"
	},
	{
		question: "FAQ.FAQ4",
		answer: "FAQ.faq4"
	},
	{
		question: "FAQ.FAQ5",
		answer: "FAQ.faq5"
	},
	{
		question: "FAQ.FAQ6",
		answer: "FAQ.faq6"
	},
	{
		question: "FAQ.FAQ7",
		answer: "FAQ.faq7"
	}
];

export default function Faqs() {
	const [expanded, setExpanded] = React.useState(false);
	const { t, i18n } = useTranslation();
	const isRTL = i18n.dir() === "rtl";

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<Container>
			<Row>
				<div
					style={{
						padding: "20px",
						maxWidth: "800px",
						margin: "0 auto",
						color: "#f5f5f5",
						borderRadius: 8,
						direction: isRTL ? "rtl" : "ltr"
					}}
				>
					{FAQ.map((item, index) => (
						<Accordion
							key={index}
							expanded={expanded === index}
							onChange={handleChange(index)}
							sx={{
								mb: 2,
								"&:before": {
									display: "none"
								},
								borderRadius: 2,
								boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
							}}
						>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon style={{ color: "#041c94" }} />}
								aria-controls={`faq${index}-content`}
								id={`faq${index}-header`}
								sx={{
									minHeight: 56,
									"& .MuiAccordionSummary-content": {
										margin: "12px 0"
									}
								}}
							>
								<Typography variant="body1" sx={{ fontWeight: 700, color: "#1c222c" }}>
									{t(item.question)}
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography
									sx={{ color: "#000000" }}
									dangerouslySetInnerHTML={{ __html: t(item.answer) }}
								/>
							</AccordionDetails>
						</Accordion>
					))}
				</div>
			</Row>
		</Container>
	);
}
