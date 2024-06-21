import React from "react";
import { Box, Grid, Typography, Button, Card, CardMedia, Avatar, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FaCircleArrowRight } from "react-icons/fa6";
import CardContent from "@mui/material/CardContent";
import Faqs from "../Components/FAQs";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FaDownload } from "react-icons/fa";
import "../i18n.js";

export default function Landing() {
	const { scrollYProgress } = useScroll();
	const { t, i18n } = useTranslation();

	const DemoPaper = (props) => (
		<Paper {...props} style={{ padding: "20px", textAlign: "center" }} />
	);

	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	const isRTL = i18n.language === "fa";

	return (
		<>
			<Box dir={isRTL ? "rtl" : "ltr"}>
				<motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
				{/* Banner Page */}
				<Grid
					container
					style={{ maxWidth: "1400px", margin: "0 auto", padding: "40px 20px" }}
					spacing={3}
				>
					<AnimatePresence
						transition={{
							ease: "linear",
							duration: 2,
							x: { duration: 1 }
						}}
					>
						<Grid
							item
							md={6}
							sm={12}
							xs={12}
							style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
							sx={{
								order: { xs: 2, sm: 2, md: 1 }
							}}
						>
							<img
								src="/nerd1.png"
								alt="Illustration"
								style={{ width: "100%", maxWidth: "70%", height: "auto" }}
							/>
						</Grid>
					</AnimatePresence>

					<Grid
						item
						md={6}
						sm={12}
						xs={12}
						style={{ display: "block", justifyContent: "center" }}
						sx={{
							order: { xs: 1, sm: 1, md: 2 }
						}}
					>
						{!isMobile && (
							<img
								src="/logo.png"
								alt="Logo"
								style={{ width: "100%", maxWidth: "10%", height: "auto", marginBottom: "20px" }}
							/>
						)}
						<Typography variant="h3" sx={{ fontWeight: 700, mb: { xs: 3, md: 2 } }}>
							{t("Landing.landingh1")}
						</Typography>
						<Typography variant="h5" sx={{ mb: 3 }}>
							{t("Landing.landingh2")}
						</Typography>
						<div style={{ display: "flex", marginBottom: 3 }}>
							<Button
								size="large"
								component="a"
								href="/download"
								variant="contained"
								startIcon={
									<img
										src="./playstore.svg"
										alt="playstore"
										style={{ height: "25px", marginRight: "10px" }}
									/>
								}
								sx={{
									px: { xs: 4, md: 5 },
									mr: { xs: 2, md: 3 },
									bgcolor: "black",
									color: "whitesmoke",
									textTransform: "none"
								}}
							>
								{t("Landing.Android")}
							</Button>

							<Button
								size="large"
								component="a"
								href="/download"
								variant="contained"
								startIcon={<FaDownload />}
								sx={{
									px: { xs: 4, md: 5 },
									bgcolor: "black",
									color: "whitesmoke",
									textTransform: "none"
								}}
							>
								{t("Landing.Desktop")}
							</Button>
						</div>
					</Grid>
				</Grid>

				{/* How it works */}

				<Box textAlign="center" sx={{ pt: { md: 10, xs: 7 }, px: { md: 30, xs: 3 }, mb: 0 }}>
					<Typography variant="h4" sx={{ fontWeight: 700, fontSize: { xs: "25px", md: "33px" } }}>
						{t("Howitworks.HowItWorks")}
					</Typography>

					{/* How it works sections */}
					<Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
						<Grid item xs={12} sm={6}>
							<DemoPaper variant="elevation">
								<CardMedia component="img" height="140" image="/permission.png" alt="permission" />
								<Typography variant="body1">{t("Howitworks.HowItWorksA")}</Typography>
							</DemoPaper>
						</Grid>

						<Grid item xs={12} sm={6}>
							<DemoPaper variant="elevation">
								<CardMedia
									component="img"
									height="140"
									image="/composeMessage.png"
									alt="compose message"
									maxWidth="345"
								/>
								<Typography variant="body1">{t("Howitworks.HowItWorksB")}</Typography>
							</DemoPaper>
						</Grid>

						<Grid item xs={12} sm={6}>
							<DemoPaper variant="elevation">
								<CardMedia
									component="img"
									height="140"
									image="/Online-world.png"
									alt="online world"
								/>
								<Typography variant="body1">{t("Howitworks.HowItWorksC")}</Typography>
							</DemoPaper>
						</Grid>

						<Grid item xs={12} sm={6}>
							<DemoPaper variant="elevation">
								<CardMedia
									component="img"
									height="140"
									image="/recievedNotification.png"
									alt="received notification"
								/>
								<Typography variant="body1">{t("Howitworks.HowItWorksD")}</Typography>
							</DemoPaper>
						</Grid>

						{/* Getting Started Button */}
						<Grid item xs={12}>
							<Box textAlign="center" sx={{ p: 2 }}>
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
										<FaCircleArrowRight
											size="20px"
											style={{ marginLeft: "8px", rotate: "-30deg" }}
										/>
									</Typography>
								</a>
							</Box>
						</Grid>
					</Grid>
				</Box>

				{/* Relay Map */}
				<Box sx={{ bgcolor: "white", px: { md: 20, sm: 10, xs: 3 } }}>
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

				{/* What's New Blog */}
				<Box sx={{ p: { md: 3, xs: 2 } }}>
					<Grid
						container
						rowSpacing={4}
						columnSpacing={4}
						sx={{ px: { md: 13, sm: 10, xs: 2 }, my: { md: 2, xs: 1 }, pb: 4 }}
					>
						<Grid item md={12} xs={12}>
							<Typography textAlign={"center"} variant="h5" sx={{ fontWeight: 700, py: 2 }}>
								{t("Blog.WhatsNew")}
							</Typography>
						</Grid>

						{/* First Card */}
						<Grid item md={4} sm={6} xs={12}>
							<Card sx={{ maxWidth: 400 }}>
								<Box
									sx={{
										height: 200,
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										bgcolor: "#f5f5f5"
									}}
								>
									<Avatar sx={{ fontSize: 80, bgcolor: "green" }}>V</Avatar>
								</Box>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										{t("Blog.Reliability")}
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{t("Blog.ReliabilityD")}
										<a
											style={{ color: "#8AC1EE" }}
											href="https://blog.smswithoutborders.com/posts/reliability-of-gateway-clients-in-smswithoutborders"
											target="_blank"
											rel="noreferrer"
										>
											<br />
											{t("Blog.ReadMore")}
										</a>
									</Typography>
								</CardContent>
								<CardMedia sx={{ display: "flex", px: 2, pb: 2 }}>
									<Avatar />
									<Typography variant="body2" sx={{ p: 1 }}>
										Aysha Musa
									</Typography>
								</CardMedia>
							</Card>
						</Grid>

						{/* Second Card */}
						<Grid item md={4} sm={6} xs={12}>
							<Card sx={{ maxWidth: 400 }}>
								<CardMedia sx={{ height: 200 }} image="/resilience.svg" title="resilience" />
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										{t("Blog.Resilience")}
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{t("Blog.ResilienceD")}{" "}
										<a
											style={{ color: "#8AC1EE" }}
											href="https://blog.smswithoutborders.com/posts/reliability-of-gateway-clients-in-smswithoutborders"
											target="_blank"
											rel="noreferrer"
										>
											<br />
											{t("Blog.ReadMore")}
										</a>
									</Typography>
								</CardContent>
								<CardMedia sx={{ display: "flex", px: 2, pb: 2 }}>
									<Avatar />
									<Typography variant="body2" sx={{ p: 1 }}>
										Aysha Musa
									</Typography>
								</CardMedia>
							</Card>
						</Grid>
					</Grid>
				</Box>
			</Box>
			<Box
				sx={{
					bgcolor: "white",
					color: "black",
					px: { md: 15, sm: 10, xs: 3 },
					mb: { md: 0, xs: 4 },
					mt: { md: 4, xs: 1 }
				}}
			>
				<Faqs />
			</Box>
		</>
	);
}
