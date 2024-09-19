import React from "react";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { FaAndroid, FaApple, FaLinux } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
	const { t, i18n } = useTranslation();
	const isRTL = i18n.dir() === "rtl";

	return (
		<footer className={`footer ${isRTL ? "rtl" : ""}`}>
			<div className="container">
				<div className="row">
					{/* Projects Section */}
					<div className="col-md-3 footer-column">
						<ul className="nav flex-column">
							<li className="nav-item">
								<span className="footer-title">{t("Footer.Header")}</span>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									<span className="link-text">{t("Footer.body")}</span>
								</a>
							</li>
						</ul>
					</div>

					{/* Socials Section */}
					<div className="col-md-3 footer-column">
						<div className="box">
							<ul className="list-inline social-buttons">
								<li className="nav-item">
									<span className="footer-title">{t("Footer.Header1")}</span>
								</li>
								<li className="list-inline-item">
									<a href="#">
										<FaXTwitter />
									</a>
								</li>
								<li className="list-inline-item">
									<a href="#">
										<FaGithub />
									</a>
								</li>
							</ul>
						</div>
					</div>

					{/* Help Section */}
					<div className="col-md-3 footer-column">
						<ul className="nav flex-column">
							<li className="nav-item">
								<span className="footer-title">{t("Footer.Header2")}</span>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									<span className="link-text">{t("Footer.help")}</span>
								</a>
							</li>
						</ul>
					</div>

					{/* Download Section */}
					<div className="col-md-3 footer-column">
						<ul className="nav flex-column download-section">
							<li className="nav-item">
								<span className="footer-title">{t("Footer.Header3")}</span>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									<span className="icon-wrapper">
										<FaAndroid className="footer-icon" />
									</span>
									<span className="link-text">{t("Footer.download1")}</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									<span className="icon-wrapper">
										<FaApple className="footer-icon" />
									</span>
									<span className="link-text">{t("Footer.download2")}</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									<span className="icon-wrapper">
										<FaLinux className="footer-icon" />
									</span>
									<span className="link-text">{t("Footer.download3")}</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<hr className="footer-divider" />
				<div className="row">
					<div className="col-md-6 box text-start">
						<ul className="list-inline quick-links">
							<li className="list-inline-item">
								<a href="https://smswithoutborders.com/privacy-policy/">{t("Footer.policy")}</a>
							</li>
						</ul>
					</div>
					<div className="col-md-6 box text-end">
						<span className="copyright quick-links">
							&copy; {t("Footer.copyright")} {new Date().getFullYear()}
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
