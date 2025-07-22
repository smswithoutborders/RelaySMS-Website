import React from "react";
import { Box, Typography, Button, keyframes } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
	const { t, i18n } = useTranslation();
	const isRtl = i18n.language === "fa" || i18n.language === "farshi";

	const socialLinks = [
		{
			icon: faGithub,
			url: "https://github.com/smswithoutborders",
			label: t("ContactUs.Items.GitHub.Label", "GitHub"),
			description: t(
				"ContactUs.Items.GitHub.Description",
				"Explore our open-source projects and repositories."
			),
			ButtonText: t("ContactUs.Items.GitHub.ButtonText", "View GitHub")
		},
		{
			icon: faTwitter,
			url: "https://x.com/RelaySMS",
			label: t("ContactUs.Items.Twitter.Label", "Twitter"),
			description: t(
				"ContactUs.Items.Twitter.Description",
				"Follow us for updates, tips, and dev thoughts."
			),
			ButtonText: t("ContactUs.Items.Twitter.ButtonText", "Follow on Twitter")
		},
		{
			icon: faEnvelope,
			url: "mailto:developers@smswithoutborders.com",
			label: t("ContactUs.Items.Email.Label", "Email"),
			description: t(
				"ContactUs.Items.Email.Description",
				"Reach out directly via email for collaboration and questions."
			),
			ButtonText: t("ContactUs.Items.Email.ButtonText", "Send Email")
		}
	];

	const rotateWave = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
	return (
		<Box
			dir={isRtl ? "rtl" : "ltr"}
			sx={{
				minHeight: "100vh",
				position: "relative",
				backgroundColor: "#FAF2E4",
				overflow: "hidden",
				fontFamily: "Montserrat, sans-serif",
				textAlign: "center",
				px: 2
			}}
		>
			<Box
				sx={{
					position: "absolute",
					width: "100%",
					height: "100%",
					top: 0,
					left: 0,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					zIndex: 0,
					pointerEvents: "none"
				}}
			>
				{[1050, 950, 820, 720, 620, 560, 460].map((size, index) => (
					<Box
						key={index}
						sx={{
							position: "absolute",
							width: size,
							height: size - 30,
							borderRadius: "43%",
							backgroundColor: "#99c6c6",
							opacity: 0.18,
							animation: `${rotateWave} ${5 + index * 2}s linear infinite`
						}}
					/>
				))}
			</Box>

			<Box
				sx={{
					zIndex: 2,
					position: "relative",
					minHeight: "100vh",
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
						fontWeight: 100,
						mb: 6,
						color: "#1e283a",
						textShadow: "1px 1px 2px rgba(255,255,255,0.5)",
						fontSize: "clamp(2rem, 5vw, 3.5rem)",
						padding: window.innerWidth >= 768 ? "20px" : "20px",
						transition: "color 0.3s ease, transform 0.3s ease"
					}}
				>
					{t("ContactUs.Title")}
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
								bgcolor: "#ffffff",
								borderRadius: "16px",
								boxShadow: "0px 6px 16px rgba(0,0,0,0.1)",
								padding: 4,
								textAlign: "center",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								transition: "transform 0.3s ease, box-shadow 0.3s ease",
								"&:hover": {
									transform: "translateY(-6px)",
									boxShadow: "0px 12px 24px rgba(0,0,0,0.15)"
								}
							}}
						>
							<FontAwesomeIcon
								icon={icon}
								style={{
									fontSize: "3.2rem",
									color: "#FF9E43",
									marginBottom: "1rem"
								}}
							/>
							<Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: "#1e283a" }}>
								{label}
							</Typography>
							<Typography variant="body2" sx={{ mb: 2, color: "#555", lineHeight: 1.6 }}>
								{description}
							</Typography>
							<Button
								variant="contained"
								href={url || "#"}
								target={url.startsWith("mailto:") ? undefined : "_blank"}
								rel={url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
								sx={{
									backgroundColor: "#FF9E43",
									color: "rgba(1, 64, 136, 0.86)",
									textTransform: "none",
									fontWeight: 500,
									py: 1.2,
									px: 5,
									fontSize: { xs: "12px", md: "15px" },
									borderRadius: 3,
									border: "1px solid rgba(240, 135, 37, 0.41)",
									boxShadow: "0 2px 6px rgba(1, 64, 136, 0.86)",
									transition: "all 0.3s ease-in-out",
									"&:hover": {
										backgroundColor: "rgba(1, 64, 136, 0.86)",
										color: "white",
										boxShadow: "0 6px 18px #FF9E43"
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

export default ContactUs;
