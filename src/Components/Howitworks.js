import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowCircleRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "../index.css";
import AOS from "aos";

const About = () => {
	const { t, i18n } = useTranslation();
	const isRTL = i18n.dir() === "rtl";
	const [showMore, setShowMore] = useState(false);

	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	const handleToggle = () => {
		setShowMore(!showMore);
	};

	return (
		<section id="about" className={`section_all bg-light ${isRTL ? "text-end" : "text-start"}`}>
			<Container>
				<Row>
					<Col lg={12}>
						<div className="blog-head text-center">
							<h2>{t("Howitworks.HowItWorks")}</h2>
							<h6>{t("Howitworks.HowItWorksSubtitle")}</h6>
						</div>
					</Col>
				</Row>
				<Row className="mt-5">
					<Col xs={12}>
						<h6>{t("AboutRelaySMS.About")}</h6>
						<h2>{t("AboutRelaySMS.AboutQ")}</h2>
						<p className="about-description text-center">
							{t("AboutRelaySMS.Description")}
							{!showMore && " ..."}
						</p>
						{showMore && (
							<div>
								<p>{t("AboutRelaySMS.Description1")}</p>
								<button onClick={handleToggle} className="read-more-btn">
									{showMore ? t("AboutRelaySMS.ReadLess") : t("AboutRelaySMS.ReadMore")}
								</button>
							</div>
						)}
						{!showMore && (
							<div className="text-center">
								<button onClick={handleToggle} className="read-more-btn">
									{t("AboutRelaySMS.ReadMore")}
								</button>
							</div>
						)}
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
