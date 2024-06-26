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
				{/* Banner Page */}
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
						<Grid item xs={12} md={4} my={"auto"} sx={{ position: "relative", marginTop: 4 }}>
							<Box
								component="img"
								src="/phonem.png"
								alt="image"
								sx={{
									width: "100%",
									maxWidth: "80%",
									height: "auto",
									transform: "rotate(10deg)"
								}}
							/>
						</Grid>
					</Grid>
				</Container>
				{/*======================================= end of Hero section -------------------------------------*/}
			</Box>
		</>
	);
}
