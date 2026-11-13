import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Box, Button, Typography, Container, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MobileOutlined, CloudOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { FaChevronRight } from "react-icons/fa";

const orgLinks = [
	{
		labelKey: "About.Links.SMSWithoutBorders",
		labelDefault: "SMSWithoutBorders",
		descriptionKey: "About.Links.SMSWithoutBordersDescription",
		descriptionDefault: "The project behind RelaySMS",
		href: "https://smswithoutborders.com",
		image: "/SWOB-Icon.png",
		imageDark: "/SWOB-Icon-Dark.png",
		iconPadding: 0.75
	},
	{
		labelKey: "About.Links.Afkanerd",
		labelDefault: "Afkanerd",
		descriptionKey: "About.Links.AfkanerdDescription",
		descriptionDefault: "The team building SMSWithoutBorders",
		href: "https://afkanerd.com",
		image: "/Afkanerd.svg",
		iconBg: "#000000",
		iconPadding: 1
	}
];

const SECTION_SPACING = { xs: 8, md: 25 };

const About = () => {
	const { t, i18n } = useTranslation();
	const isRtl = i18n.language === "fa" || i18n.language === "farshi";
	const isDarkMode = useTheme().palette.mode === "dark";

	return (
		<Container maxWidth="lg" dir={isRtl ? "rtl" : "ltr"} sx={{ minHeight: "100vh", px: 2, pb: 10 }}>
			<Box
				sx={{
					mx: "auto",
					pt: { xs: "200px", md: "250px" }
				}}
			>
				<Stack direction={{ md: "row", xs: "column" }} spacing={4}>
					<Typography
						variant="h2"
						sx={{
							fontFamily: "'Unbounded'",
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

			<Box
				sx={{
					mt: SECTION_SPACING
				}}
			>
				<Typography
					sx={{
						fontFamily: "'Unbounded'",
						fontWeight: 700,
						fontSize: { xs: "1.15rem", md: "1.3rem" },
						mb: 3,
						textAlign: { xs: "center", md: "left" }
					}}
				>
					{t("About.WhoBuilt.Title", "The team behind RelaySMS")}
				</Typography>

				<Stack direction={{ xs: "column", md: "row" }} spacing={5}>
					<Typography
						variant="body1"
						sx={{
							flex: 3,
							color: "text.secondary",
							fontSize: { xs: "1rem", md: "1.1rem" },
							lineHeight: 1.8,
							textAlign: { xs: "center", md: "left" }
						}}
					>
						{t(
							"About.WhoBuilt.Description",
							"RelaySMS is a tool under the SMSWithoutBorders (SWOB) project, built by Afkanerd — a team dedicated to researching, developing, and promoting secure, accessible communication tools that work even without an internet connection."
						)}
						<br />
						<Box sx={{ mt: 2 }} />
						{t(
							"About.Origin.Description",
							"In January 2017, the internet went dark across Cameroon's English-speaking regions for months. Caught in the blackout, our founder built an SMS-based way to reach the internet when there was none — the idea that grew into SMSWithoutBorders, and later, RelaySMS."
						)}
					</Typography>

					<Stack spacing={1.5} sx={{ flex: 2 }}>
						{orgLinks.map((link) => {
							const {
								labelKey,
								labelDefault,
								descriptionKey,
								descriptionDefault,
								href,
								Icon,
								image,
								imageDark,
								iconBg,
								iconPadding
							} = link;
							return (
								<Box
									key={labelKey}
									component="a"
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									sx={{
										display: "flex",
										alignItems: "start",
										gap: 2,
										p: 2,
										borderRadius: 2,
										border: "1px solid",
										borderColor: "divider",
										textDecoration: "none",
										color: "inherit",
										transition: "border-color 0.2s ease, transform 0.2s ease",
										"&:hover": {
											borderColor: "primary.main",
											transform: "translateX(4px)"
										}
									}}
								>
									<Box
										sx={{
											width: 50,
											height: 50,
											flexShrink: 0,
											borderRadius: 1.5,
											bgcolor: iconBg || "action.hover",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											color: "primary.main",
											p: iconPadding ?? 0,
											overflow: "hidden"
										}}
									>
										{image ? (
											<Box
												component="img"
												src={imageDark && isDarkMode ? imageDark : image}
												alt=""
												sx={{ width: "100%", height: "100%", objectFit: "contain" }}
											/>
										) : (
											<Icon size={18} />
										)}
									</Box>
									<Box sx={{ flex: 1, minWidth: 0 }}>
										<Typography sx={{ fontWeight: 700, fontSize: "0.95rem" }}>
											{t(labelKey, labelDefault)}
										</Typography>
										<Typography
											sx={{ color: "text.secondary", fontSize: "0.8rem", lineHeight: 1.4 }}
										>
											{t(descriptionKey, descriptionDefault)}
										</Typography>
									</Box>
									<FaChevronRight size={12} style={{ opacity: 0.4, flexShrink: 0 }} />
								</Box>
							);
						})}
					</Stack>
				</Stack>
			</Box>

			<Box
				sx={{
					maxWidth: 800,
					mx: "auto",
					mt: SECTION_SPACING,
					mb: 4,
					p: { xs: 3, md: 4 },
					textAlign: "center"
				}}
			>
				<Typography
					sx={{
						fontFamily: "'Unbounded'",
						fontWeight: 400,
						fontSize: { xs: "1.3rem", md: "1.6rem" },
						lineHeight: 1.5,
						mb: 3
					}}
				>
					{t(
						"About.Resources.Statement",
						"Training people on RelaySMS, or need a hand getting started yourself? We've got guides, training material, and technical papers for that."
					)}
				</Typography>
				<Button
					component={Link}
					to="/resources"
					variant="contained"
					size="large"
					sx={{ textTransform: "none", borderRadius: "8px", py: 1.6, px: 3, fontSize: "1rem" }}
				>
					{t("About.CTA.Resources", "Resources")}
				</Button>
			</Box>
		</Container>
	);
};

export default About;
