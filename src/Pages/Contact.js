import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { FaGithub, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const Contact = () => {
	const { t, i18n } = useTranslation();
	const isRtl = i18n.language === "fa" || i18n.language === "farshi";

	const socialLinks = [
		{
			icon: FaGithub,
			url: "https://github.com/smswithoutborders",
			label: t("ContactUs.Items.GitHub.Label", "GitHub"),
			description: t(
				"ContactUs.Items.GitHub.Description",
				"Explore our open-source projects and repositories."
			),
			ButtonText: t("ContactUs.Items.GitHub.ButtonText", "View GitHub")
		},
		{
			icon: FaXTwitter,
			url: "https://x.com/RelaySMS",
			label: t("ContactUs.Items.Twitter.Label", "Twitter"),
			description: t(
				"ContactUs.Items.Twitter.Description",
				"Follow us for updates, tips, and dev thoughts."
			),
			ButtonText: t("ContactUs.Items.Twitter.ButtonText", "Follow on Twitter")
		},
		{
			icon: FaEnvelope,
			url: "mailto:developers@smswithoutborders.com",
			label: t("ContactUs.Items.Email.Label", "Email"),
			description: t(
				"ContactUs.Items.Email.Description",
				"Reach out directly via email for collaboration and questions."
			),
			ButtonText: t("ContactUs.Items.Email.ButtonText", "Send Email")
		}
	];

	return (
		<Box
			dir={isRtl ? "rtl" : "ltr"}
			sx={{
				position: "relative",
				overflow: "hidden",
				fontFamily: "Montserrat, sans-serif",
				textAlign: "center",
				px: 2
			}}
		>
			<Box
				sx={{
					zIndex: 2,
					position: "relative",
					minHeight: "85vh",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					color: "#000",
					maxWidth: "1200px",
					mx: "auto",
					pt: 8,
					pb: 10
				}}
			>
				<Typography
					variant="h2"
					sx={{
						mb: { xs: 6, md: 8 },
						fontSize: { md: "2rem", xs: "1.5rem" },
						color: "#2D2A5A",
						fontWeight: 700,
						fontFamily: "'Unbounded', Ubuntu",
						mt: { xs: 6, md: 0 }
					}}
				>
					{t("ContactUs.Title", "Contact RelaySMS Team")}
				</Typography>

				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: {
							xs: "1fr",
							sm: "repeat(2, 1fr)",
							md: "repeat(3, 1fr)"
						},
						gap: 4,
						width: "100%",
						px: { xs: 2, sm: 4 }
					}}
				>
					{socialLinks.map(({ icon, url, label, description, ButtonText }, index) => (
						<Box
							key={index}
							sx={{
								// bgcolor: "#ffffff",
								borderRadius: "6px",
								padding: 3,
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
								textAlign: "left",
								transition: "transform 0.3s ease, box-shadow 0.3s ease",
								border: "1px solid #c9c9c9ff",
								"&:hover": {
									transform: "translateY(-4px)",
									boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)"
								}
							}}
						>
							{React.createElement(icon, {
								style: {
									fontSize: "1.6rem",
									color: "#202020ff",
									marginBottom: "2.5rem"
								}
							})}
							<Typography variant="body1" sx={{ fontWeight: 600, mb: 1.5, color: "#1e283a" }}>
								{label}
							</Typography>
							<Typography variant="body2" sx={{ mb: 3, color: "#666", lineHeight: 1.6, flex: 1 }}>
								{description}
							</Typography>
							<Button
								href={url || "#"}
								target={url.startsWith("mailto:") ? undefined : "_blank"}
								rel={url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
								sx={{
									color: "#2D2A5A",
									textTransform: "none",
									fontWeight: 400,
									fontSize: "15px",
									padding: 0,
									textDecoration: "underline",
									textUnderlineOffset: "4px",
									textDecorationThickness: "2px",
									transition: "all 0.3s ease",
									"&:hover": {
										color: "#1e283a",
										textDecorationColor: "#1e283a",
										backgroundColor: "transparent"
									}
								}}
							>
								{ButtonText}
							</Button>
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default Contact;
