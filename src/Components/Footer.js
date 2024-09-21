import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaGithub, FaTwitter, FaAndroid, FaApple, FaLinux } from "react-icons/fa";

function Footer() {
	const { t } = useTranslation();

	return (
		<footer className="footer-container">
			<Container>
				<Row className="py-2">
					<Col lg={4} md={6} sm={12} className="mb-2">
						<h5 className="footer-title">{t("Footer.Header")}</h5>
						<p className="footer-text">{t("Footer.body")}</p>
					</Col>
					<Col lg={2} md={3} sm={6} className="mb-2">
						<h5 className="footer-title">{t("Footer.Header1")}</h5>
						<ul className="footer-links">
							<li>
								<a
									href="https://github.com"
									target="_blank"
									rel="noopener noreferrer"
									className="footer-link"
								>
									<FaGithub /> {t("Footer.social1")}
								</a>
							</li>
							<li>
								<a
									href="https://x.com"
									target="_blank"
									rel="noopener noreferrer"
									className="footer-link"
								>
									<FaTwitter /> {t("Footer.social2")}
								</a>
							</li>
						</ul>
					</Col>
					<Col lg={2} md={3} sm={6} className="mb-2">
						<h5 className="footer-title">{t("Footer.Header2")}</h5>
						<ul className="footer-links">
							<li>
								<a href="/contact" className="footer-link">
									{t("Footer.help")}
								</a>
							</li>
						</ul>
					</Col>
					<Col lg={4} md={12} sm={12} className="text-center text-md-start">
						<h5 className="footer-title">{t("Footer.Header3")}</h5>
						<ul className="footer-links">
							<li>
								<a
									href="https://play.google.com"
									target="_blank"
									rel="noopener noreferrer"
									className="footer-link"
								>
									<FaAndroid /> {t("Footer.download1")}
								</a>
							</li>
							<li>
								<a
									href="https://www.apple.com/app-store/"
									target="_blank"
									rel="noopener noreferrer"
									className="footer-link"
								>
									<FaApple /> {t("Footer.download2")}
								</a>
							</li>
							<li>
								<a href="/linux" className="footer-link">
									<FaLinux /> {t("Footer.download3")}
								</a>
							</li>
						</ul>
					</Col>
				</Row>
				<Row className="pt-2 border-top">
					<Col className="text-center">
						<a href="/privacy" className="footer-link">
							{t("Footer.policy")}
						</a>
						<p className="footer-copyright">
							&copy; {new Date().getFullYear()} {t("Footer.copyright")}
						</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

export default Footer;
