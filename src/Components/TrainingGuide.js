import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FaFilePdf } from "react-icons/fa";

function TrainingGuide() {
	const { t } = useTranslation();

	return (
		<Box sx={{ py: 8, bgcolor: "#f9f9f9" }}>
			<Typography
				variant="h6"
				sx={{
					fontSize: { md: "1.5rem", xs: "1.25rem" },
					color: "#2D2A5A",
					fontWeight: 600,
					fontFamily: "'Unbounded', Ubuntu",
					textAlign: "center",
					mb: 4
				}}
			>
				{t("HowRelaySMSWorks.TrainingTitle", "Download Training Guides")}
			</Typography>

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
					href="/RelaySMS Training Guide Flyer (English).pdf"
					target="_blank"
					rel="noopener noreferrer"
					startIcon={<FaFilePdf />}
					sx={{
						bgcolor: "#FF9E43",
						color: "#000158",
						textTransform: "none",
						fontWeight: 600,
						py: 1,
						px: 3,
						fontSize: "14px",
						fontFamily: "Ubuntu",
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
					startIcon={<FaFilePdf />}
					sx={{
						bgcolor: "#000158",
						color: "#ffffffff",
						textTransform: "none",
						fontWeight: 600,
						py: 1,
						px: 3,
						fontSize: "14px",
						fontFamily: "Ubuntu",
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
	);
}

export default TrainingGuide;
