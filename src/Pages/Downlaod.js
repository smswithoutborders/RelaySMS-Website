import { Box, Container, Grid, Typography, Button, Paper } from "@mui/material";
import { GithubOutlined, AppleFilled } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const Download = () => {
	const { t, i18n } = useTranslation();
	const isRtl = i18n.language === "fa" || i18n.language === "farshi";

	const renderLinkVisual = (source, title) => {
		if (typeof source === "string") {
			return (
				<Box
					component="img"
					src={source}
					alt={title}
					sx={{ width: 50, height: 50, mr: 3, flexShrink: 0 }}
				/>
			);
		}

		return (
			<Box
				sx={{
					width: 50,
					height: 50,
					mr: 3,
					flexShrink: 0,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					fontSize: 44,
					color: "text.primary"
				}}
			>
				{source}
			</Box>
		);
	};

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
			imgSrc: <GithubOutlined />,
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
			imgSrc: <AppleFilled />,
			title: t("download.Titles.ios"),
			description: t("download.iosDescription", "Available now on the Apple App Store."),
			link: "https://apps.apple.com/us/app/relaysms/id6630382970"
		}
	];

	return (
		<Box
			dir={isRtl ? "rtl" : "ltr"}
			sx={{
				py: { xs: "120px", md: "250px" },
				minHeight: "100vh",
			
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
							color: "text.primary",
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
							color: "text.secondary",
							fontFamily: "Ubuntu",
							mt: 2
						}}
					>
						{t(
							"download.Description",
							"Access RelaySMS from trusted and verified sources to ensure your security and privacy."
						)}
					</Typography>
				</Box>
				<Grid container spacing={6} alignItems="center">
					<Grid item xs={12} md={7}>
						<Typography
							variant="body1"
							sx={{
								mb: 3,
								color: "text.secondary",
								fontFamily: "Unbounded",
								fontWeight: 400,
								fontSize: "1rem"
							}}
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
									bgcolor: "background.paper",
									border: "1px solid",
									borderColor: "divider",
									alignItems: "center",
									p: 3,
									mb: 3,
									transition: "all 0.3s ease",
									textDecoration: "none",
									color: "inherit",
									"&:hover": {
										transform: "scale(1.03)"
									},
									"& .download-visual": {
										transition: "transform 0.3s ease"
									},
									"&:hover .download-visual": {
										transform: "scale(1.1)"
									}
								}}
							>
								<Box className="download-visual">{renderLinkVisual(item.imgSrc, item.title)}</Box>
								<Box sx={{ flexGrow: 1 }}>
									<Typography
										variant="h6"
										sx={{
											fontWeight: 400,
											color: "text.primary",
											mb: 0.5,
											fontFamily: "Unbounded"
										}}
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
										bgcolor: "secondary.main",
										color: "#fff",
										fontWeight: 400,
										textTransform: "none",
										ml: 3,
										px: 4,
										"&:hover": { bgcolor: "secondary.dark" }
									}}
								>
									{t("download.downloadButton")}
								</Button>
							</Paper>
						))}

						<Typography
							variant="body1"
							sx={{
								mt: 6,
								mb: 3,
								color: "text.secondary",
								fontFamily: "Unbounded",
								fontWeight: 400,
								fontSize: "1rem"
							}}
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
									bgcolor: "background.paper",
									border: "1px solid",
									borderColor: "divider",
									alignItems: "center",
									p: 3,
									mb: 3,
									transition: "all 0.3s ease",
									textDecoration: "none",
									color: "inherit",
									"&:hover": {
										transform: "scale(1.03)"
									},
									"& .download-visual": {
										transition: "transform 0.3s ease"
									},
									"&:hover .download-visual": {
										transform: "scale(1.1)"
									}
								}}
							>
								<Box className="download-visual">{renderLinkVisual(item.imgSrc, item.title)}</Box>
								<Box sx={{ flexGrow: 1 }}>
									<Typography
										variant="h6"
										sx={{
											fontWeight: 400,
											color: "text.primary",
											mb: 0.5,
											fontFamily: "Unbounded"
										}}
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
										bgcolor: "primary.main",
										fontSize: "0.9rem",
										fontFamily: "Ubuntu",
										color: "#fff",
										fontWeight: 400,
										textTransform: "none",
										ml: 3,
										px: 4,
										"&:hover": { bgcolor: "primary.dark" }
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
						md={5}
						sx={{
							display: "flex",
							justifyContent: "center",
							mb: { xs: 6, md: 0 }
						}}
					>
						<Box
							component="img"
							src="/relayplaystore.png"
							alt={t("download.heroImageAlt", "Download RelaySMS")}
							sx={{
								width: "100%",
								maxWidth: 450,
								border: "1px solid",
								borderColor: "divider",
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
