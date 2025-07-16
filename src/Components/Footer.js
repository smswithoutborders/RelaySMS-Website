import React, { useEffect, useState, useMemo } from "react";
import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter, faBluesky } from "@fortawesome/free-brands-svg-icons";
import LanguageSwitcher from "./LanguageSwitcher";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

const Footer = () => {
	const { t, i18n } = useTranslation();
	const isRtl = i18n.language === "fa" || i18n.language === "farshi";
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const logoSrc = useMemo(() => (scrolled ? "/RelaySMSDark.png" : "/logo.png"), [scrolled]);

	return (
		<footer
			dir={isRtl ? "rtl" : "ltr"}
			style={{
				backgroundColor: "#000158",
				color: "#ffffff",
				padding: "2.5rem 0"
			}}
		>
			<Row className="align-items-center px-4 px-md-5 mb-4">
				<Col
					xs={12}
					md={4}
					className="d-flex justify-content-center justify-content-md-start mb-3 mb-md-0"
				>
					<img
						src={logoSrc}
						alt="RelaySMS Logo"
						style={{ height: 36, transition: "0.5s ease-in-out" }}
					/>
				</Col>

				<Col xs={12} md={4} className="d-flex justify-content-center mb-3 mb-md-0">
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							gap: 2,
							alignItems: "center"
						}}
					>
						<IconButton
							component="a"
							href="https://github.com/smswithoutborders"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub"
							sx={{
								color: "#ffffff",
								transition: "transform 0.3s, color 0.3s",
								"&:hover": {
									color: "#9999ff",
									transform: "scale(1.15)"
								}
							}}
						>
							<FontAwesomeIcon icon={faGithub} size="lg" />
						</IconButton>

						<IconButton
							component="a"
							href="https://x.com/RelaySMS"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="X"
							sx={{
								color: "#ffffff",
								transition: "transform 0.3s, color 0.3s",
								"&:hover": {
									color: "#9999ff",
									transform: "scale(1.15)"
								}
							}}
						>
							<FontAwesomeIcon icon={faXTwitter} size="lg" />
						</IconButton>

						<IconButton
							component="a"
							href="https://bsky.app/profile/relaysms.bsky.social"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Bluesky"
							sx={{
								color: "#ffffff",
								transition: "transform 0.3s, color 0.3s",
								"&:hover": {
									color: "#9999ff",
									transform: "scale(1.15)"
								}
							}}
						>
							<FontAwesomeIcon icon={faBluesky} size="lg" />
						</IconButton>
					</Box>
				</Col>

				<Col xs={12} md={4} className="d-flex justify-content-center justify-content-md-end">
					<LanguageSwitcher />
				</Col>
			</Row>

			<Row className="px-4 px-md-5">
				<Col className="text-center">
					<p style={{ fontSize: "0.85rem", color: "#cccccc", marginBottom: 0 }}>
						&copy; {new Date().getFullYear()} {t("Footer.copyright")}
					</p>
				</Col>
			</Row>
		</footer>
	);
};

export default Footer;
