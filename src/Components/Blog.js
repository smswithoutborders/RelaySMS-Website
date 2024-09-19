import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaArrowCircleRight } from "react-icons/fa";
import AOS from "aos";
import "../index.css";

const Blog = () => {
	const { t, i18n } = useTranslation();
	const isRTL = i18n.dir() === "rtl";

	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	// Array of blog posts
	const blogPosts = [
		{
			title: t("Blog.Resilience"),
			description: t("Blog.ResilienceD"),
			link: "/resilience"
		},
		{
			title: t("Blog.Reliability"),
			description: t("Blog.ReliabilityD"),
			link: "/reliability"
		},
		{
			title: t("Blog.IDHeader"),
			description: t("Blog.IDD"),
			link: "/device-id-registration"
		},
		{
			title: t("Blog.RebrandHeader"),
			description: t("Blog.RebrandD"),
			link: "/rebranding"
		}
	];

	return (
		<section
			id="blog"
			className={`section_all bg-light ${isRTL ? "text-end" : "text-start"}`}
			data-aos="zoom-out"
		>
			<Container>
				{/* Blog Header */}
				<Row>
					<Col lg={12}>
						<div
							className={`blog-head text-center section-subtitle ${isRTL ? "text-end" : "text-start"}`}
						>
							<h1
								className="text-4xl md:text-5xl md:leading-tight font-bold text-gray-800 xl:max-w-full"
								data-aos="fade-right"
							>
								{t("Blog.Header")}
							</h1>
						</div>
					</Col>
				</Row>

				{/* Blog Posts */}
				<Row className="mt-3">
					{blogPosts.map((post, index) => (
						<Col lg={6} md={12} key={index} className="mb-4">
							<Card className="h-100" data-aos="fade-up">
								<Card.Body>
									<Card.Title className="font-weight-bold text-dark">{post.title}</Card.Title>
									<Card.Text className="text-muted">{post.description}</Card.Text>
									<a
										href={post.link}
										className="text-blue-700 font-weight-bold"
										target="_blank"
										rel="noreferrer noopener"
									>
										{t("Blog.ReadMore")} <FaArrowCircleRight className="ml-2 arrow-icon" />
									</a>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>

				{/* Read More Button */}
				<Row className="mt-4">
					<Col xs={12} className="text-center">
						<a href="/blog" className="getting-started-link">
							{t("Blog.ReadOtherArticles")}
							<FaArrowCircleRight className="ml-2 arrow-icon" />
						</a>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Blog;
