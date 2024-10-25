import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { FaAndroid, FaApple, FaLinux, FaGithub } from "react-icons/fa";

const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer className="footer py-4">
			<Container>
				<Row className="justify-content-center" style={{ gap: "20px" }}>
					<Col sm={6} md={5} lg={4} className="footer-col">
						<h5>Resources</h5>
						<ul className="list-unstyled">
							<li>
								<a href="https://blog.smswithoutborders.com/" className="mx-2">
									{t("Nav.Blog")}
								</a>
							</li>
							<li>
								<a href="https://docs.smswithoutborders.com/">{t("Nav.Support")}</a>
							</li>
							<li>
								<a href="https://smswithoutborders.com/privacy-policy">Privacy Policy</a>
							</li>
						</ul>
					</Col>

					<Col sm={6} md={5} lg={4} className="footer-col">
						<h5>Downloads</h5>
						<ul className="list-unstyled">
							<li>
								<a
									href="https://play.google.com/store/apps/details?id=com.afkanerd.sw0b"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaAndroid /> Android
								</a>
							</li>
							<li>
								<a
									href="https://apps.apple.com/us/app/relaysms/id6630382970"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaApple /> iOS
								</a>
							</li>
							<li>
								<a href="https://github.com/smswithoutborders/SMSWithoutBorders-App-Android/releases">
									<FaLinux /> Linux
								</a>
							</li>
						</ul>
					</Col>
				</Row>

				<Row className="my-4 text-center d-flex justify-content-end">
					<Col className="d-flex justify-content-end align-items-center">
						<a
							href="https://x.com/RelaySMS"
							target="_blank"
							rel="noopener noreferrer"
							className="footer-link"
						>
							<img src="./x-w.png" alt="X logo" height="20" />
						</a>
						<a
							href="https://github.com/smswithoutborders"
							target="_blank"
							rel="noopener noreferrer"
							className="footer-link"
						>
							<FaGithub className="footer-link" />
						</a>
						<LanguageSwitcher className="mx-2" />
					</Col>
				</Row>

				<Row className="mt-4">
					<Col className="text-center">
						<p>
							&copy; {new Date().getFullYear()} {t("Footer.copyright")}
						</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
