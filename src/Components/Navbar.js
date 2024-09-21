import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

function NavigationBar() {
	const { i18n } = useTranslation();
	const isFarsi = i18n.language === "fa";

	return (
		<Navbar
			bg="white"
			expand="md"
			className="navbar-custom fixed-top"
			dir={isFarsi ? "rtl" : "ltr"}
		>
			<Container>
				<Navbar.Brand href="#home" className={`me-auto ${isFarsi ? "me-0" : ""}`}>
					<img
						src="/logo.png"
						alt="RelaySMS Logo"
						style={{ height: "35px", width: "auto" }} /* Adjusted logo size */
					/>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className={`align-items-center ${isFarsi ? "me-auto" : "ms-auto"}`}>
						<Nav.Link href="#home" className="mx-2">
							Home
						</Nav.Link>
						<Nav.Link href="#Blog" className="mx-2">
							Blog
						</Nav.Link>
						<Nav.Link href="#help" className="mx-2">
							Help
						</Nav.Link>
						<Nav.Link to="/Contact" className="mx-2">
							Contact Us
						</Nav.Link>
						<Nav.Link href="https://twitter.com" target="_blank" className="mx-2">
							<FaTwitter />
						</Nav.Link>
						<Nav.Link href="https://github.com" target="_blank" className="mx-2">
							<FaGithub />
						</Nav.Link>
						<LanguageSwitcher className="mx-2" />
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavigationBar;
