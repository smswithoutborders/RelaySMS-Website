import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaFileAlt } from "react-icons/fa";
import "../Blog.css";

const Blog = () => {
	const { t, i18n } = useTranslation();
	const isFarsi = i18n.language === "fa";

	const articleText = t("Blog.IDD");
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
				<Col md={8} className="mb-4">
					<div className="section">
						<Card className="card card-save-platforms" style={{ borderTop: "5px solid #3c54b4" }}>
							<Card.Body className="d-flex flex-column">
								<div>
									<div className="card-title text-bold">{t("Blog.IDHeader")}</div>
									<div className="card-text text-muted">{articleText}</div>
									<div className="read-time text-muted">{t("Blog.readTime")}</div>
								</div>
								<a
									href="https://blog.smswithoutborders.com/posts/relaysms-expands-user-control-with-device-id-registration"
									target="_blank"
									rel="noopener noreferrer"
									className="Readmore mt-auto"
								>
									{t("Howitworks.ReadMore")}
								</a>
							</Card.Body>
						</Card>
					</div>
				</Col>

				<Col xs={12} md={4}>
					<h4>{t("Blog.ReadOtherArticles")}</h4>
					<ul className="list-unstyled">
						{otherArticles.map((article, index) => (
							<li key={index} className="mb-2">
								<FaFileAlt className="me-2" />
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
