import * as React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";

const FAQ = [
	{
		question: "FAQ1",
		answer: "faq1"
	},
	{
		question: "FAQ2",
		answer: "faq2"
	},
	{
		question: "FAQ3",
		answer: "faq3"
	},
	{
		question: "FAQ4",
		answer: "faq4"
	},
	{
		question: "FAQ5",
		answer: "faq5"
	}
];

export default function Faqs() {
	const [expanded, setExpanded] = React.useState(0);
	const { t } = useTranslation();

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<div style={{ padding: "20px", marginBottom: "20px", maxWidth: "800px", margin: "0 auto" }}>
			<h1>FAQ</h1>
			{FAQ.map((item, index) => (
				<Accordion
					key={index}
					expanded={expanded === index}
					onChange={handleChange(index)}
					sx={{
						mb: 2,
						backgroundColor: "hsl(243, 87%, 12%)",
						boxShadow: expanded === index ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : "none",
						borderRadius: 8,
						color: "white"
					}}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls={`faq${index}-content`}
						id={`faq${index}-header`}
						sx={{
							minHeight: 64,
							"& .MuiAccordionSummary-content": {
								margin: "12px 0"
							}
						}}
					>
						<Typography variant="body1" sx={{ fontWeight: 700, color: "white" }}>
							{t(item.question)}
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>{t(item.answer)}</Typography>
					</AccordionDetails>
				</Accordion>
			))}
		</div>
	);
}
