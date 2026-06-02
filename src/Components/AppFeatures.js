import { useState } from "react";
import { Box, Container, Typography, Tabs, Tab, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { FaAndroid, FaApple, FaDesktop, FaCheck, FaTimes } from "react-icons/fa";

const useAppFeaturesData = (t) => {
	const FEATURES = [
		{ label: t("AppFeatures.Features.OfflineMessaging", "Offline messaging via SMS"), android: true, ios: true, desktop: false },
		{ label: t("AppFeatures.Features.Gmail", "Gmail"), android: true, ios: true, desktop: true },
		{ label: t("AppFeatures.Features.Twitter", "Twitter / X"), android: true, ios: true, desktop: true },
		{ label: t("AppFeatures.Features.Telegram", "Telegram"), android: true, ios: true, desktop: true },
		{ label: t("AppFeatures.Features.GatewaySetup", "Gateway client setup"), android: true, ios: false, desktop: false },
		{ label: t("AppFeatures.Features.DarkMode", "Dark mode"), android: true, ios: true, desktop: true },
		{ label: t("AppFeatures.Features.MultiLanguage", "Multi-language support"), android: true, ios: true, desktop: true },
		{ label: t("AppFeatures.Features.E2EEncryption", "End-to-end encryption"), android: true, ios: true, desktop: true },
		{ label: t("AppFeatures.Features.OpenSource", "Free & open source"), android: true, ios: true, desktop: true }
	];

	const PLATFORMS = [
		{
			key: "android",
			label: t("AppFeatures.Platforms.Android.label", "Android"),
			Icon: FaAndroid,
			image: "/RelayHome.png",
			imageAlt: t("AppFeatures.Platforms.Android.imageAlt", "RelaySMS on Android"),
			badge: t("AppFeatures.Platforms.Android.badge", "Available on Google Play")
		},
		{
			key: "ios",
			label: t("AppFeatures.Platforms.iOS.label", "iOS"),
			Icon: FaApple,
			image: "/ios.png",
			imageAlt: t("AppFeatures.Platforms.iOS.imageAlt", "RelaySMS on iOS"),
			badge: t("AppFeatures.Platforms.iOS.badge", "Available on the App Store")
		},
		{
			key: "desktop",
			label: t("AppFeatures.Platforms.Desktop.label", "Desktop"),
			Icon: FaDesktop,
			image: "/Bridges.png",
			imageAlt: t("AppFeatures.Platforms.Desktop.imageAlt", "RelaySMS Desktop"),
			badge: t("AppFeatures.Platforms.Desktop.badge", "Web & Desktop app")
		}
	];

	return { FEATURES, PLATFORMS };
};

const FeatureRow = ({ label, supported }) => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				gap: 1.5,
				py: 1
			}}
		>
			<Box
				sx={{
					width: 20,
					height: 20,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexShrink: 0
				}}
			>
				{supported ? (
					<FaCheck size={13} color={theme.palette.text.disabled} />
				) : (
					<FaTimes size={13} color={theme.palette.text.disabled} />
				)}
			</Box>
			<Typography
				sx={{
					fontFamily: "Ubuntu",
					fontSize: "0.9rem",
					color: supported ? "text.primary" : "text.disabled"
				}}
			>
				{label}
			</Typography>
		</Box>
	);
};

const TabPanel = ({ platform, features }) => (
	<Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ mt: 1 }}>
		<Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center" }}>
			<Box
				component="img"
				src={platform.image}
				alt={platform.imageAlt}
				sx={{ maxWidth: "100%", objectFit: "contain", borderRadius: 2 }}
			/>
		</Grid>
		<Grid
			item
			xs={12}
			md={7}
			sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
		>
			<Box sx={{ width: "100%", maxWidth: 380 }}>
				<Typography
					sx={{
						fontFamily: "'Unbounded', Ubuntu",
						fontWeight: 700,
						fontSize: { xs: "1rem", md: "1.15rem" },
						color: "text.primary",
						mb: 0.5
					}}
				>
					{platform.label}
				</Typography>
				<Typography
					sx={{ fontFamily: "Ubuntu", fontSize: "0.8rem", color: "text.secondary", mb: 2.5 }}
				>
					{platform.badge}
				</Typography>
				<Box sx={{ px: 2.5, py: 1 }}>
					{features.map((f) => (
						<FeatureRow key={f.label} label={f.label} supported={f[platform.key]} />
					))}
				</Box>
			</Box>
		</Grid>
	</Grid>
);

const AppFeatures = () => {
	const { t } = useTranslation();
	const theme = useTheme();
	const [activeTab, setActiveTab] = useState(0);
	const { FEATURES, PLATFORMS } = useAppFeaturesData(t);

	return (
		<Box sx={{ py: { xs: 8, md: 10 }, px: { xs: 1.5, md: 6 } }}>
			<Container>
				<Typography
					variant="h5"
					sx={{
						fontFamily: "'Unbounded', Ubuntu",
						fontWeight: 700,
						color: "text.primary",
						fontSize: { xs: "1.5rem", md: "1.9rem" },
						textAlign: "center",
						mb: 1
					}}
				>
					{t("AppFeatures.Header", "App Features")}
				</Typography>
				<Typography
					sx={{ fontFamily: "Ubuntu", color: "text.secondary", textAlign: "center", mb: 4 }}
				>
					{t("AppFeatures.Subheader", "Compare what's available across Android, iOS, and Desktop.")}
				</Typography>

				{/* ✅ Centered tabs, no bottom border/indicator */}
				<Tabs
					value={activeTab}
					onChange={(_, v) => setActiveTab(v)}
					centered
					TabIndicatorProps={{ style: { display: "none" } }}
					sx={{
						mb: 3,
						"& .MuiTabs-flexContainer": { gap: 1 },
						"& .MuiTab-root": {
							textTransform: "none",
							fontFamily: "Ubuntu",
							fontWeight: 600,
							fontSize: "0.9rem",
							color: "text.secondary",
							minWidth: "unset",
							px: 2.5,
							py: 0.75,
							borderRadius: "999px",
							border: `1.5px solid ${theme.palette.divider}`,
							transition: "all 0.2s ease",
							"&.Mui-selected": {
								color: "primary.contrastText",
								borderColor: "primary.contrastText",
								borderWidth: "1px"
							}
						}
					}}
				>
					{PLATFORMS.map((p) => (
						<Tab
							key={p.key}
							label={p.label}
							iconPosition="start"
							disableRipple
						/>
					))}
				</Tabs>

				<TabPanel platform={PLATFORMS[activeTab]} features={FEATURES} />
			</Container>
		</Box>
	);
};

export default AppFeatures;
