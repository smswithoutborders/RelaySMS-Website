import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaGithub, FaTwitter, FaAndroid, FaApple, FaLinux } from "react-icons/fa";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link } from "react-router-dom";

function Footer() {
	const { t } = useTranslation();

	return (
		<footer className="footer-container">
			<Container>
				<Row className="py-2">
					<Col lg={4} md={6} sm={12} className="mb-3 text-center text-md-start">
						<h5 className="footer-title">{t("Footer.Header")}</h5>
						<a
							href="https://smswithoutborders.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="footer-link footer-text"
						>
							{t("Footer.body")}
						</a>
						<LanguageSwitcher />
					</Col>
					<Col lg={2} md={3} sm={6} className="mb-3 text-center text-md-start">
						<h5 className="footer-title">{t("Footer.Header1")}</h5>
						<ul className="footer-links">
							<li>
								<a
									href="https://github.com/smswithoutborders"
									target="_blank"
									rel="noopener noreferrer"
									className="footer-link"
								>
									<FaGithub /> {t("Footer.social1")}
								</a>
							</li>
							<li>
								<a
									href="https://x.com/RelaySMS"
									target="_blank"
									rel="noopener noreferrer"
									className="footer-link"
								>
									<FaTwitter /> {t("Footer.social2")}
								</a>
							</li>
						</ul>
					</Col>
					<Col lg={2} md={3} sm={6} className="mb-3 text-center text-md-start">
						<h5 className="footer-title">{t("Footer.Header2")}</h5>
						<ul className="footer-links">
							<li>
								<Link as={Link} to="/Contact_Us" className="footer-link">
									{t("Footer.help")}
								</Link>
							</li>
							<li>
								<a href="/privacy" className="footer-link">
									{t("Footer.policy")}
								</a>
							</li>
						</ul>
					</Col>
					<Col lg={4} md={12} sm={12} className="text-center">
						<h5 className="footer-title">{t("Footer.Header3")}</h5>
						<ul className="footer-links">
							<li>
								<a
									href="https://play.google.com/store/apps/details?id=com.afkanerd.sw0b"
									target="_blank"
									rel="noopener noreferrer"
									className="footer-link"
								>
									<FaAndroid /> {t("Footer.download1")}
								</a>
							</li>
							<li>
								<a
									href="https://apps.apple.com/us/app/relaysms/id6630382970"
									target="_blank"
									rel="noopener noreferrer"
									className="footer-link"
								>
									<FaApple /> {t("Footer.download2")}
								</a>
							</li>
							<li>
								<a
									href="https://github.com/smswithoutborders/relaysms-desktop/tags"
									className="footer-link"
								>
									<FaLinux /> {t("Footer.download3")}
								</a>
							</li>
						</ul>
					</Col>
				</Row>
				<Row className="pt-2 border-top">
					<Col className="text-center">
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
