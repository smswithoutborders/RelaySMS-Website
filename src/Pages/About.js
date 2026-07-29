import { useTranslation } from "react-i18next";
import { Box, Button, Typography, Container, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MobileOutlined, CloudOutlined, CheckCircleOutlined } from "@ant-design/icons";

const AboutFlowIllustration = ({ t }) => {
	const theme = useTheme();
	const accent = theme.palette.text.primary;
	const divider = theme.palette.divider;
	const textSec = theme.palette.text.secondary;

	const W = 500;
	const H = 260;
	const phone = { x: 110, y: 200 };
	const gateway = { x: 250, y: 72 };
	const platform = { x: 390, y: 200 };

	const leftPath = `M${phone.x},${phone.y} C${phone.x + 40},${phone.y - 86} ${gateway.x - 42},${gateway.y + 56} ${gateway.x},${gateway.y}`;
	const rightPath = `M${gateway.x},${gateway.y} C${gateway.x + 42},${gateway.y + 56} ${platform.x - 40},${platform.y - 86} ${platform.x},${platform.y}`;
	const fullPath = `${leftPath} ${rightPath.replace(/^M[^ ]+ /, "")}`;

	const Node = ({ x, y, Icon, title, subtitle, isGateway = false }) => (
		<Box
			sx={{
				position: "absolute",
				left: `${((x / W) * 100).toFixed(2)}%`,
				top: `${((y / H) * 100).toFixed(2)}%`,
				transform: "translate(-50%, -50%)",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: 0.8,
				zIndex: isGateway ? 3 : 2
			}}
		>
			<Box
				sx={{
					width: isGateway ? 74 : 58,
					height: isGateway ? 74 : 58,
					borderRadius: "50%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					border: "1px solid",
					borderColor: isGateway ? "text.primary" : "divider",
					bgcolor: "background.paper",
					boxShadow: isGateway ? "0 0 0 10px rgba(255, 255, 255, 0.04)" : "none",
					"&::after": isGateway
						? {
								content: '""',
								position: "absolute",
								width: 96,
								height: 96,
								borderRadius: "50%",
								border: "1px solid",
								borderColor: "divider",
								animation: "gatewayPulse 2.6s ease-in-out infinite"
							}
						: undefined
				}}
			>
				<Icon style={{ fontSize: isGateway ? 32 : 25, color: isGateway ? accent : textSec }} />
			</Box>
			<Typography
				sx={{
					fontSize: isGateway ? "0.96rem" : "0.86rem",
					fontWeight: isGateway ? 700 : 600,
					color: accent,
					fontFamily: "Ubuntu",
					textAlign: "center",
					lineHeight: 1.2
				}}
			>
				{title}
			</Typography>
			<Typography
				sx={{
					fontSize: "0.73rem",
					color: textSec,
					fontFamily: "Ubuntu",
					textAlign: "center",
					lineHeight: 1.2,
					maxWidth: isGateway ? 130 : 100
				}}
			>
				{subtitle}
			</Typography>
		</Box>
	);

	return (
		<Box
			sx={{
				position: "relative",
				width: "100%",
				maxWidth: 530,
				mx: "auto",
				mb: { xs: 3, md: 4 },
				p: { xs: 1.25, md: 1.5 }
				// border: "1px solid",
				// borderColor: "divider",
				// borderRadius: "18px",
				// bgcolor: "background.paper"
			}}
		>
			<Box
				sx={{
					position: "relative",
					width: "100%",
					paddingTop: `${((H / W) * 100).toFixed(2)}%`,
					"@keyframes gatewayPulse": {
						"0%": { opacity: 0.2, transform: "scale(0.9)" },
						"50%": { opacity: 0.55, transform: "scale(1)" },
						"100%": { opacity: 0.2, transform: "scale(1.08)" }
					}
				}}
			>
				<Box sx={{ position: "absolute", inset: 0 }}>
					<svg
						width="100%"
						height="100%"
						viewBox={`0 0 ${W} ${H}`}
						style={{ position: "absolute", inset: 0 }}
					>
						<path d={leftPath} stroke={divider} strokeWidth="1.5" fill="none" />
						<path d={rightPath} stroke={divider} strokeWidth="1.5" fill="none" />

						<circle r="4" fill={accent}>
							<animateMotion path={fullPath} dur="4.4s" repeatCount="indefinite" begin="0s" />
						</circle>
						<circle r="3.4" fill={accent} opacity="0.45">
							<animateMotion path={fullPath} dur="4.4s" repeatCount="indefinite" begin="1.4s" />
						</circle>
						<circle r="3.2" fill={accent} opacity="0.28">
							<animateMotion path={fullPath} dur="4.4s" repeatCount="indefinite" begin="2.5s" />
						</circle>
					</svg>

					<Node
						x={phone.x}
						y={phone.y}
						Icon={MobileOutlined}
						title={t("About.Flow.Phone.Title", "Your Phone")}
						subtitle={t("About.Flow.Phone.Subtitle", "Offline message via SMS")}
					/>
					<Node
						x={gateway.x}
						y={gateway.y}
						Icon={CloudOutlined}
						title={t("About.Flow.Gateway.Title", "Gateway Client")}
						subtitle={t("About.Flow.Gateway.Subtitle", "The bridge that pushes messages online")}
						isGateway
					/>
					<Node
						x={platform.x}
						y={platform.y}
						Icon={CheckCircleOutlined}
						title={t("About.Flow.Platform.Title", "Platform")}
						subtitle={t("About.Flow.Platform.Subtitle", "Delivered to Telegram, Gmail, and more")}
					/>
				</Box>
			</Box>
		</Box>
	);
};

const About = () => {
	const { t, i18n } = useTranslation();
	const isRtl = i18n.language === "fa" || i18n.language === "farshi";

	// const sections = [
	// 	{
	// 		icon: <FaCircleNodes size={20} />,
	// 		title: t("About.WhatIsRelay.Title", "What RelaySMS is"),
	// 		description: t(
	// 			"About.WhatIsRelay.Description",
	// 			"RelaySMS helps people send and receive online messages even when they do not have internet on their own device. It uses SMS and trusted gateway clients to bridge offline users with online messaging platforms."
	// 		)
	// 	},
	// 	{
	// 		icon: <FaHeart size={20} />,
	// 		title: t("About.WhyExists.Title", "Why it exists"),
	// 		description: t(
	// 			"About.WhyExists.Description",
	// 			"Reliable communication should not depend on stable internet access. RelaySMS exists to reduce the digital divide, support communities with poor connectivity, and keep critical communication possible in low-resource environments."
	// 		)
	// 	},
	// 	{
	// 		icon: <FaHandHoldingHeart size={20} />,
	// 		title: t("About.HowToHelp.Title", "How to help"),
	// 		description: t(
	// 			"About.HowToHelp.Description",
	// 			"You can support RelaySMS by donating to sustain development, running a gateway client to expand coverage, contributing code, improving docs, or helping users get started in your community."
	// 		)
	// 	}
	// ];

	return (
		<Container maxWidth="lg" dir={isRtl ? "rtl" : "ltr"} sx={{ minHeight: "100vh", px: 2, pb: 10 }}>
			<Box
				sx={{
					mx: "auto",
					pt: { xs: "120px", md: "250px" }
					// pb: { xs: 5, md: 7 }
					// textAlign: "center"
				}}
			>
				<Stack direction="row" spacing={4}>
					<Typography
						variant="h2"
						sx={{
							fontFamily: "'Unbounded', Ubuntu",
							fontWeight: 800,
							fontSize: { xs: "1.7rem", md: "2.3rem" },
							lineHeight: 1.5,
							mb: 2
						}}
					>
						{t(
							"About.Hero.Title",
							"RelaySMS is utilizing SMS to bridge internet censorships and shutdowns"
						)}
					</Typography>
					<Typography
						sx={{
							maxWidth: 700,
							mx: "auto",
							fontSize: { xs: "1rem", md: "1.1rem" },
							lineHeight: 1.8,
							color: "text.secondary"
						}}
					>
						{t(
							"About.Hero.Subtitle",
							"Don't let internet censorship or shutdowns stop you from communicating. RelaySMS is a free and open-source project that allows you to send messages to popular platforms like Gmail, Telegram, Bluesky, and more, when you don't have internet access."
						)}
					</Typography>
				</Stack>
			</Box>

			<Box sx={{ mx: "auto", mt: 20 }}>
				<Stack spacing={3} direction={{ xs: "column", md: "row" }} alignItems="center">
					<Box>
						<Typography
							sx={{
								maxWidth: 700,
								mx: "auto",
								fontSize: { xs: "1rem", md: "1.1rem" },
								lineHeight: 1.8,
								color: "text.secondary"
							}}
						>
							{t(
								"WhoShouldUse.Description",
								"Anyone experiencing poor internet connectivity or living in a region prone to internet shutdowns should use RelaySMS to circumvent shutdowns and stay connected. The majority of RelaySMS users currently live in Africa and India—but the app is available for use all around the world. Users can download the app for Android in Google Play or iOS in the App Store."
							)}
						</Typography>

						<Typography
							sx={{
								maxWidth: 700,
								mx: "auto",
								my: 4,
								fontSize: { xs: "1rem", md: "1.1rem" },
								lineHeight: 1.8,
								color: "text.secondary"
							}}
						>
							{t(
								"HowRelaySMSWorks.Description2",
								"After setting up RelaySMS on your phone, you can seamlessly connect and send messages on your preferred online messaging platforms without using any data at all (standard SMS rates will apply)."
							)}
						</Typography>
						<Button
							variant="contained"
							size="large"
							href="https://docs.smswithoutborders.com/docs/Gateway%20Clients%20Guide/GatewayClientsGuide"
							target="_blank"
							rel="noopener noreferrer"
							sx={{ textTransform: "none", borderRadius: "8px", width: "fit-content", p: 1.6 }}
						>
							{t("About.CTA.SetupGateway", "Help by setting up a Gateway Client")}
						</Button>
					</Box>
					<AboutFlowIllustration t={t} />
				</Stack>
			</Box>

			<Box
				sx={{
					maxWidth: 900,
					mx: "auto",
					mt: 20,
					p: { xs: 3, md: 4 },
					textAlign: "center"
				}}
			>
				<Typography
					sx={{
						fontFamily: "'Unbounded', Ubuntu",
						fontWeight: 700,
						fontSize: { xs: "1.15rem", md: "1.3rem" },
						mb: 1.5
					}}
				>
					{t("About.WhoBuilt.Title", "The team behind RelaySMS?")}
				</Typography>
				<Typography
					variant="body1"
					sx={{
						color: "text.secondary",
						fontSize: { xs: "1rem", md: "1.1rem" },
						lineHeight: 1.8,
						mb: 3
					}}
				>
					{t(
						"About.WhoBuilt.Description",
						"RelaySMS is an SMSWithoutBorders project, built and maintained by the Afkanerd team with support from open-source contributors and partners. We accept and encourage contributions from the community to improve RelaySMS and expand its reach."
					)}
				</Typography>

				<Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 1.5 }}>
					<Button
						variant="contained"
						href="/contributing"
						// target="_blank"
						// rel="noopener noreferrer"
						size="large"
						sx={{ textTransform: "none", p: 1.6 }}
					>
						{t("About.CTA.Contribute", "Contribution Guide")}
					</Button>
					<Button
						variant="text"
						href="https://smswithoutborders.com"
						target="_blank"
						rel="noopener noreferrer"
						size="large"
						sx={{ textTransform: "none", borderRadius: "8px", p: 1.6, color: "primary.light" }}
					>
						{t("About.CTA.SMSWithoutBorders", "Learn more about SMSWithoutBorders")}
					</Button>

					
				</Box>
			</Box>
		</Container>
	);
};

export default About;
