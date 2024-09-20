import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa";

function Blog() {
	const { t } = useTranslation();

	const articles = [
		{
			id: 1,
			title: t("Blog.Resilience"),
			description: t("Blog.ResilienceD"),
			link: "/blog/resilience"
		},
		{
			id: 2,
			title: t("Blog.Reliability"),
			description: t("Blog.ReliabilityD"),
			link: "/blog/reliability"
		},
		{
			id: 3,
			title: t("Blog.IDHeader"),
			description: t("Blog.IDD"),
			link: "/blog/device-id-registration"
		},
		{
			id: 4,
			title: t("Blog.Rebrand"),
			description: t("Blog.RebrandD"),
			link: "/blog/rebranding"
		}
	];

	return (
		<Container fluid className="blog-list-section py-5" style={styles.container}>
			<h2 className="text-center mb-5" style={styles.header}>
				{t("Blog.Header")}
			</h2>

			{/* Group articles into rows of two */}
			<Row className="justify-content-center">
				{articles.map((article) => (
					<Col md={6} key={article.id} className="mb-4 d-flex">
						<div className="blog-card flex-fill" style={styles.card}>
							<h4 style={styles.title}>{article.title}</h4>
							<p style={styles.text}>{article.description}</p>
							<a href={article.link} style={styles.link}>
								{t("Blog.ReadMore")} <FaArrowRight />
							</a>
						</div>
					</Col>
				))}
			</Row>
		</Container>
	);
}

const styles = {
	container: {
		padding: "3rem 0"
	},
	header: {
		fontSize: "2.5rem",
		color: "black", // White text for the header
		marginBottom: "2rem"
	},
	card: {
		backgroundColor: "#e4edfc", // Section background color
		padding: "2rem",
		borderRadius: "8px",
		boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add subtle shadow
		transition: "transform 0.3s"
	},
	title: {
		fontSize: "1.5rem",
		color: "#333",
		fontWeight: "600",
		margin: "1rem 0"
	},
	text: {
		color: "#555",
		lineHeight: "1.6",
		marginBottom: "1rem"
	},
	link: {
		color: "#041c94",
		textDecoration: "none",
		fontWeight: "600",
		display: "inline-flex",
		alignItems: "center",
		border: "2px solid #041c94",
		padding: "0.5rem 1rem",
		borderRadius: "4px",
		transition: "background-color 0.3s, color 0.3s"
	}
};

export default Blog;
