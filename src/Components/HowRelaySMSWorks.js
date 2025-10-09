import React from "react";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const HowRelaySMSWorks = () => {
	const { t, i18n } = useTranslation();
	const isRtl = i18n.language === "fa" || i18n.language === "farshi";

	return (
		<Box
			dir={isRtl ? "rtl" : "ltr"}
			sx={{
				pb: { xs: 8, md: 8 },
				px: { xs: 3, md: 6 },
				backgroundColor: "#f9f9f9"
			}}
		>
			<Container>
				<Grid container spacing={6} alignItems="center">
					<Grid item xs={12} md={6}>
						<Typography
							variant="h3"
							sx={{
								fontSize: {md: "2rem", xs: "1.5rem"},
								color: "#2D2A5A",
								fontWeight: 700,
								fontFamily: "'Unbounded', Ubuntu",
								mb: 3
							}}
						>
							{t("HowRelaySMSWorks.Header", "How does RelaySMS work?")}
						</Typography>
						<Typography
							variant="body1"
							sx={{
								fontSize: "1.1rem",
								color: "#555555",
								fontFamily: "Ubuntu",
								lineHeight: 1.7,
								mb: 3
							}}
						>
							{t(
								"HowRelaySMSWorks.Description1",
								'Designed by an expert team of technologists who had grown tired of internet shutdowns disrupting their ability to communicate, RelaySMS utilizes SMS messaging (aka "text messaging") to route offline messages back online.'
							)}
						</Typography>
						<Typography
							variant="body1"
							sx={{
								fontSize: "1.1rem",
								color: "#555555",
								fontFamily: "Ubuntu",
								lineHeight: 1.7,
								mb: 3
							}}
						>
							{t(
								"HowRelaySMSWorks.Description2",
								"After setting up RelaySMS on your phone, you can seamlessly connect and send messages on your preferred online messaging platforms without using any data at all (standard SMS rates will apply)."
							)}
						</Typography>
						<Typography
							variant="body1"
							sx={{
								fontSize: "1.1rem",
								color: "#555555",
								fontFamily: "Ubuntu",
								lineHeight: 1.7,
								mb: 4
							}}
						>
							{t(
								"HowRelaySMSWorks.Description3",
								"The key to RelaySMS lies in its use of Gateway Clients. These devices operate in areas with an active internet connection, allowing them to receive an SMS message from an offline RelaySMS user and then forward it to an online server where the user has already saved their platform permissions. Access granted, the initially offline message is then published online to the user's platform of choice."
							)}
						</Typography>
						{/* <Box sx={{ mb: 4 }}>
							<Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", sm: "row" } }}>
								<Button
									variant="contained"
									href="/"
									target="_blank"
									rel="noopener noreferrer"
									sx={{
										bgcolor: "#000158",
										color: "#ffffffff",
										textTransform: "none",
										fontWeight: 600,
										py: 1,
										px: 3,
										fontSize: "14px",
										transition: "all 0.3s ease",
										borderRadius: "8px",
										"&:hover": {
											backgroundColor: "#FF9E43",
											color: "#000158",
											transform: "translateY(-2px)",
											boxShadow: "0 8px 20px rgba(255, 158, 67, 0.3)"
										}
									}}
								>
									{t("HowRelaySMSWorks.SeeSpecification", "See Specification")}
								</Button>
							</Box>
						</Box> */}
					</Grid>
					<Grid item xs={12} md={6}>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center"
							}}
						>
							<Box
								component="img"
								src="/Relay-Flow(2).svg"
								alt="How RelaySMS Works"
								sx={{
									width: { xs: "100%", md: "100%", lg: "690px" }
								}}
							/>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default HowRelaySMSWorks;
