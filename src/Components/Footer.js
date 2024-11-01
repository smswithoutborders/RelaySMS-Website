import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { FaAndroid, FaApple, FaLinux, FaGithub } from "react-icons/fa";

const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer className="footer py-5" style={{ backgroundColor: "#04042c", color: "#ffff" }}>
			<Container>
				<Row className="justify-content-center text-center text-md-start" style={{ gap: "20px" }}>
					{/* Resources Column */}
					<Col sm={6} md={4} lg={3} className="footer-col mb-4">
						<h5 className="mb-3">{t("Footer.Header1")}</h5>
						<ul className="list-unstyled">
							<li>
								<a href="https://blog.smswithoutborders.com/" className="footer-link">
									{t("Footer.Blog")}
								</a>
							</li>
							<li>
								<a href="https://docs.smswithoutborders.com/" className="footer-link">
									{t("Footer.Support")}
								</a>
							</li>
							<li>
								<a href="https://smswithoutborders.com/privacy-policy" className="footer-link">
									{t("Footer.policy")}
								</a>
							</li>
						</ul>
					</Col>

					{/* Downloads Column */}
					<Col sm={6} md={4} lg={3} className="footer-col mb-4">
						<h5 className="mb-3">{t("Footer.Header2")}</h5>
						<ul className="list-unstyled">
							<li>
								<a
									href="https://play.google.com/store/apps/details?id=com.afkanerd.sw0b"
									target="_blank"
									rel="noopener noreferrer"
									className="footer-link"
								>
									<FaAndroid className="me-2" /> {t("Footer.download1")}
								</a>
							</li>
							<li>
								<a
									href="https://apps.apple.com/us/app/relaysms/id6630382970"
									target="_blank"
									rel="noopener noreferrer"
									className="footer-link"
								>
									<FaApple className="me-2" /> {t("Footer.download2")}
								</a>
							</li>
							<li>
								<a
									href="https://github.com/smswithoutborders/RelaySMS-Android/releases"
									className="footer-link"
								>
									<FaLinux className="me-2" />
									{t("Footer.download3")}
								</a>
							</li>
						</ul>
					</Col>
					{/* Social Media and Language Switcher Row */}
					<Col className="d-flex justify-content-center align-items-center">
						<a
							href="https://x.com/RelaySMS"
							target="_blank"
							rel="noopener noreferrer"
							className="footer-link mx-2"
						>
							<img src="./x-w.png" alt="X logo" height="20" />
						</a>
						<a
							href="https://github.com/smswithoutborders"
							target="_blank"
							rel="noopener noreferrer"
							className="footer-link mx-2"
						>
							<FaGithub />
						</a>
						<LanguageSwitcher className="mx-2" />
					</Col>
				</Row>

				{/* <Row className="mt-4 d-flex justify-content-center justify-content-md-end"></Row> */}

				{/* Copyright Row */}
				<Row className="mt-4">
					<Col className="text-center">
						<p style={{ fontSize: "0.875rem", color: "#6c757d" }}>
							&copy; {new Date().getFullYear()} {t("Footer.copyright")}
						</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
