/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Box, Card, CardMedia, Grid, Typography, Avatar, Button } from "@mui/material";
import { FaCircleArrowRight } from "react-icons/fa6";
import CardContent from "@mui/material/CardContent";
import Faqs from "../Components/FAQs";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useTranslation } from "react-i18next";
import "./i18n/Config.js";

export default function Landing() {
	const { scrollYProgress } = useScroll();
	const { t } = useTranslation();

	return (
		<Box>
			<motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
			{/* Banner Page */}
			<Grid container rowSpacing={3} sx={{ px: { md: 15, sm: 10, xs: 3 }, my: { md: 0, xs: 10 } }}>
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
						sx={{
							justifyContent: "center",
							display: "flex",
							mx: "auto"
						}}
					>
						<Box
							component="img"
							src="/nerd1.png"
							sx={{ width: { md: "100%", xs: "100%", sm: "100%" } }}
						/>
					</Grid>
				</AnimatePresence>
				<Grid item md={6} sm={12} xs={12} my="auto">
					<Box
						component="img"
						src="/logo.png"
						sx={{ width: { md: "10%", sm: "10%", xs: "15%" }, mb: 4 }}
					/>
					<Typography variant="h3" sx={{ fontWeight: 700 }}>
						{t("landingh1")}
					</Typography>
					<Typography variant="h5" sx={{ mt: 5 }}>
						Send Emails, Posts, and Messages securely via SMS.
					</Typography>
					<Box display="flex">
						<Button
							size="large"
							component="a"
							href="/download"
							variant="contained"
							sx={{
								py: 1.2,
								mt: { md: 7.6, xs: 8.5, sm: 15 },
								bgcolor: "black",
								color: "whitesmoke",
								textTransform: "none"
							}}
						>
							<img
								src="/playstore.svg"
								alt="Google Play Store"
								style={{ width: "20px", height: "20px" }}
							/>

							<Typography variant="body2" sx={{ pl: 1 }}>
								Android App
							</Typography>
						</Button>

						<Button
							size="large"
							component="a"
							href="/download"
							variant="contained"
							sx={{
								py: 1.2,
								mt: { md: 7.6, xs: 8.5, sm: 15 },
								bgcolor: "black",
								color: "whitesmoke",
								textTransform: "none",
								mx: 2
							}}
						>
							<Typography variant="body2" sx={{ pl: 1 }}>
								Desktop App
							</Typography>
						</Button>
					</Box>
				</Grid>
			</Grid>

			{/* How it works */}
			<Box textAlign="center" sx={{ pt: { md: 10, xs: 7 }, px: { md: 30, xs: 3 }, mb: 0 }}>
				<Typography variant="h4" sx={{ fontWeight: 700, fontSize: { xs: "25px", md: "33px" } }}>
					How It Works
				</Typography>

				<Grid container spacing={2} justifyContent="center" alignItems="center">
					<Grid item xs={12} md={6}>
						<Typography variant="h5" sx={{ p: { md: 5, xs: 2 } }}>
							Grant permission for RelaySMS to send emails, posts, or messages on your behalf.
						</Typography>
					</Grid>
					<Grid item xs={12} md={6}>
						<img src="/permission.png" alt="points" style={{ maxWidth: "60%", height: "auto" }} />
					</Grid>
				</Grid>
				<Grid container spacing={2} justifyContent="center" alignItems="center">
					<Grid item xs={12} md={6}>
						<img
							src="/composeMessage.png"
							alt="points"
							style={{ maxWidth: "60%", height: "auto" }}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography variant="h5" sx={{ p: { md: 5, xs: 2 } }}>
							Compose your email, post, or message, and it will be automatically sent using your
							default SMS app.
						</Typography>
					</Grid>
				</Grid>

				<Grid container spacing={2} justifyContent="center" alignItems="center">
					<Grid item xs={12} md={6}>
						<Typography variant="h5" sx={{ p: { md: 5, xs: 2 } }}>
							Your content reaches RelaySMS access points and is published on your behalf.
						</Typography>
					</Grid>
					<Grid item xs={12} md={6}>
						<img src="/Online-world.png" alt="point2" style={{ maxWidth: "60%", height: "auto" }} />
					</Grid>
				</Grid>

				<Grid container spacing={2} justifyContent="center" alignItems="center">
					<Grid item xs={12} md={6}>
						<img
							src="/recievedNotification.png"
							alt="point3"
							style={{ maxWidth: "60%", height: "auto" }}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography variant="h5" sx={{ p: { md: 5, xs: 2 } }}>
							Receive a response via SMS indicating success or failure.
						</Typography>
					</Grid>
				</Grid>
				<a
					href="https://smswithoutborders.github.io/docs/tutorials/getting-started/"
					target="_blank"
					rel="noreferrer noopener"
				>
					<Typography variant="body1" sx={{ p: 2, textDecoration: "underline" }}>
						Getting Started <FaCircleArrowRight size="20px" style={{ rotate: "-30deg" }} />
					</Typography>
				</a>
			</Box>

			{/* How Relay Works */}
			<Box
				sx={{
					px: { md: 10, xs: 3 },
					color: "white",
					py: { md: 5, xs: 10 },
					mb: 0
				}}
			>
				<Grid container rowSpacing={6} columnSpacing={6} alignItems="center" align="center">
					<Grid item md={4} sm={6} xs={12} />
					<Grid item md={4} sm={6} xs={12} my="auto" />
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
							RelaySMS is actively used in over 60 countries.
						</Typography>
					</Grid>
					<Grid item md={7} sx={{ justifyContent: "center", display: "flex", mx: "auto" }}>
						<Box component="img" src="/map.png" sx={{ width: "100%", borderRadius: "20px" }} />
					</Grid>
				</Grid>
			</Box>

			{/* What's New */}
			<Box sx={{ p: { md: 3, xs: 2 } }}>
				<Grid
					container
					rowSpacing={4}
					columnSpacing={4}
					sx={{ px: { md: 13, sm: 10, xs: 2 }, my: { md: 2, xs: 1 }, pb: 4 }}
				>
					<Grid item md={12} xs={12}>
						<Typography textAlign={"center"} variant="h5" sx={{ fontWeight: 700, py: 2 }}>
							Whats new on RelaySMS ?
						</Typography>
					</Grid>

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
								<VerifiedIcon sx={{ fontSize: 80, color: "green" }} />
							</Box>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Reliability Of Gateway Clients In Smswithoutborders
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Gateway Client in SMSWithoutBorders is key in routing messages from SMS to online
									platforms. The Gateway Client listens for messages and routes them to the Gateway
									server, which publishes ...{" "}
									<a
										style={{ color: "#8AC1EE" }}
										href="https://blog.smswithoutborders.com/posts/reliability-of-gateway-clients-in-smswithoutborders"
										target="_blank"
										rel="noreferrer"
									>
										Read more
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

					<Grid item md={4} sm={6} xs={12}>
						<Card sx={{ maxWidth: 400 }}>
							<CardMedia sx={{ height: 200 }} image="/resilience.svg" title="resilience" />
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Resilience Of Gateway Clients In Smswithoutborders
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Gateway Client in SMSWithoutBorders is key in routing messages from SMS to online
									platforms. The Gateway Client listens for messages and routes them to the Gateway
									server, which publishes ...{" "}
									<a
										style={{ color: "#8AC1EE" }}
										href="https://blog.smswithoutborders.com/posts/reliability-of-gateway-clients-in-smswithoutborders"
										target="_blank"
										rel="noreferrer"
									>
										Read more
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

			{/* FAQS */}
			<Box
				sx={{
					bgcolor: "white",
					color: "black",
					px: { md: 15, sm: 10, xs: 3 },
					mb: { md: 0, xs: 4 },
					mt: { md: 4, xs: 1 }
				}}
			>
				<Typography variant="h5" sx={{ fontWeight: 700, py: 2 }}>
					FAQs
				</Typography>

				<Faqs />
			</Box>
			{/*  */}
		</Box>
	);
}
