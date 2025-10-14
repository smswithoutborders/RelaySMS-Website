import React, { useState } from "react";
import {
	Box,
	Typography,
	Button,
	Grid,
	Card,
	CardContent,
	CardActions,
	Chip,
	Tab,
	Tabs,
	IconButton,
	Tooltip
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEye } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const Branding = () => {
	const { t, i18n } = useTranslation();
	const isRtl = i18n.language === "fa" || i18n.language === "farshi";
	const [activeTab, setActiveTab] = useState(0);

	const handleTabChange = (event, newValue) => {
		setActiveTab(newValue);
	};

	const brandingAssets = {
		fullLogos: {
			title: t("Branding.categories.fullLogos.title"),
			description: t("Branding.categories.fullLogos.description"),
			assets: [
				{
					name: t("Branding.assets.default"),
					png: "/Logo/PNG/Full Logo/RelaySMS-Default.png",
					svg: "/Logo/SVG/Full Logo/RelaySMS-Default.svg",
					usage: t("Branding.usage.primaryLight")
				},
				{
					name: t("Branding.assets.defaultShaped"),
					png: "/Logo/PNG/Full Logo/RelaySMS-Default(shape).png",
					svg: "/Logo/SVG/Full Logo/RelaySMS-Default(shape).svg",
					usage: t("Branding.usage.shapedSocial")
				},
				{
					name: t("Branding.assets.black"),
					png: "/Logo/PNG/Full Logo/RelaySMS-Black.png",
					svg: "/Logo/SVG/Full Logo/RelaySMS-Black.svg",
					usage: t("Branding.usage.monochromePrint")
				},
				{
					name: t("Branding.assets.blackShaped"),
					png: "/Logo/PNG/Full Logo/RelaySMS-Black(shape).png",
					svg: "/Logo/SVG/Full Logo/RelaySMS-Black(shape).svg",
					usage: t("Branding.usage.shapedMonochrome")
				},
				{
					name: t("Branding.assets.blue"),
					png: "/Logo/PNG/Full Logo/RelaySMS-Blue.png",
					svg: "/Logo/SVG/Full Logo/RelaySMS-Blue.svg",
					usage: t("Branding.usage.blueTech")
				},
				{
					name: t("Branding.assets.blueShaped"),
					png: "/Logo/PNG/Full Logo/RelaySMS-Blue(shape).png",
					svg: "/Logo/SVG/Full Logo/RelaySMS-Blue(shape).svg",
					usage: t("Branding.usage.shapedBlue")
				},
				{
					name: t("Branding.assets.white"),
					png: "/Logo/PNG/Full Logo/RelaySMS-White.png",
					svg: "/Logo/SVG/Full Logo/RelaySMS-White.svg",
					usage: t("Branding.usage.darkBackgrounds")
				},
				{
					name: t("Branding.assets.whiteShaped"),
					png: "/Logo/PNG/Full Logo/RelaySMS-White(shape).png",
					svg: "/Logo/SVG/Full Logo/RelaySMS-White(shape).svg",
					usage: t("Branding.usage.shapedWhite")
				},
				{
					name: t("Branding.assets.darkTheme"),
					png: "/Logo/PNG/Full Logo/RelaySMS-Dark Theme.png",
					svg: "/Logo/SVG/Full Logo/RelaySMS-Dark Theme.svg",
					usage: t("Branding.usage.darkMode")
				}
			]
		},
		logoIcons: {
			title: t("Branding.categories.logoIcons.title"),
			description: t("Branding.categories.logoIcons.description"),
			assets: [
				{
					name: t("Branding.assets.default"),
					png: "/Logo/PNG/Logo Icon/RelaySMS-Icon-Default.png",
					svg: "/Logo/SVG/Logo Icon/RelaySMS-Icon-Default.svg",
					usage: t("Branding.usage.primaryIcon")
				},
				{
					name: t("Branding.assets.defaultShaped"),
					png: "/Logo/PNG/Logo Icon/RelaySMS-Icon-Default(shape).png",
					svg: "/Logo/SVG/Logo Icon/RelaySMS-Icon-Default(shape).svg",
					usage: t("Branding.usage.shapedApp")
				},
				{
					name: t("Branding.assets.black"),
					png: "/Logo/PNG/Logo Icon/RelaySMS-Icon-Black.png",
					svg: "/Logo/SVG/Logo Icon/RelaySMS-Icon-Black.svg",
					usage: t("Branding.usage.monochromeIcon")
				},
				{
					name: t("Branding.assets.blackShaped"),
					png: "/Logo/PNG/Logo Icon/RelaySMS-Icon-Black(shape).png",
					svg: "/Logo/SVG/Logo Icon/RelaySMS-Icon-Black(shape).svg",
					usage: t("Branding.usage.shapedMonochromeIcon")
				},
				{
					name: t("Branding.assets.blue"),
					png: "/Logo/PNG/Logo Icon/RelaySMS-Icon-Blue.png",
					svg: "/Logo/SVG/Logo Icon/RelaySMS-Icon-Blue.svg",
					usage: t("Branding.usage.blueIcon")
				},
				{
					name: t("Branding.assets.blueShaped"),
					png: "/Logo/PNG/Logo Icon/RelaySMS-Icon-Blue(shape).png",
					svg: "/Logo/SVG/Logo Icon/RelaySMS-Icon-Blue(shape).svg",
					usage: t("Branding.usage.shapedBlueIcon")
				},
				{
					name: t("Branding.assets.white"),
					png: "/Logo/PNG/Logo Icon/RelaySMS-Icon-White.png",
					svg: "/Logo/SVG/Logo Icon/RelaySMS-Icon-White.svg",
					usage: t("Branding.usage.iconDark")
				},
				{
					name: t("Branding.assets.whiteShaped"),
					png: "/Logo/PNG/Logo Icon/RelaySMS-Icon-White(shape).png",
					svg: "/Logo/SVG/Logo Icon/RelaySMS-Icon-White(shape).svg",
					usage: t("Branding.usage.shapedIconDark")
				}
			]
		},
		socialMedia: {
			title: t("Branding.categories.socialMedia.title"),
			description: t("Branding.categories.socialMedia.description"),
			assets: [
				{
					name: t("Branding.assets.avatar1"),
					file: "/Social Media/Avatar 1.png",
					usage: t("Branding.usage.socialAvatar")
				},
				{
					name: t("Branding.assets.avatar2"),
					file: "/Social Media/Avatar 2.png",
					usage: t("Branding.usage.altAvatar")
				},
				{
					name: t("Branding.assets.cover1"),
					file: "/Social Media/Facebook _ Cover Photo.png",
					usage: t("Branding.usage.facebookCover")
				},
				{
					name: t("Branding.assets.cover2"),
					file: "/Social Media/Facebook _ Event Photo.png",
					usage: t("Branding.usage.eventPromo")
				},
				{
					name: t("Branding.assets.cover3"),
					file: "/Social Media/Facebook _ Image Post.png",
					usage: t("Branding.usage.socialPost")
				}
			]
		}
	};

	const downloadAsset = (url, filename) => {
		const link = document.createElement("a");
		link.href = url;
		link.download = filename || url.split("/").pop();
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const previewAsset = (url) => {
		window.open(url, "_blank");
	};

	const AssetCard = ({ asset, showSvg = false }) => (
		<Card
			elevation={1}
			sx={{
				height: "100%",
				display: "flex",
				flexDirection: "column",
				transition: "transform 0.3s ease, box-shadow 0.3s ease",
				"&:hover": {
					transform: "translateY(-4px)",
					boxShadow: "0 8px 25px rgba(0,0,0,0.15)"
				}
			}}
		>
			<Box
				sx={{
					height: 200,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: asset.name.includes("White") ? "#1E283A" : "#f5f5f5",
					p: 2
				}}
			>
				<img
					src={showSvg && asset.svg ? asset.svg : asset.png || asset.file}
					alt={asset.name}
					style={{
						maxHeight: "160px",
						maxWidth: "100%",
						objectFit: "contain"
					}}
				/>
			</Box>
			<CardContent sx={{ flexGrow: 1 }}>
				<Typography
					variant="body1"
					sx={{ fontWeight: "bold", mb: 1, fontFamily: "Unbounded, sans-serif" }}
				>
					{asset.name}
				</Typography>
				<Typography
					variant="body2"
					color="text.secondary"
					sx={{ mb: 2, fontFamily: "Montserrat, sans-serif" }}
				>
					{asset.usage}
				</Typography>
				<Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
					{asset.png && <Chip label="PNG" size="small" color="#000158" variant="outlined" />}
					{asset.svg && <Chip label="SVG" size="small" color="secondary" variant="outlined" />}
					{asset.file && <Chip label="IMG" size="small" color="info" variant="outlined" />}
				</Box>
			</CardContent>
			<CardActions sx={{ p: 2, pt: 0 }}>
				<Box sx={{ display: "flex", gap: 1, width: "100%" }}>
					<Tooltip title={t("Branding.buttons.preview")}>
						<IconButton
							size="small"
							onClick={() =>
								previewAsset(showSvg && asset.svg ? asset.svg : asset.png || asset.file)
							}
							sx={{ color: "#000158" }}
						>
							<FontAwesomeIcon icon={faEye} />
						</IconButton>
					</Tooltip>
					{asset.png && (
						<Button
							size="small"
							startIcon={<FontAwesomeIcon icon={faDownload} />}
							onClick={() => downloadAsset(asset.png, `${asset.name}-PNG.png`)}
							sx={{ flex: 1, fontSize: "12px", color: "#000158" }}
						>
							PNG
						</Button>
					)}
					{asset.svg && (
						<Button
							size="small"
							startIcon={<FontAwesomeIcon icon={faDownload} />}
							onClick={() => downloadAsset(asset.svg, `${asset.name}-SVG.svg`)}
							sx={{ flex: 1, fontSize: "12px", color: "#000158" }}
						>
							SVG
						</Button>
					)}
					{asset.file && (
						<Button
							size="small"
							startIcon={<FontAwesomeIcon icon={faDownload} />}
							onClick={() => downloadAsset(asset.file, asset.name)}
							sx={{ flex: 1, fontSize: "12px" }}
						>
							{t("Branding.buttons.download")}
						</Button>
					)}
				</Box>
			</CardActions>
		</Card>
	);

	const getCurrentAssets = () => {
		switch (activeTab) {
			case 0:
				return brandingAssets.fullLogos;
			case 1:
				return brandingAssets.logoIcons;
			case 2:
				return brandingAssets.socialMedia;
			default:
				return brandingAssets.fullLogos;
		}
	};

	return (
		<Box
			dir={isRtl ? "rtl" : "ltr"}
			sx={{
				minHeight: "100vh",
				position: "relative",
				overflow: "hidden",
				fontFamily: "Montserrat, sans-serif"
			}}
		>
			<Box
				sx={{
					zIndex: 2,
					position: "relative",
					minHeight: "100vh",
					maxWidth: "1400px",
					mx: "auto",
					pt: 20,
					pb: 8,
					px: { xs: 2, sm: 4 }
				}}
			>
				<Box sx={{ textAlign: "center", mb: 8 }}>
					<Typography
						variant="h4"
						sx={{
							fontWeight: 600,
							mb: 3,
							color: "#1e283a",
							fontFamily: "Unbounded"
						}}
					>
						{t("Branding.title")}
					</Typography>
				</Box>

				<Box sx={{ mb: 6 }}>
					<Tabs
						value={activeTab}
						onChange={handleTabChange}
						centered
						sx={{
							"& .MuiTab-root": {
								textTransform: "none",
								fontWeight: 500,
								fontSize: "16px",
								fontFamily: "Montserrat, sans-serif",
								color: "#1E283A"
							},
							"& .Mui-selected": {
								color: "#FF9E43 !important"
							},
							"& .MuiTabs-indicator": {
								backgroundColor: "#FF9E43"
							}
						}}
					>
						<Tab label={t("Branding.tabs.fullLogos")} />
						<Tab label={t("Branding.tabs.logoIcons")} />
						<Tab label={t("Branding.tabs.socialMedia")} />
					</Tabs>
				</Box>

				<Box>
					<Grid container spacing={3}>
						{getCurrentAssets().assets.map((asset, index) => (
							<Grid item xs={12} sm={6} md={4} lg={3} key={index}>
								<AssetCard asset={asset} />
							</Grid>
						))}
					</Grid>
				</Box>

				<Box sx={{ mb: 8, mt: 10 }}>
					<Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
						<strong>{t("Branding.guidelines.logoUsage")}</strong>{" "}
						{t("Branding.guidelines.logoUsageText")}
					</Typography>
					<Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
						<strong>{t("Branding.guidelines.colorVariations")}</strong>{" "}
						{t("Branding.guidelines.colorVariationsText")}
					</Typography>
					<Typography variant="body1" sx={{ lineHeight: 1.8 }}>
						<strong>{t("Branding.guidelines.attribution")}</strong>{" "}
						{t("Branding.guidelines.attributionText")}
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default Branding;
