import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function MobileNav({ darkMode, toggleDarkMode }) {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<nav style={{ backgroundColor: "transparent" }}>
			<Container
				maxWidth="sm"
				sx={{
					display: { xs: "flex", md: "none" },
					justifyContent: "space-between",
					alignItems: "center"
				}}
			>
				<Box display="flex">
					<Typography variant="body1" sx={{ fontWeight: 600, px: 2 }}>
						RelaySMS
					</Typography>
				</Box>{" "}
				<Toolbar disableGutters>
					<Box sx={{ flexGrow: 0, left: 0 }}>
						<IconButton
							size="large"
							aria-label="menu"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "right"
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right"
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" }
							}}
						>
							<MenuItem onClick={handleCloseNavMenu}>
								<Typography
									textAlign="center"
									component="a"
									href="https://smswithoutborders.github.io/docs/tutorials/getting-started/"
									target="_blank"
									rel="noreferrer noopener"
								>
									Help
								</Typography>
							</MenuItem>

							<MenuItem
								onClick={handleCloseNavMenu}
								component="a"
								href="https://github.com/smswithoutborders/"
								target="_blank"
								rel="noreferrer noopener"
							>
								<Typography textAlign="center">Developers</Typography>
							</MenuItem>

							<MenuItem
								onClick={handleCloseNavMenu}
								component="a"
								href="https://blog.smswithoutborders.com/"
								target="_blank"
								rel="noreferrer noopener"
							>
								<Typography textAlign="center">Blogs</Typography>
							</MenuItem>

							<MenuItem onClick={handleCloseNavMenu}>
								<Typography textAlign="center">Donate</Typography>
							</MenuItem>
						</Menu>
						<IconButton
							onClick={toggleDarkMode}
							sx={{ ml: 2 }}
							aria-label={darkMode ? "Light Mode" : "Dark Mode"}
							color="inherit"
						>
							{darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
						</IconButton>
					</Box>
				</Toolbar>
			</Container>
		</nav>
	);
}
export default MobileNav;
