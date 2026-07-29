import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NewsletterSubscribed = () => {
	const { t, i18n } = useTranslation();
	const isRtl = i18n.language === "fa" || i18n.language === "farshi";

	return (
		<Box
			sx={{
				background: (theme) =>
					theme.palette.mode === "dark"
						? `radial-gradient(ellipse 90% 55% at 50% -10%, rgba(77, 125, 192, 0.07) 0%, transparent 65%),
                                       linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                                       linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`
						: `radial-gradient(ellipse 90% 55% at 50% -10%, rgba(0,24,113,0.09) 0%, transparent 65%),
                                       linear-gradient(rgba(0,24,113,0.05) 1px, transparent 1px),
                                       linear-gradient(90deg, rgba(0,24,113,0.05) 1px, transparent 1px)`,
				backgroundSize: "auto, 44px 44px, 44px 44px"
			}}
		>
			<Box
				dir={isRtl ? "rtl" : "ltr"}
				sx={{
					minHeight: "95vh",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					px: 2
				}}
			>
				<Container>
					<Stack
						spacing={3}
						alignItems="center"
						textAlign="center"
						sx={{
							py: { xs: 10, md: 12 },
							px: { xs: 3, md: 4 }
						}}
					>
						<Box
							component="img"
							src="/popper.png"
							alt={t("Newsletter.successImageAlt", "Newsletter success")}
							sx={{ width: 150, height: 150 }}
						/>
						<Typography
							variant="h4"
							sx={{
								fontFamily: "'Unbounded', Ubuntu",
								fontWeight: 700,
								fontSize: { xs: "1.4rem", md: "2rem" }
							}}
						>
							{t("Newsletter.successTitle", "You've successfully subscribed!")}
						</Typography>
						<Typography
							variant="h6"
							sx={{ color: "text.secondary", maxWidth: 520, lineHeight: 1.7 }}
						>
							{t(
								"Newsletter.successHint",
								"Thanks. Please check your email to confirm your subscription."
							)}
						</Typography>
						<Button
							component={RouterLink}
							to="/"
							variant="contained"
							sx={{
								mt: 2.5,
								textTransform: "none",
								fontWeight: 600,
								fontFamily: "Unbounded",
								px: 3,
								py: 1
							}}
						>
							{t("Newsletter.awesomeButton", "Awesome!")}
						</Button>
					</Stack>
				</Container>
			</Box>
		</Box>
	);
};

export default NewsletterSubscribed;
