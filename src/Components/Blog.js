import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import "../index.css";
import AOS from "aos";

const Blog = () => {
	const { t, i18n } = useTranslation();
	const isRTL = i18n.language === "fa";

	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	return (
		<Container>
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
						<Col xs={12} md={6} lg={4} className="mb-4 d-flex justify-content-center">
							<div className="blog" data-aos="fade-right">
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
					{/* <Row className="blog-row">
						<Col xs={12} md={6} lg={4} className="mb-4 d-flex justify-content-center">
							<div className="blog">
								<div className="blog-image">
									<img src="/relia.jpg" alt="Blog Image 2" />
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
									<h2>{t("Blog.RebrandHeader")}</h2>
									<p>{t("Blog.RebrandD")}</p>
									<a href="">{t("Blog.ReadMore")}</a>
								</div>
							</div>
						</Col>
					</Row> */}
					<Row>
						<Col className="text-center mt-4">
							<a href="https://blog.smswithoutborders.com">{t("Blog.ReadOtherArticles")}</a>
						</Col>
					</Row>
				</div>
			</Row>
		</Container>
	);
};

export default Blog;
