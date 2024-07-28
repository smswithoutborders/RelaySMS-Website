import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowCircleRight } from "react-icons/fa";
import "../index.css";
import AOS from "aos";

const Blog = () => {
	const { t, i18n } = useTranslation();
	const isRTL = i18n.language === "fa";

	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	return (
		<Container fluid>
			<Row>
				<h2
					data-aos="fade-up"
					className="text-center fw-bold section-title"
					style={{ fontSize: "33px", marginTop: "60px", color: "#2666af" }}
				>
					{t("Blog.BlogHeader")}
				</h2>
				<p
					data-aos="fade-up"
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
						<Col xs={12} sm={8} md={6} lg={4} className="mb-4 d-flex justify-content-center">
							<div className="blog " data-aos="fade-right">
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
						<Col xs={12} md={8} lg={6} className="mb-4 d-flex justify-content-center">
							<div className="blog" data-aos="fade-left">
								<div className="blog-image">
									<img src="/ID.jpg" alt="Blog Image 5" />
									<div className="date">July 1, 2024</div>
								</div>
								<div className="blog-content">
									<h2>{t("Blog.IDHeader")}</h2>
									<p>{t("Blog.IDD")}</p>
									<a href="https://blog.smswithoutborders.com/posts/relaysms-expands-user-control-with-device-id-registration">
										{t("Blog.ReadMore")}
									</a>
								</div>
							</div>
						</Col>
					</Row>

					<Col xs={12}>
						<div className="text-center p-1">
							<a
								href="https://blog.smswithoutborders.com"
								target="_blank"
								rel="noreferrer noopener"
								className="getting-started-link"
							>
								{t("Blog.ReadOtherArticles")}
								<FaArrowCircleRight className="ml-2 arrow-icon" />
							</a>
						</div>
					</Col>
				</div>
			</Row>
		</Container>
	);
};

export default Blog;
