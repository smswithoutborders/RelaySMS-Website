import React from "react";
import { Box, Typography, IconButton, Dialog, DialogContent, Grow, Alert } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import Map from "../Components/Map";
import ButtonContained from "../Components/ButtonContained";

const Overview = () => {
	const { t } = useTranslation();
	const [drawerOpen, setDrawerOpen] = React.useState(false);
	const [drawerContent, setDrawerContent] = React.useState("");
	const [drawerTitle, setDrawerTitle] = React.useState("");
	const [loading, setLoading] = React.useState(false);

	const documentationMap = {
		Client: "client.md",
		Vault: "vault.md",
		Publisher: "publisher.md",
		GatewayClient: "gatewayClient.md",
		GatewayServer: "gatewayServer.md",
		BridgeServer: "bridgeServer.md",
		Platforms: "platforms.md",
		EmailBridge: "emailBridge.md"
	};

	const handleDrawerOpen = async (key) => {
		setLoading(true);
		setDrawerTitle(key);
		setDrawerOpen(true);

		try {
			const fileName = documentationMap[key];
			const currentLanguage = i18n.language || "en";

			let response;
			let markdown;

			try {
				response = await fetch(`/docs/${currentLanguage}/${fileName}`);
				if (response.ok) {
					markdown = await response.text();
					if (/<!doctype\s+html\b|<html(?=[\s>/])/i.test(markdown)) {
						throw new Error("Got HTML instead of markdown");
					}
				} else {
					throw new Error("Localized file not found");
				}
			} catch (error) {
				response = await fetch(`/docs/${fileName}`);
				if (!response.ok) {
					throw new Error("Documentation file not found");
				}
				markdown = await response.text();
			}

			setDrawerContent(markdown);
		} catch (error) {
			console.error("Error loading documentation:", error);
			setDrawerContent(t("Overview.documentationError"));
		} finally {
			setLoading(false);
		}
	};

	const handleDrawerClose = () => {
		setDrawerOpen(false);
		setDrawerContent("");
		setDrawerTitle("");
	};
	return (
		<Box
			sx={{
				background: (theme) =>
					theme.palette.mode === "dark"
						? `radial-gradient(ellipse 90% 55% at 50% -10%, rgba(77, 108, 192, 0.25) 0%, transparent 65%),
						   linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
						   linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`
						: `radial-gradient(ellipse 90% 55% at 50% -10%, rgba(0,24,113,0.09) 0%, transparent 65%),
							   linear-gradient(rgba(0,24,113,0.05) 1px, transparent 1px),
							   linear-gradient(90deg, rgba(0,24,113,0.05) 1px, transparent 1px)`,
				backgroundSize: "auto, 64px 64px, 64px 64px"
			}}
		>
			<Box
				sx={{
					pt: { xs: 15, sm: 20, md: 25 },
					my: "auto",
					alignContent: "center",
					textAlign: "center",
					mx: { xs: 2, md: 15, sm: 10, lg: 25 }
				}}
			>
				<Typography
					variant="h1"
					sx={{
						fontWeight: "bold",
						fontSize: { xs: "2.5rem", sm: "3rem", md: "3rem" },
						mb: 10,
						color: "text.primary",
						fontFamily: "'Unbounded'"
					}}
				>
					{t("Overview.title")}
				</Typography>

				<hr />

				<Box sx={{ py: 4 }}>
					<Typography variant="body1" sx={{ mb: 2, fontSize: "1.2rem", mx: { md: 6, xs: 2 } }}>
						{t("Overview.description")}
					</Typography>
					<Alert severity="info">{t("Overview.tip")}</Alert>
					<Map handleDrawerOpen={handleDrawerOpen} />
				</Box>
			</Box>
			<Dialog
				open={drawerOpen}
				onClose={handleDrawerClose}
				TransitionComponent={Grow}
				transitionDuration={240}
				fullWidth
				maxWidth={false}
				scroll="paper"
				slotProps={{
					paper: {
						sx: {
							borderRadius: "16px",
							width: "calc(100% - 32px)",
							maxWidth: 1000,
							maxHeight: "min(640px, calc(100vh - 64px))",
							bgcolor: "background.paper",
							backgroundImage: "none",
							backdropFilter: "blur(20px)",
							color: "text.primary",
							border: "1px solid",
							borderColor: "divider",
							boxShadow: (theme) =>
								theme.palette.mode === "dark"
									? "0 10px 24px rgba(0, 0, 0, 0.35)"
									: "0 12px 28px rgba(0, 24, 113, 0.12)"
						}
					}
				}}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						p: 3,
						pb: 2
					}}
				>
					<Typography variant="h5" fontWeight="bold" sx={{ fontFamily: "'Unbounded'" }}>
						{drawerTitle
							? t(`Overview.components.${drawerTitle}`, drawerTitle)
							: t("Overview.details")}
					</Typography>
					<IconButton onClick={handleDrawerClose}>
						<span style={{ fontSize: 24 }}>&times;</span>
					</IconButton>
				</Box>
				<DialogContent
					dividers
					sx={{
						color: "text.primary",
						borderColor: "divider",
						lineHeight: "30px",
						"& a": {
							color: "secondary.main"
						}
					}}
				>
					{loading ? (
						<Typography>{t("Overview.loading")}</Typography>
					) : (
						<ReactMarkdown
							components={{
								a: ({ node, href, children, ...props }) => {
									let isGitHubLink = false;
									const getNodeText = (value) => {
										if (typeof value === "string" || typeof value === "number") {
											return String(value);
										}
										if (Array.isArray(value)) {
											return value.map(getNodeText).join("");
										}
										if (React.isValidElement(value)) {
											return getNodeText(value.props?.children);
										}
										return "";
									};
									const linkText = getNodeText(children);

									if (href) {
										try {
											const parsedUrl = new URL(href, window.location.origin);
											const host = parsedUrl.hostname.toLowerCase();
											isGitHubLink = host === "github.com" || host.endsWith(".github.com");
										} catch (error) {
											isGitHubLink = false;
										}
									}

									if (isGitHubLink) {
										return <ButtonContained text={linkText} linkTo={href} />;
									}
									return (
										<a {...props} href={href} target="_blank" rel="noopener noreferrer">
											{children}
										</a>
									);
								}
							}}
						>
							{drawerContent}
						</ReactMarkdown>
					)}
				</DialogContent>
			</Dialog>
		</Box>
	);
};

export default Overview;
