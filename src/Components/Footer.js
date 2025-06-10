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
			style={{
				backgroundColor: "#000158",
				color: "#ffffff",
				padding: "2rem 0"
			}}
		>
			<Container>
				<Row className="align-items-center text-center text-md-start mb-4">
					<Col xs={12} md={4} className="mb-4 mb-md-0 d-flex justify-content-center">
						<Box
							sx={{
								maxWidth: 160,
								width: "100%",
								borderRadius: 2,
								overflow: "hidden"
							}}
						>
							<img
								src="/RelaySMSDark.png"
								alt={t("Footer.logoAlt", "Meet the Best Doctors")}
								style={{
									width: "100%",
									height: "auto",
									objectFit: "contain"
								}}
							/>
						</Box>
					</Col>

					<Col xs={12} md={4} className="d-flex justify-content-center">
						<div
							style={{
								display: "flex",
								gap: "24px",
								alignItems: "center"
							}}
						>
							<a
								href="https://x.com/RelaySMS"
								target="_blank"
								rel="noopener noreferrer"
								title={t("social.x")}
								style={{ display: "flex", alignItems: "center" }}
							>
								<img
									src="./x-w.png"
									alt="X logo"
									height="24"
									style={{ filter: "brightness(0) invert(1)", transition: "transform 0.3s" }}
									onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
									onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
								/>
							</a>

							<a
								href="https://github.com/smswithoutborders"
								target="_blank"
								rel="noopener noreferrer"
								title={t("social.github")}
								style={{
									color: "#ffffff",
									fontSize: "1.5rem",
									transition: "transform 0.3s"
								}}
							>
								<FaGithub
									onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
									onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
								/>
							</a>

							<a
								href="https://bsky.app/profile/relaysms.bsky.social"
								target="_blank"
								rel="noopener noreferrer"
								title={t("social.bluesky")}
								style={{ display: "flex", alignItems: "center" }}
							>
								<img
									src="./bluesky.svg"
									alt="Bluesky logo"
									height="24"
									style={{ filter: "brightness(0) invert(1)", transition: "transform 0.3s" }}
									onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
									onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
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
			</Container>
		</footer>
	);
};

export default Footer;
