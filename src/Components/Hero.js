import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../App.css";
import "../i18n.js";

const Hero = () => {
	const { t, i18n } = useTranslation();
	const isRTL = i18n.dir() === "rtl";

	useEffect(() => {
		const handleScroll = () => {
			const elements = document.querySelectorAll(".slide-in");
			elements.forEach((el) => {
				const rect = el.getBoundingClientRect();
				if (rect.top < window.innerHeight * 0.9) {
					el.classList.add("visible");
				} else {
					el.classList.remove("visible");
				}
			});
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<Container fluid className="hero-section" style={{ direction: isRTL ? "rtl" : "ltr" }}>
			<section id="about">
				<div className="row">
					<div className="col-lg-6">
						<div className="content">
							<h4 className="cl-bv"> {t("Landing.what now about commuiniction")}</h4>
							<h1>
								<b> {t("Landing.landingh1")}</b>
							</h1>
							<p>{t("Landing.landingh2")}</p>
							<div className="button-wrapper">
								<Button
									href="https://play.google.com/store/apps/details?id=com.afkanerd.sw0b"
									target="_blank"
									className="hero-btn btn btn--fill"
									size="lg"
									style={{
										backgroundColor: "#367ed0",
										color: "#FFFFFF",
										justifyContent: "center",
										width: "100%",
										maxWidth: "200px"
									}}
								>
									<div className="d-flex w-100">
										<img
											src="/playstore.svg"
											alt="Android"
											className="img-fluid logo"
											style={{ maxWidth: "40px", marginRight: "10px" }}
										/>
										<div className="text-start">
											<span className="button-subtitle fs-8">{t("Landing.AndroidSub")}</span>
											<br />
											<span className="button-title fs-4">{t("Landing.Android")}</span>
										</div>
									</div>
								</Button>

								<Button
									href="https://play.google.com/store/apps/details?id=com.afkanerd.sw0b"
									target="_blank"
									className="hero-btn btn btn--outline"
									size="lg"
									style={{
										backgroundColor: "white",
										color: "#1c222c",
										justifyContent: "center",
										width: "100%",
										maxWidth: "200px"
									}}
								>
									<div className="d-flex w-100">
										<img
											src="/desktop.svg"
											alt="Desktop"
											className="img-fluid logo"
											style={{ maxWidth: "40px", marginRight: "10px" }}
										/>
										<div className="text-start">
											<span className="button-subtitle fs-8">{t("Landing.DesktopSub")}</span>
											<br />
											<span className="button-title fs-4">{t("Landing.Desktop")}</span>
										</div>
									</div>
								</Button>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<img
							src="/111.png"
							alt="Relaysms App"
							className="hero-img img-fluid slide-in flip-clockwise"
							style={{ width: "500px", height: "auto" }}
						/>
						<img
							src="/one1.png"
							alt="Relaysms App"
							className="hero-img img-fluid slide-in flip-clockwise"
							style={{ width: "500px", height: "auto" }}
						/>
					</div>
				</div>
			</section>
		</Container>
	);
};

export default Hero;
