import React from "react";
import { Box, Button, Typography, Container, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FaFilePdf } from "react-icons/fa";
import EnglishPDF from "../assets/RelaySMS Training Guide Flyer (English).pdf";
import FrenchPDF from "../assets/RelaySMS Training Guide Flyer (Français).pdf";

function TrainingGuide() {
	const { t } = useTranslation();

	return (
		<Container maxWidth="lg" sx={{ py: { xs: 6, md: 12 }, textAlign: "center" }}>
			<Grid container spacing={4} justifyContent="center">
				<Grid item xs={12} md={6}>
					<Typography
						variant="h6"
						sx={{
							fontSize: { xs: "1.5rem", md: "1.9rem" },
							color: "text.primary",
							fontWeight: 600,
							fontFamily: "'Unbounded', Ubuntu",
							textAlign: "center",
							mb: 4
						}}
					>
						{t("HowRelaySMSWorks.TrainingTitle", "Download Training Guides")}
					</Typography>
				</Grid>
				<Grid item xs={12} md={6}>
					<Box
						sx={{
							display: "flex",
							gap: 2,
							flexDirection: { xs: "column", sm: "row" },
							justifyContent: "center",
							alignItems: "center"
						}}
					>
						<Button
							variant="contained"
							href={EnglishPDF}
							target="_blank"
							rel="noopener noreferrer"
							startIcon={<FaFilePdf />}
							sx={{
								bgcolor: "secondary.main",
								color: "primary.contrastText",
								textTransform: "none",
								fontWeight: 600,
								py: 1,
								px: 3,
								fontSize: "14px",
								fontFamily: "Ubuntu",
								transition: "all 0.3s ease",
								borderRadius: "8px",
								"&:hover": {
									bgcolor: "primary.main",
									color: "primary.contrastText",
									borderColor: "secondary.main",
									transform: "translateY(-2px)",
									boxShadow: "0 8px 20px rgba(0, 1, 88, 0.3)"
								}
							}}
						>
							{t("HowRelaySMSWorks.EnglishPDF", "English Guide (PDF)")}
						</Button>
						<Button
							variant="contained"
							href={FrenchPDF}
							target="_blank"
							rel="noopener noreferrer"
							startIcon={<FaFilePdf />}
							sx={{
								bgcolor: "primary.main",
								color: "primary.contrastText",
								textTransform: "none",
								fontWeight: 600,
								py: 1,
								px: 3,
								fontSize: "14px",
								fontFamily: "Ubuntu",
								transition: "all 0.3s ease",
								borderRadius: "8px",
								"&:hover": {
									bgcolor: "secondary.main",
									color: "primary.main",
									borderColor: "primary.main",
									transform: "translateY(-2px)",
									boxShadow: "0 8px 20px rgba(255, 158, 67, 0.3)"
								}
							}}
						>
							{t("HowRelaySMSWorks.FrenchPDF", "French Guide (PDF)")}
						</Button>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
}

export default TrainingGuide;
