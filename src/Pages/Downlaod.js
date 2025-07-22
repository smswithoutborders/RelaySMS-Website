import React from "react";
import { Box, Container, Grid, Typography, Button, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";

const Download = () => {
	const { t, i18n } = useTranslation();
	const isRtl = i18n.language === "fa" || i18n.language === "farshi";

	const androidLinks = [
		{
			imgSrc: "/play.svg",
			title: t("download.Titles.PlayStore"),
			description: t(
				"download.androidDescription.playstore",
				"Get RelaySMS from the official Google Play Store."
			),
			link: "https://play.google.com/store/apps/details?id=com.afkanerd.sw0b"
		},
		{
			imgSrc: "/fdroid.png",
			title: t("download.Titles.fDroid"),
			description: t(
				"download.androidDescription.fDroid",
				"Install via F-Droid for open source lovers."
			),
			link: "https://apt.izzysoft.de/fdroid/index/apk/com.afkanerd.sw0b"
		},
		{
			imgSrc: "/android.svg",
			title: t("download.Titles.Github"),
			description: t(
				"download.androidDescription.apk",
				"Download the APK file directly from GitHub."
			),
			link: "https://github.com/smswithoutborders/RelaySMS-Android"
		}
	];

	const iosLinks = [
		{
			imgSrc: "/ios.png",
			title: t("download.Titles.ios"),
			description: t("download.iosDescription", "Available now on the Apple App Store."),
			link: "https://apps.apple.com/us/app/relaysms/id6630382970"
		}
	];

	return (
		<Box
			dir={isRtl ? "rtl" : "ltr"}
			sx={{
				pt: "100px",
				minHeight: "100vh",
				backgroundColor: "#FAF2E4",
				pb: 8,
				px: { xs: 2, md: 6 }
			}}
		>
			<Container maxWidth="lg">
				<Box
					sx={{
						textAlign: "center",
						mb: 5
					}}
				>
					<Typography
						variant="h3"
						sx={{
							fontSize: "2rem",
							color: "#2D2A5A",
							fontFamily: "'Unbounded', Ubuntu"
						}}
					>
						{t("download.Header", "Secure & Verified Downloads")}
					</Typography>
					<Typography
						variant="body1"
						sx={{
							fontSize: "1.2rem",
							color: "#555555",
							fontFamily: "'Mona Sans', Ubuntu",
							fontStyle: "italic",
							mt: 1
						}}
					>
						{t(
							"download.Description",
							"Access RelaySMS from trusted and verified sources to ensure your security and privacy."
						)}
					</Typography>
				</Box>
				<Grid container spacing={6} alignItems="center">
					<Grid item xs={12} md={6}>
						<Typography variant="h5" sx={{ mb: 3, color: " #666" }} align="start">
							{t("download.android")}
						</Typography>
						{androidLinks.map((item, idx) => (
							<Paper
								key={idx}
								elevation={3}
								component="a"
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
								sx={{
									display: "flex",
									alignItems: "center",
									p: 3,
									mb: 3,
									borderRadius: 4,
									transition: "all 0.3s ease",
									textDecoration: "none",
									color: "inherit",
									boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
									"&:hover": {
										boxShadow: "0 12px 24px rgba(255, 158, 67, 0.4)",
										transform: "scale(1.03)"
									},
									"& img": {
										transition: "transform 0.3s ease"
									},
									"&:hover img": {
										transform: "scale(1.1)"
									}
								}}
							>
								<Box
									component="img"
									src={item.imgSrc}
									alt={item.title}
									sx={{ width: 60, height: 60, mr: 3, flexShrink: 0 }}
								/>
								<Box sx={{ flexGrow: 1 }}>
									<Typography variant="h6" sx={{ fontWeight: 600, color: "#2d2a5a", mb: 0.5 }}>
										{item.title}
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{item.description}
									</Typography>
								</Box>
								<Button
									variant="contained"
									sx={{
										bgcolor: "#FF9E43",
										color: "#000158",
										fontWeight: 700,
										textTransform: "none",
										ml: 3,
										px: 4,
										"&:hover": { bgcolor: "#e88b27" }
									}}
								>
									Download
								</Button>
							</Paper>
						))}

						{/* iOS Links */}
						<Typography variant="h5" sx={{ mt: 6, mb: 3, color: "#666" }} align="start">
							{t("download.ios")}
						</Typography>
						{iosLinks.map((item, idx) => (
							<Paper
								key={idx}
								elevation={3}
								component="a"
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
								sx={{
									display: "flex",
									alignItems: "center",
									p: 3,
									mb: 3,
									borderRadius: 4,
									transition: "all 0.3s ease",
									textDecoration: "none",
									color: "inherit",
									boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
									"&:hover": {
										boxShadow: "0 12px 24px rgba(0, 86, 179, 0.4)",
										transform: "scale(1.03)"
									},
									"& img": {
										transition: "transform 0.3s ease"
									},
									"&:hover img": {
										transform: "scale(1.1)"
									}
								}}
							>
								<Box
									component="img"
									src={item.imgSrc}
									alt={item.title}
									sx={{ width: 60, height: 60, mr: 3, flexShrink: 0 }}
								/>
								<Box sx={{ flexGrow: 1 }}>
									<Typography variant="h6" sx={{ fontWeight: 600, color: "#2d2a5a", mb: 0.5 }}>
										{item.title}
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{item.description}
									</Typography>
								</Box>
								<Button
									variant="contained"
									sx={{
										bgcolor: "#0056b3",
										color: "#fff",
										fontWeight: 700,
										textTransform: "none",
										ml: 3,
										px: 4,
										"&:hover": { bgcolor: "#003f8a" }
									}}
								>
									Download
								</Button>
							</Paper>
						))}
					</Grid>
					{/* Right Side Download Cards */}
					<Grid
						item
						xs={12}
						md={6}
						sx={{
							display: "flex",
							justifyContent: "center",
							mb: { xs: 6, md: 0 }
						}}
					>
						<Box
							component="img"
							src="/relayplaystore.png"
							alt="Download RelaySMS"
							sx={{
								width: "100%",
								maxWidth: 450,
								borderRadius: 3,
								boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
							}}
						/>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Download;
