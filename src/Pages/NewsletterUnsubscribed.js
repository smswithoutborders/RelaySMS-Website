import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NewsletterUnsubscribed = () => {
	const { t, i18n } = useTranslation();
	const isRtl = i18n.language === "fa" || i18n.language === "farshi";

	return (
		<Box
			dir={isRtl ? "rtl" : "ltr"}
			sx={{
				minHeight: "70vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				px: 2
			}}
		>
			<Container maxWidth="sm">
				<Stack
					spacing={2}
					alignItems="center"
					textAlign="center"
					sx={{
						py: { xs: 9, md: 11 },
						px: { xs: 3, md: 4 },
						border: "1px solid",
						borderColor: "divider",
						bgcolor: "background.paper"
					}}
				>
					<Typography
						variant="h4"
						sx={{
							fontFamily: "'Unbounded', Ubuntu",
							fontWeight: 700,
							fontSize: { xs: "1.25rem", md: "1.9rem" }
						}}
					>
						{t("Newsletter.unsubscribedTitle", "You have unsubscribed from this list.")}
					</Typography>
					<Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
						{t(
							"Newsletter.unsubscribedBody",
							"You will no longer receive emails from this newsletter."
						)}
					</Typography>
					<Button
						component={RouterLink}
						to="/"
						variant="contained"
						sx={{ mt: 1, textTransform: "none", fontWeight: 600, px: 3, py: 1 }}
					>
						{t("Newsletter.backHome", "Back to home")}
					</Button>
				</Stack>
			</Container>
		</Box>
	);
};

export default NewsletterUnsubscribed;
