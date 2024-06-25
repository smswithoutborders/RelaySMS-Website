import * as React from "react";
import {
	Typography,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	useMediaQuery,
	styled
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
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

// Styled components for enhanced design
const CustomAccordion = styled(Accordion)(({ theme }) => ({
	marginBottom: theme.spacing(2),
	borderRadius: theme.spacing(1),
	boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
	transition: "box-shadow 0.3s ease-out",

	"&:hover": {
		boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)"
	}
}));

const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	color: theme.palette.primary.contrastText,
	borderBottom: `1px solid ${theme.palette.primary.dark}`,
	borderRadius: theme.spacing(1, 1, 0, 0),

	"&.Mui-expanded": {
		minHeight: 64
	}
}));

const CustomAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
	padding: theme.spacing(2),
	borderTop: `1px solid ${theme.palette.primary.dark}`,
	borderRadius: theme.spacing(0, 0, 1, 1)
}));

export default function Faqs() {
	const [expanded, setExpanded] = React.useState(null);
	const { t } = useTranslation();
	const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : null);
	};

	return (
		<div style={{ padding: isMobile ? "10px" : "20px", maxWidth: "800px", margin: "0 auto" }}>
			<Typography variant="h4" gutterBottom align="center">
				{t("FAQ.FAQ")}
			</Typography>
			{FAQ.map((item, index) => (
				<CustomAccordion key={index} expanded={expanded === index} onChange={handleChange(index)}>
					<CustomAccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls={`faq${index}-content`}
						id={`faq${index}-header`}
					>
						<Typography variant={isMobile ? "body1" : "subtitle1"} sx={{ fontWeight: 600 }}>
							{t(item.question)}
						</Typography>
					</CustomAccordionSummary>
					<CustomAccordionDetails>
						<Typography variant={isMobile ? "body2" : "body1"}>{t(item.answer)}</Typography>
					</CustomAccordionDetails>
				</CustomAccordion>
			))}
		</div>
	);
}
