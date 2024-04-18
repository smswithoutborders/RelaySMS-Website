import { Box, Card, CardMedia, Grid, Typography, Avatar, Button } from "@mui/material";
import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import CardContent from "@mui/material/CardContent";
import Faqs from "../Components/FAQs";
import { AnimatePresence, motion, useScroll } from "framer-motion";

export default function Landing() {
	const { scrollYProgress } = useScroll();
	return (
		<Box>
			<motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
			{/* Banner Page */}
			<Grid container sx={{ px: { md: 15, sm: 10, xs: 3 }, my: { md: 0, xs: 10 } }}>
				<AnimatePresence
					transition={{
						ease: "linear",
						duration: 2,
						x: { duration: 1 }
					}}
				>
					<Grid item md={6} xs={12} sx={{ justifyContent: "center", display: "flex", mx: "auto" }}>
						<Box component="img" src="/phones.png" sx={{ width: { md: "80%", xs: "100%" } }} />
					</Grid>
				</AnimatePresence>
				<Grid item md={6} xs={12} my="auto">
					<Box component="img" src="/logo.png" sx={{ width: { md: "10%", xs: "18%" }, mb: 4 }} />
					<Typography variant="h3" sx={{ fontWeight: 700 }}>
						Communicate offline with online platforms
					</Typography>
					<Typography variant="h5" sx={{ mt: 7 }}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim purus eu nunc
						ullamcorper, vel convallis ante tincidunt.
					</Typography>
					{/*  */}
					<Grid container>
						<Grid item md={3} xs={6}>
							<Box
								className="goggle-play"
								component="img"
								src="/googleplay.png"
								sx={{ width: "100%" }}
							/>
						</Grid>
						<Grid item md={3} xs={6}>
							<Button
								component="a"
								href="/download"
								variant="contained"
								sx={{
									py: 1.2,
									mt: { md: 7.6, xs: 8.5, sm: 15 },
									bgcolor: "black"
								}}
							>
								<Box
									component="img"
									src="/logo.png"
									sx={{ width: { md: "17%", xs: "18%" }, mr: 1 }}
								/>

								<Typography variant="body2">Desktop App</Typography>
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			{/*  */}
			{/* About Section */}
			<Box textAlign="center" sx={{ py: { md: 20, xs: 7 }, px: { md: 30, xs: 3 } }}>
				<Typography variant="h4" sx={{ fontWeight: 700, fontSize: { xs: "25px", md: "33px" } }}>
					With RelaySMS, you can send emails, tweet and chat on telegram without an active internet
					connection.
				</Typography>
				<Typography variant="h5" sx={{ p: { md: 5, xs: 2 } }}>
					By setting up your account while you have an internet connection, you can continue to
					communicate later using SMS when your no longer have internet access. In the case where
					you have no stored token, communicate using Relay Bridges.
				</Typography>
				<a href="/help">
					<Typography variant="body1" sx={{ p: 2, textDecoration: "underline" }}>
						Getting Started <FaCircleArrowRight size="20px" style={{ rotate: "-30deg" }} />
					</Typography>
				</a>
			</Box>
			{/*  */}
			{/* How Relay Works */}
			<Box
				sx={{
					p: { md: 10, xs: 3 },
					bgcolor: "#E3DAFF",
					color: "white",
					py: { md: 10, xs: 10 }
				}}
			>
				<Grid container rowSpacing={6} columnSpacing={6} alignItems="center" align="center">
					<Grid item md={4} sm={6} xs={12}>
						<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
							<Box
								className="cards"
								sx={{
									p: { md: 5, xs: 3 },
									borderRadius: 5,
									align: "center"
								}}
							>
								<Typography variant="h4" sx={{ fontWeight: 700, py: 2 }}>
									Secure
								</Typography>
								<Box
									component="img"
									src="/secure.svg"
									sx={{ width: { md: "45%", xs: "80%" }, py: 4 }}
								/>

								<Typography variant="body1">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim purus eu
									nunc ullamcorper, vel convallis ante tincidunt. Vivamus lacinia, lacus nec
									tristique bibendum, velit libero consequat purus, ut finibus ex lectus eget nisi.
									Nulla facilisi.
								</Typography>
							</Box>
						</motion.div>
					</Grid>
					<Grid item md={4} sm={6} xs={12} my="auto">
						<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
							<Box
								className="cards"
								sx={{
									p: { md: 5, xs: 3 },
									borderRadius: 5,
									align: "center"
								}}
							>
								<Typography variant="h4" sx={{ fontWeight: 700, py: 2 }}>
									Open Source
								</Typography>
								<Box
									component="img"
									src="/open.svg"
									sx={{ width: { md: "100%", xs: "80%" }, py: 4 }}
								/>

								<Typography variant="body1">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim purus eu
									nunc ullamcorper, vel convallis ante tincidunt. Vivamus lacinia, lacus nec
									tristique bibendum, velit libero consequat purus, ut finibus ex lectus eget nisi.
									Nulla facilisi.
								</Typography>
							</Box>
						</motion.div>
					</Grid>

					<Grid item md={4} sm={6} xs={12} my="auto">
						<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
							<Box
								className="cards"
								sx={{
									p: { md: 5, xs: 3 },
									borderRadius: 5,
									align: "center"
								}}
							>
								<Typography variant="h4" sx={{ fontWeight: 700, py: 1 }}>
									Decentralized
								</Typography>
								<Box
									component="img"
									src="/serer.svg"
									sx={{ width: { md: "50%", xs: "80%" }, py: 4 }}
								/>

								<Typography variant="body1">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim purus eu
									nunc ullamcorper, vel convallis ante tincidunt. Vivamus lacinia, lacus nec
									tristique bibendum, velit libero consequat purus, ut finibus ex lectus eget nisi.
									Nulla facilisi.
								</Typography>
							</Box>
						</motion.div>
					</Grid>
				</Grid>
			</Box>
			{/*  */}
			{/* Rlay Map */}
			<Box sx={{ bgcolor: "white", px: { md: 15, sm: 10, xs: 3 } }}>
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
						<Typography
							variant="body1"
							sx={{
								color: "black",
								py: 3
							}}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim purus eu nunc
							ullamcorper, vel convallis ante tincidunt.
						</Typography>
					</Grid>
					<Grid item md={7} sx={{ justifyContent: "center", display: "flex", mx: "auto" }}>
						<Box component="img" src="/map.png" sx={{ width: "100%", borderRadius: "20px" }} />
					</Grid>
				</Grid>
			</Box>
			{/*  */}
			{/* Video */}
			<Box sx={{ px: { md: 15, sm: 10, xs: 3 }, my: { md: 2, xs: 10 } }}>
				<Box>
					<Grid container rowSpacing={4} columnSpacing={4} sx={{ py: { md: 15, xs: 10 } }}>
						<Grid
							item
							md={7}
							sx={{
								justifyContent: "center",
								display: "flex",
								mx: "auto",
								width: "100%"
							}}
						>
							<iframe
								width="860"
								height="415"
								src="https://www.youtube.com/embed/NLp4VSYGR4Y?si=EmNrXJKsrkIuOEPs"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen
							></iframe>
						</Grid>
						<Grid item md={5} my="auto">
							<Typography
								variant="h3"
								sx={{ fontWeight: 700, fontSize: { md: "48px", xs: "33px" } }}
							>
								Get familiar with RelaySMS
							</Typography>
						</Grid>
					</Grid>
				</Box>
			</Box>
			{/*  */}
			{/* What's New */}
			<Box sx={{ bgcolor: "#8789C0", p: { md: 3, xs: 2 } }}>
				<Grid
					container
					rowSpacing={4}
					columnSpacing={4}
					sx={{ px: { md: 13, sm: 10, xs: 2 }, my: { md: 2, xs: 5 }, pb: 8 }}
				>
					<Grid item md={12} xs={12}>
						<Typography variant="h5" sx={{ fontWeight: 700, py: 2, color: "white" }}>
							Whats new on RelaySMS ?
						</Typography>
					</Grid>
					<Grid item md={4} sm={6} xs={12}>
						<Card sx={{ maxWidth: 400 }}>
							<CardMedia sx={{ height: 200 }} image="/reliability.jpg" title="reliability" />
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
							<CardMedia sx={{ height: 200 }} image="/resilience.jpg" title="resilience" />
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
			{/*  */}
			{/* FAQS */}
			<Box sx={{ px: { md: 15, sm: 10, xs: 3 }, my: { md: 15, xs: 10 } }}>
				<Typography variant="h5" sx={{ fontWeight: 700, py: 4 }}>
					FAQs
				</Typography>

				<Faqs />
			</Box>
			{/*  */}
		</Box>
	);
}
