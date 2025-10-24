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
				"download.androidDescription.playStore",
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
				py: { xs: 6, md: 22 },
				minHeight: "100vh",
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
							fontSize: { md: "2rem", xs: "1.5rem" },
							color: "#2D2A5A",
							fontFamily: "'Unbounded', Ubuntu",
							mt: { xs: 6, md: 0 }
						}}
					>
						{t("download.Header", "Secure & Verified Downloads")}
					</Typography>
					<Typography
						variant="body1"
						sx={{
							fontSize: "1.2rem",
							color: "#555555",
							fontFamily: "Ubuntu",
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
						<Typography
							variant="body1"
							sx={{ mb: 3, color: " #666", fontFamily: "Unbounded", fontWeight: 400, fontSize: "1rem" }}
							align="start"
						>
							{t("download.android")}
						</Typography>
						{androidLinks.map((item, idx) => (
							<Paper
								key={idx}
								elevation={0}
								component="a"
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
								sx={{
									display: "flex",
									backgroundColor: "#f8f9fa",
									border: "1px solid #e9ecef",
									alignItems: "center",
									p: 3,
									mb: 3,
									transition: "all 0.3s ease",
									textDecoration: "none",
									color: "inherit",
									"&:hover": {
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
									sx={{ width: 50, height: 50, mr: 3, flexShrink: 0 }}
								/>
								<Box sx={{ flexGrow: 1 }}>
									<Typography
										variant="h6"
										sx={{ fontWeight: 400, color: "#2d2a5a", mb: 0.5, fontFamily: "Unbounded" }}
									>
										{item.title}
									</Typography>
									<Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Ubuntu" }}>
										{item.description}
									</Typography>
								</Box>
								<Button
									variant="contained"
									sx={{
										fontSize: "0.9rem",
										fontFamily: "Ubuntu",
										bgcolor: "#e9903dff",
										color: "#000158",
										fontWeight: 400,
										textTransform: "none",
										ml: 3,
										px: 4,
										"&:hover": { bgcolor: "#d65500" }
									}}
								>
									{t("download.downloadButton")}
								</Button>
							</Paper>
						))}

						<Typography
							variant="body1"
							sx={{ mt: 6, mb: 3, color: "#666", fontFamily: "Unbounded", fontWeight: 400, fontSize: "1rem" }}
							align="start"
						>
							{t("download.ios")}
						</Typography>
						{iosLinks.map((item, idx) => (
							<Paper
								key={idx}
								elevation={0}
								component="a"
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
								sx={{
									display: "flex",
									backgroundColor: "#f8f9fa",
									border: "1px solid #e9ecef",
									alignItems: "center",
									p: 3,
									mb: 3,
									transition: "all 0.3s ease",
									textDecoration: "none",
									color: "inherit",
									"&:hover": {
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
									sx={{ width: 50, height: 50, mr: 3, flexShrink: 0 }}
								/>
								<Box sx={{ flexGrow: 1 }}>
									<Typography
										variant="h6"
										sx={{ fontWeight: 400, color: "#2d2a5a", mb: 0.5, fontFamily: "Unbounded" }}
									>
										{item.title}
									</Typography>
									<Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Ubuntu" }}>
										{item.description}
									</Typography>
								</Box>
								<Button
									variant="contained"
									sx={{
										bgcolor: "#000158",
										fontSize: "0.9rem",
										fontFamily: "Ubuntu",
										color: "#fff",
										fontWeight: 400,
										textTransform: "none",
										ml: 3,
										px: 4,
										"&:hover": { bgcolor: "#003f8a" }
									}}
								>
									{t("download.downloadButton")}
								</Button>
							</Paper>
						))}
					</Grid>
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
								border: "1px solid #e9ecef",
								borderRadius: 3
							}}
						/>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Download;
