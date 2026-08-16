import { Box, Container, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const featureImages = [
	"/no-account.svg",
	"/encrypted_messages_illus.svg",
	"/social_platforms_illus.svg",
	"/onboard_complete.svg",
	"/locked.png",
    "/attachments.svg"
];

function RelayFeatures() {
	const { t, i18n } = useTranslation();
	const isRtl = i18n.language === "fa" || i18n.language === "farshi";
	const features = t("RelayFeatures.items", { returnObjects: true });

	return (
		<Container maxWidth="lg" dir={isRtl ? "rtl" : "ltr"} sx={{ py: { xs: 7, md: 10 } }}>
			<Grid container spacing={{ xs: 4, md: 8 }} alignItems="flex-start">
				<Grid item xs={12} md={12}>
					<Typography
						variant="h2"
						sx={{
							fontSize: { xs: "1.8rem", md: "2rem" },
							fontFamily: "'Unbounded', Ubuntu",
							fontWeight: 700,
							lineHeight: 1.25,
                            textAlign: "center",
							mb: 2
						}}
					>
						{t("RelayFeatures.Header", "Made for private, resilient communication")}
					</Typography>
					<Typography sx={{ color: "text.secondary", fontFamily: "Ubuntu", lineHeight: 1.75, textAlign: "center", maxWidth: 700, mx: "auto" }}>
						{t(
							"RelayFeatures.Description",
							"RelaySMS is designed to keep your communication in your hands before, during, and after a shutdown."
						)}
					</Typography>
				</Grid>
				<Grid item xs={12} md={12}>
					<Box
						sx={{
							display: "grid",
							gridTemplateColumns: { xs: "1fr", sm: "repeat(3, minmax(0, 1fr))" },
							gap: 2
						}}
					>
						{Array.isArray(features) &&
							features.map((feature, index) => {
								const image = featureImages[index];
								return (
									<Box
										key={feature.title}
										sx={{
											minHeight: 176,
											p: 2.5,
											border: "1px solid",
											borderColor: "divider",
											borderRadius: "2px",
											bgcolor: "background.paper",
											transition: "border-color 0.2s ease, transform 0.2s ease",
											"&:hover": {
												borderColor: "secondary.main",
												transform: "translateY(-3px)"
											}
										}}
									>
										<Box
											component="img"
											src={image}
											alt=""
											aria-hidden="true"
											sx={{
												width: "100%",
												height: 78,
												objectFit: "contain",
												objectPosition: "left center",
												mb: 2,
												display: "block"
											}}
										/>
										<Box>
											<Typography sx={{ fontFamily: "'Unbounded', Ubuntu", fontWeight: 600, mb: 0.5 }}>
												{feature.title}
											</Typography>
											<Typography sx={{ color: "text.secondary", fontFamily: "Ubuntu", lineHeight: 1.65 }}>
												{feature.description}
											</Typography>
										</Box>
									</Box>
								);
							})}
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
}

export default RelayFeatures;