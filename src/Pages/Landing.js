import React from "react";
import {
	Box,
	Grid,
	Typography,
	Button,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	useMediaQuery,
	styled,
	Card,
	CardContent,
	useTheme,
	CardMedia
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { FaArrowCircleRight, FaDesktop, FaGooglePlay } from "react-icons/fa";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import Container from "@mui/material/Container";
import Faqs from "../Components/FAQs.js";
import "../i18n.js";

const FAQ = [
	{
		question: "FAQ.FAQ1",
		answer: "FAQ.faq1"
	},
	{
		question: "FAQ.FAQ2",
		answer: "FAQ.faq2"
	},
	{
		question: "FAQ.FAQ3",
		answer: "FAQ.faq3"
	},
	{
		question: "FAQ.FAQ4",
		answer: "FAQ.faq4"
	},
	{
		question: "FAQ.FAQ5",
		answer: "FAQ.faq5"
	}
];

// Styled components for enhanced design
const CustomAccordion = styled(Accordion)(({ theme }) => ({
	marginBottom: theme.spacing(2),
	borderRadius: theme.spacing(1),
	boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
	transition: "box-shadow 0.3s ease-out",

	"&:hover": {
		boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)"
	}
}));

const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	color: theme.palette.primary.contrastText,
	borderBottom: `1px solid ${theme.palette.primary.dark}`,
	borderRadius: theme.spacing(1, 1, 0, 0),

	"&.Mui-expanded": {
		minHeight: 64
	}
}));

const CustomAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
	padding: theme.spacing(2),
	borderTop: `1px solid ${theme.palette.primary.dark}`,
	borderRadius: theme.spacing(0, 0, 1, 1)
}));

export default function Landing() {
	const { scrollYProgress } = useScroll();
	const { t, i18n } = useTranslation();
	const [expanded, setExpanded] = React.useState(0);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	const DemoPaper = ({ children }) => (
		<motion.div initial="hidden">
			<Card
				variant="outlined"
				sx={{
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					boxShadow: 3,
					borderRadius: 2,
					transition: "transform 0.3s ease-in-out",
					"&:hover": {
						transform: "scale(1.05)"
					}
				}}
			>
				{children}
			</Card>
		</motion.div>
	);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	const items = [
		{
			title: t("Blog.Reliability"),
			description: t("Blog.ReliabilityD"),
			link: "https://blog.smswithoutborders.com/posts/reliability-of-gateway-clients-in-smswithoutborders",
			image: "/composeMessage.png",
			author: "Aysha Musa",
			avatar: "V"
		},
		{
			title: t("Blog.Resilience"),
			description: t("Blog.ResilienceD"),
			link: "https://blog.smswithoutborders.com/posts/reliability-of-gateway-clients-in-smswithoutborders",
			image: "/resilience.svg",
			author: "Aysha Musa",
			avatar: "R"
		}
	];

	const pairs = [];
	for (let i = 0; i < items.length; i += 2) {
		pairs.push(items.slice(i, i + 2));
	}

	const isRTL = i18n.language === "fa";

	const handleDownload = () => {
		window.open("https://play.google.com/store/apps/details?id=com.afkanerd.sw0b", "_blank");
		window.open("https://smswithoutborders.com", "_blank");
	};

	return (
		<>
			<Box
				dir={isRTL ? "rtl" : "ltr"}
				sx={{
					backgroundColor: "background.paper",
					position: "relative",
					pt: 4,
					pb: { xs: 8, md: 10 }
				}}
			>
				<motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />

				{/*  */}
				{/* Banner Page */}
				<Container maxWidth="lg">
					<Grid container spacing={0} sx={{ flexDirection: { xs: "column", md: "unset" } }}>
						<AnimatePresence
							transition={{
								ease: "linear",
								duration: 2,
								x: { duration: 1 }
							}}
						></AnimatePresence>

						<Grid item xs={12} md={7}>
							<Box
								sx={{
									textAlign: { xs: "center", md: "left" },
									height: "100%",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center"
								}}
							>
								<Box sx={{ mb: 3 }}>
									<Typography
										component="h2"
										sx={{
											position: "relative",
											fontSize: { xs: 40, md: 72 },
											letterSpacing: 1.5,
											fontWeight: "bold",
											lineHeight: 1.3,
											mb: 2
										}}
									>
										<Typography
											component="mark"
											sx={{
												position: "relative",
												color: "primary.main",
												fontSize: "inherit",
												fontWeight: "inherit",
												backgroundColor: "unset",
												mb: 2
											}}
										>
											{t("Landing.landingh1a")}
											<Box
												sx={{
													position: "absolute",
													top: { xs: 24, md: 34 },
													left: 2,
													transform: "rotate(3deg)",
													"& img": { width: { xs: 146, md: 210 }, height: "auto" }
												}}
											></Box>
										</Typography>
										{t("Landing.landingh1")}
									</Typography>
								</Box>
								<Box sx={{ mb: 4, width: { xs: "100%", md: "70%" } }}>
									<Typography sx={{ color: "text.secondary", lineHeight: 1.6 }}>
										{t("Landing.landingh2")}
									</Typography>
								</Box>

								{/*  */}
								<Box sx={{ "& button": { mr: 2 } }}>
									{/*  */}
									<Button
										color="primary"
										size={isMobile ? "medium" : "large"}
										variant="contained"
										onClick={handleDownload}
										startIcon={<FaGooglePlay size={isMobile ? "1.5rem" : "2rem"} />}
										sx={{ minWidth: "150px", mb: isMobile ? 2 : 0 }}
									>
										{t("Landing.Android")}
									</Button>
									{/*  */}
									<Button
										color="primary"
										size={isMobile ? "medium" : "large"}
										variant="outlined"
										startIcon={<FaDesktop size={isMobile ? "1.5rem" : "2rem"} />}
										onClick={handleDownload}
										sx={{ minWidth: "150px", mb: isMobile ? 2 : 0 }}
									>
										{t("Landing.Desktop")}
									</Button>
								</Box>
								{/*  */}
							</Box>
						</Grid>

						<Grid item xs={12} md={5} sx={{ position: "relative" }}>
							{/* image badge */}
							<Box
								sx={{
									position: "absolute",
									bottom: 30,
									left: { xs: 0, md: -150 },
									boxShadow: 1,
									borderRadius: 3,
									px: 2,
									py: 1.4,
									zIndex: 1,
									backgroundColor: "background.paper",
									display: "flex",
									alignItems: "flex-start",
									width: 200
								}}
							>
								<Box
									sx={{
										boxShadow: 1,
										borderRadius: "50%",
										width: 40,
										height: 40,
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										mr: 2,
										"& img": { width: "32px !important", height: "auto" }
									}}
								>
									<img
										src="/logo.png"
										alt="logo"
										style={{ width: "100%", maxWidth: "70%", height: "auto" }}
									/>
								</Box>
								<Box>
									<Typography
										component="h6"
										href="https://github.com/smswithoutborders"
										sx={{ color: "secondary.main", fontSize: "1.1rem", fontWeight: 700, mb: 0.5 }}
									>
										RelaySMS
									</Typography>
								</Box>
							</Box>
							<Box sx={{ lineHeight: 0 }}>
								<img
									src="/nerd1.png"
									alt="Illustration"
									style={{ width: "100%", maxWidth: "90%", height: "auto" }}
								/>
							</Box>
						</Grid>
					</Grid>
					{/*======================================= end of Hero section -------------------------------------*/}

					{/*----------------------------------------------- How it works------------------------------------- */}
					<Box textAlign="center" sx={{ pt: { md: 10, xs: 7 }, px: { md: 4, xs: 2 }, mb: 0 }}>
						<Typography
							variant="h4"
							sx={{ fontWeight: 700, fontSize: { xs: "25px", md: "33px" }, mb: 2 }}
						>
							{t("Howitworks.HowItWorks")}
						</Typography>
						<Typography variant="subtitle1" sx={{ mb: 4, fontSize: { xs: "18px", md: "20px" } }}>
							{t("Howitworks.HowItWorksSubtitle")}
						</Typography>

						{/* How it works sections */}
						<Grid container spacing={4} justifyContent="center">
							<Grid item xs={12} sm={6} md={3}>
								<motion.div initial="hidden">
									<DemoPaper>
										<CardMedia
											component="img"
											height="140"
											image="/permission.png"
											alt="permission"
											sx={{ objectFit: "cover", borderRadius: "2px 2px 0 0" }}
										/>
										<CardContent>
											<Typography variant="body1" sx={{ p: 2 }}>
												{t("Howitworks.HowItWorksA")}
											</Typography>
										</CardContent>
									</DemoPaper>
								</motion.div>
							</Grid>

							<Grid item xs={12} sm={6} md={3}>
								<motion.div initial="hidden">
									<DemoPaper>
										<CardMedia
											component="img"
											height="140"
											image="/composeMessage.png"
											alt="compose message"
											sx={{ objectFit: "cover", borderRadius: "2px 2px 0 0" }}
										/>
										<CardContent>
											<Typography variant="body1" sx={{ p: 2 }}>
												{t("Howitworks.HowItWorksB")}
											</Typography>
										</CardContent>
									</DemoPaper>
								</motion.div>
							</Grid>

							<Grid item xs={12} sm={6} md={3}>
								<motion.div initial="hidden">
									<DemoPaper>
										<CardMedia
											component="img"
											height="140"
											image="/Online-world.png"
											alt="online world"
											sx={{ objectFit: "cover", borderRadius: "2px 2px 0 0" }}
										/>
										<CardContent>
											<Typography variant="body1" sx={{ p: 2 }}>
												{t("Howitworks.HowItWorksC")}
											</Typography>
										</CardContent>
									</DemoPaper>
								</motion.div>
							</Grid>

							<Grid item xs={12} sm={6} md={3}>
								<motion.div initial="hidden">
									<DemoPaper>
										<CardMedia
											component="img"
											height="140"
											image="/recievedNotification.png"
											alt="received notification"
											sx={{ objectFit: "cover", borderRadius: "2px 2px 0 0" }}
										/>
										<CardContent>
											<Typography variant="body1" sx={{ p: 2 }}>
												{t("Howitworks.HowItWorksD")}
											</Typography>
										</CardContent>
									</DemoPaper>
								</motion.div>
							</Grid>

							{/* Getting Started Button */}
							<Grid item xs={12}>
								<motion.div initial="hidden">
									<Box textAlign="center" sx={{ p: 1 }}>
										<a
											href="https://smswithoutborders.github.io/docs/tutorials/getting-started/"
											target="_blank"
											rel="noreferrer noopener"
											style={{ textDecoration: "none" }}
										>
											<Typography
												variant="body1"
												sx={{
													p: 4,
													textDecoration: "underline",
													fontWeight: "bold",
													color: "primary.main",
													display: "inline-flex",
													alignItems: "center",
													fontSize: { xs: "20px", md: "24px" },
													"&:hover": {
														color: "secondary.main",
														textDecoration: "none",
														transform: "scale(1.05)"
													},
													transition: "transform 0.2s ease-in-out"
												}}
											>
												{t("Howitworks.GettingStartedButton")}{" "}
												<FaArrowCircleRight
													size="20px"
													style={{ marginLeft: "8px", rotate: "-30deg" }}
												/>
											</Typography>
										</a>
									</Box>
								</motion.div>
							</Grid>
						</Grid>
					</Box>

					{/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
					{/* Relay Map */}
					<Box>
						<Grid container rowSpacing={4} sx={{ py: { md: 10, xs: 10 } }}>
							<Grid item md={5} my="auto">
								<Typography
									variant="h3"
									sx={{
										fontWeight: 700,
										fontSize: { md: "48px", xs: "33px" },
										color: "black"
									}}
								>
									{t("Map.RelaySMSMap")}
								</Typography>
							</Grid>
							<Grid item md={7} sx={{ justifyContent: "center", display: "flex", mx: "auto" }}>
								<Box component="img" src="/map.png" sx={{ width: "100%", borderRadius: "20px" }} />
							</Grid>
						</Grid>
					</Box>
					{/* ------------------------------------------------------------------------------------ */}
					<Faqs />
					{/* ------------------------------------------------------------------------------------ */}
					{/* FAQ */}
					<Box>
						<div
							style={{ padding: isMobile ? "10px" : "20px", maxWidth: "800px", margin: "0 auto" }}
						>
							<Typography variant="h4" gutterBottom align="center">
								{t("FAQ.FAQ")}
							</Typography>
							{FAQ.map((item, index) => (
								<CustomAccordion
									key={index}
									expanded={expanded === index}
									onChange={handleChange(index)}
								>
									<CustomAccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls={`faq${index}-content`}
										id={`faq${index}-header`}
									>
										<Typography variant={isMobile ? "body1" : "subtitle1"} sx={{ fontWeight: 600 }}>
											{t(item.question)}
										</Typography>
									</CustomAccordionSummary>
									<CustomAccordionDetails>
										<Typography variant={isMobile ? "body2" : "body1"}>{t(item.answer)}</Typography>
									</CustomAccordionDetails>
								</CustomAccordion>
							))}
						</div>
					</Box>
				</Container>
			</Box>
		</>
	);
}
