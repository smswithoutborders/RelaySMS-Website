import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FiMail, FiMessageSquare, FiGlobe } from "react-icons/fi";
import { FaTwitter as FaXTwitter, FaGithub } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactItem = ({ icon: Icon, title, link, buttonText, variant }) => (
	<Card className="text-center mb-4 shadow-sm contact-card">
		<Card.Body className="d-flex flex-column align-items-center">
			<Button variant={variant} className="icon-btn mb-3">
				<Icon className="h3 m-0" />
			</Button>
			<Card.Title>{title}</Card.Title>
			{link ? (
				<a href={link.href} target="_blank" rel="noreferrer" className="stretched-link">
					{buttonText}
				</a>
			) : (
				<span className="text-muted">{buttonText}</span>
			)}
		</Card.Body>
	</Card>
);

const ContactHeader = () => {
	const contactItems = [
		{
			icon: FiMail,
			title: "Email",
			link: {
				href: "mailto:developers@smswithoutborders.com",
				text: "developers@smswithoutborders.com"
			},
			buttonText: "Send Email",
			variant: "primary"
		},
		{
			icon: FiMessageSquare,
			title: "IRC",
			buttonText: "freenode/#afkanerd",
			variant: "success"
		},
		{
			icon: FiGlobe,
			title: "Website",
			link: {
				href: "https://relay.smswithoutborders.com/",
				text: "https://relay.smswithoutborders.com/"
			},
			buttonText: "Visit Website",
			variant: "info"
		},
		{
			icon: FaXTwitter,
			title: "Twitter",
			link: { href: "https://x.com/RelaySMS", text: "https://x.com/RelaySMS" },
			buttonText: "Follow on Twitter",
			variant: "dark"
		},
		{
			icon: FaGithub,
			title: "GitHub",
			link: {
				href: "https://github.com/smswithoutborders/SMSWithoutBorders-App-Android",
				text: "https://github.com/smswithoutborders/SMSWithoutBorders-App-Android"
			},
			buttonText: "View on GitHub",
			variant: "secondary"
		}
	];

	return (
		<div className="section-contact" style={{ padding: "120px 0", backgroundColor: "#fff" }}>
			<Container>
				<Row className="justify-content-center">
					<Col xs={12} lg={10} xl={8}>
						<div className="header-section text-center" style={{ marginBottom: "30px" }}>
							<h2
								className="title"
								style={{
									position: "relative",
									marginBottom: "17px",
									textTransform: "uppercase",
									fontWeight: "700",
									fontSize: "55px"
								}}
							>
								Get In Touch
								<span
									className="big-title"
									style={{
										position: "absolute",
										bottom: "100%",
										left: "50%",
										transform: "translate(-50%,70%)",
										fontSize: "120px",
										fontWeight: "700",
										opacity: "0.15"
									}}
								>
									CONTACT
								</span>
							</h2>
						</div>
					</Col>
				</Row>
				<Row>
					{contactItems.map((item, index) => (
						<Col md={4} sm={6} key={index}>
							<ContactItem {...item} />
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default ContactHeader;
