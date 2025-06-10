import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowLeft } from "react-icons/fa6";

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
					transition: "color 0.3s ease"
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
	const { t } = useTranslation();

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
		<div
			style={{
				backgroundColor: "#FAF2E4",
				minHeight: "80vh",
				width: "100%",
				paddingTop: "120px"
			}}
		>
			<Button as="a" href="/" variant="light" className="mb-4 ms-3">
				<FaArrowLeft className="me-2" /> {t("Back", "Back")}
			</Button>
			<Container className="d-flex flex-column justify-content-center">
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
		</div>
	);
};

export default Contact_Us;
