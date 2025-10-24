import React from "react";
import { Box, Typography, IconButton, Drawer, Alert } from "@mui/material";
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
					if (markdown.includes("<!doctype html>") || markdown.includes("<html")) {
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
		<Box>
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
						color: "#2D2A5A",
						fontFamily: "'Unbounded', Ubuntu"
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
			<Drawer
			className="markdown-drawer"
				anchor="right"
				open={drawerOpen}
				onClose={handleDrawerClose}
				PaperProps={{
					sx: {
						width: { xs: "100%", sm: 400, lg: 600 },
						p: 3,
						mt: { xs: 8, sm: 8, md: 10 },
						height: {
							xs: "calc(100vh - 64px)",
							sm: "calc(100vh - 64px)",
							md: "calc(100vh - 80px)"
						},
						zIndex: 1200
					}
				}}
				ModalProps={{
					sx: {
						zIndex: 1300
					}
				}}
			>
				<Box display="flex" justifyContent="space-between" alignItems="center">
					<Typography variant="h5" fontWeight="bold" sx={{ fontFamily: "'Unbounded', Ubuntu" }}>
						{drawerTitle
							? t(`Overview.components.${drawerTitle}`, drawerTitle)
							: t("Overview.details")}
					</Typography>
					<IconButton onClick={handleDrawerClose}>
						<span style={{ fontSize: 24 }}>&times;</span>
					</IconButton>
				</Box>
				<Box mt={2} sx={{ height: "calc(100vh - 120px)", overflow: "auto" }}>
					{loading ? (
						<Typography>{t("Overview.loading")}</Typography>
					) : (
						<ReactMarkdown
							components={{
								a: ({ node, href, children, ...props }) => {
									if (href && href.includes("github.com")) {
										return <ButtonContained text={children} linkTo={href} />;
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
				</Box>
			</Drawer>
		</Box>
	);
};

export default Overview;
