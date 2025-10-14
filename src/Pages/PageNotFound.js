import { Box, Typography, Button, Container, Stack } from "@mui/material";
import React from "react";
import { FaArrowRight, FaHouse } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { useLanguageLink } from "../hooks/useLanguageLink";

export default function PageNotFound() {
	const { t, i18n } = useTranslation();
	const { getLanguageLink } = useLanguageLink();

	const isRtl = i18n.language === "fa" || i18n.language === "farshi";

	return (
		<Box
			dir={isRtl ? "rtl" : "ltr"}
			sx={{
				minHeight: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center"
			}}
		>
			<Container maxWidth="md">
				<Stack alignItems="center" textAlign="center" sx={{ py: 8 }}>
					<Typography
						sx={{
							fontSize: { xs: "8rem", sm: "12rem", md: "16rem" },
							fontWeight: 900,
							lineHeight: 0.8,
							fontFamily: "'Unbounded', 'Ubuntu', sans-serif",
							mb: 6
						}}
					>
						404
					</Typography>

					<Typography
						variant="h3"
						sx={{
							fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
							fontWeight: 600,
							fontFamily: "'Unbounded', 'Ubuntu', sans-serif",
							mb: 2
						}}
					>
						{t("404.title", "Oops! Page Not Found")}
					</Typography>

					<Typography
						variant="h6"
						sx={{
							fontSize: { xs: "1rem", sm: "1.25rem" },
							maxWidth: "600px",
							lineHeight: 1.6,
							mb: 4
						}}
					>
						{t(
							"404.description",
							"The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL."
						)}
					</Typography>

					<Button
						component="a"
						href={getLanguageLink("/")}
						variant="contained"
						size="large"
						startIcon={<FaHouse />}
						sx={{
							bgcolor: "#FF9E43",
							color: "#000158",
							fontWeight: 600,
							py: 1.5,
							px: 4,
							fontSize: "1rem",
							borderRadius: "50px",
							textTransform: "none",
							boxShadow: "0 8px 24px rgba(255, 158, 67, 0.4)",
							transition: "all 0.3s ease",
							"&:hover": {
								bgcolor: "#000158",
								color: "#fdf1e6ff",
								transform: "translateY(-2px)",
								boxShadow: "0 12px 32px rgba(255, 158, 67, 0.6)"
							}
						}}
					>
						{t("404.homeButton", "Go Back Home")}
					</Button>

					<Button
						onClick={() => window.history.back()}
						variant="outlined"
						size="large"
						startIcon={<FaArrowRight style={{ transform: "rotate(180deg)" }} />}
						sx={{
							color: "white",
							borderColor: "rgba(255, 255, 255, 0.5)",
							fontWeight: 600,
							py: 1.5,
							px: 4,
							fontSize: "1.1rem",
							borderRadius: "50px",
							textTransform: "none",
							transition: "all 0.3s ease",
							"&:hover": {
								borderColor: "white",
								bgcolor: "rgba(255, 255, 255, 0.1)",
								transform: "translateY(-2px)"
							}
						}}
					>
						{t("404.backButton", "Go Back")}
					</Button>
				</Stack>
			</Container>
		</Box>
	);
}
