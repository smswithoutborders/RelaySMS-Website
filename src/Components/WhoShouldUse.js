import React from "react";
import { Box, Typography, Container, Grid, Button, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import { keyframes } from "@emotion/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
	MobileOutlined,
	CloudOutlined,
	LockOutlined,
	CheckCircleOutlined
} from "@ant-design/icons";

const travelRight = keyframes`
  0%   { left: 0%;   opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { left: 100%; opacity: 0; }
`;
const fadeSlideIn = keyframes`
  0%   { opacity: 0; transform: translateY(4px); }
  100% { opacity: 1; transform: translateY(0);   }
`;
const checkPop = keyframes`
  0%   { transform: scale(0); opacity: 0; }
  60%  { transform: scale(1.2); }
  100% { transform: scale(1); opacity: 1; }
`;

const FlowAnimation = ({ t }) => {
	const theme = useTheme();
	const accent = theme.palette.text.primary;
	const divider = theme.palette.divider;
	const bg = theme.palette.background.paper;
	const textSec = theme.palette.text.secondary;

	const W = 340,
		H = 260;
	const L = { x: 20, y: 130 };
	const T = { x: 170, y: 20 };
	const B = { x: 170, y: 210 };
	const R = { x: 320, y: 130 };

	const circuit = `M${L.x},${L.y} L${T.x},${T.y} L${B.x},${B.y} L${R.x},${R.y}`;

	const NodeBox = ({ cx, cy, Icon, label, sublabel }) => (
		<Box
			sx={{
				position: "absolute",
				left: cx - 18,
				top: cy - 18,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: 0.4
			}}
		>
			<Box
				sx={{
					width: 36,
					height: 36,

					display: "flex",
					alignItems: "center",
					justifyContent: "center"
				}}
			>
				<Icon style={{ fontSize: 22, color: textSec }} />
			</Box>
			<Typography
				sx={{
					fontSize: "0.68rem",
					fontWeight: 600,
					color: accent,
					fontFamily: "Ubuntu",
					textAlign: "center",
					lineHeight: 1.2,
					maxWidth: 58
				}}
			>
				{label}
			</Typography>
			<Typography
				sx={{
					fontSize: "0.58rem",
					color: textSec,
					fontFamily: "Ubuntu",
					textAlign: "center",
					maxWidth: 58
				}}
			>
				{sublabel}
			</Typography>
		</Box>
	);

	return (
		<Box sx={{ position: "relative", width: W, height: H, mx: "auto", maxWidth: "100%" }}>
			<svg
				width={W}
				height={H}
				viewBox={`0 0 ${W} ${H}`}
				style={{ position: "absolute", inset: 0 }}
			>
				<line x1={L.x} y1={L.y} x2={T.x} y2={T.y} stroke={divider} strokeWidth="1" />
				<line x1={T.x} y1={T.y} x2={B.x} y2={B.y} stroke={divider} strokeWidth="1" />
				<line x1={B.x} y1={B.y} x2={R.x} y2={R.y} stroke={divider} strokeWidth="1" />

				<circle r="3.5" fill={accent}>
					<animateMotion path={circuit} dur="4s" repeatCount="indefinite" begin="0s" />
				</circle>
				<circle r="3" fill={accent} opacity="0.35">
					<animateMotion path={circuit} dur="4s" repeatCount="indefinite" begin="2s" />
				</circle>
			</svg>

			<NodeBox cx={L.x} cy={L.y} Icon={MobileOutlined} label="RelaySMS" sublabel={t("WhoShouldUse.FlowNodes.relaySublabel", "Your phone")} />
			<NodeBox cx={T.x} cy={T.y} Icon={LockOutlined} label={t("WhoShouldUse.FlowNodes.encryptedLabel", "Encrypted")} sublabel={t("WhoShouldUse.FlowNodes.encryptedSublabel", "SMS")} />
			<NodeBox cx={B.x} cy={B.y} Icon={CloudOutlined} label={t("WhoShouldUse.FlowNodes.relayCloudLabel", "Relay Cloud")} sublabel={t("WhoShouldUse.FlowNodes.relayCloudSublabel", "Gateway")} />
			<NodeBox cx={R.x} cy={R.y} Icon={CheckCircleOutlined} label={t("WhoShouldUse.FlowNodes.platformLabel", "Platform")} sublabel={t("WhoShouldUse.FlowNodes.platformSublabel", "Delivered")} />
		</Box>
	);
};

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
				<Grid container spacing={4} alignItems="stretch" sx={{ maxWidth: 1500 }}>
					<Grid item xs={12} md={6}>
						<Paper
							elevation={0}
							sx={{ p: 4, border: "1px solid", borderColor: "divider", height: "100%" }}
						>
							<Box sx={{ mb: 6 }}>
								<FlowAnimation t={t} />
							</Box>{" "}
							<Typography
								variant="h6"
								sx={{
									color: "text.primary",
									fontWeight: 700,
									fontFamily: "'Unbounded', Ubuntu",
									mb: 3
								}}
							>
								{renderTextWithStrikethrough(
									t("HowRelaySMSWorks.Header", "How the <strike>tech</strike> magic happens")
								)}
							</Typography>
							<Typography
								variant="body1"
								sx={{
									color: "text.secondary",
									fontFamily: "Ubuntu",
									lineHeight: 1.7,
									mb: 4
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
									color: "text.secondary",
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

					<Grid item xs={12} md={6} sx={{ display: "flex" }}>
						<Grid
							container
							direction="column"
							spacing={4}
							sx={{
								height: "105%",
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
										bgcolor: "background.paper",
										border: "1px solid",
										borderColor: "divider",
										display: "flex",
										flexDirection: "column",
										justifyContent: "center"
									}}
								>
									<Typography
										variant="h6"
										sx={{
											color: "text.primary",
											fontWeight: 700,
											fontFamily: "'Unbounded', Ubuntu",
											mb: 2
										}}
									>
										{renderTextWithStrikethrough(
											t("WhoShouldUse.Header", "Everyone <strike>can</strike> should use RelaySMS")
										)}
									</Typography>
									<Typography
										variant="body1"
										sx={{
											color: "text.secondary",
											fontFamily: "Ubuntu",
											lineHeight: 1.6,
											mb: 2
										}}
									>
										{t(
											"WhoShouldUse.Description",
											"Anyone experiencing poor internet connectivity or living in a region prone to internet shutdowns should use RelaySMS to circumvent shutdowns and stay connected. The majority of RelaySMS users currently live in Africa and India—but the app is available for use all around the world. Users can download the app for Android in Google Play or iOS in the App Store."
										)}
									</Typography>
								</Paper>
							</Grid>

							<Grid item sx={{ flex: 1, minHeight: 0 }}>
								<Paper
									elevation={0}
									sx={{
										p: 3,
										border: "1px solid",
										borderColor: "divider",
										height: "100%",
										bgcolor: "background.paper",
										display: "flex",
										flexDirection: "column",
										justifyContent: "center"
									}}
								>
									<Typography
										variant="h6"
										sx={{
											color: "text.primary",
											fontWeight: 700,
											fontFamily: "'Unbounded', Ubuntu",
											mb: 2
										}}
									>
										{t("GatewayClient.Header", "Setting Up Gateway Clients")}
									</Typography>
									<Typography
										variant="body1"
										sx={{
											color: "text.secondary",
											fontFamily: "Ubuntu",
											lineHeight: 1.6,
											mb: 3
										}}
									>
										{t(
											"GatewayClient.Description",
											"Gateway Clients are devices with active internet that act as a bridge between offline users and online platforms. When you send a message without internet, it goes via SMS to a Gateway Clients which forwards it to your selected platform. Within the app, Gateway Clients are listed under the Countries tab. They can be set up using the DekuSMS app."
										)}
									</Typography>
									<Button
										component="a"
										href="https://docs.smswithoutborders.com/docs/Gateway%20Clients%20Guide/GatewayClientsGuide"
										target="_blank"
										rel="noopener noreferrer"
										variant="text"
										sx={{
											color: "text.primary",
											textTransform: "none",
											fontFamily: "Ubuntu",
											fontSize: "16px",
											alignSelf: "flex-start",
											"&:hover": {
												color: "secondary.main"
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
