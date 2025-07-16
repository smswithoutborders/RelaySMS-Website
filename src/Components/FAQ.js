import React from "react";
import {
	Box,
	Typography,
	useTheme,
	useMediaQuery,
	Accordion,
	AccordionSummary,
	AccordionDetails
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";
import ReactHtmlParser from "react-html-parser";

const FAQSection = ({ isFarsi }) => {
	const { t } = useTranslation();
	const theme = useTheme();
	const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

	const faqs = [
		{
			question: t("Faq.faq1.question"),
			answer: ReactHtmlParser(t("Faq.faq1.answer"))
		},
		{
			question: t("Faq.faq2.question"),
			answer: ReactHtmlParser(t("Faq.faq2.answer"))
		},
		{
			question: t("Faq.faq3.question"),
			answer: ReactHtmlParser(t("Faq.faq3.answer"))
		},
		{
			question: t("Faq.faq4.question"),
			answer: ReactHtmlParser(t("Faq.faq4.answer"))
		},
		{
			question: t("Faq.faq5.question"),
			answer: ReactHtmlParser(
				t("Faq.faq5.answer").replace(
					/<a /g,
					"<a style='color:#1E2A78; text-decoration: underline;' "
				)
			)
		}
	];

	return (
		<Box
			id="faq"
			sx={{
				py: { xs: 10, md: 14 },
				px: { xs: 3, md: 8 },
				backgroundColor: "rgb(241, 241, 234)",
				fontFamily: "'Unbounded', 'Ubuntu', sans-serif",
				direction: isFarsi ? "rtl" : "ltr"
			}}
		>
			<Typography
				variant={isMdUp ? "h3" : "h4"}
				align="center"
				sx={{
					fontWeight: 700,
					color: "#1e2a78",
					mb: 6,
					letterSpacing: 1
				}}
			>
				{t("Faq.faqTitle")}
			</Typography>

			<Box maxWidth="1200px" mx="auto">
				{faqs.map(({ question, answer }, idx) => (
					<Accordion
						key={idx}
						sx={{
							mb: 2,
							borderRadius: 2,
							boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
							bgcolor: "#fff",
							overflow: "hidden",
							"&:before": {
								display: "none"
							}
						}}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon sx={{ color: "#FF9E43" }} />}
							aria-controls={`faq-content-${idx}`}
							id={`faq-header-${idx}`}
							sx={{
								px: 3,
								py: 2,
								"&.Mui-expanded": {
									minHeight: 56
								},
								"& .MuiAccordionSummary-content": {
									margin: 0,
									alignItems: "center",
									display: "flex",
									gap: 1
								},
								"& .MuiAccordionSummary-content.Mui-expanded": {
									margin: "12px 0",
									display: "flex",
									gap: 1
								}
							}}
						>
							<Typography
								variant="h6"
								sx={{
									fontWeight: 600,
									color: "#2F3C79",
									fontSize: "1rem"
								}}
							>
								{question}
							</Typography>
						</AccordionSummary>
						<AccordionDetails
							sx={{
								px: 3,
								py: 2,
								color: "#555",
								fontFamily: "'Mona Sans', 'Ubuntu', sans-serif",
								fontSize: "0.95rem",
								lineHeight: 1.7
							}}
						>
							{answer}
						</AccordionDetails>
					</Accordion>
				))}
			</Box>

			<Box textAlign="center" mt={6}>
				<Typography variant="body1" sx={{ color: "#555", mb: 2 }}>
					{t("Faq.contact.didn't")}
				</Typography>
				<Typography
					component="a"
					href="/Contact_Us"
					sx={{
						color: "#FF9E43",
						fontWeight: "bold",
						textDecoration: "none",
						"&:hover": {
							textDecoration: "underline"
						}
					}}
				>
					{t("Faq.contact.Contant Us")}
				</Typography>
			</Box>
		</Box>
	);
};

export default FAQSection;
