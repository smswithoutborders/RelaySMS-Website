import React from "react";
import { Box, Typography, Paper, Divider, Button, Grid } from "@mui/material";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import ReactHtmlParser from "react-html-parser";

const FAQSection = ({ isFarsi }) => {
	const { t, i18n } = useTranslation();
	const isRtl = i18n.language === "fa" || i18n.language === "farshi";

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
		}
	];

	return (
		<Box
			dir={isRtl ? "rtl" : "ltr"}
			id="faq"
			sx={{
				py: { xs: 10, md: 14 },
				px: { xs: 2, md: 8 },
				fontFamily: "'Unbounded', 'Ubuntu', sans-serif",
				direction: isFarsi ? "rtl" : "ltr"
			}}
		>
			<Box
				sx={{
					textAlign: "center",
					mb: 8
				}}
			>
				<Typography
					variant="h3"
					sx={{
						fontSize: { md: "2rem", xs: "1.5rem" },
						color: "#2D2A5A",
						fontFamily: "'Unbounded', Ubuntu"
					}}
				>
					{t("Faq.faqTitle", "Frequently Asked Questions")}
				</Typography>
				<Typography
					variant="body1"
					sx={{
						fontSize: "1.2rem",
						color: "#555555",
						fontFamily: "Ubuntu",
						mt: 1
					}}
				>
					{t(
						"Faq.SubHeader",
						"Find answers to the most common questions about RelaySMS and how it works."
					)}
				</Typography>
			</Box>

			<Grid container spacing={4} sx={{ maxWidth: "1200px", mx: "auto", width: "100%" }}>
				<Grid item xs={12} md={8}>
					<Box sx={{ width: "100%", overflow: "hidden" }}>
						{faqs.map(({ question, answer }, idx) => (
							<Box key={idx}>
								<Typography
									variant="h6"
									sx={{
										fontWeight: 700,
										color: "#2D2A5A",
										fontSize: { xs: "1.1rem", md: "1.2rem" },
										fontFamily: "'Unbounded', Ubuntu",
										mb: 2,
										lineHeight: 1.4
									}}
								>
									{question}
								</Typography>

								<Typography
									variant="body1"
									sx={{
										color: "#555",
										fontFamily: "Ubuntu",
										fontSize: "1rem",
										lineHeight: 1.7,
										mb: 3,
										width: "100%",
										overflowWrap: "break-word",
										wordBreak: "break-word",
										"& a": {
											color: "#FF9E43",
											textDecoration: "underline",
											"&:hover": {
												color: "#d65500"
											}
										}
									}}
								>
									{answer}
								</Typography>

								{idx < faqs.length - 1 && (
									<Divider
										sx={{
											my: 4,
											borderColor: "#e0e0e0"
										}}
									/>
								)}
							</Box>
						))}
					</Box>
				</Grid>

				<Grid item xs={12} md={4}>
					<Paper
						elevation={0}
						sx={{
							px: { xs: 3, md: 4 },
							py: { xs: 4, md: 10 },
							backgroundColor: "#f8f9fa",
							border: "1px solid #e9ecef",
							height: "fit-content",
							position: { xs: "static", md: "sticky" },
							width: "100%",
							boxSizing: "border-box"
						}}
					>
						<Typography
							variant="h6"
							sx={{
								fontWeight: 600,
								color: "#2D2A5A",
								fontSize: { xs: "1rem", md: "1.1rem" },
								fontFamily: "'Unbounded', Ubuntu",
								mb: 2,
								lineHeight: 1.3,
								overflowWrap: "break-word",
								wordBreak: "break-word"
							}}
						>
							{t("Faq.support.header")}
						</Typography>

						<Box sx={{ mb: 3 }}>
							<Button
								component="a"
								href="https://docs.smswithoutborders.com/docs/Troubleshooting/Troubleshooting-FAQ"
								target="_blank"
								rel="noopener noreferrer"
								endIcon={<FaExternalLinkAlt size={12} />}
								sx={{
									display: "flex",
									justifyContent: "flex-start",
									alignItems: "center",
									color: "#555555",
									textTransform: "none",
									fontSize: "1rem",
									fontFamily: "Ubuntu",
									p: 0,
									mb: 2,
									"&:hover": {
										backgroundColor: "transparent",
										color: "#FF9E43"
									}
								}}
							>
								{t("Faq.support.troubleshootingGuide")}
							</Button>
						</Box>

						<Box>
							<Typography
								variant="body1"
								sx={{
									color: "#2D2A5A",
									fontFamily: "Unbounded, Ubuntu",
									fontWeight: 600,
									fontSize: "1rem",
									mb: 1,
									mt: 6
								}}
							>
								{t("Faq.support.mailSupport")}
							</Typography>
							<Button
								component="a"
								href="mailto:developers@smswithoutborders.com"
								sx={{
									display: "flex",
									justifyContent: "flex-start",
									alignItems: "center",
									color: "#555555",
									textTransform: "none",
									fontSize: "1rem",
									fontFamily: "Ubuntu",
									p: 0,
									"&:hover": {
										backgroundColor: "transparent",
										color: "#FF9E43"
									}
								}}
							>
								developers@smswithoutborders.com
							</Button>
						</Box>
					</Paper>
				</Grid>
			</Grid>
		</Box>
	);
};

export default FAQSection;
