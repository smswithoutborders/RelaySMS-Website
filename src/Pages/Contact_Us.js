import React from "react";
import { Container, Row, Col, Button, Nav, Navbar } from "react-bootstrap";
import { FiMail, FiMessageSquare } from "react-icons/fi";
import { FaTwitter as FaXTwitter, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import LanguageSwitcher from "../Components/LanguageSwitcher";

// Individual contact item component
const ContactItem = ({ icon: Icon, title, link, buttonText, variant }) => (
	<Col md={4} sm={6} xs={12} className="mb-4 text-center">
		<a href={link?.href || "#"} target="_blank" rel="noopener noreferrer">
			<Button
				variant={variant}
				className="icon-btn mb-3"
				style={{ width: "100px", height: "100px" }}
			>
				<Icon className="h3 m-0" />
			</Button>
		</a>
		<div>{title}</div>
		{link ? (
			<a href={link.href} target="_blank" rel="noreferrer" className="btn btn-link mt-2">
				{buttonText}
			</a>
		) : (
			<span className="text-muted mt-2">{buttonText}</span>
		)}
	</Col>
);

const Contact_Us = () => {
	const { t, i18n } = useTranslation();
	const isFarsi = i18n.language === "fa";

	const contactItems = [
		{
			icon: FiMail,
			title: t("ContactUs.Items.Email.Title"),
			link: { href: t("ContactUs.Items.Email.Link") },
			buttonText: t("ContactUs.Items.Email.ButtonText"),
			variant: "outline-primary"
		},
		{
			icon: FiMessageSquare,
			title: t("ContactUs.Items.IRC.Title"),
			buttonText: t("ContactUs.Items.IRC.ButtonText"),
			variant: "outline-success"
		},
		{
			icon: FaXTwitter,
			title: t("ContactUs.Items.Twitter.Title"),
			link: { href: t("ContactUs.Items.Twitter.Link") },
			buttonText: t("ContactUs.Items.Twitter.ButtonText"),
			variant: "outline-dark"
		},
		{
			icon: FaGithub,
			title: t("ContactUs.Items.GitHub.Title"),
			link: { href: t("ContactUs.Items.GitHub.Link") },
			buttonText: t("ContactUs.Items.GitHub.ButtonText"),
			variant: "outline-secondary"
		}
	];

	return (
		<>
			<Navbar expand="lg" fixed="top" dir={isFarsi ? "rtl" : "ltr"} className="custom-navbar">
				<Navbar.Brand href="#home" className="navbar-logo">
					<img src="./logo.png" alt="Logo" height="40" className="logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbar-nav" />
				<Navbar.Collapse id="navbar-nav" className="justify-content-end">
					<Nav className="nav-links">
						<Nav.Link href="/" className="mx-2">
							{t("Nav.Home")}
						</Nav.Link>
						<Nav.Link href="https://blog.smswithoutborders.com/" className="mx-2">
							{t("Nav.Blog")}
						</Nav.Link>
						<Nav.Link href="https://docs.smswithoutborders.com/" className="mx-2">
							{t("Nav.Help")}
						</Nav.Link>
						<Nav.Link as={Link} to="/Contact_Us" className="mx-2">
							{t("Nav.Contact")}
						</Nav.Link>
					</Nav>
					<Nav className="social-icons">
						<Nav.Link href="https://x.com/RelaySMS" className="mx-2">
							<img src="./x.svg" alt="X logo" height="20" />
						</Nav.Link>
						<Nav.Link href="https://github.com/smswithoutborders" className="mx-2">
							<FaGithub />
						</Nav.Link>
						<LanguageSwitcher className="mx-2" />
					</Nav>
				</Navbar.Collapse>
			</Navbar>

			<Container
				className="py-5 mt-5 d-flex flex-column justify-content-center"
				style={{ minHeight: "80vh" }}
			>
				<Row className="mb-5">
					<Col>
						<h2 className="text-center">{t("ContactUs.Title")}</h2>
					</Col>
				</Row>
				<Row className="justify-content-center">
					{contactItems.map((item, index) => (
						<ContactItem key={index} {...item} />
					))}
				</Row>
			</Container>
		</>
	);
};

export default Contact_Us;
