import { Box, Container, Stack, Typography } from "@mui/material";
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
			<Stack spacing={{ xs: 4, md: 8 }}>
				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: "1fr",
						gap: 0,
						"& > div": {
							borderBottom: "1px solid",
							borderColor: "divider"
						},
						"& > div:last-of-type": {
							borderBottom: "none"
						},
						"@media (min-width:600px)": {
							gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
							"& > div": {
								borderBottom: "1px solid",
								borderRight: "1px solid",
								borderColor: "divider"
							},
							"& > div:nth-of-type(3n)": {
								borderRight: "none"
							},
							"& > div:nth-last-of-type(-n+3)": {
								borderBottom: "none"
							}
						}
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
										p: 3
										// "&:hover img": {
										// 	filter: "grayscale(0%)"
										// }
									}}
								>
									<Box
										component="img"
										src={image}
										alt=""
										aria-hidden="true"
										sx={{
											width: "100%",
											height: 68,
											objectFit: "contain",
											objectPosition: "left center",
											mb: 2,
											display: "block",
											// filter: "grayscale(100%)",
											transition: "filter 0.3s ease"
										}}
									/>
									<Box>
										<Typography
											variant="h6"
											sx={{ fontFamily: "'Unbounded'", fontWeight: 600, mb: 0.5 }}
										>
											{feature.title}
										</Typography>
										<Typography sx={{ color: "text.secondary", lineHeight: 1.65 }}>
											{feature.description}
										</Typography>
									</Box>
								</Box>
							);
						})}
				</Box>
			</Stack>
		</Container>
	);
}

export default RelayFeatures;
