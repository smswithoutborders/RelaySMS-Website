import * as React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
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
	}
];

export default function Faqs() {
	const [expanded, setExpanded] = React.useState(false);
	const { t } = useTranslation();

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<div style={{ padding: "20px", maxWidth: "100%", margin: "0 auto" }}>
			{FAQ.map((item, index) => (
				<Accordion
					key={index}
					expanded={expanded === index}
					onChange={handleChange(index)}
					sx={{
						mb: 2,
						// backgroundColor: "hsl(243, 87%, 12%)",
						boxShadow: expanded === index ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : "none",
						borderRadius: 2,
						color: "#041c94",
						"&:before": {
							display: "none"
						}
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
						<Typography sx={{ color: "#000000" }}>{t(item.answer)}</Typography>
					</AccordionDetails>
				</Accordion>
			))}
		</div>
	);
}
