import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaArrowCircleRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ResponsiveCardSection = () => {
	const { t } = useTranslation();

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<Container
			fluid
			className="my-5 py-5 px-4"
			dir="rtl"
			style={{
				maxWidth: "1500px",
				margin: "0 auto"
			}}
		>
			<div className="blog-head text-center section-subtitle">
				<span
					style={{
						marginBottom: "50px",
						fontSize: "2rem",
						fontWeight: "bold",
						letterSpacing: "1px",
						lineHeight: "1.5"
					}}
					className="inline-block mb-3 uppercase tracking-wide font-semibold text-blue-700"
					data-aos="fade-right"
				>
					{t("Blog.BlogHeader")}
				</span>

				<h2
					className="text-center mb-5"
					data-aos="fade-up"
					style={{
						marginBottom: "50px",
						fontSize: "2rem",
						fontWeight: "bold",
						color: "#343a40",
						letterSpacing: "1px",
						lineHeight: "1.5"
					}}
				>
					{t("Blog.BlogSubHeader")}
				</h2>
			</div>
			<Row className="justify-content-center">
				<Col xs={12} md={6} lg={4} className="mb-4 d-flex justify-content-center">
					<Card
						className="h-100"
						data-aos="fade-up"
						style={{
							width: "90%",
							height: "900px",
							border: "none",
							borderRadius: "10px",
							boxShadow: "10px 10px 8px rgba(0, 0, 0, 0.3)"
						}}
					>
						<Card.Body
							className="d-flex flex-column justify-content-between"
							style={{ height: "100%" }}
						>
							<div>
								<Card.Title
									className="text-center mb-3"
									style={{
										fontWeight: "bold",
										fontSize: "1.5rem",
										color: "#2c3e50",
										textTransform: "uppercase",
										letterSpacing: "0.5px",
										lineHeight: "1.2"
									}}
								>
									{t("Blog.RebrandHeader")}
								</Card.Title>

								<Card.Text className="mb-4" style={{ color: "#6c757d" }}>
									{t("Blog.RebrandD")}
								</Card.Text>
							</div>
							<div className="text-center">
								<Button
									href="https://blog.smswithoutborders.com/posts/rebranding"
									className="custom-readmore-btn"
								>
									{t("AboutRelaySMS.ReadMore")}
								</Button>
							</div>
						</Card.Body>
					</Card>
				</Col>

				<Col xs={12} md={6} lg={4} className="mb-4 d-flex justify-content-center">
					<Card
						className="h-100"
						data-aos="fade-up"
						data-aos-delay="100"
						style={{
							width: "90%",
							height: "900px",
							border: "none",
							borderRadius: "10px",
							boxShadow: "10px 10px 8px rgba(0, 0, 0, 0.3)"
						}}
					>
						<Card.Body
							className="d-flex flex-column justify-content-between"
							style={{ height: "100%" }}
						>
							<div>
								<Card.Title
									className="text-center mb-3"
									style={{
										fontWeight: "bold",
										fontSize: "1.5rem",
										color: "#2c3e50",
										textTransform: "uppercase",
										letterSpacing: "0.5px",
										lineHeight: "1.2"
									}}
								>
									{t("Blog.IDHeader")}
								</Card.Title>
								<Card.Text className="mb-4" style={{ color: "#6c757d" }}>
									{t("Blog.IDD")}
								</Card.Text>
							</div>
							<div className="text-center">
								<Button
									href="https://blog.smswithoutborders.com/posts/relaysms-expands-user-control-with-device-id-registration"
									className="custom-readmore-btn"
								>
									{t("AboutRelaySMS.ReadMore")}
								</Button>
							</div>
						</Card.Body>
					</Card>
				</Col>

				<Col xs={12} md={6} lg={4} className="mb-4 d-flex justify-content-center">
					<Card
						className="h-100"
						data-aos="fade-up"
						data-aos-delay="200"
						style={{
							width: "90%",
							height: "900px",
							border: "none",
							borderRadius: "10px",
							boxShadow: "10px 10px 8px rgba(0, 0, 0, 0.3)"
						}}
					>
						<Card.Body
							className="d-flex flex-column justify-content-between"
							style={{ height: "100%" }}
						>
							<div>
								<Card.Title
									className="text-center mb-3"
									style={{
										fontWeight: "bold",
										fontSize: "1.5rem",
										color: "#2c3e50",
										textTransform: "uppercase",
										letterSpacing: "0.5px",
										lineHeight: "1.2"
									}}
								>
									{t("Blog.Resilience")}
								</Card.Title>
								<Card.Text className="mb-4" style={{ color: "#6c757d" }}>
									{t("Blog.ResilienceD")}
								</Card.Text>
							</div>
							<div className="text-center">
								<Button
									href="https://blog.smswithoutborders.com/posts/resilience"
									className="custom-readmore-btn"
								>
									{t("AboutRelaySMS.ReadMore")}
								</Button>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>

			{/* Footer Link to More Articles */}

			<Row className="mt-4">
				<Col xs={12}>
					<div className="text-center p-1 howitworks">
						<a
							href="https://blog.smswithoutborders.com"
							target="_blank"
							rel="noreferrer noopener"
							className="getting-started-link"
						>
							<FaArrowCircleRight className="ml-2 arrow-icon" />
							{t("Blog.ReadOtherArticles")}
						</a>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default ResponsiveCardSection;
