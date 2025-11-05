import React from "react";
import { Box, Typography, Container, Grid, Button, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FaExternalLinkAlt } from "react-icons/fa";

const WhoShouldUse = () => {
	const { t, i18n } = useTranslation();
	const isRtl = i18n.language === "fa" || i18n.language === "farshi";

	const renderTextWithStrikethrough = (text) => {
		const parts = text.split(/(<strike>.*?<\/strike>)/g);
		return parts.map((part, index) => {
			if (part.startsWith("<strike>") && part.endsWith("</strike>")) {
				const strikethroughText = part.replace(/<\/?strike>/g, "");
				return (
					<Box key={index} component="span" sx={{ textDecoration: "line-through", opacity: 0.6 }}>
						{strikethroughText}
					</Box>
				);
			}
			return part;
		});
	};

	return (
		<Box
			dir={isRtl ? "rtl" : "ltr"}
			sx={{
				pb: { xs: 8, md: 4 },
				pt: { xs: 8, md: 8 },
				px: { xs: 1.5, md: 6 }
			}}
		>
			<Container>
				<Grid container spacing={4} alignItems="stretch">
					<Grid item xs={12} md={6}>
						<Paper
							elevation={0}
							sx={{ p: 4, backgroundColor: "#f8f9fa", border: "1px solid #e9ecef", height: "100%" }}
						>
							<Box
								sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									mb: 3
								}}
							>
								<Box
									component="img"
									src="/flow.png"
									alt="How RelaySMS Works"
									sx={{
										width: "100%"
									}}
								/>
							</Box>
							<Typography
								variant="h3"
								sx={{
									fontSize: { md: "1.5rem", xs: "1.25rem" },
									color: "#2D2A5A",
									fontWeight: 700,
									fontFamily: "'Unbounded', Ubuntu",
									mb: 3
								}}
							>
								{renderTextWithStrikethrough(
									t("WhoShouldUse.Header", "Everyone <strike>can</strike> should use RelaySMS")
								)}
							</Typography>
							<Typography
								variant="body1"
								sx={{
									fontSize: "18px",
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
						</Paper>
					</Grid>

					{/* Smaller cards */}
					<Grid item xs={12} md={6} sx={{ display: "flex" }}>
						<Grid
							container
							direction="column"
							spacing={4}
							sx={{
								height: "104%",
								flex: 1,
								"& .MuiGrid-item": {
									display: "flex",
									flexDirection: "column"
								}
							}}
						>
							<Grid item sx={{ flex: 1, minHeight: { md: 0, sm: "300px" } }}>
								<Paper
									elevation={0}
									sx={{
										p: 3,
										height: "100%",
										backgroundColor: "#f8f9fa",
										border: "1px solid #e9ecef",
										display: "flex",
										flexDirection: "column",
										justifyContent: "center"
									}}
								>
									<Typography
										variant="h3"
										sx={{
											fontSize: { md: "1.5rem", xs: "1.25rem" },
											color: "#2D2A5A",
											fontWeight: 700,
											fontFamily: "'Unbounded', Ubuntu",
											mb: 2
										}}
									>
										{renderTextWithStrikethrough(
											t("HowRelaySMSWorks.Header", "How the <strike>tech</strike> magic happens")
										)}
									</Typography>
									<Typography
										variant="body1"
										sx={{
											fontSize: "18px",
											color: "#555555",
											fontFamily: "Ubuntu",
											lineHeight: 1.6,
											mb: 2
										}}
									>
										{t(
											"HowRelaySMSWorks.Description1",
											'Designed by an expert team of technologists who had grown tired of internet shutdowns disrupting their ability to communicate, RelaySMS utilizes SMS messaging (aka "text messaging") to route offline messages back online.'
										)}
									</Typography>
									<Typography
										variant="body1"
										sx={{
											fontSize: "1rem",
											color: "#555555",
											fontFamily: "Ubuntu",
											lineHeight: 1.6
										}}
									>
										{t(
											"HowRelaySMSWorks.Description2",
											"After setting up RelaySMS on your phone, you can seamlessly connect and send messages on your preferred online messaging platforms without using any data at all (standard SMS rates will apply)."
										)}
									</Typography>
								</Paper>
							</Grid>

							<Grid item sx={{ flex: 1, minHeight: 0 }}>
								<Paper
									elevation={0}
									sx={{
										p: 3,
										border: "1px solid #e9ecef",
										height: "100%",
										bgcolor: "#fff5ecff",
										display: "flex",
										flexDirection: "column",
										justifyContent: "center"
									}}
								>
									<Typography
										variant="h3"
										sx={{
											fontSize: { md: "1.5rem", xs: "1.25rem" },
											color: "#2D2A5A",
											fontWeight: 700,
											fontFamily: "'Unbounded', Ubuntu",
											mb: 2
										}}
									>
										{t("GatewayClient.Header", "Setting Up a Gateway-Client")}
									</Typography>
									<Typography
										variant="body1"
										sx={{
											fontSize: "18px",
											color: "#555555",
											fontFamily: "Ubuntu",
											lineHeight: 1.6,
											mb: 3
										}}
									>
										{t(
											"GatewayClient.Description",
											"Setting up a gateway client allows you and anyone you share it with to send messages using your number. It's completely optional, but if you choose to set one up, just follow the instructions below."
										)}
									</Typography>
									<Button
										component="a"
										href="https://docs.smswithoutborders.com/docs/Gateway%20Clients%20Guide/GatewayClientsGuide"
										target="_blank"
										rel="noopener noreferrer"
										variant="text"
										sx={{
											color: "#2D2A5A",
											textTransform: "none",
											fontFamily: "Ubuntu",
											fontSize: "16px",
											alignSelf: "flex-start",
											"&:hover": {
												color: "#FF9E43"
											}
										}}
										endIcon={<FaExternalLinkAlt size={12} />}
									>
										{t("GatewayClient.ReadMore", "Read More")}
									</Button>
								</Paper>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default WhoShouldUse;
