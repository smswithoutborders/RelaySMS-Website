import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { FaApple } from "react-icons/fa"; // Importing Apple icon

// Play Store image (replace with your actual image URL)
const playStoreImage = "/playstore.svg";

export default function DownloadButtons() {
	const handleDownload = (platform) => {
		// Handle download logic based on platform (App Store, Play Store)
		console.log(`Download on ${platform}`);
	};

	return (
		<Box className="flex items-center justify-center h-screen bg-gray-900">
			<Box>
				<Typography variant="h4" className="text-3xl text-white font-extrabold my-3 text-center">
					Get the app
				</Typography>
				<Grid
					container
					spacing={2}
					justifyContent="center"
					alignItems="center"
					className="flex flex-col w-full gap-2 p-2 md:flex-row"
				>
					<Grid item xs={12} md={6}>
						<Button
							variant="contained"
							color="primary"
							fullWidth
							onClick={() => handleDownload("App Store")}
							className="flex items-center justify-center px-5 py-3 text-center text-white bg-white rounded-2xl"
						>
							<FaApple className="w-7" style={{ marginRight: "0.75rem" }} />
							<Box className="flex flex-col ml-2 leading-4 text-left md:ml-3">
								<Typography variant="body2" className="text-sm text-black">
									Get it on
								</Typography>
								<Typography variant="h5" className="text-base font-semibold text-black">
									App Store
								</Typography>
							</Box>
						</Button>
					</Grid>
					<Grid item xs={12} md={6}>
						<Button
							variant="outlined"
							color="primary"
							fullWidth
							onClick={() => handleDownload("Google Play")}
							className="flex items-center justify-center px-5 py-3 text-center text-white bg-white rounded-2xl"
						>
							<img
								src={playStoreImage}
								alt="Play Store"
								className="w-5 md:w-4" // Adjusted width classes for different screen sizes
								style={{ marginRight: "0.75rem", maxWidth: "10%", height: "auto" }} // Added style for responsive sizing
							/>

							<Box className="flex flex-col ml-2 leading-4 text-left md:ml-3">
								<Typography variant="body2" className="text-sm text-black">
									Get it on
								</Typography>
								<Typography variant="h5" className="text-base font-semibold text-black">
									Play Store
								</Typography>
							</Box>
						</Button>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}
