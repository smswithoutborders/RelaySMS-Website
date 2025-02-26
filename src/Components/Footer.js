import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
import { Box } from "@mui/material";

const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer
			className="footer py-5"
			style={{
				backgroundImage: "url('/foot.png')",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				color: "#000158"
			}}
		>
			<Container>
				<Row className="justify-content-center text-center text-md-start" style={{ gap: "20px" }}>
					{/* Logo Column */}
					<Col sm={6} md={4} lg={3} className="footer-col mb-4">
						<Box
							sx={{
								width: "100%",
								maxWidth: 500,
								margin: "0 auto",
								borderRadius: 4,
								overflow: "hidden"
							}}
						>
							<img
								src="/logo.png"
								alt={t("Footer.logoAlt", "Meet the Best Doctors")}
								style={{
									width: "100%",
									height: "auto",
									display: "block",
									objectFit: "cover"
								}}
							/>
						</Box>
					</Col>

					{/* Social Media and Language Switcher Row */}
					<Col className="d-flex justify-content-center align-items-center">
						<a
							href="https://x.com/RelaySMS"
							target="_blank"
							rel="noopener noreferrer"
							className="footer-link mx-2"
							aria-label="Visit our Twitter"
							title={t("social.x")}
							style={{
								textDecoration: "none",
								color: "#000158",
								transition: "transform 0.3s ease"
							}}
						>
							<img src="./x-w.png" alt="X logo" height="20" />
						</a>

						<a
							href="https://github.com/smswithoutborders"
							target="_blank"
							rel="noopener noreferrer"
							className="footer-link mx-2"
							aria-label="Visit our GitHub"
							title={t("social.github")}
							style={{
								textDecoration: "none",
								color: "#000158",
								fontSize: "1.5rem",
								transition: "transform 0.3s ease"
							}}
						>
							<FaGithub />
						</a>

						<a
							href="https://bsky.app/profile/relaysms.bsky.social"
							target="_blank"
							rel="noopener noreferrer"
							className="footer-link mx-2"
							aria-label="Visit our Bluesky"
							title={t("social.bluesky")}
							style={{
								textDecoration: "none",
								color: "#000158",
								fontSize: "1.5rem",
								transition: "transform 0.3s ease"
							}}
						>
							<img src="./bluesky.svg" alt="Bluesky logo" height="24" />
						</a>

						<LanguageSwitcher className="mx-2" />
					</Col>
				</Row>

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
