import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import "../index.css";

const Blog = () => {
	const { t, i18n } = useTranslation();
	const isRTL = i18n.language === "fa";

	return (
		<Container>
			<Row>
				<h2
					className="text-center fw-bold section-title"
					style={{ fontSize: "33px", marginTop: "60px", color: "#2666af" }}
				>
					{t("Blog.BlogHeader")}
				</h2>
				<p
					className={`text-center section-subtitle ${isRTL ? "text-end" : "text-start"}`}
					style={{ fontSize: "calc(1rem + 0.5vw)", marginTop: "30px", marginBottom: "60px" }}
				>
					{t("Blog.BlogSubHeader")}
				</p>

				<div
					style={{
						padding: "20px",
						maxWidth: "1500px",
						margin: "0 auto",
						color: "#f5f5f5",
						borderRadius: 8,
						direction: isRTL ? "rtl" : "ltr"
					}}
				>
					<Row className="blog-row">
						<Col xs={12} md={6} lg={4} className="mb-4 d-flex justify-content-center">
							<div className="blog">
								<div className="blog-image">
									<img src="/resilience.jpg" alt="Blog Image 1" />
									<div className="date">April 16, 2024</div>
								</div>
								<div className="blog-content">
									<h2>{t("Blog.Resilience")}</h2>
									<p>{t("Blog.ResilienceD")}</p>
									<a href="https://blog.smswithoutborders.com/posts/reliability-of-gateway-clients-in-smswithoutborders">
										{t("Blog.ReadMore")}
									</a>
								</div>
							</div>
						</Col>
						<Col xs={12} md={6} lg={4} className="mb-4 d-flex justify-content-center">
							<div className="blog">
								<div className="blog-image">
									<img src="/ID.jpg" alt="Blog Image 5" />
									<div className="date">July 1, 2024</div>
								</div>
								<div className="blog-content">
									<h2>RelaySMS Expands User Control with Device ID Registration</h2>
									<p>
										RelaySMS (swob app) introduces a powerful new feature: Device ID Registration
										with RelaySMS Vault! This innovative approach gives you more control over your
										offline messaging experience.
									</p>
									<a href="https://blog.smswithoutborders.com/posts/reliability-of-gateway-clients-in-smswithoutborders">
										{t("Blog.ReadMore")}
									</a>
								</div>
							</div>
						</Col>
					</Row>
					<Row className="blog-row">
						<Col xs={12} md={6} lg={4} className="mb-4 d-flex justify-content-center">
							<div className="blog">
								<div className="blog-image">
									<img src="/reliability.jpg" alt="Blog Image 2" />
									<div className="date">April 5, 2024</div>
								</div>
								<div className="blog-content">
									<h2>{t("Blog.Reliability")}</h2>
									<p>{t("Blog.ReliabilityD")}</p>
									<a href="https://blog.smswithoutborders.com/posts/reliability-of-gateway-clients-in-smswithoutborders">
										{t("Blog.ReadMore")}
									</a>
								</div>
							</div>
						</Col>
						<Col xs={12} md={6} lg={4} className="mb-4 d-flex justify-content-center">
							<div className="blog">
								<div className="blog-image">
									<img src="/rebrand.jpg" alt="Blog Image 6" />
									<div className="date">June 27, 2024</div>
								</div>
								<div className="blog-content">
									<h2>Rebranding</h2>
									<p>
										SMSWithoutBorders itself is becoming the umbrella project encompassing RelaySMS
										and other messaging tools. The core functionality remains the same, but users
										can expect a new name, enhanced security features, and a focus on future growth
										under the SMSWithoutBorders project.
									</p>
									<a href="https://blog.smswithoutborders.com/posts/reliability-of-gateway-clients-in-smswithoutborders">
										{t("Blog.ReadMore")}
									</a>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</Row>
		</Container>
	);
};

export default Blog;
