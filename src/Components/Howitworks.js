import React from "react";
import { Box, Grid, Typography, Button, Link, useTheme, useMediaQuery } from "@mui/material";

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
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<Box sx={{ width: "100%", mx: "auto", mt: 4, px: 2 }}>
			<Typography variant="h4" align="center" sx={{ mb: 2, fontWeight: "bold", color: "#1e2a78" }}>
				Getting Started with RelaySMS
			</Typography>
			<Typography variant="subtitle1" align="center" sx={{ mb: 6, color: "#555" }}>
				Learn how to set up and use RelaySMS for seamless offline communication.
			</Typography>

			{steps.map((step) => (
				<Grid
					container
					spacing={3}
					alignItems="center"
					key={step.number}
					sx={{
						mb: 6,
						flexDirection: isMobile ? "column" : "row",
						textAlign: isMobile ? "center" : "left",
						justifyContent: isMobile ? "center" : "flex-start"
					}}
				>
					{/* Left side: vertical word, vertical line, number */}
					{!isMobile && (
						<Grid
							item
							xs={2}
							sx={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "flex-start",
								gap: 1,
								pr: 2
							}}
						>
							{/* Vertical Word */}
							<Typography
								variant="caption"
								sx={{
									writingMode: "vertical-rl",
									textOrientation: "upright",
									color: "#555",
									letterSpacing: 1.5,
									userSelect: "none",
									fontWeight: "bold",
									fontSize: "0.75rem",
									whiteSpace: "nowrap"
								}}
							>
								{step.title.toUpperCase()}
							</Typography>

							{/* Vertical Line */}
							<Box
								sx={{
									width: 2,
									height: 60,
									bgcolor: "#bbb"
								}}
							/>

							{/* Number */}
							<Typography variant="h4" sx={{ fontWeight: "bold", color: "#1e2a78", minWidth: 40 }}>
								{step.number}
							</Typography>
						</Grid>
					)}

					{/* Text content - Title, Description, Button (before image) */}
					<Grid
						item
						xs={12}
						sm={isMobile ? 12 : 6}
						sx={{
							mt: isMobile ? 2 : 0,
							textAlign: isMobile ? "center" : "left"
						}}
					>
						<Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: "#1e2a78" }}>
							{step.title}
						</Typography>
						<Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5, mb: 2 }}>
							{step.description}
						</Typography>
						<Button
							variant="contained"
							color="primary"
							size="small"
							sx={{ mx: isMobile ? "auto" : 0, display: "block" }}
						>
							{step.buttonText}
						</Button>
					</Grid>

					{/* Image */}
					<Grid
						item
						xs={12}
						sm={isMobile ? 12 : 4}
						sx={{
							width: "100%",
							height: isMobile ? 250 : 250,
							overflow: "hidden",
							mx: "auto",
							display: "flex",
							justifyContent: "center"
						}}
					>
						<Box
							sx={{
								width: isMobile ? 300 : "100%",
								height: isMobile ? 250 : "100%",
								overflow: "hidden",
								borderRadius: 1
							}}
						>
							<img
								src={step.imgSrc}
								alt={step.title}
								style={{
									width: "100%",
									height: "100%",
									objectFit: "contain"
								}}
							/>
						</Box>
					</Grid>
				</Grid>
			))}
		</Box>
	);
}
