import React from "react";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const WhoShouldUse = () => {
	const { t, i18n } = useTranslation();
	const isRtl = i18n.language === "fa" || i18n.language === "farshi";

	return (
		<Box
			dir={isRtl ? "rtl" : "ltr"}
			sx={{
				pb: { xs: 8, md: 4 },
                pt: { xs: 8, md: 8 },
				px: { xs: 3, md: 6 },
				backgroundColor: "#f9f9f9"
			}}
		>
			<Container>
				<Grid container spacing={6} alignItems="center">
					<Grid item xs={12} md={6}>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center"
							}}
						>
							<Box
								component="img"
								src="/Chatting1.svg"
								alt="RelaySMS Bridges Communication"
								sx={{
									width: "100%",
									height: "auto",
									objectFit: "contain"
								}}
							/>
						</Box>
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography
							variant="h3"
							sx={{
								fontSize: {md: "2rem", xs: "1.5rem"},
								color: "#2D2A5A",
								fontWeight: 700,
								fontFamily: "'Unbounded', Ubuntu",
								mb: 3
							}}
						>
							{t("WhoShouldUse.Header", "Who should use RelaySMS?")}
						</Typography>
						<Typography
							variant="body1"
							sx={{
								fontSize: "1.1rem",
								color: "#555555",
								fontFamily: "Ubuntu",
								lineHeight: 1.7,
								mb: 4
							}}
						>
							{t(
								"WhoShouldUse.Description",
								"Anyone experiencing poor internet connectivity or living in a region prone to internet shutdowns should use RelaySMS to circumvent shutdowns and stay connected. The majority of RelaySMS users currently live in Africa and India—but the app is available for use all around the world. Users can download the app for Android in Google Play or iOS in the App Store."
							)}
						</Typography>

						<Box sx={{ mb: 4 }}>
							<Typography
								variant="h6"
								sx={{
									fontSize: "1.2rem",
									color: "#2D2A5A",
									fontWeight: 600,
									fontFamily: "'Unbounded', Ubuntu",
									mb: 2
								}}
							>
								{t("HowRelaySMSWorks.TrainingTitle", "Download Training Guides")}
							</Typography>
							<Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", sm: "row" } }}>
								<Button
									variant="contained"
									href="/RelaySMS Training Guide Flyer (English).pdf"
									target="_blank"
									rel="noopener noreferrer"
									startIcon={<FontAwesomeIcon icon={faFilePdf} />}
									sx={{
										bgcolor: "#FF9E43",
										color: "#000158",
										textTransform: "none",
										fontWeight: 600,
										py: 1,
										px: 3,
										fontSize: "14px",
										transition: "all 0.3s ease",
										border: "1px solid #000158",
										borderRadius: "8px",
										"&:hover": {
											backgroundColor: "#000158",
											color: "#ffffffff",
											borderColor: "#FF9E43",
											transform: "translateY(-2px)",
											boxShadow: "0 8px 20px rgba(0, 1, 88, 0.3)"
										}
									}}
								>
									{t("HowRelaySMSWorks.EnglishPDF", "English Guide (PDF)")}
								</Button>
								<Button
									variant="contained"
									href="/RelaySMS Training Guide Flyer (Français).pdf"
									target="_blank"
									rel="noopener noreferrer"
									startIcon={<FontAwesomeIcon icon={faFilePdf} />}
									sx={{
										bgcolor: "#000158",
										color: "#ffffffff",
										textTransform: "none",
										fontWeight: 600,
										py: 1,
										px: 3,
										fontSize: "14px",
										transition: "all 0.3s ease",
										border: "1px solid #f7c99eff",
										borderRadius: "8px",
										"&:hover": {
											backgroundColor: "#FF9E43",
											color: "#000158",
											borderColor: "#000158",
											transform: "translateY(-2px)",
											boxShadow: "0 8px 20px rgba(255, 158, 67, 0.3)"
										}
									}}
								>
									{t("HowRelaySMSWorks.FrenchPDF", "French Guide (PDF)")}
								</Button>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default WhoShouldUse;
