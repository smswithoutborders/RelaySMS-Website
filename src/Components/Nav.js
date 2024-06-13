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
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
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
	const { darkMode, toggleDarkMode } = props;
	const { t, i18n } = useTranslation();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
		handleClose(); // Close the menu after language change
	};

	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar>
				<Toolbar>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							flexGrow: 1,
							justifyContent: "space-between"
						}}
					>
						{isMobile ? (
							<>
								<IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenu}>
									<MenuIcon />
								</IconButton>
								<Menu
									id="menu-appbar"
									anchorEl={anchorEl}
									anchorOrigin={{
										vertical: "top",
										horizontal: "right"
									}}
									keepMounted
									transformOrigin={{
										vertical: "top",
										horizontal: "right"
									}}
									open={Boolean(anchorEl)}
									onClose={handleClose}
								>
									<MenuItem onClick={handleClose}>
										<a
											href="/"
											className="menu-link" // Add class for styling
										>
											{t("Home")}
										</a>
									</MenuItem>
									<MenuItem onClick={handleClose}>
										<a
											href="https://smswithoutborders.github.io/docs/tutorials/getting-started/"
											target="_blank"
											rel="noreferrer noopener"
											className="menu-link" // Add class for styling
										>
											{t("help")}
										</a>
									</MenuItem>
									<MenuItem onClick={handleClose}>
										<a
											href="https://github.com/deku-messaging"
											target="_blank"
											rel="noreferrer"
											className="menu-link" // Add class for styling
										>
											{t("github")}
										</a>
									</MenuItem>
									<MenuItem onClick={handleClose}>
										<a
											href="https://blog.smswithoutborders.com/"
											target="_blank"
											rel="noreferrer"
											className="menu-link" // Add class for styling
										>
											{t("Blog")}
										</a>
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
									flexGrow: 1
								}}
							>
								<a href="/" className="menu-link">
									<Typography>{t("Home")}</Typography>
								</a>
								<a
									href="https://smswithoutborders.github.io/docs/tutorials/getting-started/"
									target="_blank"
									rel="noreferrer noopener"
									className="menu-link"
								>
									<Typography>{t("help")}</Typography>
								</a>
								<a
									href="https://github.com/deku-messaging"
									target="_blank"
									rel="noreferrer"
									className="menu-link"
								>
									<Typography>{t("github")}</Typography>
								</a>
								<a
									href="https://blog.smswithoutborders.com/"
									target="_blank"
									rel="noreferrer"
									className="menu-link"
								>
									<Typography>{t("Blog")}</Typography>
								</a>
							</Box>
						)}
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: 2
							}}
						>
							<Select
								value={i18n.language}
								onChange={(e) => changeLanguage(e.target.value)}
								sx={{
									backgroundColor: theme.palette.background.paper,
									borderRadius: theme.shape.borderRadius,
									"& .MuiSelect-root": {
										paddingLeft: theme.spacing(2),
										paddingRight: theme.spacing(2)
									}
								}}
								displayEmpty
								inputProps={{ "aria-label": "language selector" }}
								MenuProps={{
									anchorOrigin: {
										vertical: "bottom",
										horizontal: "right"
									},
									transformOrigin: {
										vertical: "top",
										horizontal: "right"
									},
									getContentAnchorEl: null
								}}
							>
								<MenuItem value="en">🇺🇸 English</MenuItem>
								<MenuItem value="fr">🇫🇷 French</MenuItem>
								<MenuItem value="fa">🇮🇷 Persian</MenuItem>
							</Select>
							<IconButton
								onClick={toggleDarkMode}
								aria-label={darkMode ? "Light Mode" : "Dark Mode"}
								color="inherit"
							>
								{darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
							</IconButton>
						</Box>
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
	);
}

BackToTop.propTypes = {
	darkMode: PropTypes.bool.isRequired,
	toggleDarkMode: PropTypes.func.isRequired
};
