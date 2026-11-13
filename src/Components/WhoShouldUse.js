import { useEffect, useState } from "react";
import { Box, Typography, Container, Stack, Button, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
	MessageOutlined,
	CheckCircleOutlined,
	AndroidOutlined,
	AppleFilled
} from "@ant-design/icons";

const RELAY_ICON_WHITE = "/RelaySMS-Icon-White.svg";

const FLOW_TIMING = { pause: 900, travel: 900, dwell: 700, hold: 1800 };

const FlowAnimation = ({ t }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [moving, setMoving] = useState(false);
	const [done, setDone] = useState(false);

	useEffect(() => {
		const timers = [];
		const run = () => {
			setActiveIndex(0);
			setMoving(false);
			setDone(false);

			let elapsed = FLOW_TIMING.pause;
			timers.push(setTimeout(() => setMoving(true), elapsed));

			elapsed += FLOW_TIMING.travel;
			timers.push(
				setTimeout(() => {
					setMoving(false);
					setActiveIndex(1);
				}, elapsed)
			);

			elapsed += FLOW_TIMING.dwell;
			timers.push(setTimeout(() => setMoving(true), elapsed));

			elapsed += FLOW_TIMING.travel;
			timers.push(
				setTimeout(() => {
					setMoving(false);
					setActiveIndex(2);
					setDone(true);
				}, elapsed)
			);

			elapsed += FLOW_TIMING.hold;
			timers.push(setTimeout(run, elapsed));
		};

		run();
		return () => timers.forEach(clearTimeout);
	}, []);

	const nodes = [
		{ Icon: MessageOutlined, label: t("WhoShouldUse.FlowNodes.smsLabel", "SMS") },
		{
			image: RELAY_ICON_WHITE,
			label: t("WhoShouldUse.FlowNodes.publisherLabel", "Relay Publisher")
		},
		{ Icon: CheckCircleOutlined, label: t("WhoShouldUse.FlowNodes.platformLabel", "Platform") }
	];

	const progress = (moving ? activeIndex + 1 : activeIndex) * 50;

	const statusText = done
		? t("WhoShouldUse.FlowStatus.published", "Published")
		: moving
			? t("WhoShouldUse.FlowStatus.sending", "Sending…")
			: activeIndex === 1
				? t("WhoShouldUse.FlowStatus.relaying", "Relaying…")
				: t("WhoShouldUse.FlowStatus.ready", "Tap to send");

	return (
		<Box sx={{ width: "100%", maxWidth: 340, mx: "auto" }}>
			<Box sx={{ position: "relative", height: 52 }}>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: 0,
						right: 0,
						height: 2,
						bgcolor: "divider",
						transform: "translateY(-50%)"
					}}
				/>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: 0,
						width: `${progress}%`,
						height: 2,
						bgcolor: "primary.main",
						transform: "translateY(-50%)",
						transition: `width ${FLOW_TIMING.travel}ms cubic-bezier(.45,0,.2,1)`
					}}
				/>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: `${progress}%`,
						width: 9,
						height: 9,
						borderRadius: "50%",
						bgcolor: "secondary.main",
						transform: "translate(-50%, -50%)",
						transition: `left ${FLOW_TIMING.travel}ms cubic-bezier(.45,0,.2,1)`,
						opacity: done ? 0 : 1
					}}
				/>

				{nodes.map((node, index) => {
					const reached = index <= activeIndex;
					const isCurrent = index === activeIndex && !moving;
					const isPublished = index === 2 && done;

					return (
						<Box
							key={node.label}
							sx={{
								position: "absolute",
								top: "50%",
								left: `${index * 50}%`,
								transform: "translate(-50%, -50%)",
								zIndex: 2
							}}
						>
							<Box
								sx={{
									position: "relative",
									width: 40,
									height: 40,
									borderRadius: "50%",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									bgcolor: isPublished
										? "success.main"
										: reached
											? "primary.main"
											: "action.disabledBackground",
									color: isPublished || reached ? "primary.contrastText" : "text.disabled",
									transform: isCurrent || isPublished ? "scale(1.14)" : "scale(1)",
									transition:
										"background-color 0.3s ease, color 0.3s ease, transform 0.35s cubic-bezier(.34,1.56,.64,1)",
									"&::after":
										isCurrent && index === 0
											? {
													content: '""',
													position: "absolute",
													inset: 0,
													borderRadius: "50%",
													border: "2px solid",
													borderColor: "primary.main",
													animation: "relayNodePing 1.4s ease-out infinite"
												}
											: undefined,
									"@keyframes relayNodePing": {
										"0%": { transform: "scale(1)", opacity: 0.6 },
										"100%": { transform: "scale(1.9)", opacity: 0 }
									}
								}}
							>
								{node.image ? (
									<Box
										sx={{
											width: 16,
											height: 16,
											bgcolor: isPublished || reached ? "primary.contrastText" : "text.disabled",
											transition: "background-color 0.3s ease",
											maskImage: `url(${node.image})`,
											maskSize: "contain",
											maskRepeat: "no-repeat",
											maskPosition: "center",
											WebkitMaskImage: `url(${node.image})`,
											WebkitMaskSize: "contain",
											WebkitMaskRepeat: "no-repeat",
											WebkitMaskPosition: "center"
										}}
									/>
								) : (
									<node.Icon style={{ fontSize: 17 }} />
								)}
							</Box>
						</Box>
					);
				})}
			</Box>

			<Stack direction="row" sx={{ mt: 1.5 }}>
				{nodes.map((node, index) => (
					<Typography
						key={node.label}
						sx={{
							flex: 1,
							fontSize: "0.68rem",
							fontWeight: 600,
							color: index <= activeIndex ? "text.primary" : "text.secondary",
							textAlign: index === 0 ? "left" : index === 2 ? "right" : "center",
							transition: "color 0.3s ease"
						}}
					>
						{node.label}
					</Typography>
				))}
			</Stack>

			<Box sx={{ display: "flex", justifyContent: "center", mt: 2.5 }}>
				<Box
					sx={{
						px: 1.75,
						py: 0.5,
						borderRadius: 10,
						fontSize: "0.72rem",
						fontWeight: 700,
						letterSpacing: "0.02em",
						bgcolor: done ? "success.main" : "action.hover",
						color: done ? "primary.contrastText" : "text.secondary",
						transition: "background-color 0.3s ease, color 0.3s ease"
					}}
				>
					{statusText}
				</Box>
			</Box>
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
				<Stack
					direction={{ xs: "column", md: "row" }}
					spacing={4}
					alignItems="stretch"
					sx={{ maxWidth: 1500 }}
				>
					<Paper elevation={0} sx={{ px: 4, py: 6, border: "1px solid", borderColor: "divider", flex: 1 }}>
						<Typography
							variant="h6"
							sx={{
								color: "text.primary",
								fontWeight: 700,
								fontFamily: "'Unbounded'",
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
								lineHeight: 1.7,
								mb: 4
							}}
						>
							{t(
								"HowRelaySMSWorks.Description1",
								'Designed by an expert team of technologists who had grown tired of internet shutdowns disrupting their ability to communicate, RelaySMS utilizes SMS messaging (aka "text messaging") to route offline messages back online.'
							)}
						</Typography>
						<Box sx={{ mb: 6 }}>
							<FlowAnimation t={t} />
						</Box>{" "}
						<Typography
							variant="body1"
							sx={{
								color: "text.secondary",
								lineHeight: 1.6
							}}
						>
							{t(
								"HowRelaySMSWorks.Description2",
								"After setting up RelaySMS on your phone, you can seamlessly connect and send messages on your preferred online messaging platforms without using any data at all (standard SMS rates will apply)."
							)}
						</Typography>
						<Button
							component="a"
							href="/system-overview"
							target="_blank"
							rel="noopener noreferrer"
							variant="text"
							sx={{
								color: "text.primary",
								textTransform: "none",
								fontSize: "16px",
								px: 0,
								my: 2,
								alignSelf: "flex-start",
								"&:hover": {
									color: "secondary.main"
								}
							}}
							endIcon={<FaExternalLinkAlt size={12} />}
						>
							{t("Step2Button", "Learn More")}
						</Button>
					</Paper>

					<Paper
						elevation={0}
						sx={{
							p: 4,
							flex: 1,
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
								fontFamily: "'Unbounded'",
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
								lineHeight: 1.7,
								mb: 4
							}}
						>
							{t(
								"WhoShouldUse.Description",
								"Anyone experiencing poor internet connectivity or living in a region prone to internet shutdowns should use RelaySMS to circumvent shutdowns and stay connected. The majority of RelaySMS users currently live in Africa and India—but the app is available for use all around the world. Users can download the app for Android in Google Play or iOS in the App Store."
							)}
						</Typography>
						<Box
							sx={{
								display: "flex",
								flexDirection: { xs: "column", sm: "row" },
								gap: 2
							}}
						>
							<Button
								component="a"
								href="https://play.google.com/store/apps/details?id=com.afkanerd.sw0b"
								target="_blank"
								rel="noopener noreferrer"
								variant="outlined"
								startIcon={<AndroidOutlined />}
								sx={{
									textTransform: "none",
									fontSize: "15px",
									color: "text.primary",
									borderColor: "divider",
									"&:hover": {
										borderColor: "secondary.main",
										color: "secondary.main",
										backgroundColor: "action.hover"
									}
								}}
							>
								{t("WhoShouldUse.AndroidButton", "Download for Android")}
							</Button>
							<Button
								component="a"
								href="https://apps.apple.com/us/app/relaysms/id6630382970"
								target="_blank"
								rel="noopener noreferrer"
								variant="outlined"
								startIcon={<AppleFilled />}
								sx={{
									textTransform: "none",
									fontSize: "15px",
									color: "text.primary",
									borderColor: "divider",
									"&:hover": {
										borderColor: "secondary.main",
										color: "secondary.main",
										backgroundColor: "action.hover"
									}
								}}
							>
								{t("WhoShouldUse.iOSButton", "Download for iOS")}
							</Button>
						</Box>
					</Paper>
				</Stack>
			</Container>
		</Box>
	);
};

export default WhoShouldUse;
