import React from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
	const { t, i18n } = useTranslation();
	const isFarsi = i18n.language === "fa"; // Check if the selected language is Farsi

	return (
		<div
			className="bg-white overflow-hidden position-relative"
			dir={isFarsi ? "rtl" : "ltr"}
			style={{ marginTop: "56px" }} // Adjust margin to account for navbar height
		>
			<Container fluid="xl">
				<Row className="align-items-center">
					<Col lg={6} className="position-relative z-index-10 pb-5 pt-5">
						<main className="text-center text-lg-start">
							<h2 className="font-weight-bold text-dark display-4 mb-4">
								{t("Landing.span")} <br />
								<span className="text-primary">{t("Landing.h1")}</span>
							</h2>
							<p className="mt-3 text-muted">{t("Landing.h2")}</p>
							<div className="d-block d-md-flex justify-content-center button-wrapper">
								{/* Button 1 */}
								<Button
									href="https://play.google.com/store/apps/details?id=com.afkanerd.sw0b"
									target="_blank"
									className="hero-btn mb-3 mb-md-0 d-flex align-items-center mx-2"
									size="lg"
									style={{
										backgroundColor: "#367ed0",
										color: "#FFFFFF",
										justifyContent: "center",
										width: "100%",
										maxWidth: "150px" // Adjusted width
									}}
								>
									<div className="d-flex w-100">
										<img
											src="/play.svg"
											alt="Android"
											className="img-fluid logo"
											style={{ maxWidth: "25px", marginRight: "8px" }} // Reduced size
										/>
										<span className="button-title fs-6">{t("Landing.Android")}</span>
									</div>
								</Button>

								{/* Button 2 */}
								<Button
									href="https://apps.apple.com/us/app/relaysms/id6630382970"
									target="_blank"
									className="hero-btn mb-3 mb-md-0 d-flex align-items-center mx-2"
									size="lg"
									style={{
										backgroundColor: "white",
										color: "#1c222c",
										justifyContent: "center",
										width: "100%",
										maxWidth: "150px" // Adjusted width
									}}
								>
									<div className="d-flex w-100">
										<img
											src="/app.svg"
											alt="app"
											className="img-fluid logo"
											style={{ maxWidth: "25px", marginRight: "8px" }} // Reduced size
										/>
										<span className="button-title fs-6">{t("Landing.Apple")}</span>
									</div>
								</Button>

								{/* Button 3 */}
								<Button
									href="https://github.com/your-repo" // Update with your GitHub link
									target="_blank"
									className="hero-btn mb-3 mb-md-0 d-flex align-items-center mx-2"
									size="lg"
									style={{
										backgroundColor: "#28a745", // GitHub button color
										color: "#FFFFFF",
										justifyContent: "center",
										width: "100%",
										maxWidth: "150px" // Adjusted width
									}}
								>
									<div className="d-flex w-100">
										<img
											src="/github.svg"
											alt="GitHub"
											className="img-fluid logo"
											style={{ maxWidth: "25px", marginRight: "8px" }} // Reduced size
										/>
										<span className="button-title fs-6">{t("Landing.Github")}</span>
									</div>
								</Button>
							</div>
						</main>
					</Col>
					<Col lg={6} className="d-none d-lg-block position-relative">
						<Image
							src="/Relaysms.png"
							alt="Cover"
							style={{ maxHeight: "400px", objectFit: "cover" }}
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default HeroSection;
