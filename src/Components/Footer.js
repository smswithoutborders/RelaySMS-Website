import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaGithub, FaTwitter, FaAndroid, FaApple, FaLinux } from "react-icons/fa";

function Footer() {
	const { t } = useTranslation();

	return (
		<footer style={footerStyles.container}>
			<Container>
				<Row className="py-2">
					<Col lg={4} md={6} sm={12} className="mb-2">
						<h5 style={footerStyles.title}>{t("Footer.Header")}</h5>
						<p style={footerStyles.text}>{t("Footer.body")}</p>
					</Col>
					<Col lg={2} md={3} sm={6} className="mb-2">
						<h5 style={footerStyles.title}>{t("Footer.Header1")}</h5>
						<ul style={footerStyles.links}>
							<li>
								<a
									href="https://github.com"
									target="_blank"
									rel="noopener noreferrer"
									style={footerStyles.link}
								>
									<FaGithub /> {t("Footer.social1")}
								</a>
							</li>
							<li>
								<a
									href="https://x.com"
									target="_blank"
									rel="noopener noreferrer"
									style={footerStyles.link}
								>
									<FaTwitter /> {t("Footer.social2")}
								</a>
							</li>
						</ul>
					</Col>
					<Col lg={2} md={3} sm={6} className="mb-2">
						<h5 style={footerStyles.title}>{t("Footer.Header2")}</h5>
						<ul style={footerStyles.links}>
							<li>
								<a href="/contact" style={footerStyles.link}>
									{t("Footer.help")}
								</a>
							</li>
						</ul>
					</Col>
					<Col lg={4} md={12} sm={12} className="text-center text-md-start">
						<h5 style={footerStyles.title}>{t("Footer.Header3")}</h5>
						<ul style={footerStyles.links}>
							<li>
								<a
									href="https://play.google.com"
									target="_blank"
									rel="noopener noreferrer"
									style={footerStyles.link}
								>
									<FaAndroid /> {t("Footer.download1")}
								</a>
							</li>
							<li>
								<a
									href="https://www.apple.com/app-store/"
									target="_blank"
									rel="noopener noreferrer"
									style={footerStyles.link}
								>
									<FaApple /> {t("Footer.download2")}
								</a>
							</li>
							<li>
								<a href="/linux" style={footerStyles.link}>
									<FaLinux /> {t("Footer.download3")}
								</a>
							</li>
						</ul>
					</Col>
				</Row>
				<Row className="pt-2 border-top">
					<Col className="text-center">
						<a href="/privacy" style={footerStyles.link}>
							{t("Footer.policy")}
						</a>
						<p style={footerStyles.copyright}>
							&copy; {new Date().getFullYear()} {t("Footer.copyright")}
						</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

const footerStyles = {
	container: {
		backgroundColor: "#333",
		color: "#fff",
		padding: "1rem 0", // Reduced padding
		fontSize: "0.85rem" // Reduced font size
	},
	title: {
		fontSize: "1.1rem", // Reduced title font size
		fontWeight: "bold",
		color: "#fff",
		marginBottom: "0.5rem" // Reduced margin
	},
	text: {
		color: "#bbb",
		lineHeight: "1.4" // Reduced line height
	},
	links: {
		listStyleType: "none",
		padding: 0
	},
	link: {
		color: "#bbb",
		textDecoration: "none",
		marginBottom: "0.3rem", // Reduced margin
		display: "block"
	},
	copyright: {
		color: "#bbb",
		marginTop: "0.5rem", // Reduced margin
		fontSize: "0.75rem" // Reduced copyright font size
	}
};

export default Footer;
