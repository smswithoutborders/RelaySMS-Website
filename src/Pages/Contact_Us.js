import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FiMail, FiMessageSquare } from "react-icons/fi";
import { FaTwitter as FaXTwitter, FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactItem = ({ icon: Icon, title, link, buttonText, variant }) => (
	<Card className="text-center mb-4 shadow-sm">
		<Card.Body className="d-flex flex-column align-items-center">
			<Button variant={variant} className="icon-btn mb-3" style={{ width: "60px", height: "60px" }}>
				<Icon className="h3 m-0" />
			</Button>
			<Card.Title>{title}</Card.Title>
			{link ? (
				<a href={link.href} target="_blank" rel="noreferrer" className="btn btn-link">
					{buttonText}
				</a>
			) : (
				<span className="text-muted">{buttonText}</span>
			)}
		</Card.Body>
	</Card>
);

const Contact_Us = () => {
	const { t } = useTranslation();

	const contactItems = [
		{
			icon: FiMail,
			title: t("ContactUs.Items.Email.Title"),
			link: {
				href: t("ContactUs.Items.Email.Link")
			},
			buttonText: t("ContactUs.Items.Email.ButtonText"),
			variant: "primary"
		},
		{
			icon: FiMessageSquare,
			title: t("ContactUs.Items.IRC.Title"),
			buttonText: t("ContactUs.Items.IRC.ButtonText"),
			variant: "success"
		},
		{
			icon: FaXTwitter,
			title: t("ContactUs.Items.Twitter.Title"),
			link: { href: t("ContactUs.Items.Twitter.Link") },
			buttonText: t("ContactUs.Items.Twitter.ButtonText"),
			variant: "dark"
		},
		{
			icon: FaGithub,
			title: t("ContactUs.Items.GitHub.Title"),
			link: { href: t("ContactUs.Items.GitHub.Link") },
			buttonText: t("ContactUs.Items.GitHub.ButtonText"),
			variant: "secondary"
		}
	];

	return (
		<div className="section-contact" style={{ padding: "120px 0" }}>
			<Container>
				<Row className="justify-content-center mb-4">
					<Col xs={12} lg={10} xl={8}>
						<div className="text-center">
							<h2
								className="title"
								style={{ fontWeight: 700, fontSize: "55px", textTransform: "uppercase" }}
							>
								{t("ContactUs.Title")}
							</h2>
						</div>
					</Col>
				</Row>
				<Row>
					{contactItems.map((item, index) => (
						<Col md={6} sm={6} xs={12} key={index}>
							<ContactItem {...item} />
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default Contact_Us;
