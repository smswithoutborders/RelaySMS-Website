import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link } from "react-router-dom";

function NavigationBar() {
	const { t, i18n } = useTranslation();
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
					<img src="/logo.png" alt="RelaySMS" style={{ height: "35px", width: "auto" }} />
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className={`align-items-center ${isFarsi ? "me-auto" : "ms-auto"}`}>
						<Nav.Link href="/" className="mx-2">
							{t("Nav.Home")}
						</Nav.Link>
						<Nav.Link href="https://blog.smswithoutborders.com/" className="mx-2">
							{t("Nav.Blog")}
						</Nav.Link>
						<Nav.Link href="https://docs.smswithoutborders.com/" className="mx-2">
							{t("Nav.Help")}
						</Nav.Link>
						<Nav.Link as={Link} to="/Contact_Us">
							{t("Nav.Contact")}
						</Nav.Link>
						<Nav.Link
							href="https://docs.smswithoutborders.com/docs/Troubleshooting/Troubleshooting-FAQ"
							className="mx-2"
						>
							{t("Nav.Support")}
						</Nav.Link>
						<Nav.Link href="https://x.com/RelaySMS" target="_blank" className="mx-2">
							<FaTwitter />
						</Nav.Link>
						<Nav.Link href="https://github.com/smswithoutborders" target="_blank" className="mx-2">
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
