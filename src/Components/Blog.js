import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";

function Blog() {
	const { t, i18n } = useTranslation();
	const isFarsi = i18n.language === "fa";

	const articles = [
		{
			id: 1,
			title: t("Blog.Resilience"),
			description: t("Blog.ResilienceD"),
			link: "https://blog.smswithoutborders.com/posts/resilience",
			author: "Aysha Musa",
			readTime: "2 min read",
			authorImage: "/.jpg"
		},
		{
			id: 3,
			title: t("Blog.IDHeader"),
			description: t("Blog.IDD"),
			link: "https://blog.smswithoutborders.com/posts/relaysms-expands-user-control-with-device-id-registration",
			author: "Aysha Musa",
			readTime: "2 min read",
			authorImage: "/.jpg"
		},
		{
			id: 4,
			title: t("Blog.Rebrand"),
			description: t("Blog.RebrandD"),
			link: "https://blog.smswithoutborders.com/posts/rebranding",
			author: "Aysha Musa",
			readTime: "2 min read",
			authorImage: "/.jpg"
		}
	];

	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: "ease-in-out",
			once: true
		});
	}, []);

	return (
		<Container fluid className="blog-list-section py-5" style={styles.container}>
			<h2 className="faq-header" dir={isFarsi ? "rtl" : "ltr"}>
				{t("Blog.Header")}{" "}
			</h2>
			<Row className="justify-content-center">
				{articles.map((article, index) => (
					<Col
						md={6}
						key={article.id}
						className="mb-4 d-flex justify-content-center"
						data-aos="fade-up"
						data-aos-delay={`${index * 100}`}
					>
						<div className="blog-card flex-fill d-flex flex-column" style={styles.card}>
							<h4 style={styles.title}>{article.title}</h4>

							<p style={styles.text}>{article.description}</p>

							<div className="mt-auto" style={styles.readMoreContainer}>
								<a href={article.link} style={styles.link}>
									{t("Blog.ReadMore")}
									<FaArrowRight />
								</a>
							</div>

							<div style={styles.metaContainer}>
								<div style={styles.authorContainer}>
									<img src={article.authorImage} style={styles.authorImage} alt="Author" />
									<span style={styles.author}>{article.author}</span>
								</div>
								<span style={styles.readTime}>{article.readTime}</span>
							</div>
						</div>
					</Col>
				))}
			</Row>
		</Container>
	);
}

const styles = {
	container: {
		padding: "10px 20px"
	},
	header: {
		fontSize: "2rem",
		color: "black",
		marginBottom: "2rem"
	},
	card: {
		padding: "1.5rem",
		borderRadius: "8px",
		boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
		transition: "transform 0.3s",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		backgroundColor: "white",
		maxWidth: "85%",
		margin: "0 auto"
	},
	title: {
		fontSize: "1.15rem",
		color: "#041c94",
		fontWeight: "600",
		margin: "8px 0 16px 0"
	},
	text: {
		color: "#555",
		lineHeight: "1.4",
		marginBottom: "1rem",
		fontSize: "0.9rem"
	},
	readMoreContainer: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		marginTop: "auto"
	},
	link: {
		color: "#041c94",
		textDecoration: "none",
		fontWeight: "400",
		display: "inline-flex",
		alignItems: "center",
		transition: "background-color 0.3s, color 0.3s",
		padding: "0.5rem 0",
		fontSize: "0.85rem"
	},
	metaContainer: {
		borderTop: "1px solid #eaeaea",
		paddingTop: "0.5rem",
		marginTop: "1rem",
		color: "#666",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center"
	},
	authorContainer: {
		display: "flex",
		alignItems: "center"
	},
	authorImage: {
		width: "25px",
		height: "25px",
		borderRadius: "50%",
		marginRight: "8px",
		backgroundColor: "#ddd"
	},
	author: {
		fontWeight: "bold",
		fontSize: "0.85rem"
	},
	readTime: {
		color: "#888"
	}
};

export default Blog;
