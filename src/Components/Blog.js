import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa";
import "../Blog.css";

const Blog = () => {
	const { t, i18n } = useTranslation();
	const isFarsi = i18n.language === "fa";

	const blogPosts = [
		{
			title: t("Blog.Rebrand"),
			content: t("Blog.RebrandD"),
			readTime: t("Blog.readTime", { time: "2 min" }),
			tags: t("Blog.tag"),
			link: "https://blog.smswithoutborders.com/posts/rebranding"
		},
		{
			title: t("Blog.IDHeader"),
			content: t("Blog.IDD"),
			readTime: t("Blog.readTime", { time: "2 min" }),
			tags: t("Blog.tag"),
			link: "https://blog.smswithoutborders.com/posts/relaysms-expands-user-control-with-device-id-registration"
		}
	];

	const otherArticles = [
		{
			title: t("Blog.articles1"),
			url: "https://blog.smswithoutborders.com/posts/resilience-of-gateway-clients-in-smswithoutborders"
		},
		{
			title: t("Blog.articles2"),
			url: "https://blog.smswithoutborders.com/posts/reliability-of-gateway-clients-in-smswithoutborders"
		},
		{
			title: t("Blog.articles3"),
			url: "https://blog.smswithoutborders.com/releases/vault-0-1-0"
		}
	];

	return (
		<Container className="my-5 blog-section">
			<h2 className={`blog-header ${isFarsi ? "rtl" : "ltr"}`}>{t("Blog.Header")}</h2>
			<Row>
				{/* Content section */}
				<Col xs={12} md={8}>
					<Row>
						{blogPosts.map((post, index) => (
							<Col xs={12} sm={6} lg={6} key={index} className="mb-4">
								<Card className="blog-card">
									<Card.Body>
										<Card.Title className={`h2 ${isFarsi ? "text-end" : "text-start"}`}>
											{post.title}
										</Card.Title>
										<Card.Text>{post.content}</Card.Text>
										<div className="tag-container">
											{Array.isArray(post.tags) ? (
												post.tags.map((tag, tagIndex) => (
													<span key={tagIndex} className="badge me-1">
														{tag}
													</span>
												))
											) : (
												<span className="badge me-1">{post.tags}</span>
											)}
										</div>
										<div className="d-flex justify-content-between align-items-center mt-3">
											<span className="text-muted">
												{t("Blog.readTime", { time: post.readTime })}
											</span>
											<a
												className="read-more-link"
												href={post.link}
												target="_blank"
												rel="noreferrer"
												aria-label={`Read more about ${post.title}`}
											>
												{t("Howitworks.ReadMore")} <FaArrowRight />
											</a>
										</div>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				</Col>

				{/* Sidebar */}
				<Col xs={12} md={4}>
					<h4>{t("Blog.ReadOtherArticles")}</h4>
					<ul className="list-unstyled">
						{otherArticles.map((article, index) => (
							<li key={index} className="mb-2">
								<a href={article.url} target="_blank" className="article-link" rel="noreferrer">
									{article.title}
								</a>
							</li>
						))}
					</ul>
				</Col>
			</Row>
		</Container>
	);
};

export default Blog;
