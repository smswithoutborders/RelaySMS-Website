import { Box, Container, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import NewsletterForm from "../Components/NewsletterForm";

const NewsletterConfirmationError = () => {
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
					minHeight: "75vh",
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
							py: { xs: 8, md: 10 },
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
								fontSize: { xs: "1.25rem", md: "1.8rem" }
							}}
						>
							{t(
								"Newsletter.confirmationErrorTitle",
								"This confirmation link has expired or has already been used."
							)}
						</Typography>
						<Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
							{t(
								"Newsletter.confirmationErrorBody",
								"Try subscribing again below and we will send you a fresh confirmation email."
							)}
						</Typography>
						<NewsletterForm
							showHeading={false}
							
							adaptiveButtonContrast
							sx={{ width: "100%", maxWidth: 520, pt: 1 }}
						/>
					</Stack>
				</Container>
			</Box>
		</Box>
	);
};

export default NewsletterConfirmationError;
