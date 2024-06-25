import React from "react";
import { Box, Grid, Typography, Button, Card, CardMedia, Avatar, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FaArrowCircleRight, FaDesktop, FaGooglePlay } from "react-icons/fa";
import CardContent from "@mui/material/CardContent";
import Faqs from "../Components/FAQs.js";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import Carousel from "react-material-ui-carousel";
import Container from "@mui/material/Container";
import { Link as ScrollLink } from "react-scroll";
import "../i18n.js";

export default function Landing() {
	const { scrollYProgress } = useScroll();
	const { t, i18n } = useTranslation();

	const DemoPaper = (props) => (
		<Paper {...props} style={{ padding: "20px", textAlign: "center" }} />
	);

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
											lineHeight: 1.3
										}}
									>
										<Typography
											component="mark"
											sx={{
												position: "relative",
												color: "primary.main",
												fontSize: "inherit",
												fontWeight: "inherit",
												backgroundColor: "unset"
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
									<ScrollLink to="Android-App" spy smooth offset={0} duration={350}>
										<Button
											color="primary"
											size="large"
											variant="contained"
											onClick={handleDownload}
											startIcon={<FaGooglePlay />}
										>
											{t("Landing.Android")}
										</Button>
									</ScrollLink>
									<ScrollLink to="Desktop-App" spy smooth offset={0} duration={350}>
										<Button
											color="primary"
											size="large"
											variant="outlined"
											startIcon={<FaDesktop />}
											onClick={handleDownload}
										>
											{t("Landing.Desktop")}
										</Button>
									</ScrollLink>
								</Box>
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
									width: 280
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
					{/* end of Hero section */}

					{/* How it works */}
					<Box textAlign="center" sx={{ pt: { md: 10, xs: 7 }, px: { md: 30, xs: 3 }, mb: 0 }}>
						<Typography variant="h4" sx={{ fontWeight: 700, fontSize: { xs: "25px", md: "33px" } }}>
							{t("Howitworks.HowItWorks")}
						</Typography>

						{/* How it works sections */}
						<Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
							<Grid item xs={12} sm={6}>
								<motion.div initial="hidden">
									<DemoPaper
										variant="elevation"
										sx={{
											height: { xs: 300, md: 340 },
											display: "flex",
											flexDirection: "column",
											justifyContent: "space-between",
											maxWidth: { xs: 345, md: "none" },
											margin: "auto",
											boxShadow: 3,
											borderRadius: 2
										}}
									>
										<CardMedia
											component="img"
											height="140"
											image="/permission.png"
											alt="permission"
											sx={{ objectFit: "cover", borderRadius: "2px 2px 0 0" }}
										/>
										<Typography variant="body1" sx={{ p: 2 }}>
											{t("Howitworks.HowItWorksA")}
										</Typography>
									</DemoPaper>
								</motion.div>
							</Grid>

							<Grid item xs={12} sm={6}>
								<motion.div initial="hidden">
									<DemoPaper
										variant="elevation"
										sx={{
											height: { xs: 300, md: 340 },
											display: "flex",
											flexDirection: "column",
											justifyContent: "space-between",
											maxWidth: { xs: 345, md: "none" },
											margin: "auto",
											boxShadow: 3,
											borderRadius: 2
										}}
									>
										<CardMedia
											component="img"
											height="140"
											image="/composeMessage.png"
											alt="compose message"
											sx={{ objectFit: "cover", borderRadius: "2px 2px 0 0" }}
										/>
										<Typography variant="body1" sx={{ p: 2 }}>
											{t("Howitworks.HowItWorksB")}
										</Typography>
									</DemoPaper>
								</motion.div>
							</Grid>

							<Grid item xs={12} sm={6}>
								<motion.div initial="hidden">
									<DemoPaper
										variant="elevation"
										sx={{
											height: { xs: 300, md: 340 },
											display: "flex",
											flexDirection: "column",
											justifyContent: "space-between",
											maxWidth: { xs: 345, md: "none" },
											margin: "auto",
											boxShadow: 3,
											borderRadius: 2
										}}
									>
										<CardMedia
											component="img"
											height="140"
											image="/Online-world.png"
											alt="online world"
											sx={{ objectFit: "cover", borderRadius: "2px 2px 0 0" }}
										/>
										<Typography variant="body1" sx={{ p: 2 }}>
											{t("Howitworks.HowItWorksC")}
										</Typography>
									</DemoPaper>
								</motion.div>
							</Grid>

							<Grid item xs={12} sm={6}>
								<motion.div initial="hidden">
									<DemoPaper
										variant="elevation"
										sx={{
											height: { xs: 300, md: 340 },
											display: "flex",
											flexDirection: "column",
											justifyContent: "space-between",
											maxWidth: { xs: 345, md: "none" },
											margin: "auto",
											boxShadow: 3,
											borderRadius: 2
										}}
									>
										<CardMedia
											component="img"
											height="140"
											image="/recievedNotification.png"
											alt="received notification"
											sx={{ objectFit: "cover", borderRadius: "2px 2px 0 0" }}
										/>
										<Typography variant="body1" sx={{ p: 2 }}>
											{t("Howitworks.HowItWorksD")}
										</Typography>
									</DemoPaper>
								</motion.div>
							</Grid>

							{/* Getting Started Button */}
							<Grid item xs={12}>
								<motion.div initial="hidden">
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

							<Grid item xs={12}>
								<Carousel
									NextIcon={<Button>Next</Button>} // Custom Next button
									PrevIcon={<Button>Prev</Button>} // Custom Prev button
								>
									{pairs.map((pair, index) => (
										<Box key={index}>
											<Grid container spacing={2} justifyContent="center">
												{pair.map((item, idx) => (
													<Grid item md={6} sm={6} xs={12} key={idx}>
														<Card sx={{ maxWidth: { xs: "100%", sm: "400px" }, mx: "auto" }}>
															<CardMedia
																component="img"
																height="200"
																image={item.image}
																alt={item.title}
																sx={{ objectFit: "cover", width: "100%" }}
															/>
															<CardContent>
																<Typography
																	gutterBottom
																	variant="h5"
																	component="div"
																	sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}
																>
																	{item.title}
																</Typography>
																<Typography variant="body2" color="text.secondary">
																	{item.description}
																	<a
																		style={{ color: "#8AC1EE" }}
																		href={item.link}
																		target="_blank"
																		rel="noreferrer"
																	>
																		<br />
																		{t("Blog.ReadMore")}
																	</a>
																</Typography>
															</CardContent>
															<Box sx={{ display: "flex", alignItems: "center", px: 2, pb: 2 }}>
																<Avatar>{item.avatar}</Avatar>
																<Typography variant="body2" sx={{ p: 1 }}>
																	{item.author}
																</Typography>
															</Box>
														</Card>
													</Grid>
												))}
											</Grid>
										</Box>
									))}
								</Carousel>
							</Grid>
						</Grid>
					</Box>
					{/* FAQ */}
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
				</Container>
			</Box>
		</>
	);
}
