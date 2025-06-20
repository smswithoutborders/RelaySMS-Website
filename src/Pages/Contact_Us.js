import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

const NAVBAR_HEIGHT = 70;

const ContactCard = ({ title, description, Icon, link, buttonLabel }) => {
	const [hovered, setHovered] = useState(false);

	return (
		<Col xs={12} md={4} className="mb-4 d-flex justify-content-center">
			<div
				style={{ ...styles.card, ...(hovered ? styles.cardHover : {}) }}
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
				tabIndex={0}
				role="group"
				aria-labelledby={`${title}-label`}
			>
				<div>{Icon}</div>
				<h3 id={`${title}-label`} style={styles.cardTitle}>
					{title}
				</h3>
				<p style={styles.cardDesc}>{description}</p>
				{link ? (
					<a
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						style={{ textDecoration: "none" }}
						aria-label={`Open ${title} link in a new tab`}
					>
						<Button className="btn-primary w-100 mt-2" style={styles.contactButton}>
							{buttonLabel}
						</Button>
					</a>
				) : (
					<Button disabled className="w-100 mt-2" style={styles.contactButtonDisabled}>
						{buttonLabel}
					</Button>
				)}
			</div>
		</Col>
	);
};

const Contact_Us = () => {
	const { t, i18n } = useTranslation();
	const isFarsi = i18n.language === "fa";

	const contactItems = [
		{
			title: t("ContactUs.Items.Email.Title") || "Email",
			description: t("ContactUs.Items.Email.EmailDescription") || "Send us an email anytime",
			Icon: <FontAwesomeIcon icon={faEnvelope} size="3x" style={styles.icon} aria-hidden="true" />,
			link: `mailto:${t("ContactUs.Items.Email.EmailAddress")}`,
			buttonLabel: t("ContactUs.Items.Email.ButtonText"),
			variant: "outline-primary"
		},
		{
			title: t("ContactUs.Items.Twitter.Title") || "Twitter",
			Icon: <FontAwesomeIcon icon={faTwitter} size="3x" style={styles.icon} aria-hidden="true" />,
			link: t("ContactUs.Items.Twitter.Link"),
			description: t("ContactUs.Items.Twitter.TwitterDescription") || "Follow us on Twitter",
			buttonLabel: t("ContactUs.Items.Twitter.ButtonText"),
			variant: "outline-dark"
		},
		{
			title: t("ContactUs.Items.GitHub.Title") || "Github",
			Icon: <FontAwesomeIcon icon={faGithub} size="3x" style={styles.icon} aria-hidden="true" />,
			link: t("ContactUs.Items.GitHub.Link"),
			description: t("ContactUs.Items.GitHub.GitHubDescription") || "Check our code on GitHub",
			buttonLabel: t("ContactUs.Items.GitHub.ButtonText"),
			variant: "outline-secondary"
		}
	];

	return (
		<div
			style={{
				...styles.page,
				direction: isFarsi ? "rtl" : "ltr",
				paddingTop: NAVBAR_HEIGHT + 20
			}}
		>
			<Container style={styles.container}>
				<div style={styles.titleWrapper}>
					<div style={styles.textLine}>
						<span style={{ ...styles.textDecor, marginRight: 10 }}>
							<span style={{ ...styles.spanLine, left: 0 }} />
							<span style={{ ...styles.dot, right: 0 }} />
							<span style={{ ...styles.dot, right: 10 }} />
						</span>
						<p
							style={{
								...styles.title,
								fontSize: "calc(1.4rem + 1vw)",
								lineHeight: "1.2"
							}}
						>
							{t("ContactUs.Title") || "Contact Us"}
						</p>
						<span style={{ ...styles.textDecor, marginLeft: 10 }}>
							<span style={{ ...styles.spanLine, right: 0 }} />
							<span style={{ ...styles.dot, left: 0 }} />
							<span style={{ ...styles.dot, left: 10 }} />
						</span>
					</div>

					<div
						style={{
							...styles.bottomText,
							fontSize: "calc(0.9rem + 0.2vw)",
							paddingTop: 20,
							maxWidth: 500,
							margin: "20px auto 0"
						}}
					>
						{t("ContactUs.Subtitle") ||
							"We’re here to help. Reach out to us through any of these channels."}
					</div>
				</div>

				<Row className="justify-content-center">
					{contactItems.map((item, index) => (
						<ContactCard key={index} {...item} />
					))}
				</Row>
			</Container>
		</div>
	);
};

const styles = {
	page: {
		minHeight: "calc(100vh - 70px - 70px)",
		background: "#FAF2E4",
		color: "#2d2a5a",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		overflowX: "hidden"
	},
	container: {
		maxWidth: "960px",
		width: "100%"
	},
	header: {
		textAlign: "center",
		marginBottom: "3rem"
	},

	icon: {
		color: "#2d2a5a",
		marginBottom: "10px"
	},
	card: {
		background: "rgba(17, 4, 128, 0.05)",
		backdropFilter: "blur(12px)",
		borderRadius: "20px",
		padding: "30px",
		textAlign: "center",
		width: "100%",
		maxWidth: "320px",
		transition: "transform 0.3s ease, box-shadow 0.3s ease",
		cursor: "pointer",
		userSelect: "none",
		margin: "20px"
	},

	cardHover: {
		transform: "scale(1.05)",
		boxShadow: "0 10px 20px #2d2a5a"
	},

	cardTitle: {
		fontSize: "1.5rem",
		marginTop: "20px",
		marginBottom: "10px"
	},
	cardDesc: {
		fontSize: "1rem",
		color: "gray",
		marginBottom: "20px"
	},
	contactButton: {
		backgroundColor: "#2d2a5a",
		border: "none",
		padding: "10px 25px",
		fontWeight: "600",
		borderRadius: "10px",
		color: "#fff"
	},
	contactButtonDisabled: {
		backgroundColor: "#555",
		border: "none",
		padding: "10px 25px",
		fontWeight: "600",
		borderRadius: "10px",
		color: "#ccc",
		cursor: "not-allowed"
	},

	titleWrapper: {
		textAlign: "center",
		margin: "0 auto",
		paddingBottom: 72
	},
	title: {
		fontSize: 30,
		lineHeight: "40px",
		fontWeight: 600,
		textTransform: "uppercase"
	},
	textLine: {
		marginTop: 10,
		Width: 100
	},

	textDecor: {
		display: "inline-block",
		height: 5,
		position: "relative",
		top: -2,
		width: 70
	},

	spanLine: {
		position: "absolute",
		top: 0,
		bottom: 0,
		width: 50,
		height: 1,
		background: "#FFA500"
	},

	dot: {
		position: "absolute",
		top: 0,
		bottom: 0,
		width: 5,
		height: 5,
		background: "#FFA500",
		borderRadius: "50%"
	},

	bottomText: {
		paddingTop: 16,
		color: "#848484",
		fontSize: 16,
		lineHeight: "26px",
		fontWeight: 400
	}
};

export default Contact_Us;
