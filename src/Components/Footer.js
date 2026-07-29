import { Grid, Typography, Link } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { SiBluesky } from "react-icons/si";
import LanguageSwitcher from "./LanguageSwitcher";
import NewsletterForm from "./NewsletterForm";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";

const Footer = () => {
	const { t, i18n } = useTranslation();
	const isRtl = i18n.language === "fa" || i18n.language === "farshi";

	const logoSrc = "/RelaySMSDark.png";
	const footerAria = {
		logo: t("Footer.Aria.Logo", "RelaySMS logo"),
		github: t("Footer.Aria.GitHub", "GitHub"),
		x: t("Footer.Aria.X", "X"),
		bluesky: t("Footer.Aria.Bluesky", "Bluesky")
	};

	const footerSections = [
		{
			title: t("Footer.Resources"),
			links: [
				{ label: t("Footer.Changelog", "Changelog"), href: "https://github.com/smswithoutborders/RelaySMS-Android/releases", external: true },
				{ label: t("Footer.Blog"), href: "https://blog.smswithoutborders.com/", external: true },
				{ label: t("Footer.BrandResources"), to: "/branding" },
				{ label: t("Footer.SystemOverview"), to: "/system-overview" }
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
				{
					label: t("Footer.Jobs"),
					href: "https://afkanerd.com/careers",
					external: true
				},
				{ label: t("Footer.ContactUs"), to: "/contact" }
			]
		}
	];

	return (
		<Box
			component="footer"
			dir={isRtl ? "rtl" : "ltr"}
			sx={{
				bgcolor: "rgb(0, 0, 0)",
				color: "#ffffff",
				py: { xs: 4, md: 6 },
				width: "100%"
			}}
		>
			<Grid container sx={{ px: { xs: 2, md: 5 }, mb: 4, width: "100%" }}>
				{footerSections.map((section, index) => (
					<Grid
						item
						xs={12}
						sm={6}
						md={6}
						lg={2.2}
						key={index}
						sx={{
							mb: { xs: 4, lg: 0 },
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							px: { md: 2 }
						}}
					>
						<Typography
							variant="h6"
							sx={{
								fontWeight: 600,
								fontFamily: "'Unbounded', Ubuntu",
								mb: 3,
								fontSize: { xs: "1.1rem", md: "1.2rem" },
								color: "#ffffff",
								textAlign: "start"
							}}
						>
							{section.title}
						</Typography>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								gap: 1.5,
								alignItems: "flex-start"
							}}
						>
							{section.links.map((link, linkIndex) =>
								link.external ? (
									<Link
										key={linkIndex}
										href={link.href}
										target="_blank"
										rel="noopener noreferrer"
										sx={{
											color: "#cccccc",
											textDecoration: "none",
											textAlign: "start",
											fontSize: "0.95rem",
											transition: "color 0.3s ease",
											"&:hover": {
												color: "#ffffffff",
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
											transition: "color 0.3s ease",
											"&:hover": {
												color: "#ffffffff",
												textDecoration: "none"
											}
										}}
									>
										{link.label}
									</Link>
								)
							)}
						</Box>
					</Grid>
				))}
				<Grid
					item
					xs={12}
					sm={6}
					md={6}
					lg={3}
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
						px: { md: 2 }
					}}
				>
					<NewsletterForm dark sx={{ width: "100%" }} />
				</Grid>
			</Grid>

			<Divider sx={{ borderColor: "#cccccc67", mx: { xs: 2, md: 5 } }} />

			<Grid container alignItems="center" sx={{ px: { xs: 2, md: 5 }, mt: 4 }}>
				<Grid
					item
					xs={12}
					md={4}
					sx={{
						display: "flex",
						justifyContent: { xs: "center", md: "flex-start" },
						mb: { xs: 3, md: 0 }
					}}
				>
					<img
						src={logoSrc}
						alt={footerAria.logo}
						style={{ height: 32, transition: "0.5s ease-in-out" }}
					/>
				</Grid>

				<Grid
					item
					xs={12}
					md={4}
					sx={{
						display: "flex",
						justifyContent: "center",
						mb: { xs: 3, md: 0 }
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							gap: 2,
							alignItems: "center"
						}}
					>
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

				<Grid
					item
					xs={12}
					md={4}
					sx={{
						display: "flex",
						justifyContent: { xs: "center", md: "flex-end" }
					}}
				>
					<LanguageSwitcher theme="dark" />
				</Grid>
			</Grid>

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
