import React from "react";
import { Box, Grid, Typography, Button, Link, useTheme, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

const steps = [
	{
		number: "01",
		title: "Download the App",
		description: (
			<>
				Download the RelaySMS App from{" "}
				<Link
					href="https://play.google.com/store/apps/details?id=com.afkanerd.sw0b"
					target="_blank"
					rel="noopener noreferrer"
				>
					Google PlayStore
				</Link>
				,{" "}
				<Link
					href="https://github.com/smswithoutborders/RelaySMS-Android"
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub
				</Link>
				, or{" "}
				<Link
					href="https://play.google.com/store/apps/details?id=com.afkanerd.sw0b"
					target="_blank"
					rel="noopener noreferrer"
				>
					build it from source
				</Link>
				. Ensure your Android device meets the technical requirements (Android 6.0+ with SMS
				capability).
			</>
		),
		buttonText: "Get Started",
		imgSrc: "/Download.png"
	},
	{
		number: "02",
		title: "Create an Account",
		description:
			"Create an account by clicking 'Add Account,' and filling in the required details. An authentication PIN will be sent to your phone for verification.",
		buttonText: "Learn More",
		imgSrc: "/Login.png"
	},
	{
		number: "03",
		title: "Save Platforms",
		description:
			"Save access to platforms while connected to the internet. Add your credentials to platforms supported by RelaySMS and prepare them for offline use.",
		buttonText: "Set Up Now",
		imgSrc: "/saveplatform.png"
	},
	{
		number: "04",
		title: "Configure a Gateway",
		description:
			"Choose a Gateway Client for sending SMS. You can select from pre-configured clients or set up a custom client by adding the gateway number to your contacts.",
		buttonText: "Configure Gateway",
		imgSrc: "/Gateway.png"
	},
	{
		number: "05",
		title: "Send Messages",
		description:
			"Compose messages for supported platforms without internet. Send these as SMS to a pre-saved gateway number, ensuring encrypted communication.",
		buttonText: "Start Messaging",
		imgSrc: "/text.png"
	}
];

export default function StepsDesign() {
	const { t } = useTranslation();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<Box sx={{ width: "100%", backgroundColor: "#EBE4D8", py: 4 }}>
			<Box sx={{ maxWidth: 1300, mx: "auto", px: 2 }}>
				<Typography
					variant="h4"
					align="center"
					sx={{ mb: 2, fontWeight: "bold", color: "#1e2a78" }}
				>
					{t("Howitworks.Header", "Getting Started with RelaySMS")}
				</Typography>
				<Typography variant="subtitle1" align="center" sx={{ mb: 6, color: "#555" }}>
					{t(
						"Howitworks.SubHeader",
						"Learn how to set up and use RelaySMS for seamless offline communication."
					)}
				</Typography>

				{steps.map((step, index) => {
					const isEven = index % 2 === 0;

					return (
						<Grid
							container
							key={step.number}
							spacing={4}
							alignItems="center"
							sx={{
								flexDirection: isMobile ? "column" : isEven ? "row" : "row-reverse",
								textAlign: isMobile ? "center" : "left",
								mb: 8
							}}
						>
							<Grid item xs={12} sm={6} sx={{ display: "flex", justifyContent: "center" }}>
								<Box
									sx={{
										width: isMobile ? 300 : "100%",
										height: 250,
										overflow: "hidden",
										borderRadius: 1
									}}
								>
									<img
										src={step.imgSrc}
										alt={step.title}
										style={{ width: "100%", height: "100%", objectFit: "contain" }}
									/>
								</Box>
							</Grid>

							<Grid
								item
								xs={12}
								sm={6}
								sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
							>
								{!isMobile && (
									<Box
										sx={{
											display: "flex",
											flexDirection: "row",
											alignItems: "flex-start",
											gap: 2
										}}
									>
										<Box sx={{ display: "flex", alignItems: "center" }}>
											<Typography
												variant="caption"
												sx={{
													writingMode: "vertical-rl",
													textOrientation: "upright",
													color: "#555",
													letterSpacing: 1.5,
													fontWeight: "bold",
													fontSize: "0.75rem",
													whiteSpace: "nowrap",
													mr: 2
												}}
											>
												{step.title.toUpperCase()}
											</Typography>

											<Box
												sx={{
													width: 2,
													bgcolor: "#bbb",
													mr: 2,
													flexGrow: 1,
													alignSelf: "stretch",
													minHeight: 0
												}}
											/>

											<Typography
												variant="h4"
												sx={{
													fontWeight: "bold",
													color: "#1e2a78",
													minWidth: 20,
													alignSelf: "flex-start",
													mt: -1
												}}
											>
												{step.number}
											</Typography>
										</Box>

										<Box sx={{ pl: 2, mt: 14, maxWidth: 400 }}>
											<Typography variant="h6" sx={{ fontWeight: 600, color: "#1e2a78", mb: 1 }}>
												{step.title}
											</Typography>

											<Typography
												variant="body2"
												color="text.secondary"
												sx={{ mb: 2, lineHeight: 1.5 }}
											>
												{step.description}
											</Typography>

											<Button
												variant="contained"
												color="primary"
												size="small"
												sx={{
													px: 2,
													py: 0.5,
													fontSize: "0.75rem",
													minWidth: 120,
													textTransform: "none"
												}}
											>
												{step.buttonText}
											</Button>
										</Box>
									</Box>
								)}

								{isMobile && (
									<Box sx={{ mt: 2 }}>
										<Typography variant="h6" sx={{ fontWeight: 600, color: "#1e2a78", mb: 1 }}>
											{step.title}
										</Typography>
										<Typography
											variant="body2"
											color="text.secondary"
											sx={{ mb: 2, lineHeight: 1.5 }}
										>
											{step.description}
										</Typography>
										<Button
											variant="contained"
											color="primary"
											size="small"
											sx={{
												px: 2,
												py: 0.5,
												fontSize: "0.75rem",
												minWidth: 120,
												textTransform: "none"
											}}
										>
											{step.buttonText}
										</Button>
									</Box>
								)}
							</Grid>
						</Grid>
					);
				})}
			</Box>
		</Box>
	);
}
