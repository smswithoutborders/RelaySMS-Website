import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import Container from "@mui/material/Container";
import "../i18n.js";

export default function Landing() {
	const { t, i18n } = useTranslation();
	const isRTL = i18n.language === "fa";

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
											Keep{" "}
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
										Talking{" "}
										<Typography
											component="span"
											sx={{
												fontSize: "inherit",
												fontWeight: "inherit",
												position: "relative",
												"& svg": {
													position: "absolute",
													top: -16,
													right: -21,
													width: { xs: 22, md: 30 },
													height: "auto"
												}
											}}
										>
											With RelaySMS
										</Typography>{" "}
									</Typography>
								</Box>
								<Box sx={{ mb: 4, width: { xs: "100%", md: "70%" } }}>
									<Typography sx={{ color: "text.secondary", lineHeight: 1.6 }}>
										{"Send Emails, Posts, and Messages securely via SMS."}
									</Typography>
								</Box>
								{/*  */}
								<Box sx={{ "& button": { mr: 2 } }}>
									{/*  */}
									<Button color="primary" variant="contained">
										{t("Landing.Android")}
									</Button>
									{/*  */}
									<Button color="primary" variant="outlined">
										{t("Landing.Desktop")}
									</Button>
								</Box>
								{/*  */}
							</Box>
						</Grid>
						<Grid item xs={12} md={5} sx={{ position: "relative" }}>
							<Box sx={{ lineHeight: 0 }}>
								{/* <Image src="/images/home-hero.jpg" width={775} height={787} alt="Hero img" /> */}
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	);
}
