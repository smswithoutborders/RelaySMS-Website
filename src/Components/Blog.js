import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function Blog() {
	const { t, i18n } = useTranslation();
	const isFarsi = i18n.language === "fa"; // Check if the selected language is Farsi

	const blogPosts = [
		{
			title: t("Blog.Resilience"),
			description: t("Blog.ResilienceD"),
			author: "Author Name 1",
			readTime: "2 min read",
			imgSrc: "https://via.placeholder.com/40", // Placeholder image
			link: "/link-to-resilience"
		},
		{
			title: t("Blog.Reliability"),
			description: t("Blog.ReliabilityD"),
			author: "Author Name 2",
			readTime: "3 min read",
			imgSrc: "https://via.placeholder.com/40", // Placeholder image
			link: "/link-to-reliability"
		},
		{
			title: t("Blog.IDHeader"),
			description: t("Blog.IDD"),
			author: "Author Name 3",
			readTime: "4 min read",
			imgSrc: "https://via.placeholder.com/40", // Placeholder image
			link: "/link-to-id-registration"
		},
		{
			title: t("Blog.Rebrand"),
			description: t("Blog.RebrandD"),
			author: "Author Name 4",
			readTime: "5 min read",
			imgSrc: "https://via.placeholder.com/40", // Placeholder image
			link: "/link-to-rebranding"
		}
	];

	return (
		<Container fluid className="blog-section py-5" dir={isFarsi ? "rtl" : "ltr"}>
			<h2 className="text-center mb-5">{t("Blog.Header")}</h2>
			<Row className="text-center">
				{blogPosts.map((post, index) => (
					<Col lg={6} md={12} className="mb-4 d-flex justify-content-center" key={index}>
						<Card className="w-100" style={{ padding: "20px", margin: "10px" }}>
							<Card.Body>
								<h4>{post.title}</h4>
								<p>{post.description}</p>
								<div className="d-flex align-items-center mb-3">
									<img
										src={post.imgSrc}
										alt={post.author}
										style={{
											width: "40px",
											height: "40px",
											borderRadius: "50%",
											marginRight: "10px"
										}}
									/>
									<h6 className="mb-0">{post.author}</h6>
								</div>
								<div className="d-flex justify-content-between align-items-center">
									<span className="read-time" style={{ fontSize: "10px" }}>
										{post.readTime}
									</span>
									<a
										href={post.link}
										className="d-flex align-items-center"
										style={{ color: "#48c6ef", textDecoration: "underline" }}
									>
										{t("Blog.ReadMore")} <span className="ms-1">&rarr;</span>
									</a>
								</div>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default Blog;
