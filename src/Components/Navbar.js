import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaTwitter, FaGithub } from "react-icons/fa"; // Ensure you've installed react-icons
import { useTranslation } from "react-i18next"; // Import useTranslation for language detection
import LanguageSwitcher from "./LanguageSwitcher"; // Assuming LanguageSwitcher is a custom component

function NavigationBar() {
	const { i18n } = useTranslation(); // Access i18n for language information
	const isFarsi = i18n.language === "fa"; // Check if the selected language is Farsi

	return (
		<Navbar
			bg="white"
			expand="lg"
			className="navbar-custom fixed-top"
			dir={isFarsi ? "rtl" : "ltr"}
		>
			<Container>
				{/* Logo on the left */}
				<Navbar.Brand href="#home" className={`me-auto ${isFarsi ? "me-0" : ""}`}>
					<img src="/logo.png" alt="RelaySMS Logo" style={{ height: "40px" }} />
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					{/* Links on the right */}
					<Nav className={`align-items-center ${isFarsi ? "me-auto" : "ms-auto"}`}>
						<Nav.Link href="#home" className="ms-3">
							Home
						</Nav.Link>
						<Nav.Link href="#Blog" className="ms-3">
							Blog
						</Nav.Link>
						<Nav.Link href="#help" className="ms-3">
							Help
						</Nav.Link>
						<Nav.Link href="#contact" className="ms-3">
							Contact Us
						</Nav.Link>

						{/* Social media icons */}
						<Nav.Link href="https://twitter.com" target="_blank" className="ms-3">
							<FaTwitter />
						</Nav.Link>
						<Nav.Link href="https://github.com" target="_blank" className="ms-3">
							<FaGithub />
						</Nav.Link>

						{/* Language switcher with extra space */}
						<LanguageSwitcher className="ms-3" />
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavigationBar;
