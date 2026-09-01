import { Chip, Grid, Typography, Link, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { SiBluesky } from "react-icons/si";
import LanguageSwitcher from "./LanguageSwitcher";
import NewsletterForm from "./NewsletterForm";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

const Footer = () => {
	const { t, i18n } = useTranslation();
	const isRtl = i18n.language === "fa" || i18n.language === "farshi";

	const footerAria = {
		github: t("Footer.Aria.GitHub", "GitHub"),
		x: t("Footer.Aria.X", "X"),
		bluesky: t("Footer.Aria.Bluesky", "Bluesky")
	};

	const footerSections = [
		{
			title: t("Footer.Resources"),
			links: [
				{ label: t("Footer.Blog"), href: "https://blog.smswithoutborders.com/", external: true },
				{ label: t("Footer.BrandResources"), to: "/branding" },
				{ label: t("Footer.SystemOverview"), to: "/system-overview" },
				{
					label: t("Footer.Changelog", "Changelog"),
					href: "https://github.com/smswithoutborders/RelaySMS-Android/releases",
					external: true
				}
			]
		},
		{
			title: t("Footer.Tutorials"),
			links: [
				{
					label: t("Footer.AndroidTutorial"),
					href: "https://docs.smswithoutborders.com/docs/Android%20Tutorial/Getting-Started-With-Android",
					external: true
				},
				{
					label: t("Footer.iOSTutorial"),
					href: "https://docs.smswithoutborders.com/docs/iOS%20Tutorial/Getting-Started-With-iOS",
					external: true
				},
				{
					label: t("Footer.GatewayClientSetup"),
					href: "https://docs.smswithoutborders.com/docs/Gateway%20Clients%20Guide/GatewayClientsGuide",
					external: true
				},
				{
					label: t("Footer.Troubleshooting"),
					href: "https://docs.smswithoutborders.com/docs/Troubleshooting/Troubleshooting-FAQ",
					external: true
				}
			]
		},
		{
			title: t("Footer.TechnicalResources"),
			links: [
				{ label: t("Footer.GitHub"), href: "https://github.com/smswithoutborders", external: true },
				{
					label: t("Footer.DeveloperDocs"),
					href: "https://docs.smswithoutborders.com/",
					external: true
				},
				{ label: t("Footer.Contributing"), to: "/contributing" }
			]
		},
		{
			title: t("Footer.More"),
			links: [
				{
					label: t("Footer.PrivacyPolicy"),
					href: "https://smswithoutborders.com/privacy-policy",
					external: true
				},
				{
					label: t("Footer.AuditReport"),
					href: "https://www.opentech.fund/security-safety-audits/smswithoutborders-penetration-testt/",
					external: true
				},
				{ label: t("Footer.ContactUs"), to: "/contact" },
				{
					label: t("Footer.ServiceStatus", "Service status"),
					href: "https://status.smswithoutborders.afkanerd.com/status/rs1",
					external: true,
					status: true
				}
			]
		}
	];

	return (
		<Box
			component="footer"
			dir={isRtl ? "rtl" : "ltr"}
			sx={{
				bgcolor: "#07080a",
				// color: "#ffffff",
				py: { xs: 4, md: 6 },
				width: "100%",
				borderTopLeftRadius: { xs: 28, md: 60 },
				borderTopRightRadius: { xs: 28, md: 60 },
				borderTop: "1px solid",
				borderColor: "divider",
				overflow: "hidden"
			}}
		>
			<Grid
				container
				spacing={{ xs: 4, md: 3 }}
				sx={{
					px: { xs: 2, md: 8, lg: 12 },
					mb: 5,
					width: "100%",
					justifyContent: "space-between",
					alignItems: "center"
				}}
			>
				<Grid
					item
					xs={12}
					sm={8}
					md={5}
					lg={4}
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
						gap: 3,
						px: { md: 1 },
						pr: { md: 6 }
					}}
				>
					<NewsletterForm dark sx={{ width: "100%" }} />
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={7}
					lg={8}
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: { xs: "flex-start", md: "flex-end" },
						px: { md: 1 }
					}}
				>
					<Box
						sx={{
							display: "grid",
							gridTemplateColumns: {
								xs: "1fr",
								sm: "repeat(2, minmax(0, 1fr))",
								lg: "repeat(4, minmax(0, 1fr))"
							},
							gap: { xs: 4, sm: 3, lg: 6 },
							width: "100%",
							// maxWidth: 760,
							justifyItems: { xs: "flex-start", md: "flex-end" }
						}}
					>
						{footerSections.map((section, index) => (
							<Box
								key={index}
								sx={{
									display: "flex",
									flexDirection: "column",
									alignItems: { xs: "flex-start", md: "flex-start" },
									textAlign: { xs: "start", md: "start" }
								}}
							>
								<Typography
									variant="h6"
									sx={{
										fontWeight: 600,
										fontFamily: "'Unbounded', Ubuntu",
										mb: 3,
										fontSize: { xs: "1rem", md: "1.1rem" },
										color: "#ffffff",
										textAlign: "inherit"
									}}
								>
									{section.title}
								</Typography>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										gap: 1.5,
										alignItems: { xs: "flex-start", md: "flex-start" }
									}}
								>
									{section.links.map((link, linkIndex) =>
										link.status ? (
											<Chip
												key={linkIndex}
												component="a"
												href={link.href}
												target="_blank"
												rel="noopener noreferrer"
												label={link.label}
												variant="outlined"
												icon={
													<Box
														component="span"
														sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#65c466" }}
													/>
												}
												size="small"
												sx={{
													color: "#cccccc",
													borderColor: "#3b3b3d",
													fontSize: "0.75rem",
													alignSelf: "flex-start",
													"&:hover": { borderColor: "#65c466", color: "#ffffff" },
													"& .MuiChip-icon": { ml: 1, mr: -0.25 }
												}}
											/>
										) : link.external ? (
											<Link
												key={linkIndex}
												href={link.href}
												target="_blank"
												rel="noopener noreferrer"
												sx={{
													color: "#cccccc",
													textDecoration: "none",
													textAlign: "inherit",
													fontSize: "0.95rem",
													transition: "color 0.3s ease",
													"&:hover": {
														color: "secondary.main",
														textDecoration: "none"
													}
												}}
											>
												{link.label}
											</Link>
										) : (
											<Link
												key={linkIndex}
												component={RouterLink}
												to={link.to}
												sx={{
													color: "#cccccc",
													textDecoration: "none",
													fontSize: "0.95rem",
													textAlign: "inherit",
													transition: "color 0.3s ease",
													"&:hover": {
														color: "secondary.main",
														textDecoration: "none"
													}
												}}
											>
												{link.label}
											</Link>
										)
									)}
								</Box>
							</Box>
						))}
					</Box>

					<Box
						sx={{
							display: "flex",
							justifyContent: { xs: "flex-start", md: "flex-end" },
							gap: 2,
							alignItems: "center",
							width: "100%",
							mt: 3
						}}
					>
						<LanguageSwitcher theme="dark" />
						<IconButton
							component="a"
							href="https://github.com/smswithoutborders"
							target="_blank"
							rel="noopener noreferrer"
							aria-label={footerAria.github}
							sx={{
								color: "#ffffff",
								transition: "transform 0.3s, color 0.3s",
								"&:hover": {
									color: "secondary.main",
									transform: "scale(1.15)"
								}
							}}
						>
							<FaGithub size={18} />
						</IconButton>

						<IconButton
							component="a"
							href="https://x.com/RelaySMS"
							target="_blank"
							rel="noopener noreferrer"
							aria-label={footerAria.x}
							sx={{
								color: "#ffffff",
								transition: "transform 0.3s, color 0.3s",
								"&:hover": {
									color: "secondary.main",
									transform: "scale(1.15)"
								}
							}}
						>
							<FaXTwitter size={18} />
						</IconButton>

						<IconButton
							component="a"
							href="https://bsky.app/profile/relaysms.bsky.social"
							target="_blank"
							rel="noopener noreferrer"
							aria-label={footerAria.bluesky}
							sx={{
								color: "#ffffff",
								transition: "transform 0.3s, color 0.3s",
								"&:hover": {
									color: "secondary.main",
									transform: "scale(1.15)"
								}
							}}
						>
							<SiBluesky size={18} />
						</IconButton>
					</Box>
				</Grid>
			</Grid>

			<Divider
				sx={{
					width: { xs: "78%", md: "70%" },
					mx: "auto",
					borderColor: "#232324"
				}}
			/>
			<Grid container sx={{ px: { xs: 2, md: 5 }, pt: 3 }}>
				<Grid item xs={12}>
					<Box sx={{ textAlign: "center" }}>
						<Typography
							variant="body2"
							sx={{
								fontSize: "0.85rem",
								color: "#cccccc",
								mb: 0
							}}
						>
							&copy; {new Date().getFullYear()} {t("Footer.copyright")}
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Footer;
