import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link as ScrollLink } from "react-scroll";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const Landing = () => {
	return (
		<Box
			id="hero"
			sx={{
				backgroundColor: "background.paper",
				position: "relative",
				pt: 4,
				pb: { xs: 8, md: 10 }
			}}
		>
			<Container maxWidth="lg">
				<Grid container spacing={0} sx={{ flexDirection: { xs: "column", md: "unset" } }}>
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
										Keep
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
									Talking with RelaySMS
								</Typography>
							</Box>
							<Box sx={{ mb: 4, width: { xs: "100%", md: "70%" } }}>
								<Typography sx={{ color: "text.secondary", lineHeight: 1.6 }}>
									{"Send Emails, Posts, and Messages securely via SMS"}
								</Typography>
							</Box>
							<Box sx={{ "& button": { mr: 2 } }}>
								<ScrollLink to="popular-course" spy smooth offset={0} duration={350}>
									<Button color="primary" size="large" variant="contained">
										Get Started
									</Button>
								</ScrollLink>
								<ScrollLink to="video-section" spy smooth offset={0} duration={350}>
									<Button
										color="primary"
										size="large"
										variant="outlined"
										startIcon={<PlayArrowIcon />}
									>
										Desktop
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
									width: 44,
									height: 44,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									mr: 2,
									"& img": { width: "32px !important", height: "auto" }
								}}
							>
								<img src="./github" alt="Github" style={{ width: 32, height: "auto" }} />
							</Box>
							<Box>
								<Typography
									component="h6"
									sx={{ color: "secondary.main", fontSize: "1.1rem", fontWeight: 700, mb: 0.5 }}
								>
									Github
								</Typography>
							</Box>
						</Box>
						<Box sx={{ lineHeight: 0 }}>
							<img src="/nerd1.png" alt="image" style={{ width: "100%", height: "auto" }} />
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Landing;
