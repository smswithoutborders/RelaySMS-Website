import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { LinkContainer } from "react-router-bootstrap";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../Components/LanguageSwitcher";

const CustomNavbar = () => {
	const { t, i18n } = useTranslation();
	const direction = i18n.dir();

	return (
		<Navbar
			expand="lg"
			bg="white"
			variant="light"
			dir={direction}
			fixed="top"
			style={{
				width: "100%",
				boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
				fontSize: "1.2rem",
				fontWeight: "bold",
				height: "80px"
			}}
		>
			<Container fluid>
				<Navbar.Brand href="/" className="ms-3">
					<img src="/logo.png" height="40" className="d-inline-block align-top" alt="Logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto d-flex align-items-center">
						<LinkContainer to="/">
							<Nav.Link className="text-dark mx-3">{t("Nav.Home")}</Nav.Link>
						</LinkContainer>
						<Nav.Link
							href="https://docs.smswithoutborders.com/"
							target="_blank"
							className="text-dark mx-3"
							rel="noopener noreferrer"
						>
							{t("Nav.help")}
						</Nav.Link>
						<Nav.Link
							href="https://blog.smswithoutborders.com/"
							target="_blank"
							className="text-dark mx-3"
							rel="noopener noreferrer"
						>
							{t("Nav.Blog")}
						</Nav.Link>
						<LinkContainer to="/Contact">
							<Nav.Link className="text-dark mx-3">{t("Nav.Contact")}</Nav.Link>
						</LinkContainer>
						<Nav.Link
							href="https://x.com/RelaySMS"
							target="_blank"
							className="text-dark mx-3"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faTwitter} size="lg" />
						</Nav.Link>
						<Nav.Link
							href="https://github.com/smswithoutborders"
							target="_blank"
							className="text-dark mx-3"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faGithub} size="lg" />
						</Nav.Link>
						<LanguageSwitcher className="ms-3" />
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default CustomNavbar;
