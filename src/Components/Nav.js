import { Typography, Box, IconButton } from "@mui/material";
import React from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function Nav({ darkMode, toggleDarkMode }) {
	return (
		<>
			<Box
				component="nav"
				sx={{
					display: { md: "flex", xs: "none", sm: "none" },
					justifyContent: "end",
					py: 1.5,
					mx: 5,
					right: 0,
					color: "white"
				}}
			>
				<Box sx={{ display: "flex" }}>
					<Box
						className="cards"
						sx={{
							display: "flex",

							borderRadius: 7,
							p: 1,
							px: 2,
							justifyItems: "space-between"
						}}
					>
						<a href="/">
							<Typography sx={{ mx: 4 }} textAlign={"center"}>
								Home
							</Typography>
						</a>
						<a
							href="https://smswithoutborders.github.io/docs/tutorials/getting-started/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<Typography sx={{ mx: 4 }} textAlign={"center"}>
								Help
							</Typography>
						</a>
						<a href="https://developers.smswithoutborders.com/" target="_blank" rel="noreferrer">
							<Typography sx={{ mx: 4 }} textAlign={"center"}>
								Developers
							</Typography>
						</a>
						<a href="https://blog.smswithoutborders.com/" target="_blank" rel="noreferrer">
							<Typography sx={{ mx: 4 }} textAlign={"center"}>
								Blog
							</Typography>
						</a>
					</Box>
					<Typography className="cards" sx={{ borderRadius: 7, px: 3, py: 1, ml: 2 }}>
						Donate
					</Typography>
					{/* Dark/Light mode toggle */}
					<IconButton
						className="cards"
						onClick={toggleDarkMode}
						sx={{ ml: 2 }}
						aria-label={darkMode ? "Light Mode" : "Dark Mode"}
						color="inherit"
					>
						{darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
					</IconButton>
				</Box>
			</Box>
		</>
	);
}
