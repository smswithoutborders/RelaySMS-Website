import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import useMediaQuery from "@mui/material/useMediaQuery";
import LanguageSwitcher from "../Components/LanguageSwitcher";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import CloseIcon from "@mui/icons-material/Close";
import "../App.css";

function ScrollTop(props) {
	const { children, window } = props;
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
		disableHysteresis: true,
		threshold: 100
	});

	const handleClick = (event) => {
		const anchor = (event.target.ownerDocument || document).querySelector("#back-to-top-anchor");
		if (anchor) {
			anchor.scrollIntoView({ behavior: "smooth", block: "center" });
		}
	};

	return (
		<Fade in={trigger}>
			<Box
				onClick={handleClick}
				role="presentation"
				sx={{ position: "fixed", bottom: 16, right: 16 }}
			>
				{children}
			</Box>
		</Fade>
	);
}

ScrollTop.propTypes = {
	children: PropTypes.element.isRequired,
	window: PropTypes.func
};

export default function BackToTop(props) {
	const { t, i18n } = useTranslation();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	const [anchorEl, setAnchorEl] = React.useState(null);
	const [menuOpen, setMenuOpen] = React.useState(false); // State for menu open/close

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
		setMenuOpen(true); // Open the menu
	};

	const handleClose = () => {
		setAnchorEl(null);
		setMenuOpen(false); // Close the menu
	};

	const direction = i18n.dir();
	const themeWithDirection = createTheme({
		direction: direction
	});

	return (
		<ThemeProvider theme={themeWithDirection}>
			<React.Fragment>
				<CssBaseline />
				<AppBar dir={direction} sx={{ backgroundColor: "white" }} elevation={0}>
					<Toolbar>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								flexGrow: 1,
								justifyContent: "space-between",
								color: "black"
							}}
							dir={direction}
						>
							<img
								src="./logo.png"
								alt="Logo"
								style={{ height: "40px", marginRight: "16px", color: "#1c222c" }}
							/>
							{isMobile ? (
								<>
									{menuOpen ? ( // Show close button if menu is open
										<IconButton
											edge="start"
											color="inherit"
											aria-label="close"
											onClick={handleClose}
											sx={{ padding: "20px", color: "black" }}
										>
											<CloseIcon />
										</IconButton>
									) : (
										<IconButton
											edge="start"
											color="inherit"
											aria-label="menu"
											onClick={handleMenu}
											sx={{ padding: "20px", color: "black" }}
										>
											<MenuIcon />
										</IconButton>
									)}
									<Menu
										dir={direction}
										id="menu-appbar"
										anchorEl={anchorEl}
										anchorOrigin={{
											vertical: "top",
											horizontal: direction === "rtl" ? "left" : "right"
										}}
										keepMounted
										transformOrigin={{
											vertical: "top",
											horizontal: direction === "rtl" ? "left" : "right"
										}}
										open={Boolean(anchorEl)}
										onClose={handleClose}
									>
										<MenuItem onClick={handleClose}>
											<a
												href="https://smswithoutborders.github.io/docs/tutorials/getting-started/"
												target="_blank"
												rel="noreferrer noopener"
												className="menu-link"
											>
												{t("Nav.help")}
											</a>
										</MenuItem>
										<MenuItem onClick={handleClose}>
											<a
												href="https://blog.smswithoutborders.com/"
												target="_blank"
												rel="noreferrer"
												className="menu-link"
											>
												{t("Nav.Blog")}
											</a>
										</MenuItem>
										<MenuItem onClick={handleClose}>
											<IconButton
												href="https://x.com/RelaySMS"
												target="_blank"
												rel="noopener noreferrer"
												color="inherit"
											>
												<TwitterIcon />
											</IconButton>
										</MenuItem>
										<MenuItem onClick={handleClose}>
											<IconButton
												href="https://github.com/smswithoutborders"
												target="_blank"
												rel="noopener noreferrer"
												color="inherit"
											>
												<GitHubIcon />
											</IconButton>
										</MenuItem>
										<MenuItem onClick={handleClose}>
											<LanguageSwitcher />
										</MenuItem>
									</Menu>
								</>
							) : (
								<Box
									component="nav"
									sx={{
										display: "flex",
										alignItems: "center",
										gap: 2,
										ml: "auto"
									}}
									dir={direction}
								>
									<a
										href="https://smswithoutborders.github.io/docs/tutorials/getting-started/"
										target="_blank"
										rel="noreferrer noopener"
										className="menu-link"
									>
										<Typography>{t("Nav.help")}</Typography>
									</a>
									<a
										href="https://blog.smswithoutborders.com/"
										target="_blank"
										rel="noreferrer"
										className="menu-link"
									>
										<Typography>{t("Nav.Blog")}</Typography>
									</a>
									<IconButton
										href="https://x.com/RelaySMS"
										target="_blank"
										rel="noopener noreferrer"
										color="inherit"
									>
										<TwitterIcon />
									</IconButton>
									<IconButton
										href="https://github.com/smswithoutborders"
										target="_blank"
										rel="noopener noreferrer"
										color="inherit"
									>
										<GitHubIcon />
									</IconButton>
									<LanguageSwitcher />
								</Box>
							)}
						</Box>
					</Toolbar>
				</AppBar>
				<Toolbar id="back-to-top-anchor" />
				<ScrollTop {...props}>
					<Fab size="small" aria-label="scroll back to top">
						<KeyboardArrowUpIcon />
					</Fab>
				</ScrollTop>
			</React.Fragment>
		</ThemeProvider>
	);
}
