import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowCircleRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";

const BlogSection = () => {
	const { t, i18n } = useTranslation();
	const isRTL = i18n.dir() === "rtl";

	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	const blogPosts = [
		{
			title: t("Blog.Resilience"),
			text: t("Blog.ResilienceD"),
			link: "https://blog.smswithoutborders.com/posts/resilience"
		},
		{
			title: t("Blog.IDHeader"),
			text: t("Blog.IDD"),
			link: "https://blog.smswithoutborders.com/posts/relaysms-expands-user-control-with-device-id-registration"
		},
		{
			title: t("Blog.RebrandHeader"),
			text: t("Blog.RebrandD"),
			link: "https://blog.smswithoutborders.com/posts/rebranding"
		}
	];

	return (
		<section className="relay_blog_section my-5">
			{/* Header Section */}
			<div
				className={`blog-head text-center section-subtitle ${isRTL ? "text-end" : "text-start"}`}
			>
				<span
					className="inline-block mb-3 uppercase tracking-wide font-semibold text-blue-700"
					data-aos="fade-right"
				>
					{t("Blog.BlogHeader")}
				</span>
				<h1
					className="text-4xl md:text-5xl md:leading-tight font-bold text-gray-800 xl:max-w-full"
					data-aos="fade-right"
				></h1>
			</div>

			{/* Blog Posts */}
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h1 className="text-center pb-5"> {t("Blog.BlogSubHeader")}</h1>
					</div>
					{blogPosts.map((post, index) => (
						<div className="col-md-12 col-lg-4" key={index}>
							<div className="relay_blog_box mt-4">
								<a href={post.link} className="blog-title-link">
									<h2 className="text-justify">{post.title}</h2>
								</a>
								<p className="text-justify">{post.text}</p>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Footer Link to More Articles */}
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
		</section>
	);
};

export default BlogSection;
