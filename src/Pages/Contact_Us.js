import React from "react";
import { Container, Row, Col, Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import LanguageSwitcher from "../Components/LanguageSwitcher";

const ContactItem = ({ imageSrc, title, link, buttonText, variant }) => (
	<Col md={4} sm={6} xs={12} className="mb-4 text-center">
		<a href={link?.href || "#"} target="_blank" rel="noopener noreferrer">
			<Button
				variant={variant}
				className="icon-btn mb-3"
				style={{
					width: "120px",
					height: "120px",
					borderRadius: "50%",
					backgroundColor: "#F0F1F3",
					borderColor: "#F0F1F3",
					color: "black",
					boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)"
				}}
			>
				<img src={imageSrc} alt={title} style={{ width: "50%", height: "50%" }} />
			</Button>
		</a>
		<a
			href={link?.href || "#"}
			target="_blank"
			rel="noopener noreferrer"
			style={{ color: "inherit", textDecoration: "none" }}
		>
			<div>{title}</div>
		</a>
		{link ? (
			<a
				href={link.href}
				target="_blank"
				rel="noreferrer"
				className="btn btn-link mt-2"
				style={{
					color: "black",
					textDecoration: "none",
					transition: "color 0.3s ease" // Smooth color transition
				}}
				onMouseEnter={(e) => (e.currentTarget.style.color = "#0056b3")}
				onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
			>
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
			imageSrc: "./gmail.svg",
			link: { href: t("ContactUs.Items.Email.Link") },
			buttonText: t("ContactUs.Items.Email.ButtonText"),
			variant: "outline-primary"
		},
		{
			imageSrc: "./x.svg",
			link: { href: t("ContactUs.Items.Twitter.Link") },
			buttonText: t("ContactUs.Items.Twitter.ButtonText"),
			variant: "outline-dark"
		},
		{
			imageSrc: "./github.svg",
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
				style={{ minHeight: "90vh" }}
			>
				<Row className="mb-5">
					<Col>
						<h2
							className="text-center"
							style={{
								fontSize: "2.5rem",
								fontWeight: "bold",
								color: "#333",
								padding: window.innerWidth >= 768 ? "20px" : "20px",
								transition: "color 0.3s ease, transform 0.3s ease"
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.color = "#0056b3";
								e.currentTarget.style.transform = "scale(1.05)";
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.color = "#333";
								e.currentTarget.style.transform = "scale(1)";
							}}
						>
							{t("ContactUs.Title")}
						</h2>
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
