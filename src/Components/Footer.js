import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
	const { t } = useTranslation();
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const iconStyle = {
		filter: "brightness(0) invert(1)",
		height: "24px",
		transition: "transform 0.3s"
	};

	const iconHover = (e, scale) => {
		e.currentTarget.style.transform = `scale(${scale})`;
	};

	return (
		<footer
			style={{
				backgroundColor: "#000158",
				color: "#ffffff",
				padding: "2rem 0"
			}}
		>
			<Row className="align-items-center mb-4 px-5">
				<Col
					xs={12}
					md={4}
					className="d-flex justify-content-center justify-content-md-start mb-3 mb-md-0"
				>
					<img
						src={scrolled ? "/RelaySMSDark.png" : "/logo.png"}
						alt="Logo"
						style={{ height: 35, transition: "0.5s" }}
					/>
				</Col>

				<Col xs={12} md={4} className="d-flex justify-content-center mb-3 mb-md-0">
					<div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
						<a
							href="https://x.com/RelaySMS"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="RelaySMS on X"
						>
							<img
								src="./x-w.png"
								alt="X logo"
								style={iconStyle}
								onMouseEnter={(e) => iconHover(e, 1.1)}
								onMouseLeave={(e) => iconHover(e, 1)}
							/>
						</a>

						<a
							href="https://github.com/smswithoutborders"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="RelaySMS on GitHub"
							style={{
								color: "#ffffff",
								fontSize: "1.5rem",
								transition: "transform 0.3s"
							}}
						>
							<FaGithub
								onMouseEnter={(e) => iconHover(e, 1.1)}
								onMouseLeave={(e) => iconHover(e, 1)}
							/>
						</a>

						<a
							href="https://bsky.app/profile/relaysms.bsky.social"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="RelaySMS on Bluesky"
						>
							<img
								src="./bluesky.svg"
								alt="Bluesky logo"
								style={iconStyle}
								onMouseEnter={(e) => iconHover(e, 1.1)}
								onMouseLeave={(e) => iconHover(e, 1)}
							/>
						</a>
					</div>
				</Col>

				<Col xs={12} md={4} className="d-flex justify-content-center justify-content-md-end">
					<LanguageSwitcher />
				</Col>
			</Row>

			<Row>
				<Col className="text-center">
					<p style={{ fontSize: "0.875rem", color: "#cccccc" }}>
						&copy; {new Date().getFullYear()} {t("Footer.copyright")}
					</p>
				</Col>
			</Row>
		</footer>
	);
};

export default Footer;
