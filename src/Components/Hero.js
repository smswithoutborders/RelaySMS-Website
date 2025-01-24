import React from "react";
import { Container, Grid, Typography, Box, Button } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Relay = () => {
	return (
		<Box
			sx={{
				backgroundColor: "#FAF2E4",
				py: { xs: 6, md: 12 },
				px: { xs: 3, md: 6 }
			}}
		>
			<Container maxWidth="lg">
				<Grid container spacing={6} alignItems="center" justifyContent="center">
					<Grid item xs={12} md={6}>
						<Typography
							variant="h3"
							sx={{
								fontWeight: "bold",
								lineHeight: 1.2,
								mb: 3,
								fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
								color: "#2D2A5A"
							}}
						>
							Stay Connected with RelaySMS
						</Typography>
						<Typography
							variant="body1"
							sx={{
								mb: 4,
								fontSize: { xs: "1rem", sm: "1.2rem" },
								color: "#323252"
							}}
						>
							RelaySMS enables users to send messages to online platforms without the use of an
							active internet connection.
						</Typography>
						<Box sx={{ display: "flex", gap: 2 }}>
							<Button
								variant="contained"
								color="#2D2A5A"
								sx={{
									px: 5,
									py: 1,
									backgroundColor: "#FF9E43",
									textTransform: "none",
									fontSize: "1rem",
									borderRadius: 5,
									"&:hover": { backgroundColor: "#FF9E43" }
								}}
								endIcon={<ArrowDownwardIcon />}
							>
								Download RelaySMS
							</Button>
						</Box>
					</Grid>

					<Grid item xs={12} md={6}>
						<Box
							sx={{
								width: "100%",
								maxWidth: 500,
								margin: "0 auto",
								borderRadius: 4,
								overflow: "hidden",
								boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)"
							}}
						>
							<img
								src="/Relay.png"
								alt="Meet the Best Doctors"
								style={{
									width: "100%",
									height: "auto",
									display: "block",
									objectFit: "cover"
								}}
							/>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Relay;
