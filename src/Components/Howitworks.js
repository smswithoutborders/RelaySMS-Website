import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowCircleRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "../index.css";
import AOS from "aos";

const About = () => {
	const { t, i18n } = useTranslation();
	const isRTL = i18n.dir() === "rtl";

	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	return (
		<section id="about" className={`section_all bg-light ${isRTL ? "text-end" : "text-start"}`}>
			<Container>
				<Row>
					<Col lg={12}>
						<div
							className={`blog-head text-center section-subtitle ${isRTL ? "text-end" : "text-start"}`}
						>
							<span
								className="inline-block mb-3 uppercase tracking-wide font-semibold text-blue-700"
								data-aos="fade-right"
							>
								{t("Howitworks.HowItWorks")}
							</span>
							<h1
								className="text-4xl md:text-5xl md:leading-tight font-bold text-gray-800 xl:max-w-full"
								data-aos="fade-right"
							>
								{t("Howitworks.HowItWorksSubtitle")}
							</h1>
						</div>
					</Col>
				</Row>

				<Row className="mt-3">
					<Col lg={4}>
						<div className="about_content_box_all mt-3">
							<div className="about_detail text-center">
								<div className="about_icon">
									<img src="/swob.png" alt="Swob logo" className="img-fluid mx-auto d-block" />
								</div>
								<h5 className="text-dark text-capitalize mt-3 font-weight-bold">
									{t("Howitworks.HowItWorkstitleA")}
								</h5>
								<p className="edu_desc mt-3 mb-0 text-muted">{t("Howitworks.HowItWorksA")}</p>
							</div>
						</div>
					</Col>
					<Col lg={4}>
						<div className="about_content_box_all mt-3">
							<div className="about_detail text-center">
								<div className="about_icon">
									<img
										src="/compose.jpg"
										alt="Compose message"
										className="img-fluid mx-auto d-block"
									/>
								</div>
								<h5 className="text-dark text-capitalize mt-3 font-weight-bold">
									{t("Howitworks.HowItWorkstitleB")}
								</h5>
								<p className="edu_desc mb-0 mt-3 text-muted">{t("Howitworks.HowItWorksB")}</p>
							</div>
						</div>
					</Col>
					<Col lg={4}>
						<div className="about_content_box_all mt-3">
							<div className="about_detail text-center">
								<div className="about_icon">
									<img
										src="./notifMessages.jpg"
										alt="Notification messages"
										className="img-fluid mx-auto d-block"
									/>
								</div>
								<h5 className="text-dark text-capitalize mt-3 font-weight-bold">
									{t("Howitworks.HowItWorkstitleC")}
								</h5>
								<p className="edu_desc mb-0 mt-3 text-muted">{t("Howitworks.HowItWorksC")}</p>
							</div>
						</div>
					</Col>
				</Row>
				<Row className="mt-4">
					<Col xs={12}>
						<div className="text-center p-1 howitworks">
							<a
								href="https://smswithoutborders.github.io/docs/tutorials/getting-started/"
								target="_blank"
								rel="noreferrer noopener"
								className="getting-started-link"
							>
								{t("Howitworks.GettingStartedButton")}
								<FaArrowCircleRight className="ml-2 arrow-icon" />
							</a>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default About;
