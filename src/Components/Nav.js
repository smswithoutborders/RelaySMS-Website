import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../Components/LanguageSwitcher";
import { FaTwitter, FaGithub, FaArrowUp } from "react-icons/fa";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Fade from "@mui/material/Fade";
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

export default function BackToTop(props) {
	const { t, i18n } = useTranslation();
	const direction = i18n.dir();
	const themeWithDirection = createTheme({
		direction: direction
	});

	return (
		<ThemeProvider theme={themeWithDirection}>
			<React.Fragment>
				<CssBaseline />
				<Navbar
					dir={direction}
					bg="light"
					expand="lg"
					sticky="top"
					className="shadow-sm p-3 mb-5 bg-white rounded navbar-custom"
				>
					<Container>
						<Navbar.Brand href="#" className="me-auto">
							<img src="./logo.png" alt="Logo" style={{ height: "40px" }} />
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="ms-auto">
								<Nav.Link
									href="https://smswithoutborders.github.io/docs/tutorials/getting-started/"
									target="_blank"
									rel="noreferrer noopener"
									className="nav-link"
								>
									{t("Nav.help")}
								</Nav.Link>
								<Nav.Link
									href="https://blog.smswithoutborders.com/"
									target="_blank"
									rel="noreferrer"
									className="nav-link"
								>
									{t("Nav.Blog")}
								</Nav.Link>
								<Nav.Link
									href="https://x.com/RelaySMS"
									target="_blank"
									rel="noopener noreferrer"
									className="nav-link nav-icon"
								>
									<FaTwitter />
								</Nav.Link>
								<Nav.Link
									href="https://github.com/smswithoutborders"
									target="_blank"
									rel="noopener noreferrer"
									className="nav-link nav-icon"
								>
									<FaGithub />
								</Nav.Link>
								<Nav.Link className="nav-link">
									<LanguageSwitcher />
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
				<div id="back-to-top-anchor" />
				<ScrollTop {...props}>
					<Fab size="small" aria-label="scroll back to top">
						<FaArrowUp />
					</Fab>
				</ScrollTop>
			</React.Fragment>
		</ThemeProvider>
	);
}
