import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaGithub, FaTwitter, FaAndroid, FaApple, FaLinux, FaPaperPlane } from "react-icons/fa";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link } from "react-router-dom";

function Footer() {
	const { t, i18n } = useTranslation();
	const [email, setEmail] = useState("");

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handleSubscribe = async (e) => {
		e.preventDefault();

		const endpointUrl = "https://yourapi.com/subscribe"; // Replace with your API endpoint when you take it from sasha

		try {
			const response = await fetch(endpointUrl, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({ email })
			});

			if (response.ok) {
				alert(`Subscribed with: ${email}`);
				setEmail("");
			} else {
				alert("Subscription failed. Please try again.");
			}
		} catch (error) {
			console.error("Error during subscription:", error);
			alert("An error occurred. Please try again.");
		}
	};

	const isRtl = i18n.language === "fa";

	return (
		<footer className="footer-container">
			<Container>
				<Row className="py-2">
					<Col lg={2} md={3} sm={6} className="mb-3 text-center text-md-start">
						<h5 className="footer-title">{t("Footer.Header1")}</h5>
						<ul className="footer-links">
							<li>
								<a
									href="https://docs.smswithoutborders.com/docs/Troubleshooting/Troubleshooting-FAQ"
									className="footer-link"
								>
									{t("Footer.Support")}
								</a>
							</li>
							<li>
								<Link to="/Contact_Us" className="footer-link">
									{t("Footer.help")}
								</Link>
							</li>
							<li>
								<a href="https://smswithoutborders.com/privacy-policy" className="footer-link">
									{t("Footer.policy")}
								</a>
							</li>
						</ul>
					</Col>

					<Col lg={4} md={12} sm={12} className="text-center">
						<h5 className="footer-title">{t("Footer.Header2")}</h5>
						<div className="footer-download-links">
							<a
								href="https://play.google.com/store/apps/details?id=com.afkanerd.sw0b"
								target="_blank"
								rel="noopener noreferrer"
								className="footer-link"
							>
								<FaAndroid /> {t("Footer.download1")}
							</a>
							<a
								href="https://apps.apple.com/us/app/relaysms/id6630382970"
								target="_blank"
								rel="noopener noreferrer"
								className="footer-link"
							>
								<FaApple /> {t("Footer.download2")}
							</a>
							<a
								href="https://github.com/smswithoutborders/SMSWithoutBorders-App-Android/releases"
								className="footer-link"
							>
								<FaLinux /> {t("Footer.download3")}
							</a>
						</div>
					</Col>

					<Col lg={4} md={12} sm={12} className="text-center">
						<h5 className="footer-title">{t("Footer.Header3")}</h5>
						<form
							onSubmit={handleSubscribe}
							className="d-flex justify-content-center align-items-center"
							style={{
								direction: isRtl ? "rtl" : "ltr",
								textAlign: isRtl ? "right" : "left"
							}}
						>
							<input
								type="email"
								value={email}
								onChange={handleEmailChange}
								placeholder={t("Footer.EnterEmail")}
								className="footer-input me-2"
								required
							/>
							<button type="submit" className="footer-icon-button" aria-label="Send">
								<FaPaperPlane className="send-icon" />
							</button>
						</form>
					</Col>
				</Row>
				<Row className="pt-2 border-top">
					<Col
						className="d-flex justify-content-between align-items-center"
						style={{ direction: isRtl ? "rtl" : "ltr" }}
					>
						<p className="footer-copyright" style={{ textAlign: isRtl ? "right" : "left" }}>
							&copy; {new Date().getFullYear()} {t("Footer.copyright")}
						</p>
						<div className="d-flex align-items-center">
							<ul className="footer-links d-flex m-0">
								<li className="me-3">
									<a
										href="https://github.com/smswithoutborders"
										target="_blank"
										rel="noopener noreferrer"
										className="footer-link"
									>
										<FaGithub />
									</a>
								</li>
								<li className="me-3">
									<a
										href="https://x.com/RelaySMS"
										target="_blank"
										rel="noopener noreferrer"
										className="footer-link"
									>
										<FaTwitter />
									</a>
								</li>
							</ul>
							<LanguageSwitcher />
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

export default Footer;
