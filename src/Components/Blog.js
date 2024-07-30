import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaArrowCircleRight } from "react-icons/fa";
import "../index.css";
import AOS from "aos";

const BlogPost = ({ imageUrl, category, title, description, comments, link }) => {
	const { i18n } = useTranslation();
	const isRTL = i18n.language === "fa";

	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	return (
		<div className="col-md-4 p-3">
			<div className="blog-card">
				<div
					className="image-container"
					style={{
						backgroundImage: `url(${imageUrl})`,
						borderRadius: "12px 12px 0 0"
					}}
				>
					<div className="overlay"></div>
					<a href={link} className="category-badge">
						<small>{category}</small>
					</a>
				</div>
				<div className={`content ${isRTL ? "text-right" : ""}`}>
					<a href={link} className="title">
						<h5>{title}</h5>
					</a>
					<p>{description}</p>
					<div className="meta">
						<div className="meta-item">
							<small>{comments}</small>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const BlogSection = () => {
	const { t, i18n } = useTranslation();
	const isRTL = i18n.dir() === "rtl";

	const blogPosts = [
		{
			imageUrl: "/resilience.jpg",
			date: { day: "16", month: "April" },
			category: t("article"),
			title: t("Blog.Resilience"),
			description: t("Blog.ResilienceD"),
			link: "https://blog.smswithoutborders.com/posts/resilience"
		},
		{
			imageUrl: "/ID.jpg",
			date: { day: "1", month: "July" },
			category: t("release"),
			title: t("Blog.IDHeader"),
			description: t("Blog.IDD"),
			link: "https://blog.smswithoutborders.com/posts/relaysms-expands-user-control-with-device-id-registration"
		},
		{
			imageUrl: "/rebrand.jpg",
			date: { day: "", month: "MAR" },
			category: t("release"),
			title: t("Blog.RebrandHeader"),
			description: t("Blog.RebrandD"),
			link: "https://blog.smswithoutborders.com/posts/rebranding"
		}
	];

	return (
		<section className={`container mt-5 ${isRTL ? "text-right" : ""}`}>
			{/* Header Section */}
			<Row>
				<Col className="text-center">
					<div
						className={`blog-head text-center section-subtitle ${isRTL ? "text-end" : "text-start"}`}
					>
						<h2 data-aos="fade-right">{t("Blog.BlogHeader")}</h2>
						<h6>{t("Blog.BlogSubHeader")}</h6>
					</div>
				</Col>
			</Row>

			{/* Blog Posts */}
			<Row className="d-flex flex-wrap">
				{blogPosts.map((post, index) => (
					<BlogPost key={index} {...post} />
				))}
				<div className="text-center p-1 w-100">
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
			</Row>
		</section>
	);
};

export default BlogSection;
